import React from 'react';
import { createRoot } from 'react-dom/client'

export default function App(){
    return(
        <h1>Reactjs With Laravel Vite</h1>
    );
}

if(document.getElementById('root')){
    createRoot(document.getElementById('root')).render(<App />)
}
