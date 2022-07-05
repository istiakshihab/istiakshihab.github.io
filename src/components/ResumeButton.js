import React from 'react';
import RetroButton from './RetroButton';
import '../styles/Button-Placement.css';

class ResumeButton extends React.Component {
    render() {

        const { toggleContent } = this.props;
        const { setInnerHtml } = this.props;
        const { activePage } = this.props;
        const { activeButton } = this.props;
        const { setActivePage } = this.props;

        return (
            <div className='container Resume'>
                <RetroButton
                    label="Resume"
                    handleClick={
                        () => {
                            if (activeButton.RESUME === activePage) {
                                toggleContent(false)
                                setActivePage(activeButton.NONE)
                            }
                            else {
                                toggleContent(true)
                                setActivePage(activeButton.RESUME)
                                setInnerHtml("PublicationText")
                            }
                        }
                    } />
            </div>
        );
    }
}

export default ResumeButton;