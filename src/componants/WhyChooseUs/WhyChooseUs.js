import React from "react";
import { Accordion, Container } from "react-bootstrap";
import whyChooseUS from "../../images/whyChooseUs.png"

const WhyChooseUs = () => {
  return (
    <Container className="mt-5 pt-5">
      <p className=" display-2 text-center ">Welcome To Wilderness Trekking!</p>
      <p className="fs-3 text-center mb-4">
        Why Should you choose us?Well there are{" "}
        <span style={{ color: "#E75B00", fontWeight: "bold" }}>FOUR</span> key
        factors that set us apart from other adventure and hiking companies.
      </p>
      <Container className="d-flex flex-column flex-md-row align-items-center justify-content-center">
        <Container>
          <img className="img-fluid" src={whyChooseUS} alt="" />
        </Container>
        <Container>
          <Accordion
            defaultActiveKey="0"
          >
            <Accordion.Item eventKey="0">
              <Accordion.Header>All Inclusive Trips</Accordion.Header>
              <Accordion.Body>
                Wildland trips allow guests to focus 100% on the hiking
                experience. We provide all gear, meals, transportation,
                professional guides, permits, fees and more!
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>World-Class Destinations</Accordion.Header>
              <Accordion.Body>
                Our trip diversity allows you to enjoy the world's inspiring
                landscapes in a variety of ways and at different times in your
                life, and we hope you'll sample them all!
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Small Groups</Accordion.Header>
              <Accordion.Body>
                Our hiking tours are always small group adventures, typically
                4-12 people per trip. Join a personalized trekking vacation that
                prioritizes quality of experience above all else.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>
                The Best Guides in the Industry
              </Accordion.Header>
              <Accordion.Body>
                These extraordinary men and women have the ability to turn a
                great get-away into an unforgettable, inspiring - and sometimes
                truly life changing - adventure.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Container>
      </Container>
    </Container>
  );
};

export default WhyChooseUs;
