import React from 'react';
import RetroButton from './RetroButton';
import '../styles/Button-Placement.css';

import about from '../content/about.txt';

let AboutText = "Loading";

class AboutButton extends React.Component {
    render() {
        fetch(about)
        .then(r => r.text())
        .then(text => {
            AboutText = text
        })

        const { toggleContent } = this.props;
        const { setInnerHtml } = this.props;
        const { activePage } = this.props;
        const { activeButton } = this.props;
        const { setActivePage } = this.props;

        return (
            <div className='container About'>
                <RetroButton
                    label="About"
                    handleClick={
                        () => {
                            if (activeButton.ABOUT === activePage) {
                                toggleContent(false)
                                setActivePage(activeButton.NONE)
                            }
                            else {
                                toggleContent(true)
                                setActivePage(activeButton.ABOUT)
                                setInnerHtml(AboutText)
                            }
                        }
                    } />
            </div>
        );
    }
}

export default AboutButton;