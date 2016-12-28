var monitor = require("os-monitor");
 
 
// basic usage 
// monitor.start();
 
// more advanced usage with configs. 
monitor.start({ delay: 3000 // interval in ms between monitor cycles 
              , freemem: 1000000000 // freemem under which event 'freemem' is triggered 
              , uptime: 1000000 // number of secs over which event 'uptime' is triggered 
              , critical1: 0.7 // loadavg1 over which event 'loadavg1' is triggered 
              , critical5: 0.7 // loadavg5 over which event 'loadavg5' is triggered 
              , critical15: 0.7 // loadavg15 over which event 'loadavg15' is triggered 
              , silent: false // set true to mute event 'monitor' 
              , stream: false // set true to enable the monitor as a Readable Stream 
              , immediate: false // set true to execute a monitor cycle at start() 
              });
 
 
// define handler that will always fire every cycle 
monitor.on('monitor', function(event) {
  console.log(event.type, ' This event always happens on each monitor cycle!');
  console.log(event);
  console.log("cpu type");
  console.log(monitor.os.cpus());
});
 
// define handler for a too high 1-minute load average 
// monitor.on('loadavg1', function(event) {
//   console.log(event.type, ' Load average is exceptionally high!');
// });
 
// define handler for a too low free memory 
// monitor.on('freemem', function(event) {
//   console.log(event.type, 'Free memory is very low!');
// });
 
// define a throttled handler, using Underscore.js's throttle function (http://underscorejs.org/#throttle) 
// monitor.throttle('loadavg5', function(event) {
 
//   // whatever is done here will not happen 
//   // more than once every 5 minutes(300000 ms) 
 
// }, monitor.minutes(5));
 
 
// change config while monitor is running 
// monitor.config({
//   freemem: 0.3 // alarm when 30% or less free memory available 
// });
 
 
// check whether monitor is running or not 
// const intervalId = setInterval(() => {
//     const isRunning = monitor.isRunning(); // -> true / false 
//     console.log("is Runnging: " + isRunning);
// }, 1000);

// stop monitor 
setTimeout(() => {
    // clearInterval(intervalId);
    monitor.stop();
}, 10 * 1000);

 
// use as readable stream 
// monitor.start({stream: true}).pipe(process.stdout);
 