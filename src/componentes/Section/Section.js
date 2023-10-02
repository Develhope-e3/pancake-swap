import React from 'react'

const Section = ({className, headSVG, footSVG, headSection, bodySection, footSection}) => {
  return (
    <div className={className}>
        {headSVG && headSVG};
        {headSection && headSection};
        {bodySection && bodySection};
        {footSection && footSection};
        {footSVG && footSVG};
    </div>
  )
}

export default Section