import React from 'react';
import './App.css';

import { NavBar } from './app/components/NavBar/NavBar';
import { AsideContainer } from './app/components/AsideContainer/AsideContainer';
import { ResultsContainer } from './app/components/PostsHomePage/ResultsContainer'

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
