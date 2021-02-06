import React from 'react';
import './studentGrades.scss';
import arrow from '../../assets/icons/arrow.png';
import { useTranslation } from 'react-i18next';

export const StudentGrades = () => {

    const { t } = useTranslation();

    const grades = [
        {
            name: "Math",
            grades: [3, 4, 5, 2, 5, 5, 2, 4, 3, 4, 4, 5, 5, 2, 3, 4, 5],
            total: 3
        },
        {
            name: "Biology",
            grades: [3, 4, 5, 2, 5, 5, 2, 4, 3, 4, 4, 5, 5, 2, 3, 4, 5],
            total: 4
        }
    ]

    return(
        <div className="student-grades">
            <div className="student-grades-container">
                <div className="student-grades-drop">
                    {t('grades.all')}
                    <img alt="" src={arrow} />
                </div>
                <div className="student-grades-table-container">
                    <table className="student-grades-table">
                        <tbody>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            {grades.map((g, i) => (
                                <tr key={i}>
                                    <td>{g.name}</td>
                                    {g.grades.map((grade, i) => (
                                        <td key={i} className={`student-grades-table-${grade}`}>{grade}</td>
                                    ))}
                                    <td className={`student-grades-table-${g.total}`}>{g.total}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
};