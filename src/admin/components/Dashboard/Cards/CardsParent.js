import React from "react";
import Cards from "./Cards";
import Clock from "./Clock";

const CardsParent = (propsFromClock) => {
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const d = new Date();
  let dayy = weekday[d.getDay()];

  const date = new Date();

  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  const fullDate = `${day}-${month}-${year}`;

  return (
    <div>
      <div className="row">
        <div className="col-xl-3 col-md-6">
          <Cards title="Today's Orders" value="100" />
          <br />
        </div>

        <div className="col-xl-3 col-md-6">
          <Cards title="Total Orders" value="200" />
        </div>

        <div className="col-xl-3 col-md-6">
          <Cards title="Today's Date" value={fullDate + " " + dayy} />
        </div>
        <div className="col-xl-3 col-md-6">
          <Cards title="Current Time" value={<Clock />} />
        </div>
      </div>
    </div>
  );
};

export default CardsParent;
