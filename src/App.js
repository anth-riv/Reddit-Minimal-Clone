import React from 'react';
import './App.css';

import { NavBar } from './components/NavBar/NavBar';
import { AsideContainer } from './components/AsideContainer/AsideContainer';
import { ResultsContainer } from './components/PostsHomePage/ResultsContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <AsideContainer />
      <ResultsContainer />
    </div>
  );
}

export default App;
