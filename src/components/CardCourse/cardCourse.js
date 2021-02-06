import React from 'react';
import './cardCourse.scss';
import human from '../../assets/icons/human.png';
import clock from '../../assets/icons/clock.png';

export const CardCourse = () => {
    return(
        <div className="card-course">
            <img alt="" className="card-course-img" src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg" />
            <div className="card-course-info">
                <h3>Mathematics</h3>
                <span className="card-course-info-topic">Dynamical systems and differential equations.</span>
                <div className="card-course-info-teacher">
                    <div>
                        <img alt="" src={human} />
                        <span>Mr. Janbolot Mazakbaev</span>
                    </div>
                    <div>
                        <img alt="" src={clock} />
                        <span>12:50 AM - 13:30 PM</span>
                    </div>
                </div>
            </div>
            <div className="card-course-menu">
                <div />
                <div />
                <div />
            </div>
        </div>
    )
};