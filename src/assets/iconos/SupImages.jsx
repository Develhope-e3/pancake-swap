import supImage from "../../assets/imagenes/game-lottery2.png";
import supImage2 from "../../assets/imagenes/assetLottery.png";

/**
 *
 * @param {JSX.Element} img - Image PNG, SVG element o React-Icon
 * @param {number} size - Number width of image
 *
 * @returns Estructura HTML
 */

const SupImages = ({ size }) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
        }}>
        <img
          src={supImage}
          alt="Pool balls"
          style={{
            width: `${size}rem`,
            position: "relative",
            bottom: "-25rem",
            left: "27rem",
            transform: "rotateZ(-45deg) rotateX(32deg) rotateY(180deg)",
          }}
        />
        <img
          src={supImage2}
          alt="Pool balls"
          style={{
            width: `${size}rem`,
            position: "relative",
            bottom: "-19rem",
            right: "-9rem",
            zIndex: "1",
            transform: "rotateZ(-255deg)",
          }}
        />
      </div>
    </>
  );
};
export default SupImages;
