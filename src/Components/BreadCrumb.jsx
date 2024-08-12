import React from "react";

const BreadCrumb = ({ name }) => {
  return (
    <div className="bread-crumb-section">
      <div className="bread-crumb-texts">
        <h1>{name}</h1>
      </div>
    </div>
  );
};

export default BreadCrumb;