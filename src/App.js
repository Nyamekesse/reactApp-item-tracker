import Header from "./components/Header";
import Button from "./components/Button";
import AddTaskForm from "./AddTaskForm";
import DisplayArea from "./components/DisplayArea";
import { useState, useEffect } from "react";

function App() {
  const url = "  http://localhost:8000/data";
  const [data, setData] = useState([]);

  const getData = async () => {
    const res = await fetch(url);
    const newRes = await res.json();
    return newRes;
  };
  useEffect(() => {
    const loadData = async () => {
      const items = await getData();
      setData(items);
    };
    loadData();
  }, []);

  return (
    <div className="container">
      <div className="wrapper">
        <Header />
        <div className="addSection">
          <h2>Create List</h2>
          <Button />
        </div>
        <div className="forms">
          <AddTaskForm />
        </div>
        <div className="dataCenter">
          {data.length > 0 ? (
            <DisplayArea results={data} />
          ) : (
            console.log("none")
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
