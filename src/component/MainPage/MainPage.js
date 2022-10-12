import React from "react";
import Header from "../../component/Header/Header";
import Hero from "../../component/Hero/Hero";
import History from "../../component/History/History";
import Cocktail from "../../component/Cocktail/Cocktail";
import Footer from "../../component/Footer/Footer";

export default function MainPage() {
    return (
        <>
            <Header/>
            <Hero />
            <History />
            <Cocktail />
            <Footer />
        </>
    )
}