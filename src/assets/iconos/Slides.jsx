const Slides = ({base, children}) => {
return (
<div style={{overflow:"visible", width: "auto", height: "auto"}}>
<img src={base} alt="swiper"/>
{children}
</div>
)
}
export default Slides;