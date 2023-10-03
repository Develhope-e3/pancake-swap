import React from "react";
import classNames from "classnames";

export const Section2 = () => {
  const classSection = classNames({
    section: true,
  });

  return (
    <section>
      <Section2 className={classSection}></Section2>
    </section>
  );
};

export const Box = (isFlexRow, isFlexColCenter, isFlexRowCenter) => {
  const boxSection = classNames({
    box: true,
    "flex-row": isFlexRow,
    "flex-col-center": isFlexColCenter,
    "flex-row-center": isFlexRowCenter,
    "flex-row-Start": isFlexRowCenter,
  });
  return <Box className={boxSection}></Box>;
};
