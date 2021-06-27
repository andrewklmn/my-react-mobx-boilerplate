// example of useState inside of injected observer and context consumer

import React, { useState } from "react";
import { inject, observer } from 'mobx-react';
import {
  Link,
} from "react-router-dom";
import { AppDataConsumer } from '../context';

const Footer = ({timerStore}) => {
  const [data, setData ] = useState(0); 

  console.log('==== PANEL ====');
  
  return (
    <div>
      <h5>Footer</h5>
      <span>Seconds passed: {timerStore.secondsPassed}</span>
      <button onClick={() => timerStore.resetTimer()}>Reset timer</button>
      <br />
      <br />
      <Link to="/about">Router link to about</Link>
      <br />
      <br />
      <h1>{data}</h1>
      <button onClick={()=>setData(data + 1)}>+</button>
      <button onClick={()=>setData(data - 1)}>-</button>
      <AppDataConsumer>
        {(value) => { 
          console.log('=== APP DATA CONSUMER ===');
          return (<p>{value}: {timerStore.secondsPassed} sec</p>); 
        }}
      </AppDataConsumer>
    </div>
  );
};

// Example of functional component with inject anf observer
export default inject('timerStore')(observer(Footer))