import './App.css';
import lostcontact from './lostcontact.png';
import Footer from './Footer';
import paw from './pawwhite.png';

function About (){
    return (
        <div className="about">

            <div className='cont'>
            <h2 className='header'>ABOUT</h2>
            </div>

            <div className='cont'>
                <img className='pinkimg' src={lostcontact} alt="pic" width='1030px'/>
            </div>

            <div className='cont box'>
                <p className='reserv text'>THE LOST CAT PUB FIRST OPENED ITS DOORS IN THE SMALL COASTAL VILLAGE OF FREDERIKSTED, ST. CROIX IN THE US VIRGIN ISLANDS ON FEBRUARY 6, 1991.</p>
            </div>

            <div className='cont box'>
                <p className='reserv text'>It was there, all those years ago that the LDP began to fill a need in the expatriate community for a neighborhood pub with great pizza American Music, the coldest beer and warm hospitality. Now well-established on Cape Cod, Ma in our Dennis location the Lost Cat Pub continue to be havens for the seasoned local and the seasonal tourists alike.</p>
            </div>
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
    )
}

export default About;