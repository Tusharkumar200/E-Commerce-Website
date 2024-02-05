import React from 'react';
import { mainCarouselData } from './MainCaroselData';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';



const MainCrosel = () => {

   const items = mainCarouselData.map(item => <img src={item.image} alt="main-carousel" className="cursor-pointer" role='presentation' />)

    return (
    <AliceCarousel items={items}  
    autoPlay
    autoPlayInterval={1000}
    infinite
    disableButtonsControls
    />
    
    )
    };
export default MainCrosel;