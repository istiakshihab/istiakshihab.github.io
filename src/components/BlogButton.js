import React from 'react';
import RetroButton from './RetroButton';
import '../styles/Button-Placement.css';

import blog from '../content/blog.txt';

let BlogText = "Loading";

class BlogButton extends React.Component {
    render() {
        fetch(blog)
            .then(r => r.text())
            .then(text => {
                BlogText = text
            })

        const { toggleContent } = this.props;
        const { setInnerHtml } = this.props;
        const { activePage } = this.props;
        const { activeButton } = this.props;
        const { setActivePage } = this.props;

        return (
            <div className='container Blog'>
                <RetroButton
                    label="Blog"
                    handleClick={
                        () => {
                            if (activeButton.BLOG === activePage) {
                                toggleContent(false)
                                setActivePage(activeButton.NONE)
                            }
                            else {
                                toggleContent(true)
                                setActivePage(activeButton.BLOG)
                                setInnerHtml(BlogText)
                            }
                        }
                    } />
            </div>
        );
    }
}

export default BlogButton;