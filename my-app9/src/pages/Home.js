import React, { useContext } from 'react';
import Tema from '../Theme/Tema'

const Home = () => {
    const tema = useContext(Tema)
    return (
        <div className="home" style={tema}>
          <h1>Home Page</h1>
        </div>
      )
}

export default Home;
