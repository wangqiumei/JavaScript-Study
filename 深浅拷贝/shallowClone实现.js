/**
 * 浅拷贝实现方法
 */

const { clone } = require("lodash");

/* Object.assign()方法 */
let obj1 = {
  person: {
    name: 'kobe',
    age: 41
  },
  sports: 'basketball'
};
let obj2 = Object.assign({}, obj1);
obj2.person.name = 'messi';
obj2.sports = 'football';
console.log("obj1", obj1);  // obj1 { person: { name: 'messi', age: 41 }, sports: 'basketball' }

/* lodash中的clone()方法 */
let obj3 = {
  a: 1,
  b: {
    c: {
      d: 1
    }
  },
  e: [1, 2, 3]
};
let obj4 = clone(obj3);
console.log(obj4.b.c === obj3.b.c);  // true

/* 扩展运算符... */
let obj5 = {
  name: 'DLIRABA',
  adress: {
    x: 6,
    y: 3
  }
};
let obj6 = {...obj5};
obj6.name = 'ALICE';
obj6.adress.x = 1992;
console.log('obj5', obj5);  // obj5 { name: 'DLIRABA', adress: { x: 1992, y: 3 } }

/* Array.prototype.concat() */
let arr1 = [1, 2, {
  name: 'WQM'
}];
let arr2 = arr1.concat();
arr2[2].name = 'D';
console.log("arr1", arr1);  // arr1 [ 1, 2, { name: 'D' } ]

/* Array.prototype.slice() */
let arr3 = [1, 3, {
  name: 'DD'
}];
let arr4 = arr3.slice();
arr4[2].name = 'BB';
console.log('arr3', arr3);  // arr3 [ 1, 3, { name: 'BB' } ]

/* 手写浅拷贝方法 */
function shallowClone(obj) {
  var target = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      target[key] = obj[key];
    }
  };
  return target;
}
let obj10 = {
  name: 'DB',
  sg: {
    wm: 'ml'
  }
};
let obj11 = shallowClone(obj10);
obj11.sg.wm = 'sq';
obj11.name = 'RB';
console.log("obj10", obj10);  // obj10 { name: 'DB', sg: { wm: 'sq' } }
console.log("obj11", obj11);  // obj11 { name: 'RB', sg: { wm: 'sq' } }
