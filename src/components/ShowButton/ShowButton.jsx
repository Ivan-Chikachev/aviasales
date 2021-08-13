import React from 'react';
import classes from './ShowButton.module.scss';

const ShowButton = ({ onShowClick }) => (
        <div className={classes['btn-block']}>
            <button onClick={onShowClick} className={classes.btn}>
                Показать еще 5 билетов!
            </button>
        </div>
    );

export default ShowButton;
