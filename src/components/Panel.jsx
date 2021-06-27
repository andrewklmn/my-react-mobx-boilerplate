import React from "react";
import { inject, observer } from 'mobx-react'

const Panel = inject('timerStore')(observer(({timerStore}) => {
  console.log('==== PANEL ====');

  return (
    <div>
      <h3>Panel</h3>
      <span>Seconds passed: {timerStore.secondsPassed}</span>
      <br />
      <button onClick={() => timerStore.resetAfter5Seconds()}>Reset after 5 seconds</button>
    </div>
  );
}));

// Example of functional component with inject anf observer
export default Panel;

