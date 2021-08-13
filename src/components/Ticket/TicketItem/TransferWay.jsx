import React from 'react';
import classes from '../Ticket.module.scss';

const TransferWay = ({ forward, back }) => {
    const getCountTransfer = (i) => {
        if (i === 0) return 'Без пересадок';
        if (i === 1) return '1 Пересадка';
        if (i >= 2) return `${i} Пересадки`;
    };

    return (
        <div className={classes.ticket__item}>
            <div className={classes.ticket__name}>
                {getCountTransfer(forward.length)}
            </div>
            <div className={classes.ticket__text}>
                {forward.join(', ')}
            </div>
            <div className={classes.ticket__name}>
                {getCountTransfer(back.length)}
            </div>
            <div className={classes.ticket__text}>
                {back.join(', ')}
            </div>
        </div>
    );
};

export default TransferWay;
