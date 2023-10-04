import "./Subsection.scss";
import Texto from "../Texto/Texto";
import Button from "../Button/Button";
import Link from "../Link/Link";
/**
 * @param {string} labelTexto - Texto que va a llevar el Texto
 * @param {string} labelButton - Texto que va a llevar el Button
 * @param {string} labelLink - Texto que va a llevar el Link
 *
 * @returns Estructura HTML
 */

export function Subsection({
  labelTexto1,
  labelTexto2,
  labelTextoDown,
  labelButton,
  labelLink,
}) {
  return (
    <div className="subsection-container">
      <div className="text-container">
        <div className="text-container-up">
          <Texto
            size={"tittle-section-lg"}
            color={"var(--color-titulo-lila)"}
            label={labelTexto1}
          />
          <Texto
            size={"tittle-section-lg"}
            color={"var(--color-text)"}
            label={labelTexto2}
          />
        </div>
        <div className="text-container-down">
          <Texto
            size={"text-section-ml"}
            color={"var(--color-subtitulo-lila)"}
            label={labelTextoDown}
          />
        </div>
      </div>
      <div className="button-containers">
        <Button
          isPrimary={true}
          widthValue={"166px"}
          heightValue={"46px"}
          texto={labelButton}
          colorTexto={"var(--text-color-black)"}
          onClick={() => console.log("click en el boton primario")}
        />
        <Link
          label={labelLink}
          className={"primary-anchor"}
          href={""}
          svg={
            <svg
              viewBox="0 0 24 24"
              width="20px"
              xmlns="http://www.w3.org/2000/svg"
              className="anchorSVG"
            >
              <path d="M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z"></path>
            </svg>
          }
        ></Link>
      </div>
    </div>
  );
}
