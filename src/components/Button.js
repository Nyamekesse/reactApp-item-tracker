import React from "react";

const Button = ({ text, bgColor, onclick }) => {
  return (
    <div>
      <button
        className="btn"
        onClick={onclick}
        style={{ backgroundColor: bgColor }}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
