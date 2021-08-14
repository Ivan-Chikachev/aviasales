import React from 'react';
import { connect } from 'react-redux';
import classes from './TransferFilter.module.scss';
import * as actions from '../../redux/TransferFilter/transferFilterActions';
import {ParamsType} from "../../types/types";
import {AppStateType} from "../../redux/rootReducer";

type PropTypes = {
    params: Array<ParamsType>
    changeFilter: (id: number) => void
}

const TransferFilter: React.FC<PropTypes> = ({ params, changeFilter }) => (
        <div className={classes.params}>
            <h5 className={classes.params__title}>Количество пересадок</h5>
            <div className={classes['params__check-block']}>
                {params.map((i) => (
                    <label key={i.id} className={classes.check}>
                        <input
                            type="checkbox" className={classes.check__input}
                            checked={i.status}
                            onChange={() => changeFilter(i.id)}
                        />
                        <span className={classes.check__box} />
                        {i.label}
                    </label>
                  ))}
            </div>
        </div>
    );

const mapStateToProps = (state: AppStateType) => ({
    params: state.transferFilter,
});

export default connect(mapStateToProps, actions)(TransferFilter);
