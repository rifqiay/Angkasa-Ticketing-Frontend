import React, { useState, Fragment, useEffect } from "react";

import logo from "../../assets/images/logo_navbar.png";
import {
  useNavigate,
  useSearchParams,
  useLocation,
  Link,
} from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import { getProfileUser } from "../../app/redux/Slice/ProfileUserSlice";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";

import PhotoEmpty from "../../assets/images/icons/ico-user.svg";

const NavBar = () => {
  const isAuth = localStorage.getItem("token");

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState("");

  // const [show, setShow] = useState(false);

  const handleSearch = (e) => {
    setSearch(e.currentTarget.value);
    // console.log(search)
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (search !== "") {
      setSearchParams({
        keyword: search,
      });
    } else {
      setSearchParams();
    }
  };

  const dispatchProfileUser = () => {
    dispatch(getProfileUser()).unwrap();
  };

  // const {
  //   // ProfileUser
  //   // user_id,
  //   // user_username,
  //   // user_email,
  //   // user_name,
  //   // user_gender,
  //   // user_phone,
  //   // user_date_of_birth,
  //   user_picture,
  //   // user_shipping_address,
  //   // user_role,
  //   // user_created_on,
  //   // user_updated_on
  // } = useSelector((state) => state.ProfileUser);

  const expand = "lg";

  // let windowsSize = window.innerWidth

  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }

  const [windowSize, setWindowSize] = useState(getWindowSize());

  // console.log(tes)
  // console.log(ProfileUser.data)

  function handleWindowResize() {
    setWindowSize(getWindowSize());
  }

  const [show, setShow] = useState(false);
  const toggleOffcanvas = () => {
    setShow(!show);
  };

  const handleSignOut = () => {
    localStorage.removeItem("id");
    localStorage.removeItem("role");
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
  };

  const pictureThumbnails = (
    <span>
      <img
        className="pictureThumbnails"
        referrerPolicy="no-referrer"
        src={
          // user_picture === null || user_picture === undefined
          //   ?
          PhotoEmpty
          // : user_picture
        }
        alt=""
      />
    </span>
  );

  useEffect(() => {
    dispatchProfileUser();
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Fragment>
      <Navbar
        key={expand}
        bg="white"
        expand={expand}
        className="shadow-sm mb-3"
      >
        <Container fluid="sm">
          <Navbar.Brand className="me-5">
            <div
              onClick={() => {
                navigate("../home");
              }}
              className="col-lg-3 col-md-3 col-sm-3  cursor-pointer"
            >
              <img
                referrerPolicy="no-referrer"
                className="my-auto logo-toggle-navbar"
                src={logo}
                alt=""
              />
            </div>
          </Navbar.Brand>
          <Navbar.Toggle
            onClick={toggleOffcanvas}
            aria-controls={`offcanvasNavbar-expand-${expand}`}
          />

          <Navbar.Offcanvas
            show={show}
            id={`offcanvasNavbar-expand-${"expand"}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="top"
          >
            <Offcanvas.Header className="shadow-sm">
              <Offcanvas.Title
                id={`offcanvasNavbarLabel-expand-${expand}`}
                className="col-12 d-flex justify-content-between"
              >
                <div
                  onClick={() => {
                    if (windowSize.innerWidth <= 992) {
                      toggleOffcanvas();
                      navigate("../home");
                    } else navigate("../home");
                  }}
                  className="col-lg-3 col-md-3 col-sm-3 link-redirect"
                >
                  <img
                    referrerPolicy="no-referrer"
                    className="my-auto logo-toggle-navbar"
                    src={logo}
                    alt=""
                  />
                </div>
                <div
                  className="btn-close-offcanvas "
                  onClick={toggleOffcanvas}
                ></div>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              {isAuth ? (
                <Fragment>
                  {/* Navbar User Auth */}
                  <div className="col-12 d-xl-flex d-lg-flex d-md-grid d-sm-grid ">
                    {windowSize.innerWidth <= 992 ? (
                      <Fragment>
                        <div className="col-xl-12 col-lg-12">
                          <Form
                            onSubmit={handleSearchSubmit}
                            className="form-search d-flex"
                          >
                            <div className="col-12 d-flex border border-1 rounded-pill form-input">
                              <input
                                className="form-control rounded-pill border-0 "
                                id="input-search"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                                onChange={handleSearch}
                              />
                              <Button
                                onClick={() => {
                                  navigate("../recipes?" + searchParams);
                                  toggleOffcanvas();
                                }}
                                className="bg-transparent border-0 rounded-pill btn-search"
                                type="submit"
                              >
                                <img
                                  className=""
                                  src={
                                    require("../../assets/images/icons/search.svg")
                                      .default
                                  }
                                  alt="search"
                                />
                              </Button>
                            </div>
                          </Form>
                        </div>

                        <div className="d-grid ">
                          <div className="col-12 d-flex mt-4">
                            <div className="col-4 border border-0 rounded-3 d-flex justify-content-center align-items-center block">
                              <img
                                referrerPolicy="no-referrer"
                                className="photoSide"
                                // src={user_picture} alt=""
                                src={
                                  // user_picture === null ||
                                  // user_picture === undefined
                                  //   ?
                                  PhotoEmpty
                                  // :
                                  // user_picture
                                }
                                alt=""
                              />
                            </div>
                            <div className="col-8 d-grid">
                              <Nav.Link>
                                <div className="col-12 d-grid mt-4">
                                  <Button
                                    variant="outline-warning"
                                    onClick={() => {
                                      navigate("../profile");
                                      toggleOffcanvas();
                                    }}
                                    className=" rounded-pill block  "
                                    type="button"
                                  >
                                    <p className="my-auto"> My Profile</p>
                                  </Button>
                                </div>

                                <div className="col-12 d-grid mt-4">
                                  <Button
                                    variant="outline-warning"
                                    onClick={() => {
                                      navigate("../profile/my-recipes");
                                      toggleOffcanvas();
                                    }}
                                    className=" rounded-pill block  "
                                    type="button"
                                  >
                                    <p className="my-auto">My Recipes</p>
                                  </Button>
                                </div>
                              </Nav.Link>
                            </div>
                          </div>

                          <div className="col-12 d-grid mt-4">
                            <Button
                              variant="warning"
                              onClick={() => {
                                navigate("../home");
                                toggleOffcanvas();
                                handleSignOut();
                              }}
                              className=" rounded-pill block  "
                              type="button"
                            >
                              <p className="my-auto">Sign Out</p>
                            </Button>
                          </div>
                        </div>
                      </Fragment>
                    ) : (
                      <Fragment>
                        <div className="col-xl-8 col-lg-8">
                          <Form
                            onSubmit={handleSearchSubmit}
                            className="form-search d-flex"
                          >
                            <div className="col-12 d-flex border border-1 rounded-pill form-input">
                              <input
                                className="form-control rounded-pill border-0 "
                                id="input-search"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                                onChange={handleSearch}
                              />
                              <Button
                                onClick={() => {
                                  navigate("../recipes?" + searchParams);
                                }}
                                className="bg-transparent border-0 rounded-pill btn-search"
                                type="submit"
                              >
                                <img
                                  className=""
                                  src={
                                    require("../../assets/images/icons/search.svg")
                                      .default
                                  }
                                  alt="search"
                                />
                              </Button>
                            </div>
                          </Form>
                        </div>

                        <div className="col-xl-4 col-lg-4 d-flex">
                          <div className="col-12 d-flex justify-content-end align-items-center block">
                            <NavDropdown
                              title={pictureThumbnails}
                              align="end"
                              id={`offcanvasNavbarDropdown-expand-${expand}`}
                            >
                              {/* <NavDropdown.Header className="d-grid ">
                                <p className="mb-0 fw-bold">
                                  {
                                    // user_email
                                  }{" "}
                                </p>
                                <p className="mb-0">
                                  <small>
                                    {" "}
                                    UID :{" "}
                                    {
                                      // user_id
                                    }
                                  </small>
                                </p>
                              </NavDropdown.Header>
                              <NavDropdown.Divider /> */}
                              <NavDropdown.Item
                                onClick={() => {
                                  navigate("../profile");
                                }}
                              >
                                My Profile
                              </NavDropdown.Item>
                              <NavDropdown.Divider />
                              <NavDropdown.Item
                                onClick={() => {
                                  navigate("../profile/my-recipes");
                                }}
                              >
                                My Recipes
                              </NavDropdown.Item>
                              <NavDropdown.Divider />
                              <NavDropdown.Item
                                onClick={() => {
                                  navigate("../home");
                                  handleSignOut();
                                }}
                              >
                                Sign Out
                              </NavDropdown.Item>
                            </NavDropdown>
                          </div>
                        </div>
                      </Fragment>
                    )}
                  </div>
                </Fragment>
              ) : (
                <Fragment>
                  {/* Navbar User No Auth */}
                  <div className="col-12 d-xl-flex d-lg-flex d-md-grid d-sm-grid ">
                    {windowSize.innerWidth <= 992 ? (
                      <Fragment>
                        <div className="col-xl-12 col-lg-12">
                          <Form
                            onSubmit={handleSearchSubmit}
                            className="form-search d-flex"
                          >
                            <div className="col-12 d-flex border border-1 rounded-pill form-input">
                              <input
                                className="form-control rounded-pill border-0 "
                                id="input-search"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                                onChange={handleSearch}
                              />
                              <Button
                                onClick={() => {
                                  navigate("../recipes?" + searchParams);
                                  // setSearchParams()
                                  toggleOffcanvas();
                                }}
                                className="bg-transparent border-0 rounded-pill btn-search"
                                type="submit"
                              >
                                <img
                                  className=""
                                  src={
                                    require("../../assets/images/icons/search.svg")
                                      .default
                                  }
                                  alt="search"
                                />
                              </Button>
                            </div>
                          </Form>
                        </div>
                        <div className="d-flex mt-4 ">
                          <div className="col-6 d-grid px-2">
                            <Button
                              variant="warning"
                              onClick={() => {
                                navigate("../login");
                                toggleOffcanvas();
                              }}
                              className=" rounded-pill block "
                              type="button"
                            >
                              <p className="my-auto text-light">Login</p>
                            </Button>
                          </div>
                          <div className="col-6 d-grid">
                            <Button
                              variant="warning"
                              onClick={() => {
                                navigate("../register");
                                toggleOffcanvas();
                              }}
                              className=" rounded-pill block  "
                              type="button"
                            >
                              <p className="my-auto text-light"> Sign Up</p>
                            </Button>
                          </div>
                        </div>
                      </Fragment>
                    ) : (
                      <Fragment>
                        <div className="col-xl-8 col-lg-8 d-flex">
                          <Form
                            onSubmit={handleSearchSubmit}
                            className="col-12 form-search d-flex "
                          >
                            <div className="col-12 d-flex border border-1 rounded-pill form-input">
                              <input
                                className="form-control rounded-pill border-0 "
                                id="input-search"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                                onChange={handleSearch}
                              />
                              <Button
                                onClick={() => {
                                  navigate("../recipes?" + searchParams);
                                }}
                                className="bg-transparent border-0 rounded-pill btn-search"
                                type="submit"
                              >
                                <img
                                  className="my-0"
                                  src={
                                    require("../../assets/images/icons/search.svg")
                                      .default
                                  }
                                  alt="search"
                                />
                              </Button>
                            </div>
                          </Form>
                        </div>
                        <div className="col-xl-4 col-lg-4 d-flex">
                          <div className="col-6 d-grid px-2">
                            <Button
                              variant="warning"
                              onClick={() => {
                                navigate("../login");
                                toggleOffcanvas();
                              }}
                              className=" rounded-pill block "
                              type="button"
                            >
                              <p className="my-auto text-light">Login</p>
                            </Button>
                          </div>
                          <div className="col-6 d-grid">
                            <Button
                              variant="warning"
                              onClick={() => {
                                navigate("../register");
                                toggleOffcanvas();
                              }}
                              className=" rounded-pill block  "
                              type="button"
                            >
                              <p className="my-auto text-light"> Sign Up</p>
                            </Button>
                          </div>
                        </div>
                      </Fragment>
                    )}
                  </div>
                </Fragment>
              )}
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </Fragment>
  );
};

export default NavBar;
