import React from 'react';
import RetroButton from './RetroButton';
import '../styles/Button-Placement.css';

class ResumeButton extends React.Component {
    render() {
        return (
            <div className='container Resume'>
                <RetroButton label="Resume"/>
            </div>
        );
    }
}

export default ResumeButton;