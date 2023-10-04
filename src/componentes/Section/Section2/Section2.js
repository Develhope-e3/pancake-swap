import React from "react";
import classNames from "classnames";

export const Section2 = ({ children }) => {
  const classSection = classNames({
    section: true,
  });

  return <section className={classSection}>{children}</section>;
};

export const Box = ({
  text,
  children,
  isFlexCol,
  isFlexColCenter,
  isFlexColStart,
  isFlexColSpaceBetween,
  isFlexRow,
  isFlexRowCenter,
  isFlexRowStart,
  isItemCard,
  maxWidth,
}) => {
  const boxSection = classNames({
    box: true,
    "flex-col": isFlexCol,
    "flex-col-center": isFlexColCenter,
    "flex-col-start": isFlexColStart,
    "flex-col-space-between": isFlexColSpaceBetween,
    "flex-row": isFlexRow,
    "flex-row-center": isFlexRowCenter,
    "flex-row-start": isFlexRowStart,
    "item-card": isItemCard,
  });
  return (
    <div className={boxSection} style={{ maxWidth: `${maxWidth}px` }}>
      {children}
    </div>
  );
};
