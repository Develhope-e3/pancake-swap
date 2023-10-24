import classNames from "classnames";
import React from "react";

const BasePage = ({ children, givenClassName }) => {
  const className = classNames(givenClassName, "base-page");
  return <div className={className}>{children}</div>;
};

export default BasePage;
