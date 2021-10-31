import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import { Container } from "react-bootstrap";
import "./BookingForm.css";

const BookingForm = (props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { user } = useAuth();

  const onSubmit = (data) => {
    axios
      .post("http://localhost:5000/orders", data)
      // fetch("http://localhost:5000/orders", {
      //   method: "POST",
      //   headers: {
      //     "content-type": "application/json"
      //   },
      //   body: JSON.stringify(data),
      // })
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <div className="my-5 pt-5">
      <h1 className="text-center mb-4">
        Please Fill Up the Form below to Submit Your Booking Request
      </h1>
      <div
        className="w-75 p-3"
        style={{ backgroundColor: "#3C3C3C", color: "#DFDFDF" }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="d-flex flex-column">
            <label>Email</label>
            <input defaultValue={user?.email} {...register("email")} />
            <label>Name</label>
            <input {...register("name")} />
            {errors.name?.type === "required" && "Please enter your name"}
            <label>Address</label>
            <textarea {...register("address")} />
            {errors.address?.type === "required" && "Please enter your address"}
            <label>Trip Package</label>
            <input defaultValue={props.name} {...register("destination")} />
            <label>Pick Your Trip Date</label>
            <input type="date" {...register("date")} placeholder="date" />
            <input
              style={{
                marginTop: "50px",
                padding: "5px 0",
                backgroundColor: "#E75B00",
                color: "#DFDFDF",
              }}
              type="SUBMIT"
            />
            <input
              type="hidden"
              defaultValue="Pending"
              {...register("status")}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
