import "./GridComposer.scss";
import Texto from "../Texto/Texto";
import CakeSum from "../Cake-sum/Cake-sum";

/**
 * @param {string} className - clase para elegir qué theme de la Grid tendrá la tabla
 * @param {string} col - Para elegir la cantidad de columnas que tendrá el componente Grid
 * @param {string} remRowSpacing - Espacio entre las filas de la tabla
 * @param {string} remColSpacing - Espacio entre las columnas de la tabla
 *
 * @returns Estructura HTML
 */

export const GridComposer1 = ({
  className,
  col,
  remRowSpacing,
  remColSpacing,
}) => {
  return (
    <div className="grid-container">
      <div
        className={className}
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${col}, 1fr)`,
          gridRowGap: `${remRowSpacing}rem`,
          gridColumnGap: `${remColSpacing}rem`,
        }}>
        <div>
          <span>
            <Texto
              size={"title-s"}
              color={"--color-subtitulo-lila"}
              label={"Circulating Supply"}
            />
          </span>
          <p>
            <Texto
              size={"title-ml"}
              color={"--text-color"}
              label={<CakeSum limite={22456392} />}
            />
          </p>
        </div>
        <div>
          <span>
            <Texto
              size={"title-s"}
              color={"--color-subtitulo-lila"}
              label={"Total Supply"}
            />
          </span>
          <p>
            <Texto
              size={"title-ml"}
              color={"--text-color"}
              label={<CakeSum limite={398513365} />}
            />
          </p>
        </div>
        <div>
          <span>
            <Texto
              size={"title-s"}
              color={"--color-subtitulo-lila"}
              label={"Max Supply"}
            />
          </span>
          <p>
            <Texto
              size={"title-ml"}
              color={"--text-color"}
              label={<CakeSum limite={750000000} />}
            />
          </p>
        </div>
        <div>
          <span>
            <Texto
              size={"title-s"}
              color={"--color-subtitulo-lila"}
              label={"Market Cap"}
            />
          </span>
          <p>
            <Texto
              size={"title-ml"}
              color={"--text-color"}
              label={"$280 million"}
            />
          </p>
        </div>
        <div>
          <span>
            <Texto
              size={"title-s"}
              color={"--color-subtitulo-lila"}
              label={"Burned to date"}
            />
          </span>
          <p>
            <Texto
              size={"title-ml"}
              color={"--text-color"}
              label={"$280 million"}
            />
          </p>
        </div>
        <div>
          <span>
            <Texto
              size={"title-s"}
              color={"--color-subtitulo-lila"}
              label={"Current Emissions"}
            />
          </span>
          <p>
            <Texto
              size={"title-ml"}
              color={"--text-color"}
              label={"$2,93/block"}
            />
          </p>
        </div>
      </div>
    </div>
  );
};

export const GridComposer2 = ({
  className,
  col,
  remRowSpacing,
  remColSpacing,
}) => {
  return (
    <div className="grid-container">
      <div
        className={className}
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${col}, 1fr)`,
          gridRowGap: `${remRowSpacing}rem`,
          gridColumnGap: `${remColSpacing}rem`,
        }}>
        <div className="border-none">
          <span>
            <Texto
              size={"title-s"}
              color={"--color-text"}
              label={"Circulating Supply"}
            />
          </span>
          <p>
            <Texto
              size={"title-ml"}
              color={"--color-titulo-lila"}
              label={<CakeSum limite={227026415} />}
            />
          </p>
        </div>
        <div>
          <span>
            <Texto
              size={"title-s"}
              color={"--color-text"}
              label={"Total Supply"}
            />
          </span>
          <p>
            <Texto
              size={"title-ml"}
              color={"--color-titulo-lila"}
              label={<CakeSum limite={398171116} />}
            />
          </p>
        </div>
        <div>
          <span>
            <Texto
              size={"title-s"}
              color={"--color-text"}
              label={"Market Cap"}
            />
          </span>
          <p>
            <Texto
              size={"title-ml"}
              color={"--color-titulo-lila"}
              label={"$260 million"}
            />
          </p>
        </div>
        <div>
          <span>
            <Texto
              size={"title-s"}
              color={"--color-text"}
              label={"Token Burn"}
            />
          </span>
          <p>
            <Texto
              size={"title-ml"}
              color={"--color-titulo-lila"}
              label={<CakeSum limite={987196236} />}
            />
          </p>
        </div>
        <div>
          <span>
            <Texto
              size={"title-s"}
              color={"--color-text"}
              label={"Curren Emissions"}
            />
          </span>
          <p>
            <Texto
              size={"title-ml"}
              color={"--color-titulo-lila"}
              label={"1.88/block"}
            />
          </p>
        </div>
      </div>
    </div>
  );
};
