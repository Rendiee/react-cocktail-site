import { React, useState, useEffect } from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './cocktaildetail.css';

export default function CocktailDetail () {

    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const cocktail = useParams();

    useEffect(() => {
        const baseUrl = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=' + cocktail.id;

        const fetchData = async () => {
            axios.get(baseUrl)
            .then(response => {
                setItems(response.data.drinks);
                setIsLoading(false);
            })
            .catch(error => {
                console.log(error);
            })
        };
        fetchData();
    }, [])

    const loadingSection = () => {
        return (
            <div className='loading-section'>
                <h1>Chargement des détails ...</h1>
            </div>
        )
    }

    const cocktailDetailSection = () => {
        return (
            <>
                <section className='cocktaildetail'>
                    <div className='cocktaildetail-left'>
                        <img className='cocktaildetail-img' src={items[0].strDrinkThumb}  alt='cocktail illustration'/>
                    </div>
                    <div className='cocktaildetail-right'>
                        <h1>{items[0].strDrink}</h1>
                        <p>{items[0].strInstructions}</p>
                    </div>
                </section>
            </>
        )
    }

    return (
        <>
            <Header/>
            {isLoading ? loadingSection() : cocktailDetailSection()}
            <Footer />
        </>
    )
}