// example of useState inside of injected observer and context consumer

import React, { useState, useContext } from "react";
import { inject, observer } from 'mobx-react';
import {
  Link,
} from "react-router-dom";
import { AppDataContext, AppDataConsumer } from '../context';

const Footer = ({timerStore}) => {
  // useState usage example
  const [data, setData ] = useState(0); 

  // useContext usage example
  const valueFromUseContext = useContext(AppDataContext);

  console.log('==== PANEL ====');
  
  return (
    <div>
      <hr />
      <h3>Context usage</h3>
      <AppDataConsumer>
        {(value) => { 
          console.log('=== APP DATA CONSUMER ===');
          return (<p>{value}: {timerStore.secondsPassed} sec</p>); 
        }}
      </AppDataConsumer>
      This message from useContext: {valueFromUseContext}
      <hr />
      <h3>Footer</h3>
      <span>Seconds passed from MobX store: {timerStore.secondsPassed}</span>
      <br />
      Callback from MobX: <button onClick={() => timerStore.resetTimer()}>Reset timer right now</button>
      <hr />
      This is React Router Link:
      <Link to="/about">Router link to about</Link>
      <hr />
      <h1>Example of local state (useState): {data}</h1>
      <button onClick={()=>setData(data + 1)}>Add 1</button>
      <button onClick={()=>setData(data - 1)}>Subtract 1</button>
    </div>
  );
};

// Example of functional component with inject anf observer
export default inject('timerStore')(observer(Footer))