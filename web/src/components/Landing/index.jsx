import React, { useEffect, useState } from 'react';

import './index.css'

import Navigator from '../Navigator';

import useAPI from '../../hooks/api.js';

import imageTest1 from '../../assets/carrousel-teste1.png';
import imageTest2 from '../../assets/carrousel-teste2.png';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Landing = () => {

    const api = useAPI('anime/1/pictures');

    const [images, setImages] = useState([]);

    useEffect(() => {
        api.then(res => setImages(res))
    }, [api])

    console.log(images)

    return (
        <div className="landing-page">
            <Navigator />
            <div className="carrousel-container">
                <Carousel autoPlay={true} infiniteLoop={true} width="700px">
                    {images.map(img => {
                        return <div key={img.large}>
                        <img src={img.large} alt="testando"/>
                        <p className="legend">Legend 1</p>
                    </div>
                    })}
                    {/* <div>
                        <img src={imageTest2} alt="testando"/>
                        <p className="legend">Legend 3</p>
                    </div>
                    <div>
                        <img src={imageTest1} alt="testando"/>
                        <p className="legend">Legend 2</p>
                    </div>
                    <div>
                        <img src={imageTest2} alt="testando"/>
                        <p className="legend">Legend 3</p>
                    </div> */}
                </Carousel>
            </div>
        </div>
    )
}

export default Landing;