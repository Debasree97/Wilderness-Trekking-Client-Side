import React from "react";
import logo from "../../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagramSquare,
  faTwitterSquare,
  faYoutubeSquare,
} from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="pt-4 pb-2" style={{ backgroundColor: "#DFDFDF" }}>
      <div className="d-flex flex-column justify-content-center align-items-center ">
        <img className="pb-3 img-fluid" src={logo} alt="" />
        <div className="d-flex flex-column flex-sm-row align-items-center justify-content-center ">
          <p className="me-3 fs-5">Follow Us: </p>
          <div className="pb-2">
            <FontAwesomeIcon />
            <FontAwesomeIcon
              style={{
                fontSize: "40px",
                color: "#3b5998",
                paddingRight: "5px",
              }}
              icon={faFacebookSquare}
            />
            <FontAwesomeIcon
              style={{
                fontSize: "40px",
                color: "#8a3ab9",
                paddingRight: "5px",
              }}
              icon={faInstagramSquare}
            />
            <FontAwesomeIcon
              style={{
                fontSize: "40px",
                color: "#1DA1F2",
                paddingRight: "5px",
              }}
              icon={faTwitterSquare}
            />
            <FontAwesomeIcon
              style={{
                fontSize: "40px",
                color: "#E62117",
                paddingRight: "5px",
              }}
              icon={faYoutubeSquare}
            />
          </div>
        </div>
        <div>
          <FontAwesomeIcon
            icon={faCopyright}
            style={{ color: "#E75B00", marginRight: "5px" }}
          />
          <small>All Copyright Reserved by Wilderness Trekking,2021</small>
        </div>
      </div>
    </div>
  );
};

export default Footer;
