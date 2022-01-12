import React from "react";
import { FaTrash, FaEdit } from "react-icons/fa";

const DisplayArea = ({ results }) => {
  return (
    <table className="showArea">
      <thead>
        <tr>
          <th>Item ID</th>
          <th>Item</th>
          <th>Quantity</th>
          <th>Date</th>
          <th>Action</th>
        </tr>
      </thead>
      {results.map((singleItem) => {
        return (
          <tbody key={singleItem.id}>
            <tr>
              <td>{singleItem.id}</td>
              <td>{singleItem.item}</td>
              <td>{singleItem.quantity}</td>
              <td>{singleItem.dateTime}</td>
              <td>
                <div className="actionBtn">
                  <FaEdit className="edit" />
                  <FaTrash className="delete" />
                </div>
              </td>
            </tr>
          </tbody>
        );
      })}
    </table>
  );
};

export default DisplayArea;
