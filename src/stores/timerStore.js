// Example of store

import { makeAutoObservable, autorun, reaction } from "mobx";

const defaultState = 0;

function createTimerStore(defaultState){
  const store = makeAutoObservable({
    secondsPassed: defaultState,

    increaseTimer: () => {
      store.secondsPassed += 1
    },

    resetTimer: () => {
      store.secondsPassed = 0;
    },
    
    // examle of async method
    resetAfter5Seconds: async () => {
      console.log('=== PROMISE STARTED ===')
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          store.resetTimer();
          console.log('=== PROMISE RESOLVED ===')
          resolve('5 sec');
        }, 5000);
      });
    },
  });
  return store;
}


const timerStore = createTimerStore(defaultState);


// autorun on every 
autorun(() => {
  console.log('=== AUTORUN ====');
  console.log(`Seconds passed ${timerStore.secondsPassed}`);
});

// reaction to change of something in store
reaction(
  () => timerStore.secondsPassed,
  time => {
    if (time < 10) {
        console.log("Less than 10!")
    } else {
        console.log("10 or more!")
    }
  });

setInterval(() => {
  timerStore.increaseTimer()
}, 1000)

export default timerStore;
