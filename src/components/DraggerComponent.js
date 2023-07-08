import React from "react";
import Draggable from "react-draggable";
function DraggerComponent() {
  return (
    <div>
      <Draggable>
        <div>I can now be moved around!</div>
      </Draggable>
    </div>
  );
}

export default DraggerComponent;
