import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import CocktailCard from "../CocktailCard/CocktailCard";
import './cocktail.css';
 
export default function Cocktail () {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    const baseUrl = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic';
    const baseUrl2 = 'https://jsonplaceholder.typicode.com/users';

    const fetchData = async () => {

        // try {
        //     const response = await fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic");
        //     if(response.ok) {
        //         console.log(response);
        //         const data = await response.json();
        //         console.log(data);
        //         setItems(data);
        //     }
        // }catch(error) {
        //     setError(error);
        // }

        axios.get(baseUrl).then(response => {
            setItems(response.data.drinks);
            console.log(response.data.drinks);
        })

    }

    useEffect(() => {
        fetchData();
    }, [])

    return(
        <div>
            <hr />
            <h1 className="cocktail-title">Liste de cocktails</h1>
            <div className="cocktail-list">
                {items.map(item => (
                    <CocktailCard
                        key={item.idDrink}
                        title={item.strDrink}
                        img={item.strDrinkThumb+'/preview'}
                    />
                ))}
            </div>
        </div>
    )
}
