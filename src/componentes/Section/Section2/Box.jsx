import classNames from "classnames";

export const Box = ({
  children,
  isFlexCol,
  isFlexColCenter,
  isFlexColStart,
  isFlexColSpaceBetween,
  isFlexRow,
  isFlexRowCenter,
  isFlexRowStart,
  isFlexRowSpaceBetween,
  isItemCard,
  maxWidth,
  seccionTextOrder,
  seccionText,
  seccionImage,
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
    "flex-row-space-between": isFlexRowSpaceBetween,
    "item-card": isItemCard,
    "text-order": seccionTextOrder,
    "seccion-text": seccionText,
    "seccion-image": seccionImage,
  });
  return (
    <div className={boxSection} style={{ maxWidth: `${maxWidth}px` }}>
      {children}
    </div>
  );
};
