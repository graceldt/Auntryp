import React, {useEffect, useState } from 'react';
import { SliderData } from '../data/sliderData';


const Slideshow = ({ slides }) => {
    const [current, setCurrent] = useState(0);


    const nextSlide = () => {
        setTimeout(
            () => setCurrent(current + 1 < slides.length ? current + 1 : 0),
            5000
        );
    };
    useEffect(() => {
        nextSlide();
    });
    return (
        <div className='slider'>
            {SliderData.map((slide, index) => {
                return (
                    <div
                        className={index === current ? 'slide active' : 'slide'}
                        key={index}
                    >
                        {index === current && (
                            <img src={slide.image} alt='travel image' className='image' />
                        )}
                    </div>

                );
            })}
        </div>
    )
}


export default Slideshow;