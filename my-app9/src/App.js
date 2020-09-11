import React from 'react';
import './App.css';
import Tugas9 from './tugas-9/Tugas9';
import Tugas10 from './tugas-10/Tugas10';
import Timer from './tugas-11/Timer'
import List from './tugas-12/List'
import DaftarBuah from './tugas-13/DaftarBuah'
import Fruits from './tugas-14/Fruits'
import Home from './pages/Home';
import Tema, {tema} from './Theme/Tema';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

export default function App() {
  return (
    <Tema.Provider value={tema.dark}>
    <Router>
      <div className='App'>
        <nav>
            <ul>
              <li>
                <Link to="/" className="link">Home</Link>
              </li>
              <li>
                <Link to="/tugas-9" className="link">Tugas9</Link>
              </li>
              <li>
                <Link to="/tugas-10" className="link">Tugas10</Link>
              </li>
              <li>
                <Link to="/tugas-11" className="link">Tugas11</Link>
              </li>
              <li>
                <Link to="/tugas-12" className="link">Tugas12</Link>
              </li>
              <li>
                <Link to="/tugas-13" className="link">Tugas13</Link>
              </li>
              <li>
                <Link to="/tugas-14" className="link">Tugas14</Link>
              </li>
              <li>
              <button></button> 
              </li>
            </ul>

        </nav>
        <Switch>
              <Route path="/tugas-9">
                <Tugas9 />
              </Route>
              <Route path="/tugas-10">
                <Tugas10 />
              </Route>
              <Route path="/tugas-11">
                <Timer start={100} />
              </Route>
              <Route path="/tugas-12">
                <List />
              </Route>
              <Route path="/tugas-13">
                <DaftarBuah />
              </Route>
              <Route path="/tugas-14">
                <Fruits />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
      </div>
    </Router>
   </Tema.Provider>
  );
}


