const { clone, cloneDeep } = require('lodash');  // 引入lodash工具中的浅拷贝方法
var a1 = {
  b: {
    c: {}
  }
};

var a2 = clone(a1);  
console.log(a2.b.c === a1.b.c);  // true  新旧对象共享一个内存

var a3 = cloneDeep(a1);
console.log(a3.b.c === a1.b.c);  // false  新旧对象不共享内存

/**
 * 赋值与深浅拷贝得到的对象修改后对原始对象的影响
 */
let obj1 = {
  name: 'zs',
  arr: [1, [2, 3], 4]
};
// // 对象赋值
// let obj2 = obj1;
// obj2.name = 'ls';
// obj2.arr[1] = [5, 6];
// obj2['age'] = 18;
// console.log('obj1', obj1);  // obj1 { name: 'ls', arr: [ 1, [ 5, 6 ], 4 ], age: 18 }
// console.log('obj2', obj2);  // obj2 { name: 'ls', arr: [ 1, [ 5, 6 ], 4 ], age: 18 } 

// 浅拷贝
// let obj3 = clone(obj1);
// obj3.name = 'ww';
// obj3.arr[1] = [7, 8];
// obj3['age'] = 20;

// console.log('obj1', obj1);  // obj1 { name: 'zs', arr: [ 1, [ 7, 8 ], 4 ] }
// console.log('obj3', obj3);  // obj3 { name: 'ww', arr: [ 1, [ 7, 8 ], 4 ], age: 20 }

// 深拷贝
let obj4 = cloneDeep(obj1);
obj4.name = 'dd';
obj4.arr[1] = [9, 10];
obj4['age'] = 25;

console.log('obj1', obj1);  // obj1 { name: 'zs', arr: [ 1, [ 7, 8 ], 4 ] }
console.log('obj4', obj4);  // obj4 { name: 'dd', arr: [ 1, [ 9, 10 ], 4 ], age: 25 }
