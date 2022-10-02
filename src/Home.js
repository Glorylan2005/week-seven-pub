import './App.css';
import { useState } from 'react';
import { homeimages } from './homeimages';
import next from './arrownext.png';
import previous from './arrowprev.png';
import paw from './pawwhite.png';
import Footer from './Footer';


function Home (){
    const [pics, setPics] = useState (0);
    const {id, image} = homeimages[pics];

    const [showMore, setShowMore] = useState (false);
    const text = "The Lost at Pub  serves a traditional pub menu all day and pizza + apps until midnight. The Lost Cat Menu features crispy wings, brick oven pizza, burgers + the freshest seafood and shellfish and seasonal daily specials. We have the coldest beers, we make our pizza dough from scratch every morning and we have Gluten Free pizza + gluten free menu options available. If you're looking for a great comfort food, cold beer and a relaxed family atmosphere on the Cape, try the Lost Cat Pub.";

    const previousImage = () => {
        setPics ((image => {
            image --;
            if (image < 0) {
                return homeimages.length-1;
            }
            return image;
        }))
    }
    const nextImage = () => {
        setPics ((image => {
            image ++;
            if (image > homeimages.length-1) {
                image=0;
            }
            return image;
        }))
    }

    return (
        <div className="home">
            <div className='cont slide'>
                <div className='arrowb'>
                    <button onClick = {previousImage} className='btn'>
                        <img className='arrowimg' src={previous} alt="previous" width='80px' /> 
                    </button>
                </div>

                <div className='arrowb' key={id} >
                    <img className='homeimg' src={image} alt="bar" width='770px' />
                </div>

                <div className='arrowb'>
                    <button onClick = {nextImage} className='btn'>
                        <img className='arrowimg' src={next} alt="next" width='80px' /> 
                    </button>
                </div>
            </div>

            <div className='cont'>
                <h2 className='slogan'>COME • SIT • ENJOY</h2>
            </div>

            <div className='cont'>
                <p className='reserv res'>NO RESERVATIONS • FIRST COME FIRST SERVE</p>
            </div>

            <div className='cont '>
                <p className='reserv text just'>
                {showMore ? text : `${text.substring(0, 182) + "..."}`}
            <button className="btnShow"onClick={() => setShowMore(!showMore)}>
                {showMore ? " Show less" : " Show more"}</button>
                </p>
            </div>

            <div className='cont'>
                <p className='reserv'><b> TAKE OUT AVAILABLE</b></p>
            </div>

            <div className='cont'>
                <p className='reserv'><b>📞 774-212-4587</b></p>
            </div>

            <div className='cont'>
                <p className='reserv red'><b> Full Menu Served </b></p>
            </div>

            <div className='col'>
                <p className='time'> 11:30AM to 9:00PM • Sunday -Thursday </p>
                <p className='time'> 11:30AM to 9:00PM • Sunday -Thursday </p>
            </div>

            <div className='cont'>
                    <img className='pawimg' src={paw} alt="paw" width='110px' />
            </div>

            <div>
                <Footer />
            </div>

            
        </div>
    )
}

export default Home;