import "./GridComposer.scss";
import Texto from "../Texto/Texto";
import CakeSum from "../Cake-sum/Cake-sum";

/**
 * @param {string} className - clase para elegir qué theme de la Grid tendrá la tabla
 * @param {string} col - Para elegir la cantidad de columnas que tendrá el componente
 * @param {string} remRowSpacing - Espacio entre las filas de la tabla
 * @param {string} remColSpacing - Espacio entre las columnas de la tabla
 *
 * @returns Estructura HTML
 */

export const GridComposer1 = ({
  theme,
  col,
  remRowSpacing,
  remColSpacing,
}) => {
  return (
      <div
        className={theme}
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${col}, 1fr)`,
          gridRowGap: `${remRowSpacing}rem`,
          gridColumnGap: `${remColSpacing}rem`,
        }}>
        <div>
          <>
            <Texto
              size={"title-s"}
              color={"var(--color-subtitulo-lila)"}
              label={"Circulating Supply"}
            />
            <Texto
              size={"title-ml"}
              color={"var(--text-color)"}
              label={<CakeSum limite={22456392} />}
            />
          </>
        </div>
        <div>
          <>
            <Texto
              size={"title-s"}
              color={"var(--color-subtitulo-lila)"}
              label={"Total Supply"}
            />
            <Texto
              size={"title-ml"}
              color={"var(--text-color)"}
              label={<CakeSum limite={398513365} />}
            />
          </>
        </div>
        <div>
          <>
            <Texto
              size={"title-s"}
              color={"var(--color-subtitulo-lila)"}
              label={"Max Supply"}
            />
            <Texto
              size={"title-ml"}
              color={"var(--text-color)"}
              label={<CakeSum limite={750000000} />}
            />
          </>
        </div>
        <div>
          <>
            <Texto
              size={"title-s"}
              color={"var(--color-subtitulo-lila)"}
              label={"Market Cap"}
            />
            <Texto
              size={"title-ml"}
              color={"var(--text-color)"}
              label={"$280 million"}
            />
          </>
        </div>
        <div>
          <>
            <Texto
              size={"title-s"}
              color={"var(--color-subtitulo-lila)"}
              label={"Burned to date"}
            />
            <Texto
              size={"title-ml"}
              color={"var(--text-color)"}
              label={<CakeSum limite={952660681} />}
            />
          </>
        </div>
        <div>
          <>
            <Texto
              size={"title-s"}
              color={"var(--color-subtitulo-lila)"}
              label={"Current Emissions"}
            />
            <Texto
              size={"title-ml"}
              color={"var(--text-color)"}
              label={"$2,93/block"}
            />
          </>
        </div>
      </div>
  );
};

