import React from "react";
import "./ButtonWarning.scss"

export const ButtonWarning = ({className,onClick,svg}) => {
    return (
        <button className={className} onClick={onClick}>
            {svg && svg}            
        </button>
    );
};

export default ButtonSecondary;