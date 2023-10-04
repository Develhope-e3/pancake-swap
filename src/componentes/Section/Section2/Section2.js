import React from "react";
import classNames from "classnames";

export const Section2 = () => {
  const classSection = classNames({
    section: true,
  });

  return <section className={classSection}></section>;
};

export const Box = (isFlexRow, isFlexCol, isFlexColCenter, isFlexRowCenter) => {
  const boxSection = classNames({
    box: true,
    "flex-row": isFlexRow,
    "flex-col": isFlexCol,
    "flex-row-center": isFlexRowCenter,
    "flex-col-center": isFlexColCenter,
    "flex-row-start": isFlexRowCenter,
  });
  return <div className={boxSection}></div>;
};
