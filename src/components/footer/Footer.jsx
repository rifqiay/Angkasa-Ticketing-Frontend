import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import twitter from "../../assets/twitter.svg";
import youtube from "../../assets/youtube.svg";
import appstore from "../../assets/appstore.png";
import playstore from "../../assets/playstore.png";
import blueflight from "../../assets/blueflight.png";
import map from "../../assets/map-pin.svg";

const Footer = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-3 mt-3">
            <div>
              <div className="d-flex">
                <img src={blueflight} alt="" />
                <h5 className="ms-3">Angkasa</h5>
              </div>
              <p className="mt-3">
                Find your flight and explore the world with us, we will take
                care of the rest
              </p>
            </div>
          </div>
          <div className="col-lg-3 mt-3">
            <h5>Features</h5>
            <h6 className="mt-3">Find Ticket</h6>
            <h6>My Booking</h6>
            <h6>Chat</h6>
            <h6>Notification</h6>
          </div>
          <div className="col-lg-3 mt-3">
            <h5>Donwload Angkasa App</h5>
            <img src={appstore} className="my-3" alt="" />
            <img src={playstore} alt="" />
          </div>
          <div className="col-lg-3 mt-3">
            <h5>Follow Us</h5>
            <div>
              <img src={facebook} alt="" />
              <img src={twitter} className="mx-3" alt="" />
              <img src={instagram} alt="" />
              <img src={youtube} className="mx-3" alt="" />
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="d-flex justify-content-between">
            <p>&copy; Angkasa. All Rights Reserved.</p>
            <div>
              <img src={map} alt="" />
              <span>Jakarta Indonesia</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
