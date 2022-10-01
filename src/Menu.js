import { useState } from 'react';
import Food from './Food';
import Buttons from './Buttons';
import { data } from './data';
import './App.css';
import Footer from './Footer';
import paw from './pawwhite.png';

function Menu () {
    const [meals, setMeals] = useState (data);

const chosenMeals = (searchTerm) => {
    const newMeals = data.filter (element => element.searchTerm === searchTerm);
    setMeals(newMeals)
}

return (
    
    <div className="App">
        <div className='cont'>
            <h2 className='header'>MENU</h2>
        </div>
        
        <Buttons filteredFood={chosenMeals}/>
        <div className='cont'>
        <button className="choice all" onClick = {() => setMeals (data)}>ALL</button>
        </div>
        <Food foodlist={meals}/>

        <div className='cont'>
                <h2 className='slogan'>COME • SIT • ENJOY</h2>
            </div>
        <div className='cont'>
                    <img className='pawimg' src={paw} alt="paw" width='110px' />
            </div>

            <div>
                <Footer />
            </div>
    </div>
    );
}

export default Menu;