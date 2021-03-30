import React from 'react';
import './stats.css';

const Stats = (props) => {

    const { class_name, data, title } = props;

    return (
        <article
            className={class_name}>
            <span className={`${class_name}__data`}>{data}</span>
            <h2 className={`${class_name}__title`}>{title}</h2>
        </article>
    )
};

export default Stats;