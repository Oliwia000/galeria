import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import React from 'react';
import Galleria from './Galleria'; 

function App()
{
    return (
   < div className = "App" >
   < h1 > Moja Galeria React</ h1 >
  < h2 > Galeria zdjęć/obrazów </ h2 >
  < Galleria />
   </ div >
  );
}

export default App;





