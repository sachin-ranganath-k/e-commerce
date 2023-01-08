import React from "react";

const Cards = (propsFromCardsParent) => {

  return (
    <div>
      <div className="card bg-primary text-white mb-4">
        <div className="card-body">
          {propsFromCardsParent.value}
        </div>
        <div className="card-footer d-flex align-items-center justify-content-between">
          <div className="small text-white stretched-link">
            {propsFromCardsParent.title}
          </div>
          <div className="small text-white">
            <i className="fas fa-angle-right"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
