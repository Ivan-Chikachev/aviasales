import React from 'react';
import './TicketOption.scss';

const TicketOption = () => (
        <div className="options">
            <div className="options__item active">
                Самый дешевый
            </div>
            <div className="options__item">
                Самый быстрый
            </div>
            <div className="options__item">
                Оптимальный
            </div>
        </div>
    );

export default TicketOption;
