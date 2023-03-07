import React from "react";

const Test = ({ setColor }) => {
  return (
    <div>
      <input
        type="text"
        name="color"
        onChange={(e) => {
          setColor(e.target.value);
        }}
        
      />
    </div>
  );
};

export default Test;
