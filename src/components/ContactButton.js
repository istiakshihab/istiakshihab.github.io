import React from 'react';
import RetroButton from './RetroButton';
import '../styles/Button-Placement.css';

import contact from '../content/contact.txt';

let ContactText = "Loading";

class ContactButton extends React.Component {
    render() {
        fetch(contact)
            .then(r => r.text())
            .then(text => {
                ContactText = text
            })

        const { toggleContent } = this.props;
        const { setInnerHtml } = this.props;
        const { activePage } = this.props;
        const { activeButton } = this.props;
        const { setActivePage } = this.props;


        return (
            <div className='container Contact'>
                <RetroButton
                    label="Contact"
                    handleClick={
                        () => {
                            if (activeButton.CONTACT === activePage) {
                                toggleContent(false)
                                setActivePage(activeButton.NONE)
                            }
                            else {
                                toggleContent(true)
                                setActivePage(activeButton.CONTACT)
                                setInnerHtml(ContactText)
                            }
                        }
                    } />
            </div>
        );
    }
}

export default ContactButton;