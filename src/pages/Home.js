import React from "react";
import { mainSection } from "../componentes/Section/Section";
import ButtonPrimary from "../componentes/ButtonPrimary/ButtonPrimary";
const Home = () => {
  return (
    <div>
      <mainSection>
        <ButtonPrimary
          className={"asdas"}
          onClick={() => console.log("asdasd")}
          widthValue={200}
          heightValue={400}
          texto={"TExtoooo"}
        />
      </mainSection>
    </div>
  );
};

export default Home;
