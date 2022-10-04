import React from "react"
import './cocktailcard.css';
import arrow from '../../assets/arrow.png';

class CocktailCard extends React.Component {
    render() {
        return(
            <div className="cocktail-card" key={this.props.key}>
                <img className="cocktail-card-img" src={this.props.img} alt='cocktail img' />
                <div className="cocktail-card-info">
                    <p className="cocktail-card-title">{this.props.title}</p>
                    <div className="cocktail-card-align-center">
                        <small className="cocktail-card-small">Cocktail sans alcool</small>
                        <button className="cocktail-card-button"></button>
                    </div>
                </div>
                <div className="cocktail-card-square"></div>
            </div>
        )
    }
}

export default CocktailCard;