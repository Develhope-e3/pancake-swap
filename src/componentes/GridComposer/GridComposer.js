import "./GridComposer.scss";
import Texto from "../Texto/Texto";
import CakeSum from "../Cake-sum/Cake-sum";

/**
 * @param {string} label - Texto que va a llevar el link
 * @param {string} className - clase del link (primaryAnchor, secondaryAnchor, tertiaryAnchor)
 * @param {string} href - URL del link
 * @param {svgImage} svg - imagen SVG del link
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
        <div style={{ paddingLeft: "" }}>
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
              label={<CakeSum numero={22454832} limite={22456392} />}
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
              label={<CakeSum numero={398511939} limite={398513365} />}
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
              label={<CakeSum numero={749998993} limite={750000000} />}
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
        <div style={{ paddingLeft: "" }}>
          <span className="border-none">
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
      </div>
    </div>
  );
};
