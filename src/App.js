import React from 'react';
import './App.css';

import { NavBar } from './components/NavBar/NavBar';
import { AsideContainer } from './components/AsideContainer/AsideContainer';
import { ResultsContainer } from './components/PostsHomePage/ResultsContainer';

function App() {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <main className="main">
        <ResultsContainer />
        <AsideContainer />
      </main>
    </div>
  );
}

export default App;
