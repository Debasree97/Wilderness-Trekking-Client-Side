import React from 'react';
import review from "../../images/review.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';


const Review = () => {
    
    return (
      <div style={{ height: "45rem" }}>
        <div style={{ position: "relative" }}>
          <img
            style={{ height: "45rem" }}
            className="w-100 opacity-50 img-fluid d-none d-sm-block"
            src={review}
            alt=""
          />
          <div className="d-flex justify-content-center align-items-center">
            <div
              style={{
                position: "absolute",
                top: "7rem",
              }}
            >
              <div>
                <h1 className="display-5 container text-center">
                  FOR US QUALITY OF EXPERIENCE IS ONLY SECOND TO SAFETY.
                </h1>
              </div>
              <div
                style={{
                  position: "absolute",
                  top: "10rem",
                  left: "0.08rem",
                  height: "auto",
                  paddingTop: "10px",
                  backgroundColor: "#00000090",
                  border: "20px solid #00000040",
                  color: "#DFDFDF",
                }}
                className="container d-flex justify-content-center align-items-center"
              >
                <FontAwesomeIcon
                  icon={faQuoteLeft}
                  className="fs-2"
                  style={{ marginRight: "5%", color: "#E75B00" }}
                />
                <figure className="text-center">
                  <blockquote className="fs-2">
                    <p>
                      The Mt. Rainier Inn trip with Wildland was perfect. The
                      Inn was comfortable; the guide was an expert in his field;
                      the pacing was just right to accommodate all those on the
                      trip; the scenery was ideal. If you can go please do.
                    </p>
                  </blockquote>
                  <figcaption className="fs-5">
                    <span>
                      ~<cite title="Source Title">DIANE DAVIS</cite>
                    </span>
                  </figcaption>
                </figure>
                <FontAwesomeIcon
                  icon={faQuoteRight}
                  className="fs-2"
                  style={{ marginLeft: "5%", color: "#E75B00" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Review;