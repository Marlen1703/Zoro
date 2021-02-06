import React, { useState } from 'react';
import './studentTasks.scss';
import { useTranslation } from 'react-i18next';
import arrow from '../../assets/icons/arrow.png';
import { CardTask } from '../CardTask/cardTask';

export const StudentTasks = () => {

    const { t } = useTranslation();
    const [selected, setSelected] = useState(1);

    const haveToDo = [
        {
            status: 'Have to do'
        },
        {
            status: 'Have to do'
        }
    ];
    const missed = [
        {
            status: 'missed'
        },
        {
            status: 'missed'
        }
    ];
    const complited = [
        {
            status: 'complited',
            mark: 5
        },
        {
            status: 'complited',
            mark: 4
        },
        {
            status: 'complited',
            mark: 3
        },
        {
            status: 'complited',
            mark: 2
        },
    ]

    return(
        <div className="student-tasks">
            <div className="student-tasks-container">
                <ul className="student-tasks-menu">
                    <li className={selected === 1 ? 'student-tasks-menu-selected' : ''} onClick={() => setSelected(1)}>{t('student.todo')}</li>
                    <li className={selected === 2 ? 'student-tasks-menu-selected' : ''} onClick={() => setSelected(2)}>{t('student.missed')}</li>
                    <li className={selected === 3 ? 'student-tasks-menu-selected' : ''} onClick={() => setSelected(3)}>{t('student.done')}</li>
                </ul>
                <div className="student-tasks-sort">
                    <div className="student-tasks-sort-drop">
                        {t('student.allClasses')}
                        <img alt="" src={arrow} />
                    </div>
                </div>
                <div className="student-tasks-tasks">
                    {
                        selected === 1 ?
                        haveToDo.map((task, i) => (
                            <CardTask key={i} status={task.status}/>
                        ))
                        :
                        selected === 2 ?
                        missed.map((task, i) => (
                            <CardTask key={i} status={task.status}/>
                        ))
                        :
                        complited.map((task, i) => (
                            <CardTask key={i} status={task.status} mark={task.mark}/>
                        ))
                    }
                </div>
            </div>
        </div>
    )
};