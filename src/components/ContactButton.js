import React from 'react';
import RetroButton from './RetroButton';
import '../styles/Button-Placement.css';

class ContactButton extends React.Component {
    render() {
        return (
            <div className='container Contact'>
                <RetroButton label="Contact"/>
            </div>
        );
    }
}

export default ContactButton;