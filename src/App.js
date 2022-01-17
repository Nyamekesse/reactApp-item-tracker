import Header from "./components/Header";
import Button from "./components/Button";
import AddTaskForm from "./AddTaskForm";
import DisplayArea from "./components/DisplayArea";
import { useState, useEffect } from "react";

function App() {
  const url = "  http://localhost:8000/data";
  const [data, setData] = useState([]);
  //fetching data
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
  //adding new item
  const addNewItem = async (itemDetails) => {
    const insert_ = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name: itemDetails.itemName,
        number: itemDetails.quantity,
        date: itemDetails.dateTime,
      }),
    });
    if (insert_.statusText === "Created") {
      const newData = await insert_.json();
      setData([...data, newData]);
      alert("item added");
    }
  };
  //deleter
  const deleteItem = async (id) => {
    const return_ = await fetch(`${url}/${id}`, {
      method: "DELETE",
    });
    return_.ok && setData(data.filter((item) => item.id !== id));
  };
  //toggle Add
  const [toggle, setToggle] = useState(false);
  const showToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div className="container">
      <div className="wrapper">
        <Header />
        <div className="addSection">
          <h2>Create List</h2>
          <Button
            onclick={showToggle}
            text={toggle === true ? "Discard" : "Add"}
            bgColor={toggle === true ? "red" : "#6aff6a"}
          />
        </div>
        <div className="forms">
          {toggle && <AddTaskForm submitAdd={addNewItem} />}
        </div>
        <div className="dataCenter">
          {data.length > 0 ? (
            <DisplayArea results={data} remover={deleteItem} />
          ) : (
            console.log("none")
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
