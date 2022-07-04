import React from 'react';
import '../styles/ContentWindow.css';

class ContentWindow extends React.Component {


    render() {
        const { check } = this.props;
        const { innerHtml } = this.props;

        if (check)
            return (
                <div 
                    className='Content' 
                    dangerouslySetInnerHTML={{__html: innerHtml}}/>
            );
        else
            return (
                <div></div>
            );
    }
}

export default ContentWindow;