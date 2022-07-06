import React from 'react';
import '../styles/Neon.css';

class BottomText extends React.Component {
    render() {
        return (
            <div className='container Neon-Sign'>
                <p className='Neon-Text'><span className='flicker-slow'>Istiak </span><span className='flicker-slow'>Shihab</span></p>
            </div>
        );
    }
}

export default BottomText;