import React from 'react';
import { Button } from './Button';
import './SecondLanding.css';

const SecondLanding = () => {
    return ( 
        <div className="secondLanding">
            <h1>Pizza Of The Day</h1>
            <p>Truffle Alfredo Sauce Topped with 24 carat gold dust</p>
            <Button children={'Order Now'} />
        </div>
     );
}
 
export default SecondLanding;