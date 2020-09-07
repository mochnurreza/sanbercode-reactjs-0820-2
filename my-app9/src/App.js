import React from 'react';
import './App.css';
import Tugas9 from './tugas-9/Tugas9';
import Tugas10 from './tugas-10/Tugas10';
import Timer from './tugas-11/Timer'
import Clock from './tugas-11/Clock'


function App() {
  return (
    <div className="App">
    <Tugas9 />
    <Tugas10 />
    <Timer startCount='100'/>
    <Clock date={new Date()}/>
    </div>
  );
}

export default App;
