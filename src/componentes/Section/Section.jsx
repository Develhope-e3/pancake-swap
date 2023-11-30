import "./Section.scss";

/**
 * @param {string} children - Esta sección se puede utilizar para albergar más componentes
 * @param {string} gradient - Propiedad de background para colores de fondo, gradientes y demás
 *
 * @returns Estructura HTML
 */

export const MainSection = ({ children, background }) => {
  return (
    <div className={"main-section"} style={{ background: `${background}` }}>
      {children}
    </div>
  );
};

export const Section = ({ children, gradient, overflow }) => {
  return (
    <section
      className="section"
      style={{
        background: `${gradient}`,
        overflow: `${overflow}`
      }}>
      {children}
    </section>
  );
};
