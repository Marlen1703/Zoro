import React from 'react';
import './hero.scss';
import pic1 from '../../assets/images/info-1.png';
import pic2 from '../../assets/images/info-2.png';

export const Hero = () => {
    return (
        <section className='hero'>
            <div className="hero-container">
                <div className="hero-info-1">
                    <div className="hero-info-1-text">
                        <h1>
                            Everything you've
                            looked for is here
                        </h1>
                        <p>Studying and Teaching can be hard, messy, complicated…
                            and still the most important thing for student’s future.
                            That’s why we made Studdis — a place where students
                            get better. </p>
                        <button className="btn hero-info-1-btn">Try for free</button>
                    </div>

                    <div className="hero-info-1-img">
                        <img src={pic1} alt=""/>
                    </div>
                </div>
                <div className="hero-info-2">
                    <div className="hero-info-2-img">
                        <img src={pic2} alt=""/>
                    </div>
                    <div className="hero-info-2-text">
                        <h1>Take the best version of your school</h1>
                        <p>Unlike old platforms , all processes in Studdis are easy to follow.
                            And they’re more than just processes — you can make homework, share files,
                            communicate with your classmates and even know about your mental condition.</p>
                        <button className="btn hero-info-1-btn">SEE ALL FEATURES</button>
                    </div>
                </div>
            </div>
        </section>
    );
}