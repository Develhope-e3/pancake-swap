import classNames from "classnames";

const BasePage = ({ children, givenClassName }) => {
  const className = classNames(givenClassName, "base-page");
  return <div className={className}>{children}</div>;
};

export default BasePage;
