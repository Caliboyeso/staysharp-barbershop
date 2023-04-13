import React from 'react';
import './css/contact.css';
import './css/contact.scss';
import staySharpMap from '../img/staysharp-map.png';

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
            {/* Contact Div */}
            <div className='Contact-info'>
                {/* Contact Cell */}
                <div className='Contact-cell'>
                    <h2 className='Contact-info-header'>Contact</h2>
                    <button className='Contact-btn'><a id="Contact-link" href="tel:2098159971">CALL NOW</a></button>
                    <p>(209)815-9971</p>
                </div>

                {/* Contact Address */}
                <div className='Contact-address'>
                    <h2 className='Contact-info-header'>Address</h2>
                    <button className='Contact-btn'><a id="Contact-link" target='_blank' href="https://www.google.com/maps/place/209+Stay+Sharp+Barbershop/@37.797122,-121.2419772,17z/data=!3m1!4b1!4m5!3m4!1s0x8090411507f96bad:0x82b73283294af2af!8m2!3d37.7970395!4d-121.2397858">GET DIRECTIONS</a></button>
                    <p className='address'>1462 W Yosemite Ave Ste B, Manteca, CA 95337</p>
                </div>
                {/* Contact Hours */}
                <div className='Contact-hours'>
                    <h2 className='Contact-info-header'>Business Hours</h2>
                    <ul>
                        <li>Mon: Closed</li>
                        <li>Tue: 9AM - 6PM</li>
                        <li>Wed: 9AM - 6PM</li>
                        <li>Thu: 9AM - 6PM</li>
                        <li>Fri: 9AM - 6PM</li>
                        <li>Sat: 9AM - 4PM</li>
                        <li>Sun: 9AM - 4PM</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Contact;