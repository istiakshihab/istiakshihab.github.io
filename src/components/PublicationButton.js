import React from 'react';
import RetroButton from './RetroButton';
import '../styles/Button-Placement.css';

import publication from '../content/publication.txt';

let PublicationText = "Loading";

class PublicationButton extends React.Component {
    render() {
        fetch(publication)
        .then(r => r.text())
        .then(text => {
            PublicationText = text
        })

        const { toggleContent } = this.props;
        const { setInnerHtml } = this.props;
        const { activePage } = this.props;
        const { activeButton } = this.props;
        const { setActivePage } = this.props;

        return (
            <div className='container Publication'>
                <RetroButton
                    label="Publication"
                    handleClick={
                        () => {
                            if (activeButton.PUBLICATION === activePage) {
                                toggleContent(false)
                                setActivePage(activeButton.NONE)
                            }
                            else {
                                toggleContent(true)
                                setActivePage(activeButton.PUBLICATION)
                                setInnerHtml(PublicationText)
                            }
                        }
                    } />
            </div>
        );
    }
}

export default PublicationButton;