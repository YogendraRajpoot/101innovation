import "./App.css";
import { List } from "./Components/List/List";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="Container">
      <Routes>
        <Route path="/" element={<List />} />
      </Routes>
    </div>
  );
}

export default App;
