import React from 'react';
import './css/home.css';
import './css/home.scss';
import staySharpBarbershop from '../img/staysharp.png';

const Home = () => {
    return (
        <div className='Home-section'>
            <div id="stars"></div>
            <div id="stars2"></div>
            <div id="stars3"></div>
            <div className='Home-header' id="Home-header">
            <style>@import url('https://fonts.googleapis.com/css2?family=Architects+Daughter&display=swap');</style>
                <h1 className='header1' id="header1">Stay Sharp</h1>
                <h1 className='header2' id="header2">Barbershop</h1>
            </div>
            <p className='Home-message'>Barbershop located in Manteca</p>
            <button className='Home-btn' id='Home-btn'><a id='Home-link' href="tel:2098159971">CALL NOW</a></button>
            <img className='staySharp' src={staySharpBarbershop} alt='209-staysharp-barbershop' />
        </div>
    )
}

export default Home;