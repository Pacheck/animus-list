import React, { useEffect, useState } from 'react';

import './index.css'

import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'

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

                <div className="images-slider">
                    <section id="section1">
                        <a id="voltar" href="#section3">
                            <AiOutlineLeft size={50} cursor="pointer" />
                        </a>
                        <div className="image-items">
                            <img src={imageTest1} alt="movie"/>
                            <img src={imageTest2} alt="movie"/>
                            <img src={imageTest1} alt="movie"/>
                            <img src={imageTest2} alt="movie"/>
                            <img src={imageTest1} alt="movie"/>
                            <img src={imageTest2} alt="movie"/>
                            
                        </div>
                        <a id="avancar" href="#section2">
                            <AiOutlineRight size={50}/>
                        </a>
                    </section>
                    <section id="section2">
                        <a id="voltar" href="#section1">Voltar</a>
                        <img src={imageTest1} alt="movie"/>
                            <img src={imageTest2} alt="movie"/>
                            <img src={imageTest1} alt="movie"/>
                            <img src={imageTest2} alt="movie"/>
                            <img src={imageTest1} alt="movie"/>
                            <img src={imageTest2} alt="movie"/>
                        <a id="avancar" href="#section3">Avançar</a>
                    </section>
                    <section id="section3">
                        <a id="voltar" href="#section2">Voltar</a>
                        <img src={imageTest1} alt="movie"/>
                            <img src={imageTest2} alt="movie"/>
                            <img src={imageTest1} alt="movie"/>
                            <img src={imageTest2} alt="movie"/>
                            <img src={imageTest1} alt="movie"/>
                            <img src={imageTest2} alt="movie"/>
                        <a id="avancar" href="#section1">Avançar</a>
                    </section>
                </div>

            </div>
                
            
        </div>
    )
}

export default Landing;