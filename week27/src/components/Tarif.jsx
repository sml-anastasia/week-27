import React from "react";
import '../assets/styles/Tarif.scss';


export default class Tarif extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hovered: false
        };
    }

    handleChange = () => {
        this.setState (
        {
            hovered: !this.state.hovered
        }
        );
    }

    render () {
        const {classHeader, tarif, classBody, currency, period, speed} = this.props;
        return (
        <div className={this.state.hovered ? "tarif_chosen" : 'tarif'} onMouseOver={this.handleChange}>
            <div className={`tarif-header ${classHeader}`}>Безлимитный {tarif}</div>
            <div className={`tarif-price ${classBody}`}>
                <span>{currency}</span>
                <span className="price">{tarif}</span>
                <span>{period}</span>
            </div>
            <div className="tarif-speed">до {speed} Мбит/сек</div>
            <div className="tarif-footer">Объем включенного трафика не ограничен</div>
        </div>
        )
    }
}
