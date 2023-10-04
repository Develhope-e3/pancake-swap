import React from "react";
import classNames from "classnames";

export const Section2 = ({ children }) => {
  const classSection = classNames({
    section: true,
  });

  return <section className={classSection}>{children}</section>;
};

export const Box = ({
  children,
  isFlexCol,
  isFlexColCenter,
  isFlexColStart,
  isFlexRow,
  isFlexRowCenter,
  isFlexRowStart,
}) => {
  const boxSection = classNames({
    box: true,
    "flex-col": isFlexCol,
    "flex-col-center": isFlexColCenter,
    "flex-col-start": isFlexColStart,
    "flex-row": isFlexRow,
    "flex-row-center": isFlexRowCenter,
    "flex-row-start": isFlexRowStart,
  });
  return <div className={boxSection}>{children}</div>;
};

export const Item = ({ text, children, isSpaceBetween, isItemCard, icon }) => {
  const itemSection = classNames({
    item: true,
    "flex-space-between": isSpaceBetween,
    "item-card": isItemCard,
  });

  return (
    <div className={itemSection}>
      <div>{text}</div>
      <div>{children}</div>
      <div>{icon}</div>
    </div>
  );
};
