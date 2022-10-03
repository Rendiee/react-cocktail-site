import React from "react"
import './cocktailcard.css';

class CocktailCard extends React.Component {
    render() {
        return(
            <div className="card">
                <p>{this.props.title}</p>
                <img src={this.props.img} alt='cocktail img' />
            </div>
        )
    }
}

export default CocktailCard;