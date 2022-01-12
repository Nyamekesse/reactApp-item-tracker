import React from "react";

const AddTaskForm = () => {
  return (
    <form className="formSection">
      <div className="formArea">
        <label htmlFor="itemName">Item :</label>
        <input type="text" placeholder="item name here" />
      </div>
      <div className="formArea">
        <label htmlFor="itemName">Quantity :</label>
        <input type="number" min={1} />
      </div>
    </form>
  );
};

export default AddTaskForm;
