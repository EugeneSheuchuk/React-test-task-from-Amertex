import React from 'react';
import style from './App.module.css';
import Network from './components/Network/Network';

function App() {
  return (
    <div className={style.appContainer}>
      <Network/>
    </div>
  );
}

export default App;
