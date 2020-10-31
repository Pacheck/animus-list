import React from 'react';

import Navigator from '../Navigator';

import useAPI from '../../hooks/api.js';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Landing = () => {
    
    const api = useAPI();
    console.log(api)

    return (
        <div className="landing-page">
            <Navigator />
            
            

        </div>
    )
}

export default Landing;