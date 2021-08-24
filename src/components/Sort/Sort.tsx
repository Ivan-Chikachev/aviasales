import React from 'react';
import {connect} from 'react-redux';
import classes from './Sort.module.scss';
import {sortActions} from '../../redux/Sort/sortActions';
import {SortType} from "../../types/types";
import {AppStateType} from "../../redux/rootReducer";

type PropTypes = {
    changeSortId: (sortType: string) => void
    sortTabs: Array<SortType>
    activeSortTab: string
}

const Sort: React.FC<PropTypes> = ({changeSortId, sortTabs, activeSortTab}) => (
    <div className={classes.options}>
        {sortTabs.map((i) => {
            const isActive = activeSortTab === i.id ? classes.active : '';
            return (
                <div
                    key={i.id}
                    onClick={() => changeSortId(i.id)}
                    className={`${classes.options__item} ${isActive}`}
                >
                    {i.label}
                </div>
            );
        })}
    </div>
);

const mapStateToProps = (state: AppStateType) => ({
    sortTabs: state.sort.sortTabs,
    activeSortTab: state.sort.activeSortTab,
});

export default connect(mapStateToProps, sortActions)(Sort);
