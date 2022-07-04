import React from 'react';
import RetroButton from './RetroButton';
import '../styles/Button-Placement.css';

class PublicationButton extends React.Component {
    render() {
        return (
            <div className='container Publication'>
                <RetroButton label="Publication"/>
            </div>
        );
    }
}

export default PublicationButton;