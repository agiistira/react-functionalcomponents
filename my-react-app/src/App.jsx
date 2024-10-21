import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import List from "./components/List";

function App() {
  const [names, setNames] = useState(["Alice", "Bob", "Charlie"]);
  const [newName, setNewName] = useState("");

  const handleInputChange = (event) => {
    setNewName(event.target.value);
  };

  const handleAddName = () => {
    setNames([...names, newName]);
    setNewName("");
  };

  return (
    <div className="App">
      <h1>Daftar nama</h1>
      <input type="text" value={newName} onChange={handleInputChange} />
      <button onClick={handleAddName}>Tambah Nama</button>
      <List items={names} />
    </div>
  );
}

export default App;
