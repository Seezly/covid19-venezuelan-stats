import React from 'react';
import './switch.css';

const Switch = (props) => {
    return (
        <div
            className="dark-mode switch">
                <input 
                    type="checkbox" 
                    name="check" 
                    id="check"/>
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