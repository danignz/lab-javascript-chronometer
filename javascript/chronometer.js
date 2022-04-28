class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {

      this.intervalId = setInterval(() => {
                                                this.currentTime += 1;
                                                console.log(this.currentTime)
                                                if(callback){
                                                    callback();
                                                }
                                          }, 1000)
 
  }

  getMinutes() {

   // code for testing
   /*  this.minuteInterval = setInterval(() => {
      const minutes = Math.floor(this.currentTime / 60);  
      console.log(`${minutes} minutes have passed`);
    }, 3000) */

    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {

   // code for testing
   /* this.secondInterval = setInterval(() => {
      const minuteseconds = Math.floor(this.currentTime % 60);
      console.log(`${minuteseconds} seconds have passed`);
    }, 3000) */

    return Math.floor(this.currentTime % 60);
  }

  computeTwoDigitNumber(value) {

    value = value.toString();
    if (value.length>1) {
      return value;
    }else {
      return value.padStart(2,"0");
    }
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {

   // code for testing
   /* this.splitInterval = setInterval(() => {
      const splittest =  this.computeTwoDigitNumber(this.getMinutes()) + ':' + this.computeTwoDigitNumber(this.getSeconds());
      console.log(splittest);
    }, 5000) */

    return this.computeTwoDigitNumber(this.getMinutes()) + ':' + this.computeTwoDigitNumber(this.getSeconds());
  }
}

const chronometer1 = new Chronometer();

chronometer1.start();
//console.log(chronometer1.getMinutes());
//console.log(chronometer1.getSeconds());
//console.log(chronometer1.computeTwoDigitNumber(36));
//console.log(chronometer1.computeTwoDigitNumber(5));
//chronometer1.stop();
//chronometer1.reset();
//console.log(chronometer1.split());

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
