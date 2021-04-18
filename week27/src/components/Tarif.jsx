import React from "react";
import '../assets/styles/Tarif.scss';


function Tarif(props) {
    return(
        <div className={`tarif ${props.classTarif}`}>
            <div className={`tarif-header ${props.classHeader}`}>Безлимитный {props.tarif}</div>
            <div className={`tarif-price ${props.classBody}`}>
                <span>{props.currency}</span>
                <span className="price">{props.tarif}</span>
                <span>{props.period}</span>
            </div>
            <div className="tarif-speed">до {props.speed} Мбит/сек</div>
            <div className="tarif-footer">Объем включенного трафика не ограничен</div>
        </div>
    );
}
export default Tarif;