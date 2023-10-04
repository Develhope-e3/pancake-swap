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
  icons,
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
    <div className={boxSection}>
      <div>{text}</div>
      <div style={{ display: "flex", gap: "var(--spacing-xs)" }}>
        {children}
      </div>
      <div>{icons}</div>
    </div>
  );
};

