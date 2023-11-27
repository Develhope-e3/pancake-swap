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
  /* isMarginTop,
  isMarginBottom,
  isPaddingTop,
  isPaddingBottom, */
  seccionTextOrder,
  seccionText,
  seccionImage,
  isRelative,
  isAbsolute,
  top,
  bottom,
  right,
  left,
  paddingTop,
  paddingBottom,
  marginTop,
  marginBottom,
  marginRight,
  marginLeft,
  gap,
  zIndex,
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
    /* "margin-top": isMarginTop, */
    /* "margin-bottom": isMarginBottom, */
    /* "padding-top": isPaddingTop, */
    /* "padding-bottom": isPaddingBottom, */
    "position-relative": isRelative,
    "position-absolute": isAbsolute,
    "text-order": seccionTextOrder,
    "seccion-text": seccionText,
    "seccion-image": seccionImage,
  });
  return (
    <div
      className={boxSection}
      style={{
        maxWidth: `${maxWidth}px`,
        gap: `${gap}rem`,
        paddingTop: `${paddingTop}rem`,
        paddingBottom: `${paddingBottom}rem`,
        marginTop: `${marginTop}rem`,
        marginBottom: `${marginBottom}rem`,
        marginRight: `${marginRight}rem`,
        marginLeft: `${marginLeft}rem`,
        top: `${top}rem`,
        bottom: `${bottom}rem`,
        right: `${right}rem`,
        left: `${left}rem`,
        zIndex: `${zIndex}`,
      }}>
      {children}
    </div>
  );
};
