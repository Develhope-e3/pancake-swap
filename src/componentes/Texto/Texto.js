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
      {size === "title-medium-bold" && (
        <h2 className="title-md-bold" style={{ color: `var(${color})` }}>
          {label}
        </h2>
      )}
      {size === "title-medium" && (
        <h2 className="title-md" style={{ color: `var(${color})` }}>
          {label}
        </h2>
      )}
      {size === "title-small-bold" && (
        <h3 className="title-s-bold" style={{ color: `var(${color})` }}>
          {label}
        </h3>
      )}
      {size === "title-small" && (
        <h3 className="title-s" style={{ color: `var(${color})` }}>
          {label}
        </h3>
      )}
      {size === "title-extra-small-bold" && (
        <h4 className="title-xs-bold" style={{ color: `var(${color})` }}>
          {label}
        </h4>
      )}
      {size === "title-extra-small" && (
        <h4 className="title-xs" style={{ color: `var(${color})` }}>
          {label}
        </h4>
      )}
      {size === "body" && (
        <p className="body" style={{ color: `var(${color})` }}>
          {label}
        </p>
      )}
      {size === "medium" && <h2>{label}</h2>}
      {size === "small" && <h3>{label}</h3>}
      {size === "extra-small" && <h4>{label}</h4>}
      {size === "body" && <p>{label}</p>}
    </>
  );
};

export default Texto;
