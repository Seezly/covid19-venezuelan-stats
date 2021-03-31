import React from 'react';
import './stats.css';

const Stats = (props) => {

    const { class_name, attr, data, title } = props;

    return (
        <article
            className={attr ? `${class_name} --${attr}` : `${class_name}`}>
            <span className={attr ? `${class_name.split(' ')[0]}__data --${class_name.split(' ')[1]}` : `${class_name}__data`}>{data}</span>
            <h2 className={attr ? `${class_name.split(' ')[0]}__title --${class_name.split(' ')[1]}` : `${class_name}__title`}>{title}</h2>
        </article>
    )
};

export default Stats;