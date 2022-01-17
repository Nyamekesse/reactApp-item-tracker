import React from "react";
import { useState } from "react";

const AddTaskForm = ({ submitAdd }) => {
  const [itemName, setItemName] = useState("");
  const [quantity, setQuantity] = useState("");

  const newItem = (e) => {
    e.preventDefault();
    if (!itemName || !quantity) {
      alert("Kindly fill all fields");
    } else {
      const dateTime = new Date().toDateString();
      submitAdd({ itemName, quantity, dateTime });
      setItemName("");
      setQuantity("");
    }
  };

  return (
    <form className="formSection">
      <div className="formArea">
        <label htmlFor="itemName">Item :</label>
        <input
          id="itemName"
          type="text"
          placeholder="item name here"
          value={itemName}
          onChange={(e) => setItemName(e.currentTarget.value)}
        />
      </div>
      <div className="formArea">
        <label htmlFor="quantity">Quantity :</label>
        <input
          id="quantity"
          type="number"
          min={1}
          value={quantity}
          placeholder="0"
          onChange={(e) => setQuantity(e.target.value)}
        />
      </div>
      <input type="submit" value="Save" onClick={newItem} />
    </form>
  );
};

export default AddTaskForm;
