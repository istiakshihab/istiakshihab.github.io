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
  const activeButton = {
    NONE: 0,
    TIMELINE: 1,
    BLOG: 2,
    CONTACT: 3,
    ABOUT: 4,
    RESUME: 5,
    PUBLICATION: 6
  }

  const [activePage, setActivePage] = useState(activeButton.NONE);

  Object.freeze(activeButton);

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
              toggleContent={setCheck}
              setInnerHtml={setInnerHtml}
              activePage={activePage}
              setActivePage={setActivePage}
              activeButton={activeButton}
            />
            <BlogButton
              activeButton={activeButton}
              activePage={activePage}
              setActivePage={setActivePage}
              toggleContent={setCheck}
              setInnerHtml={setInnerHtml}
            />
            <ContactButton
              activeButton={activeButton}
              activePage={activePage}
              setActivePage={setActivePage}
              toggleContent={setCheck}
              setInnerHtml={setInnerHtml}
            />
          </div>
          <div>
            <AboutButton
              activeButton={activeButton}
              activePage={activePage}
              setActivePage={setActivePage}
              toggleContent={setCheck}
              setInnerHtml={setInnerHtml}
            />
            <ResumeButton
              activeButton={activeButton}
              activePage={activePage}
              setActivePage={setActivePage}
              toggleContent={setCheck}
              setInnerHtml={setInnerHtml}
            />
            <PublicationButton
              activeButton={activeButton}
              activePage={activePage}
              setActivePage={setActivePage}
              toggleContent={setCheck}
              setInnerHtml={setInnerHtml}
            />
          </div>
        </div>

      </header>
    </div>
  );
}

export default App;
