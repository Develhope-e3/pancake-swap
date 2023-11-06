import "./Section.scss";
import SubImages from "../../assets/iconos/SubImages";
import SupImages from "../../assets/iconos/SupImages";

export const MainSection = ({ children }) => {
  return <div className={"main-section"}>{children}</div>;
};

export const Section = ({ children, gradient }) => {
  return (
    <section
      className="section"
      style={{
        background: `${gradient}`,
      }}>
      <SubImages size={35} />
      {children}
      <SupImages size={35} />
    </section>
  );
};
