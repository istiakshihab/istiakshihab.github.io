import React, { useEffect } from 'react';
import '../styles/RetroButton.scss';
import Select from "../images/select.mp3"

const Button = ({ label, handleClick }) => {
    let audio = new Audio(Select)

    const start = () => {
        audio.volume = .3
        audio.play()
    }

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "/RetroButton.js"
        script.async = true;

        document.body.appendChild(script);
    });
    return (
        <div className='wrapper'>
            <div role='button' className='retro-btn info'>
                <a className='btn' onClick={()=>{
                    start();
                    handleClick();
                    }}>
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