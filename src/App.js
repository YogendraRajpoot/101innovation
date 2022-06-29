import "./App.css";
import { List } from "./Components/List/List";
import { Navbars } from "./Components/Navbars/Navbars";

function App() {
  return (
    <div className="Container">
      <Navbars />
      <List/>
    </div>
  );
}

export default App;
