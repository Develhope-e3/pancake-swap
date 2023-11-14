import subImage from "../../assets/imagenes/assetPrediction.png";
import subImage2 from "../../assets/imagenes/game-prediction2.png";

/**
 *
 * @param {JSX.Element} img - Image PNG, SVG element o React-Icon
 * @param {number} size - Number width of image
 *
 * @returns Estructura HTML
 */

const SubImages = ({ size }) => {
  return (
    <>
      <img
        src={subImage}
        alt="Money"
        style={{
          width: `${size}rem`,
          position: "absolute",
          bottom: "-0.2rem",
          left: "-1.5rem",
          zIndex: "1",
        }}
      />
      <img
        src={subImage2}
        alt="Money"
        style={{
          width: `30rem`,
          position: "absolute",
          bottom: "15.2rem",
          left: "17rem",
          transform: "rotateZ(195deg) rotateZ(180deg)",
        }}
      />
    </>
  );
};
export default SubImages;
