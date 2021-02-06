import React from 'react';
import './suspense.scss';

export const SuspenseComponent = () => {
    return(
        <div className="suspense">
            <span>Studdis</span>
            <div className="suspense-load" />
        </div>
    )
};