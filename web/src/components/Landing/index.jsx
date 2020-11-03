import React, { useEffect } from 'react';

import Navigator from '../Navigator';

import useAPI from '../../hooks/api.js';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Landing = () => {
    const api = useAPI('anime/1/pictures');
    console.log(api)
    return (
        <div className="landing-page">
            <Navigator />  
        </div>
    )
}

export default Landing;