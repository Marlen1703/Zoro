import React from 'react';
import './cardTask.scss';

export const CardTask = (props) => {

    const { status, mark } = props;

    const deterMark = () => {
        switch (mark) {
            case 5:
                return "card-task-status-mark card-task-status-mark-5"
            case 4: 
                return "card-task-status-mark card-task-status-mark-4"
            case 3:
                return "card-task-status-mark card-task-status-mark-3"
            case 2:
                return "card-task-status-mark card-task-status-mark-2"
            default: 
                return "card-task-status-mark"
        }
    }

    return(
        <div className="card-task">
            <span className="card-task-name">Geometry</span>
            <span className="card-task-ex">Ex 15, 16, 17 / Page 17 </span>
            <div className="card-task-other">
                <div className="card-task-other-teacher">
                    <div className="card-task-other-teacher-ava" />
                    <span>Asel Azakbaeva</span>
                </div>
            </div>
            <div className="card-task-status">
                {status === 'Have to do' ? 
                <div className="card-task-status-1"/>
                :
                status === 'missed' ?
                <div className="card-task-status-2"/>
                : 
                <>
                    <div className="card-task-status-3" />
                    <div className={deterMark()}>
                        {mark}
                    </div>
                </>}
            </div>
        </div>
    )
};