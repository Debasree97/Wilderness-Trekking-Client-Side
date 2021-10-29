import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import tourDetailPage from "../../images/tourDetailPage.jpg"

const TourDetails = () => {
  const { tourId } = useParams();
    const  [tourDetail, setTourDetail ] = useState({});
    useEffect(() => {
      const url = `http://localhost:5000/tours/${tourId}`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => setTourDetail(data));
    }, [tourId, setTourDetail]);
    const { name, price, location, tourTime, desCription } = tourDetail;
  return (
    <div>
      <img
        style={{ width: "100vw",height:"75vh"}}
        className="img-fluid opacity-75"
        src={tourDetailPage}
        alt=""
      />
      <div>
        <img src={tourDetail} alt="" />
      </div>
    </div>
  );
};

export default TourDetails;
