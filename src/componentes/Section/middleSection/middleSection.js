import React from "react";
import classNames from "classnames";

export const MiddleSection = (isFlexRow, isFlexColCenter) => {
  const dataSections = classNames({
    section: true,
    "flex-row": isFlexRow,
    "flex-col-center": isFlexColCenter,
  });
  return <section className={dataSections}></section>;
};
