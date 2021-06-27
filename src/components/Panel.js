import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import StoreContext from "../context";

const Panel = observer(() => {

  const { timerStore } = useContext(StoreContext);

  return (
    <div>
      <span>Seconds passed: {timerStore.secondsPassed}</span>
      <button onClick={() => timerStore.resetAfter5Seconds()}>Reset</button>
    </div>
  );
})

export default Panel;
