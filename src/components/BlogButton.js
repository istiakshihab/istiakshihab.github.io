import React from 'react';
import RetroButton from './RetroButton';
import '../styles/Button-Placement.css';

class BlogButton extends React.Component {
    render() {
        return (
            <div className='container Blog'>
                <RetroButton label="Blog"/>
            </div>
        );
    }
}

export default BlogButton;