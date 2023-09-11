import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";

const AddOrder = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    fetch("https://wildernesstrekking.onrender.com/addorder", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.status === 200) {
        alert("NEW PACKAGE/DESTINATION HAS BEEN ADDED");
        reset();
      }
    });
  };
  return (
    <Container className="my-5">
      <h1 className="text-center mb-4">
        Carefully Fill Up the Form to Add new Package/Destination
      </h1>
      <Container
        fluid
        className="w-75 p-3"
        style={{ backgroundColor: "#3C3C3C", color: "#DFDFDF" }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="d-flex flex-column">
            <label>New Package/Destination Name</label>
            <input {...register("name")} />
            {errors.name?.type === "required" && "Input is required"}

            <label>Starter Price</label>
            <input type="number" {...register("price")} />
            {errors.price?.type === "required" && "Input is required"}

            <label>Trip Length</label>
            <input {...register("tourTime")} />
            {errors.tourTime?.type === "required" && "Input is required"}

            <label>Location</label>
            <input {...register("location")} />
            {errors.loation?.type === "required" && "Input is required"}

            <label>Short Description for Homepage</label>
            <textarea {...register("homeDescription")} />
            {errors.homeDescription?.type === "required" && "Input is required"}

            <label>Detail Description</label>
            <textarea {...register("Description")} />
            {errors.Description?.type === "required" && "Input is required"}

            <label>Image URL</label>
            <input {...register("img")} />
            {errors.img?.type === "required" && "Input is required"}

            <input
              style={{
                marginTop: "50px",
                padding: "5px 0",
                backgroundColor: "#E75B00",
                color: "#DFDFDF",
              }}
              type="SUBMIT"
            />
          </div>
        </form>
      </Container>
    </Container>
  );
};

export default AddOrder;
