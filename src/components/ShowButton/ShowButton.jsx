import React from 'react';
import classes from './ShowButton.module.scss';

const ShowButton = () => (
        <div className={classes['btn-block']}>
            <button className={classes.btn}>
                Показать еще 5 билетов!
            </button>
        </div>
    );

export default ShowButton;
