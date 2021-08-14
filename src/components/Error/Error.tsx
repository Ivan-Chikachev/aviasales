import React from 'react';
import classes from './Error.module.scss';

const Error: React.FC = () => (
    <div className={classes.error}>
        Упс... Произошла ошибка сервера, попробуйте позже
    </div>
);

export default Error;
