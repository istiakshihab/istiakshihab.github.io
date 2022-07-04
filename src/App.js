import Background from './images/background.jpeg';
import CenterBox from './components/CenterBox.js';
import './styles/App.css';
import BottomText from './components/BottomText';
import TimelineButton from './components/TimelineButton';
import AboutButton from './components/AboutButton';
import BlogButton from './components/BlogButton';
import ContactButton from './components/ContactButton';
import ResumeButton from './components/ResumeButton';
import PublicationButton from './components/PublicationButton';
import ContentWindow from './components/ContentWindow';
import React, { useEffect, useState } from 'react';
function App() {
  const [check, setCheck] = useState(false);
  const [innerHtml, setInnerHtml] = useState("<b>Loading</b>")

  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${Background})`,
      }}
    >
      <header className="App-header">
        <CenterBox />
        <ContentWindow check={check} innerHtml={innerHtml} />
        <BottomText />
        <div className="Grid-div">
          <div>
            <TimelineButton
              toggleContent = { setCheck }
              check = { check }
              setInnerHtml = { setInnerHtml }
            />
            <BlogButton />
            <ContactButton />
          </div>
          <div>
            <AboutButton />
            <ResumeButton />
            <PublicationButton />
          </div>
        </div>

      </header>
    </div>
  );
}

export default App;
