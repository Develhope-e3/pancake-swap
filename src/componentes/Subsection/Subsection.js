import { Texto } from "../../componentes/Texto/Texto";

export function Subsection({subSize,subColor,subLabel}) {
  return (
    <div>
        <div>
        <Texto
        size={subSize}
        color={subColor}
        label={subLabel}
      />
        <Texto
        size={subSize}
        color={subColor}
        label={subLabel}
      />
        </div>
        <div>
            <Button />
        </div>
    </div>
  );
}
