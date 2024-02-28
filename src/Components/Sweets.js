import React from 'react';
import './ChooseUrFav.css';
import { Card } from './Card';


const chooseUrFav = () => {
    return ( 
        <div className="chooseUrFav">
            <h1>Choose your favorite</h1>
            <div className="cards">
            <Card imgSrc={'/Imgs/sweet-1.jpg'} title={'Doughlicious'} text={'Belgian chocolate glazed donuts covered in icing with sprinkles on top'} price={'$9.99'} />
            <Card imgSrc={'/Imgs/sweet-2.jpg'} title={'Caramel Wonder'} text={'Vanilla ice cream covered with caramel and chocolate glazed topped with a coco stick'} price={'$12.99'} />
            <Card imgSrc={'/Imgs/sweet-3.jpg'} title={'Brownie Bunch'} text={'Double fudge brownie squares topped with white chocolate pieces and macadamia nuts'} price={'$9.99'} />
            </div>
        </div>
     );
}
 
export default chooseUrFav;