import React from "react";
import { FaTrash, FaEdit } from "react-icons/fa";

const DisplayArea = ({ results, remover }) => {
  return (
    <>
      <div className="sectionHead">
        <h2>Saved Items</h2>
      </div>
      <table className="showArea">
        <thead>
          <tr>
            <th>Item ID</th>
            <th>Item</th>
            <th>Quantity</th>
            <th>Date Added</th>
            <th>Action</th>
          </tr>
        </thead>
        {results.map((singleItem) => {
          return (
            <tbody key={singleItem.id}>
              <tr>
                <td>{singleItem.id}</td>
                <td>{singleItem.name}</td>
                <td>{singleItem.number}</td>
                <td>{singleItem.date}</td>
                <td>
                  <div className="actionBtn">
                    <FaEdit className="edit" />
                    <FaTrash
                      className="delete"
                      onClick={() => remover(singleItem.id)}
                    />
                  </div>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </>
  );
};

export default DisplayArea;
