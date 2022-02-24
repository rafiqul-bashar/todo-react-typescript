import React from "react";
import "./App.css";
import Tasks from "./Components/Tasks";

function App() {
  return (
    <div className="App">
      <main>
        <div className="App h-screen flex justify-center items-center bg-gray-100">
          <Tasks />
        </div>
      </main>
    </div>
  );
}

export default App;
