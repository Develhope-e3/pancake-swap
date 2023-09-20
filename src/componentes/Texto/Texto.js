import React from "react";

const Texto = ({ size, color, label }) => {
  return (
    <>
      {size === "title-large-bold" && (
        <h1 className="title-lg-bold" style={{ color: `var(${color})` }}>
          {label}
        </h1>
      )}
      {size === "title-large" && (
        <h1 className="title-lg" style={{ color: `var(${color})` }}>
          {label}
        </h1>
      )}
      {size === "medium" && <h2>{label}</h2>}
      {size === "small" && <h3>{label}</h3>}
      {size === "extra-small" && <h4>{label}</h4>}
      {size === "body" && <p>{label}</p>}
    </>
  );
};

export default Texto;
