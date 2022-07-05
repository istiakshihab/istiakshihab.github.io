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
        const { activePage } = this.props;
        const { activeButton } = this.props;
        const { setActivePage } = this.props;

        return (
            <div className='container Timeline'>
                <RetroButton
                    label="Timeline"
                    handleClick={
                        () => {
                            if (activeButton.TIMELINE === activePage) {
                                toggleContent(false)
                                setActivePage(activeButton.NONE)
                            }
                            else {
                                toggleContent(true)
                                setActivePage(activeButton.TIMELINE)
                                setInnerHtml(TimelineText)
                            }
                        }
                    } />
            </div>
        );
    }
}

export default TimelineButton;