import React from 'react';
import classes from './Error.module.scss';

const Error = () => (
    <div className={classes.error}>
        Упс... Произошла ошибка сервера, попробуйте позже
    </div>
);

export default Error;
