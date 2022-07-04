import React, { useEffect, useState } from 'react';
import RetroButton from './RetroButton';
import '../styles/Button-Placement.css';

import timeline from '../content/timeline.txt';

let TimelineText = "Loading";

class TimelineButton extends React.Component {
    
    render() {
        fetch(timeline)
            .then(r => r.text())
            .then(text => {
                TimelineText = text
            })

        const { toggleContent } = this.props;
        const { setInnerHtml } = this.props;
        const { check } = this.props;
        
        return (
            <div className='container Timeline'>
                <RetroButton
                    label="Timeline"
                    handleClick={
                        () => {
                            toggleContent(!check)
                            setInnerHtml(TimelineText)
                        }
                    } />
            </div>
        );
    }
}

export default TimelineButton;