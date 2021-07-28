import React from 'react';
import classes from './Loader.module.scss'

const Loader = () => {
    return (
        <div className={classes['loader-container']}>
            <div className={classes["lds-roller"]}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default Loader;
