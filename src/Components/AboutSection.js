import React from 'react';
import profile_reak from '../img/profile_reak.jpg'

const AboutSection = () => {
    return (
        <div>
            <div className="description">
                <div className="title">
                    <div className="hide">
                        <h2>Gabriel Dias</h2>
                    </div>
                    <div className="hide">
                        <h2>
                            Illustrator <span>based</span> in
                            </h2>
                    </div>
                    <div className="hide">
                        <h2>Brazil</h2>
                    </div>
                </div>
                <p>self taught artist that decided to break into the market in 2018. Working with illustration and concept design, I aim to create visual representations of worlds that spawn from projects, contributing to the visual entertainment industry. In order to be in great contact with my audience, I am heavily active on social media, sharing the development of both, my personal and expressive side. Through my own projects have, and still am, maturing my craft.  </p>
                <button>Contact Me</button>
                <div className="image">
                    <img src={profile_reak} alt="Dias Profile Pic" />
                </div>
            </div>
        </div>
    )
}

export default AboutSection;