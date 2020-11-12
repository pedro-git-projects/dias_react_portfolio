import React from 'react';
//import icons
import clock from '../img/clock.svg';
import pen from '../img/pen.svg';
import wallet from '../img/wallet.svg';
import palette from '../img/palette.svg';
import home2 from '../img/home2.jpg'

const ServicesSection = () => {
    return (
        <div className="services">
            <div className="description">
                <h2>High <span>quality</span> services</h2>
                <div className="cards">
                    <div className="card">
                        <div className="icon">
                            <img src={clock} alt="clock" />
                            <h3>Efficient</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src={pen} alt="clock" />
                            <h3>Pen</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src={wallet} alt="clock" />
                            <h3>Affordable</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src={palette} alt="clock" />
                            <h3>Creative</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
            </div>
            <div className="image">
                <img src={home2} alt="The Will" />
            </div>
        </div>
    )
}

export default ServicesSection; 