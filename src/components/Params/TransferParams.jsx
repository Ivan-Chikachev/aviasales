import React from 'react';

const Params = () => {

    return (
        <div className="params">
            <h5 className='params__title'>Количество пересадок</h5>
            <div className='params__check-block'>
                <label className='check'>
                    <input type="checkbox" className='check__input'/>
                    <span className='check__box'></span>
                    Все
                </label>
                <label className='check'>
                    <input type="checkbox" className='check__input'/>
                    <span className='check__box'></span>
                    Без пересадок
                </label>
                <label className='check'>
                    <input type="checkbox" className='check__input'/>
                    <span className='check__box'></span>
                    1 пересадка
                </label>
                <label className='check'>
                    <input type="checkbox" className='check__input'/>
                    <span className='check__box'></span>
                    2 пересадки
                </label>
                <label className='check'>
                    <input type="checkbox" className='check__input'/>
                    <span className='check__box'></span>
                    3 пересадки
                </label>
            </div>
        </div>
    );
};

export default Params;
