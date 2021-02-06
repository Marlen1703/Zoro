import React from 'react';
import about from "../../assets/images/about-pic.png";
import './about.scss';
import partner1 from '../../assets/images/partner-1.png';
import partner2 from '../../assets/images/partner-2.png';
import partner3 from '../../assets/images/partner-3.png';
import partner4 from '../../assets/images/partner-4.png';
import partner5 from '../../assets/images/partner-5.png';

export const  About = () => {
    return (
        <section className="about">
            <div className="about-container">
                <div className="about-title">
                    <h1>Over 1,000 Schools
                        use Studdis to make results better
                    </h1>
                    <span>See all customer stories</span>
                </div>
                <div className="about-content">
                    <figure className="about-content-left">
                        <blockquote>
                            "All the necessary and all the reports of the
                            educational process are available here and now.
                            The system makes it possible to automate the processes of teaching and educational, administrative activities to a high degree and at a qualitative level and helps to solve several problems in the field of education"
                        </blockquote>
                        <figcaption>
                            <span>Mustafa Ozdemir</span><br/>
                            Teacher, Co-founder of UNICEP
                        </figcaption>
                    </figure>
                    <div className="about-content-right">
                        <img src={about} alt=""/>
                    </div>
                </div>
                <div className="about-partnership">
                    <img src={partner1} alt=""/>
                    <img src={partner2} alt=""/>
                    <img src={partner3} alt=""/>
                    <img src={partner4} alt=""/>
                    <img src={partner5} alt=""/>
                </div>
            </div>
        </section>
    );
}