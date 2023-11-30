import asset from '../imagenes/asset 8.png'
/**
 *
 * @param {JSX.Element} img - SVG element o React-Icon
 *
 * @returns Estructura HTML
 */

const Base = () => {
return (

<img src={asset} alt="base" width={32} height={32}/>
)
}
export default Base;