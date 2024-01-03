const add = (a, b) => a + b;
add(1, 2);

const add2 = (a) => (b) =>  a + b;
add2(1)(2);

const add3= (a) => (b) => (c) => a + b + c;
add3(1)(2)(3);

/**
 * 写一个方法可以同时实现：
 * add(1, 2, 3)
 * add(1, 2)(3)
 * add(1)(2, 3)
 */

const curry = (fn, ...args) => {
  // 函数的参数个数可以直接通过函数的.length属性访问
  args.length >= fn.length // 这个判断很关键
  // 传入的参数大于等于原函数fn的参数个数，则直接执行该函数
  ? fn(...args) 
  /**
   * 传入的参数小于原始函数fn的参数个数，则继续对当前函数进行柯里化，返回一个接受所有参数(当前参数和剩余参数)的函数
   */
  : (..._args) => curry(fn,...args,..._args);
}

function add1(x, y, z) {
  return x + y + z;

}
const add4 = curry(add1)
console.log(`output->add4`,add4(1,2,3));
console.log(`output->add4`,add4(1)(2)(3));
console.log(`output->add4`,add4(1,2)(3));
console.log(`output->add4`,add4(1)(2,3));
