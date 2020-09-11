import React from 'react';

export const tema = {
    dark: {
        color: 'white',
        backgroundColor: 'black'
      },
      light: {
        color: 'black',
        backgroundColor: 'white'
      }
    }
    
    const Tema = React.createContext(tema.dark);

    export default Tema;