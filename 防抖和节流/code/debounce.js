let input = document.getElementById("unDebounce");
input.addEventListener('keyup', function(e) {
  console.log(e.target.value, +new Date());
})

/**
 * 手写防抖
 */
function debounce(callBack, delay) {
  return function (args) {
    let that = this;
    let _args = args;
    clearTimeout(callBack.id);  // 再次触发时，前一次定时未执行就被清除,所以重新计时
    callBack.id = setTimeout(function() {
      callBack.call(that, _args)
    }, delay)
  }
}

let debounceinput = document.getElementById("debounce");
function consoleValue(content) {
  console.log(content, ":", +new Date());
}
let $debounce = debounce(consoleValue, 1000);
debounceinput.addEventListener('keyup', function(e) {
  $debounce(e.target.value);
})

function biubiu() {
  console.log("biubiubiubiubiu", +new Date());
}
// console.log(+new Date());
// setInterval(debounce(biubiu, 1000), 2000);
/**
 * 第一次3s后执行，之后每隔2s执行
 */