import React from 'react';
import '../styles/ContentWindow.css';

class ContentWindow extends React.Component {


    render() {
        const { check } = this.props;
        const { innerHtml } = this.props;
        const { toggleContent } = this.props;
        const { setActivePage } = this.props;
        const { activeButton } = this.props;

        if (check)
            return (
                <div className='Background'>
                    <div className='Content'
                    >   <div className='topcorner' onClick={() => {
                        toggleContent(false)
                        setActivePage(activeButton.NONE)
                    }}>
                            <i class="fa-solid fa-xmark"></i>
                        </div>
                        <div className='ContentPlacer'
                            dangerouslySetInnerHTML={{ __html: innerHtml }} />
                    </div>
                </div>
            );
        else
            return (
                <div></div>
            );
    }
}

export default ContentWindow;