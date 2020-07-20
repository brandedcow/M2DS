import React from 'react';

import Header from './components/Header'
import SearchBar from './components/SearchBar'
// import Grid from './components/Grid'
import Grid from './components/GridFunc'
import Settings from './components/Settings'

import gridStore from './stores/GridStore'

function App() {
  return (
    <div className="App">
      <Header />
      <div id="main"> 
        <div id="contentLeft">
          <SearchBar />
        </div>
        <div id="contentCenter">
          <Grid gridStore={gridStore}/>
        </div>
        <div id="contentRight">
          <Settings gridStore={gridStore}/>
        </div>
      </div>
    </div>
  );
}

export default App;
