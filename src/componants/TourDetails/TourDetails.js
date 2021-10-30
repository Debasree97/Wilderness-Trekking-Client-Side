import React, { useEffect, useState } from "react";
import { Container, Spinner } from "react-bootstrap";
import { useParams } from "react-router";
import tourDetailPage from "../../images/tourDetailPage.jpg";
import { useForm } from "react-hook-form";
import axios from "axios";

const TourDetails = () => {
  const { tourId } = useParams();
  const [tourDetail, setTourDetail] = useState({});
  const { register, handleSubmit, reset } = useForm();
  const [isloading, setIsloading] = useState(true);
  // const [isPending, setIsPending] = useState("pending");

  useEffect(() => {
    const url = `http://localhost:5000/tours/${tourId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setTourDetail(data);
        if (tourDetail !== {}) {
          setIsloading(false);
        }
      });
  }, [tourId, setTourDetail, tourDetail]);


  // const onSubmit = (data) => {
  //   const url = `http://localhost:5000/tours/${tourId}`;
  //   axios.post(url, data).then((res) => {
  //     if (res.data.insertedId) {
  //       alert("Your booking request has been submitted");
  //       reset();
  //     }
  //   });
  // };

  if (isloading) {
    return (
      <Container style={{height:"50vh"}} className="d-flex align-items-center justify-content-center mb-5">
        <Spinner animation="border" variant="secondary" />
      </Container>
    );
  }

  const { name, price, location, tourTime, Description } = tourDetail;
  return (
    <div>
      <img
        style={{ width: "100vw", minHeight: "6rem" }}
        className="img-fluid"
        src={tourDetailPage}
        alt=""
      />
      <Container>
        <h1
          className="text-center fs-1 mt-5 mb-3 fw-bolder"
          style={{ color: "#E75B00" }}
        >
          {name}
        </h1>
        <p className="fs-5" style={{ textAlign: "justify" }}>
          {Description}
        </p>
        <p className="fs-4">
          <span style={{ color: "#E75B00" }}>Location:</span> {location}
        </p>
        <p className="fs-4">
          <span style={{ color: "#E75B00" }}>Trip Length:</span> {tourTime}
        </p>
        <p className="fs-4">
          <span style={{ color: "#E75B00" }}>Price(Starter):</span> ${price}
        </p>
      </Container>
      <Container>
        <div className="serviceForm">
          <h1>Add a Service</h1>
          {/* <form onSubmit={handleSubmit(onSubmit)}> */}
          <form>
            <input
              {...register("name", { required: true })}
              placeholder="Name"
            />
            <textarea {...register("description")} placeholder="Description" />
            <input type="number" {...register("price")} placeholder="Price" />
            <input {...register("image")} placeholder="Image" />
            <input type="submit" />
          </form>
        </div>
      </Container>
    </div>
  );
};

export default TourDetails;
