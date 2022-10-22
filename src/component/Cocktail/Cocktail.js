import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import CocktailCard from "../CocktailCard/CocktailCard";
import Loading from "../Loading/Loading";
import './cocktail.css';
 
export default function Cocktail () {

    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const baseUrl = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic';

    const fetchData = async () => {
        axios.get(baseUrl)
        .then(response => {
            setItems(response.data.drinks);
            setIsLoading(false);
        })
        .catch(error => {
            console.log(error);
        })
    }

    const imageFirstLoad = 5;
    const [cocktailShow, setCocktailShow] = useState(imageFirstLoad);

    const handleMoreCocktail = () => {
        if(cocktailShow + imageFirstLoad >= items.length) {
            setCocktailShow(58);
        }else{
            setCocktailShow(cocktailShow => cocktailShow + imageFirstLoad);
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    const getCocktailList = () => {
        return (
            <div className="cocktail-list">
                {items.slice(0, cocktailShow).map(item => (
                    <CocktailCard
                        key={item.idDrink}
                        id={item.idDrink}
                        title={item.strDrink}
                        img={item.strDrinkThumb+'/preview'}
                    />
                ))}
            </div>
        )
    }

    const buttonLoadMore = () => {
        return (
            <div className="cocktail-load">
                <button className="button-cta" onClick={handleMoreCocktail}>Charger plus</button>
            </div>
        )
    }

    return(
        <section className="cocktail" id="cocktail">
            <hr />
            <h1 className="cocktail-title">Liste de cocktails</h1>
            {isLoading ? <Loading /> : getCocktailList()}
            <small className="cocktail-load-text">- {cocktailShow} cocktails sur {items.length} -</small>
            {cocktailShow < items.length ? buttonLoadMore() : null}
        </section>
    )
}
