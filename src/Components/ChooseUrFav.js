import React from 'react';
import { Card } from './Card';
import './ChooseUrFav.css';

const chooseUrFav = () => {
    return ( 
        <div className="chooseUrFav">
            <h1>Choose your favorite</h1>
            <div className="cards">
            <Card imgSrc={'/Imgs/product-1.jpg'} title={'Supreme Pizza'} text={'Marinara sauce, Brasil, Italian sausage, Roma tomatos, olives and pestro'} price={'$19.99'} />
            <Card imgSrc={'/Imgs/product-2.jpg'} title={'Hawaiian Pizza'} text={'Marinara sauce, Brasil, Italian sausage, Roma tomatos, olives and pestro'} price={'$16.99'} />
            <Card imgSrc={'/Imgs/product-3.jpg'} title={'Veggie Overload'} text={'Marinara sauce, Brasil, Italian sausage, Roma tomatos, olives and pestro'} price={'$14.99'} />
            </div>
        </div>
     );
}
 
export default chooseUrFav;