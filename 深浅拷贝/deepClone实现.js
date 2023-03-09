/**
 * 深拷贝实现方法
 */
var $ = require('jquery');

const { cloneDeep } = require("lodash");
/* JSON.parse(JSON.stringfy()) */
let arr = [1, 2, {
  username: 'zs'
}];
let arr1 = JSON.parse(JSON.stringify(arr));
arr1[2].username = 'ls';
console.log('arr', arr);  // arr [ 1, 2, { username: 'zs' } ]
console.log('arr1', arr1);  // arr1 [ 1, 2, { username: 'ls' } ]

/* 无法处理函数和正则 */
let arr2 = [1, 2, {
  username: 'DD'
}, function(){}];
let arr3 = JSON.parse(JSON.stringify(arr2));
arr3[2].username = 'BB';
console.log('arr2', arr2);  // arr2 [ 1, 2, { username: 'DD' }, [Function (anonymous)] ]
console.log('arr3', arr3);  // arr3 [ 1, 2, { username: 'BB' }, null ]

/* 使用lodash函数库中的cloneDeep()方法 */
let obj1 = {
  a: 1,
  b: {
    c: {
      d: 1
    }
  },
  e: [1, 2, 3]
};
let obj2 = cloneDeep(obj1);
console.log(obj1.b.c === obj2.b.c);  // false

/*/ 使用JQuery.extend()方法 (此处$.extend()方法报错，原因未知) */
// let obj3 = {
//   a:2, 
//   b: {
//     c: {
//       r: 3
//     }
//   },
//   d: [1, 3, 5]
// };
// let obj4 = $.extend(true, {}, obj3);
// console.log(obj4.b.c === obj3.b.c);  // false

/* 手写深拷贝 */
// WeakMap(): 弱映射
// 弱映射中的键只能是Object或者继承自Object的类型
function deepClone($obj, hash = new WeakMap()){
  if ($obj === null) return $obj; // 如果是null或者undefined就不进行拷贝操作
  if ($obj instanceof Date) return new Date($obj);
  if ($obj instanceof RegExp) return new RegExp($obj);
  // 可能是对象或者普通的值，如果是函数的话不进行拷贝
  if (typeof $obj !== 'object') return $obj;
  // 如果是对象的话进行深拷贝
  if(hash.get($obj)) return hash.get($obj);
  // 相当于new Object
  let cloneObj = new $obj.constructor();  // 找到的是所属类原型上的constructor，而原型上的constructor指向的是当前类本身
  hash.set($obj, cloneObj);
  for (const key in $obj) {
    if ($obj.hasOwnProperty(key)) {
      // 实现一个递归拷贝
      cloneObj[key] = deepClone($obj[key], hash);
    }
  }
  return cloneObj;
}
let obj12 = {
  name: 'zs',
  addre: {
    x: 1, 
    y: 2
  }
}
obj12.o = obj12;  // 对象存在循环引用
let d = deepClone(obj12);
obj12.addre.x = 3;
console.log('obj12', obj12);
/**
 * obj12 {
 *  name: 'zs',
 *  addre: {
 *    x: 3,
 *    y: 2
 *  },
 *  o: {
 *    name: 'zs',
 *    addre: {
 *      x: 3,
 *      y: 2
 *    },
 *    o: {
 *      name: 'zs',
 *      addre: {
 *        x: 3,
 *        y: 2
 *      },
 *      o: ....
 *    }
 *  }
 * }
 */
console.log('d', d);
/**
 * obj12 {
 *  name: 'zs',
 *  addre: {
 *    x: 1,
 *    y: 2
 *  },
 *  o: {
 *    name: 'zs',
 *    addre: {
 *      x: 1,
 *      y: 2
 *    },
 *    o: {
 *      name: 'zs',
 *      addre: {
 *        x: 1,
 *        y: 2
 *      },
 *      o: ....
 *    }
 *  }
 * }
 */
