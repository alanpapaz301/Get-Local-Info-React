import React, { useState } from "react";
import "./App.css";
import { DataProvider } from "./DataContext";
import DataDisplay from "./DataDisplay.js";
import Form from "./components/Form";

function App() {
  const data = useState("");

  return (
    <DataProvider>
      <div className="App">
        <Form />
        <DataDisplay />
      </div>
    </DataProvider>
  );
}

export default App;
