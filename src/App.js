import React from 'react';
import TopBar from './components/topbar/TopBar';
import Feed from './components/feed/Feed';
import './App.css';
import BottomBar from './components/bottomBar/BottomBar';

function App() {
  return (
    <div className="App">
      <div className='topBarContainer'>
        <TopBar/>
      </div>
      <div className='feedContainer'>
        <Feed/>
      </div>
      <div className='bottomBarContainer'>
        <BottomBar/>
      </div>
    </div>
  );
}

export default App;
