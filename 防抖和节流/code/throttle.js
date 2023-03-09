/**
 * 手写节流
 */
function thtottle(callBack, delay) {
  let last, deferTimer;
  return function(args) {
    let that = this;
    let _args = args;
    let now = +new Date();
    if (last && now < last + delay) {
      clearInterval(deferTimer);
      deferTimer = setTimeout(function(){
        last = now;
        callBack.call(that, _args);
      }, delay);
    }else {
      last = now;
      callBack.call(that, _args);
    }
  }
}

function consoleValue(value) {
  console.log(value, +new Date());
}

let tht = thtottle(consoleValue, 1000);
let inputDom = document.getElementById("throttle");
inputDom.addEventListener('keyup', function(e) {
  tht(e.target.value);
})

function biubiu() {
  console.log("biubiubiubiu", +new Date());
}
setInterval(thtottle(biubiu, 1000), 10);