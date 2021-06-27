import React from "react";
import { inject, observer } from 'mobx-react'

const Footer = ({timerStore}) => {

  console.log('==== PANEL ====');

  return (
    <div>
      <h5>Footer</h5>
      <span>Seconds passed: {timerStore.secondsPassed}</span>
      <button onClick={() => timerStore.resetTimer()}>Reset timer</button>
    </div>
  );
};

// Example of functional component with inject anf observer
export default inject('timerStore')(observer(Footer))