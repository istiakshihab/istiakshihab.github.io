import React from 'react';
import Logo from '../images/center-2.gif';
import '../styles/App.css';

class CenterBox extends React.Component {
    render() {
        return (
            <img src={Logo} className="App-logo" style={{
                position: "absolute",
              }} alt="logo" />
        );
    }
}

export default CenterBox;