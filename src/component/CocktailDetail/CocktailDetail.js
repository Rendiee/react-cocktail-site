import { React } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './cocktaildetail.css';

export default function CocktailDetail () {

    return (
        <>
            <Header/>
            <section className='cocktaildetail'>
                <h1 style={{margin: 300, textAlign: 'center'}}>Un max de détail !</h1>
            </section>
            <Footer />
        </>
    )
}