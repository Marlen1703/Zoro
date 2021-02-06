import React from 'react';
import {Header} from '../components/Header/header';
import { Hero } from "../components/Hero/hero";
import { About } from "../components/About/about";

const HomePage = () => {
    return (
        <>
            <Header/>
            <Hero/>
            <About/>
        </>
    )
};

export default HomePage;