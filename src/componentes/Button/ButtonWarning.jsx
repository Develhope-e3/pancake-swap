import "./Button.scss";
import Button from "./Button";

export const ButtonWarning = ({ svg, onClick }) => {


  return (
    <Button
      isWarning
      widthValue={"50px"}
      heightValue={"50px"}
      onClick={onClick}
      svg={svg}
    />

  );
};

export default ButtonWarning;
