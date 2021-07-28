import React, { useEffect } from 'react';
import './TransferParams.scss';
import { connect } from 'react-redux';
import * as actions from '../../redux/TransferParams/transferParamsActions';

const TransferParams = ({
                            changeParamsAll, changeParamsNull, changeParamsOne,
                            changeParamsTwo, changeParamsThree,
                            paramsAll, paramsTransferNull, paramsTransferOne,
                            paramsTransferTwo, paramsTransferThree, chooseAllParams,
                        }) => {
    const paramsAllHandler = (e) => {
        changeParamsAll(e.target.checked);
    };
    useEffect(() => {
        chooseAllParams();
    });
    return (
        <div className="params">
            <h5 className="params__title">Количество пересадок</h5>
            <div className="params__check-block">
                <label className="check">
                    <input
                        type="checkbox" className="check__input"
                        checked={paramsAll}
                        onChange={paramsAllHandler}
                        value={paramsAll}
                    />
                    <span className="check__box" />
                    Все
                </label>
                <label className="check">
                    <input
                        type="checkbox" className="check__input"
                        onChange={changeParamsNull}
                        checked={paramsTransferNull}
                        value={paramsTransferNull}
                    />
                    <span className="check__box" />
                    Без пересадок
                </label>
                <label className="check">
                    <input
                        type="checkbox" className="check__input"
                        onChange={changeParamsOne}
                        checked={paramsTransferOne}
                        value={paramsTransferOne}
                    />
                    <span className="check__box" />
                    1 пересадка
                </label>
                <label className="check">
                    <input
                        type="checkbox" className="check__input"
                        onChange={changeParamsTwo}
                        checked={paramsTransferTwo}
                        value={paramsTransferTwo}
                    />
                    <span className="check__box" />
                    2 пересадки
                </label>
                <label className="check">
                    <input
                        type="checkbox" className="check__input"
                        onChange={changeParamsThree}
                        checked={paramsTransferThree}
                        value={paramsTransferThree}
                    />
                    <span className="check__box" />
                    3 пересадки
                </label>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    paramsAll: state.transferParams.paramsAll,
    paramsTransferNull: state.transferParams.paramsTransferNull,
    paramsTransferOne: state.transferParams.paramsTransferOne,
    paramsTransferTwo: state.transferParams.paramsTransferTwo,
    paramsTransferThree: state.transferParams.paramsTransferThree,
});

export default connect(mapStateToProps, actions)(TransferParams);
