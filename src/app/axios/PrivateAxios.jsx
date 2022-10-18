import axios from "axios";
import jwt_decode from "jwt-decode";
import dayjs from "dayjs";

const baseURL = process.env.REACT_APP_API_BACKEND;

const PrivateAxios = () => {
  const token = localStorage.getItem("token");

  const axiosInstance = axios.create({
    baseURL,
    headers: { Authorization: `Bearer ${token}` },
  });

  let refreshRequest = false;

  axiosInstance.interceptors.request.use(async (req) => {
    // const user = jwt_decode(authTokens.access)
    // const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;

    // if(!isExpired) return req

    // const response = await axios.post(`${baseURL}/api/token/refresh/`, {
    //     refresh: authTokens.refresh
    //   });

    // localStorage.setItem('authTokens', JSON.stringify(response.data))

    // setAuthTokens(response.data)
    // setUser(jwt_decode(response.data.access))

    // req.headers.Authorization = `Bearer ${response.data.access}`

    // console.log("check test");

    if (token && !refreshRequest) {
      const user = jwt_decode(token);
      const isTokenExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;

      if (isTokenExpired) {
        refreshRequest = true;
        const response = await axios.post(
          process.env.REACT_APP_API_BACKEND + "users/refresh-token",
          { refreshToken: localStorage.getItem("refreshToken") },
          {
            headers: { "Content-Type": "application/json" },
          },
          { withCredentials: true }
        );
        // console.log(response.data)
        // window.location.reload(false)

        localStorage.setItem("token", response.data.data.token);
        localStorage.setItem("refreshToken", response.data.data.refreshToken);

        // axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.data.token}`;
        // req.headers.Authorization = `Bearer ${response.data.access}`
        req.headers.Authorization = `Bearer ${response.data.data.token}`;
      }
    }

    return req;
  });

  return axiosInstance;
};

export default PrivateAxios;
