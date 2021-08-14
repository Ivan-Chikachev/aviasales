import React from 'react';
import classes from '../Ticket.module.scss';

type PropTypes = {
    stopsTo: Array<string> | []
    stopsBack: Array<string> | []
}

const TransferWay: React.FC<PropTypes> = ({ stopsTo, stopsBack }) => {
    const getCountTransfer = (i: number) => {
        if (i === 0) return 'Без пересадок';
        if (i === 1) return '1 Пересадка';
        if (i >= 2) return `${i} Пересадки`;
    };

    return (
        <div className={classes.ticket__item}>
            <div className={classes.ticket__name}>
                {getCountTransfer(stopsTo.length)}
            </div>
            <div className={classes.ticket__text}>
                {stopsTo.join(', ')}
            </div>
            <div className={classes.ticket__name}>
                {getCountTransfer(stopsBack.length)}
            </div>
            <div className={classes.ticket__text}>
                {stopsBack.join(', ')}
            </div>
        </div>
    );
};

export default TransferWay;
