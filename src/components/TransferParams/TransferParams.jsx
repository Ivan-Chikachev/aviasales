import React, { useEffect } from 'react';
import classes from './TransferParams.module.scss';
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
        <div className={classes.params}>
            <h5 className={classes["params__title"]}>Количество пересадок</h5>
            <div className={classes["params__check-block"]}>
                <label className={classes.check}>
                    <input
                        type="checkbox" className={classes["check__input"]}
                        checked={paramsAll}
                        onChange={paramsAllHandler}
                        value={paramsAll}
                    />
                    <span className={classes["check__box"]} />
                    Все
                </label>
                <label className={classes.check}>
                    <input
                        type="checkbox" className={classes["check__input"]}
                        onChange={changeParamsNull}
                        checked={paramsTransferNull}
                        value={paramsTransferNull}
                    />
                    <span className={classes["check__box"]} />
                    Без пересадок
                </label>
                <label className={classes.check}>
                    <input
                        type="checkbox" className={classes["check__input"]}
                        onChange={changeParamsOne}
                        checked={paramsTransferOne}
                        value={paramsTransferOne}
                    />
                    <span className={classes["check__box"]} />
                    1 пересадка
                </label>
                <label className={classes.check}>
                    <input
                        type="checkbox" className={classes["check__input"]}
                        onChange={changeParamsTwo}
                        checked={paramsTransferTwo}
                        value={paramsTransferTwo}
                    />
                    <span className={classes["check__box"]} />
                    2 пересадки
                </label>
                <label className={classes.check}>
                    <input
                        type="checkbox" className={classes["check__input"]}
                        onChange={changeParamsThree}
                        checked={paramsTransferThree}
                        value={paramsTransferThree}
                    />
                    <span className={classes["check__box"]} />
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
