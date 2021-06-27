import React from "react";
import { observer } from "mobx-react-lite";

const Panel = observer((props) => {

  return (
    <div>
      <span>Seconds passed: {props.timerStore.secondsPassed}</span>
      <button onClick={() => props.timerStore.resetAfter5Seconds()}>Reset</button>
    </div>
  );
})

export default Panel;
