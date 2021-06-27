import React from "react";
import { inject, observer } from 'mobx-react'

const Panel = inject('timerStore')(observer(({timerStore}) => {
  console.log('==== PANEL ====');

  return (
    <div>
      <span>Seconds passed: {timerStore.secondsPassed}</span>
      <button onClick={() => timerStore.resetAfter5Seconds()}>Reset</button>
    </div>
  );
}));

// Example of functional component with inject anf observer
export default Panel;

