import React from 'react';
import RetroButton from './RetroButton';
import '../styles/Button-Placement.css';

class AboutButton extends React.Component {
    render() {
        return (
            <div className='container About'>
                <RetroButton label="About"/>
            </div>
        );
    }
}

export default AboutButton;