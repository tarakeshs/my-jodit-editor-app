import React from "react";
import "./App.css";
import EditorComponent from "./components/EditorComponent";

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Jodit Editor with React and TypeScript</h1>
      <EditorComponent />
    </div>
  );
};

export default App;
