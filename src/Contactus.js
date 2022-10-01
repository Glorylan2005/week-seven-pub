import cat from './whitecatmirr.png';
import Forminput from './Forminput';
import paw from './pawwhite.png';
import Footer from './Footer';

function ContactUs (){
    return (
        <div className='contus'>

            <div >
                <div className='cont'>
                <h2 className='header'>CONTACT US</h2>
                </div>

                <div className='cont box'>
                    <p className='reserv text'>Let us know what you think! We had love to hear your thoughts about our pub, our web site, or anything else that comes to mind.</p>
                </div>
            </div>

            <div className='contactbox'>
                <div className='contactcont'>
                    <h3 className='reserv red'>LOST CAT PUB</h3>
                    <p className='reserv'> 80 Forest Pine Dr., <br></br>Dennis, MA 02641, USA </p>
                    <p className='reserv'> 📞 774-212-4587</p>
                    <img className='catimg' src={cat} alt="cat" width='360px' />
                </div>

                
                <div className='contactcont'>
                    <h3 className='reserv red'> GET IN TOUCH </h3>
                    <img className="cont" src={paw} alt="paw" width='110px' />
                    <Forminput />
                </div>
            </div>
            
            <div className='cont'>
                <h2 className='slogan'>COME • SIT • ENJOY</h2>
            </div>
            <div>
                <Footer />
            </div>

        </div>

    )
}

export default ContactUs;