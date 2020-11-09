import React, { useEffect, useState } from 'react';

import './index.css'

import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'

import Navigator from '../Navigator';
import Section from '../Section'

import useAPI from '../../hooks/api.js';

import imageTest1 from '../../assets/carrousel-teste1.png';
import imageTest2 from '../../assets/carrousel-teste2.png';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Landing = () => {
    
    // const api = useAPI('anime/1/pictures');
    const api = useAPI('search/anime?q=Naruto');

    const [images, setImages] = useState([]);

    useEffect(() => {
        api.then(res => setImages(res))
    }, [api])

    return (
        <div className="landing-page">
            <Navigator />

            {images && <Section images={images} setSliderImages={setImages} />}

            {/* <div className="landing-page-container">

                <div className="images-slider">
                    <section id="section1">
                        <a id="voltar" href="#section3">
                            <AiOutlineLeft size={50} cursor="pointer" />
                        </a>
                        <div className="image-items">
                            {images.map(image => {
                                return (
                                    <img  key={image.url} src={image.image_url} alt="anime"/>                    
                                )
                            })}
                        </div>
                        <a id="avancar" href="#section2">
                            <AiOutlineRight size={50}/>
                        </a>
                    </section>
                    <section id="section2">
                        <a id="voltar" href="#section1">
                            <AiOutlineLeft size={50} cursor="pointer" />
                        </a>
                            
                        <a id="avancar" href="#section3">
                            <AiOutlineRight size={50}/>
                        </a>
                    </section>
                    <section id="section3">
                        <a id="voltar" href="#section2">
                            <AiOutlineLeft size={50} cursor="pointer" />
                        </a>
                        <a id="avancar" href="#section1">
                            <AiOutlineRight size={50}/>
                        </a>
                    </section>
                </div>

            </div> */}
                
            
        </div>
    )
}

export default Landing;