import React from 'react';
import classes from './TicketOption.module.scss';

const TicketOption = () => (
    <div className={classes.options}>
        <div className={classes["options__item"] + ' ' + classes.active}>
            Самый дешевый
        </div>
        <div className={classes["options__item"]}>
            Самый быстрый
        </div>
        <div className={classes["options__item"]}>
            Оптимальный
        </div>
    </div>
);

export default TicketOption;
