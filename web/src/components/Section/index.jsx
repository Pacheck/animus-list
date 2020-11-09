import React from 'react';

import './index.css';

import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'


const Section = ({ images, setSliderImages }) => {

    function handleBackwardImages(){
        console.log('Backward')
    }
    
    function handleFowardImages(){
        let deletedImages = [];

        for(let i = 0; i < 7; i++){
            setSliderImages(prevState => {
                const deletedImage = images.shift();
                deletedImages.push(deletedImage);
            })
        }
        console.log(deletedImages)
    }
    
    return (
        <section className="images-slider">
            <AiOutlineLeft size={50} className="backward"  onClick={handleBackwardImages}/>

            {images.map(image => {
                return (
                        <a key={image.image_url} href={image.url} target="_blank">
                            <img src={image.image_url} alt="Anime" height="309px"/>
                        </a>
                )
            })}

            <AiOutlineRight size={50} className="foward"  onClick={handleFowardImages}/>
        </section>
    )
}

export default Section