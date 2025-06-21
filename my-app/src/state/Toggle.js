import React, { useState } from "react";

const Toggle = () => {
  // const array = useState(false);
  // console.log(array);

  let [on, setOn] = useState(true);
  console.log(on);

  const handleToggle = () => {
    setOn(!on);
  };

  return (
    <div>
      <button className="toggle" type="toggle" onClick={handleToggle}>
        Toggle {on ? "Off" : "On"}
      </button>
    </div>
  );
};

export default Toggle;
