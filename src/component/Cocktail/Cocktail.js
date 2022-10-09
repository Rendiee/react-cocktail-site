import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import CocktailCard from "../CocktailCard/CocktailCard";
import './cocktail.css';
 
export default function Cocktail () {

    const [items, setItems] = useState([]);

    const baseUrl = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic';

    const fetchData = async () => {

        axios.get(baseUrl).then(response => {
            setItems(response.data.drinks);
        })

    }

    useEffect(() => {
        fetchData();
    }, [])

    return(
        <section>
            <hr />
            <h1 className="cocktail-title">Liste de cocktails</h1>
            <div className="cocktail-list">
                {items.map(item => (
                    <CocktailCard
                        title={item.strDrink}
                        img={item.strDrinkThumb+'/preview'}
                    />
                ))}
            </div>
        </section>
    )
}
