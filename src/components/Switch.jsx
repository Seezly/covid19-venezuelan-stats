import React from 'react';
import './switch.css';

const Switch = (props) => {

    const { onChange, darkMode } = props;

    return (
        <div
            className="dark-mode switch">
                <input 
                    type="checkbox" 
                    name="check" 
                    id="check"
                    onChange={onChange}
                    checked={darkMode ? true : false}/>
                <label 
                    htmlFor="check"
                    className="check-trail">
                    <span 
                        className="check-handler"/>
                </label>
        </div>
    )
};

export default Switch;