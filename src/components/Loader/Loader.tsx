import React from 'react';
import classes from './Loader.module.scss';

const Loader: React.FC = () => (
    <div className={classes['loader-wrap']}>
        Загружаем все билеты
        <div className={classes['lds-ellipsis']}>
            <div />
            <div />
            <div />
        </div>
    </div>
);

export default Loader;
