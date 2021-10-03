import { useState } from "react";
import BestCouple from "./components/BestCouple";
import HandleFileData from "./components/HandleFileData";
import "./styles/styles.css";
function App() {
  const [employeesList, setEmployeesList] = useState([]);
  return (
    <div className="app__container">
      <HandleFileData setEmployeesList={setEmployeesList} />
      <BestCouple employeesList={employeesList} />
    </div>
  );
}

export default App;
