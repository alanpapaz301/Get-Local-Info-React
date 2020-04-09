import React ,{useState}from 'react';
import './App.css';
import { DataProvider } from "./DataContext";
import Card from './Card.js';

function App() {

  const data = useState("");


  return (
    <DataProvider>
    <div className="App">
    <Card/>
    </div>
    </DataProvider>
  );
}

export default App;
