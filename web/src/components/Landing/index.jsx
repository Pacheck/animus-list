import React, { useEffect, useState } from 'react';

import './index.css'

import Navigator from '../Navigator';

import useAPI from '../../hooks/api.js';

import imageTest1 from '../../assets/carrousel-teste1.png';
import imageTest2 from '../../assets/carrousel-teste2.png';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Landing = () => {
    
    // const api = useAPI('anime/1/pictures');
    const api = useAPI('search/anime?q=sword art online');
    console.log(api)
    const [images, setImages] = useState([]);

    useEffect(() => {
        api.then(res => setImages(res))
    }, [api])

    console.log(images)

    return (
        <div className="landing-page">
            <Navigator />
           
           <div className="landing-page-container">
                <Carousel autoPlay infiniteLoop showThumbs={false} showIndicators={false}>
                    {images.map(img => {
                        return(
                            <a href={img.url} target="_blank" key={img.image_url}>
                                <div>
                                <img src={img.image_url} alt="testando"/>
                                <p className="legend">{img.title}</p>
                                </div>
                            </a>
                        )
                    })}
                </Carousel>
                    <div className="landing-info">
                        <p className="text-area">Uma página criada a partir do site MAL, via web scrapping</p>
                        <button>Next</button>
                    </div>
            </div>
                
            
        </div>
    )
}

export default Landing;