import React ,{useState}from 'react';
import './App.css';
import { DataProvider } from "./DataContext";
import Card from './Card.js';
import Form from './Form';
function App() {

  const data = useState("");


  return (
    <DataProvider>
    <div className="App">
    <Form/>
    <Card/>
    </div>
    </DataProvider>
  );
}

export default App;
