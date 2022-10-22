import React from "react";
import './TodoIcon.css'
import { FiArrowDownCircle } from 'react-icons/fi'

function TodoIcon({type, color, onClick}){
    <span
        className={`Icon-container Icon-container--${type}`}
        onClick={onClick}
    >
        {FiArrowDownCircle}
    </span>
}

export {TodoIcon}