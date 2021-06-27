import { makeAutoObservable } from "mobx";

function createTimerStore(startValue){
  const store = makeAutoObservable({
    secondsPassed: startValue,

    increaseTimer: () => {
      store.secondsPassed += 1
    },

    resetTimer: () => {
      store.secondsPassed = 0;
    },
    
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


const timerStore = createTimerStore(0);

setInterval(() => {
  timerStore.increaseTimer()
}, 1000)

export default timerStore;
