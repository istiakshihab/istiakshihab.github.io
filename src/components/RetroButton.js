import React, { useEffect } from 'react';
import '../styles/RetroButton.scss';

const Button = ({ label, handleClick }) => {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "/RetroButton.js"
        script.async = true;

        document.body.appendChild(script);
    });
    return (
        <div className='wrapper'>
            <div role='button' className='retro-btn info'>
                <a className='btn' onClick={handleClick}>
                    <span className='btn-inner'>
                        <span className='content-wrapper'>
                            <span className='btn-content'>
                                <span className='btn-content-inner' label={label}>
                                </span>
                            </span>
                        </span>
                    </span>
                </a>
            </div>
        </div>
    )
};

export default Button;