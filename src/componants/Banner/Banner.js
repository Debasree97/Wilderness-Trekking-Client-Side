import React from 'react';
import { Carousel,} from 'react-bootstrap';
import banner1 from "../../images/banner/banner1.jpg";
import banner2 from "../../images/banner/banner2.jpg";
import banner3 from "../../images/banner/banner3.jpg";
const Banner = () => {

    return (
      <Carousel fade className="pb-5">
        <Carousel.Item>
          <img
            style={{ height: "100vh" }}
            className="d-block w-100"
            src={banner1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>We Travel As Small Group</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: "100vh" }}
            className="d-block w-100"
            src={banner2}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>We Provide What You Need</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: "100vh" }}
            className="d-block w-100"
            src={banner3}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>We Guide You All The Way Through</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
};

export default Banner;