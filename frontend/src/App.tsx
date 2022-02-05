import "./App.css";
import { Table } from "./components/Table/Table";
import { Sidebar } from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Table />
    </div>
  );
}

export default App;
