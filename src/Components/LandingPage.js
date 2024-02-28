import React, { useState } from 'react';
import './LandingPage.css';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Button } from './Button';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const LandingPage = () => {
    const [isIt, setIsIt] = useState(false);
    const showTheSidebar = () => setIsIt(!isIt);

    return ( 
        <>
            <div className="landing">
                <nav>
                    <h1>Pizza</h1>
                    <button className="menu" onClick={showTheSidebar}>Menu <FaIcons.FaPizzaSlice/></button>
                </nav>
                <div className="intro">
                    <p className="bordered">GREATEST PIZZA EVER</p>
                    <p className="ready">READY IN 60 SECONDS</p>
                <Button children={'Place Order'} />
                </div>
                <div className={isIt ? 'sidebar on' : 'sidebar'}>
                    <AiIcons.AiOutlineClose onClick={showTheSidebar}/>
                    <div className='elements'>
                        <p><Link to='#'>Pizzas</Link>
</p>
                        <p><Link to='#'>Dessert</Link></p>
                        <p><Link to='#'>Full Menu</Link></p>
                    </div>
                    <Button children={'Order Now'} />
                </div>
            </div>
        </>
     );
}
 
export default LandingPage;