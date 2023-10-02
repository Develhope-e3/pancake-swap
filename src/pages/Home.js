import React from "react";
import Section from "../componentes/Section/Section";
import ButtonPrimary from "../componentes/ButtonPrimary/ButtonPrimary";
const Home = () => {
  return (
    <div>
      <Section>
        <ButtonPrimary
          className={"asdas"}
          onClick={() => console.log("asdasd")}
          widthValue={200}
          heightValue={400}
          texto={"TExtoooo"}
        />
      </Section>
      <Section>
        <h1>asdasdasjdk</h1>
        <h1>asdasdasjdk</h1>
      </Section>
    </div>
  );
};

export default Home;
