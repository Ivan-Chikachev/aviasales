import React from 'react';
import { connect } from 'react-redux';
import classes from './TicketSort.module.scss';
import * as actions from '../../redux/Sort/sortActions';

const TicketSort = ({ changeSortId, sortTabs, activeSortTab }) => (
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

const mapStateToProps = (state) => ({
    sortTabs: state.sort.sortTabs,
    activeSortTab: state.sort.activeSortTab,
});

export default connect(mapStateToProps, actions)(TicketSort);
