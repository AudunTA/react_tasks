import React, { useState, useEffect } from "react";
import { ChromePicker } from "react-color";

function Colorpicker() {
  const [state, setState] = useState({
    color: "#22194D",
  });
  function handleChange(color) {
    setState({
      color: color.hex,
    });
  }
  function changeBackgroud() {
    document.body.style.background = state.color;
  }
  return (
    <div>
      <ChromePicker color={state.color} onChange={handleChange} />
      <button onClick={changeBackgroud}>change background to this color</button>
    </div>
  );
}

export default Colorpicker;
