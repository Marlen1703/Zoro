import React, { useState } from 'react';
import './teacherHomework.scss';
import { CardCourse2 } from '../CardCourse2/cardCourse2';

export const TeacherHomework = () => {

    const [isSelected, setSelect] = useState(false);

    return(
        <div className="teacher-hw">
            <div className="teacher-hw-container">
                {
                    isSelected ?
                    <div>

                    </div>
                    :
                    <div className="teacher-hw-classes">
                        <div onClick={() => setSelect(true)}><CardCourse2 /></div>
                        <div onClick={() => setSelect(true)}><CardCourse2 /></div>
                    </div>
                }
            </div>
        </div>
    )
};