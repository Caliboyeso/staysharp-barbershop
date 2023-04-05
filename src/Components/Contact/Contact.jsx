import React from 'react';
import './css/contact.css';
import './css/contact.scss';
import staySharpMap from '../img/staysharp-map.png'

const Contact = () => {
    return (
        <div className='Contact-section'>
            <style>@importurl('https://fonts.googleapis.com/css2?family=Architects+Daughter&display=swap');</style>
            <h1 className='Contact-header'>Contact</h1>
            <a
                id="Contact-map-link"
                href="https://www.google.com/maps/place/209+Stay+Sharp+Barbershop/@37.797122,-121.2419772,17z/data=!3m1!4b1!4m5!3m4!1s0x8090411507f96bad:0x82b73283294af2af!8m2!3d37.7970395!4d-121.2397858"
                target="_blank"
            >
                <img id="Contact-map" className="stay-sharp-map" src={staySharpMap} alt="" />
            </a>
        </div>
    );
}

export default Contact;