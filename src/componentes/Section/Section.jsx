import MainSectionSVG from "../../assets/BackgroundSVG/MainSectionSVG";
import "./Section.scss";

export const MainSection = ({ children, background }) => {
  return (
    <div className={"main-section"} style={{ background: `${background}` }}>
      {children}
    </div>
  );
};

export const Section = ({ children, gradient }) => {
  return (
    <section
      className="section"
      style={{
        background: `${gradient}`,
      }}>
      {children}
    </section>
  );
};
