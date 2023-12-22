const _ =require('lodash')
const array =[1,2,3,4,5,6,7,8,9,10,11,12,13]

 console.log(_.chunk(array,3));
 //[ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ], [ 10, 11, 12 ], [ 13 ] ]

console.log(_.compact(array, 5))
// [
//     1, 2, 3,  4,  5,  6,
//     7, 8, 9, 10, 11, 12,
//    13
//  ]

console.log(_.concat(array, [1,2,3]));
// [
//     1, 2, 3,  4,  5,  6,
//     7, 8, 9, 10, 11, 12,
//    13, 1, 2,  3
//  ]

console.log(_.difference(array, [1,2,3])); 
// [
//     4,  5,  6,  7,  8,
//     9, 10, 11, 12, 13
//   ]

console.log(_.differenceBy([1.2,3.3], [13.5,6.6], Math.floor)); // ans [ 1.2, 3.3 ]

console.log(_.drop(array, 1)) 
// [
//     2,  3, 4,  5,  6,
//     7,  8, 9, 10, 11,
//    12, 13
//  ]
console.log(_.dropRight(array, 1)) 

// [
//     1,  2, 3, 4,  5,
//     6,  7, 8, 9, 10,
//    11, 12
//  ]

let users = [
    { 'user': 'barney',  'active': false },
    { 'user': 'fred',    'active': false },
    { 'user': 'pebbles', 'active': true }
  ];

  console.log(_.dropWhile(users, ['active', false]));
//   ans [ { user: 'pebbles', active: true } ]

  console.log(_.findIndex(users, ['active', false])); // ans 0

  let array1 = [1, 2, 3];
  console.log(_.fill(array1, 'a')); // ans [ 'a', 'a', 'a' ]

  console.log(_.fill(Array(4), 2)); // ans [ 2, 2, 2, 2 ]

  console.log(_.indexOf([1, 2, 1, 2], 2)); // ans 1
  console.log(_.join(['a', 'b', 'c'], '&')); // ans a&b&c

let array2 = ['a', 'b', 'c', 'a', 'b', 'c'];
console.log(_.pull(array2, 'a', 'c')); // ans [ 'b', 'b' ]

let persons = [
    { 'user': 'barney', 'age': 36, 'active': true },
    { 'user': 'fred',   'age': 40, 'active': false }
  ];

  console.log(_.filter(persons, { 'age': 36, 'active': true }));
  // ans [ { user: 'barney', age: 36, active: true } ]

  console.log(_.add(1, 4)); // ans 5

  console.log(_.max([4, 2, 8, 6])); // ans 8

  console.log(_.round(4.006)); // ans 4

console.log(_.camelCase('Foo Bar')); // ans fooBar

console.log(_.parseInt('08')); // ans 8 

console.log(_.lastIndexOf([1, 2, 1, 2], 2)); // ans 3

let data = ['a', 'b', 'c', 'd'];
let pulled = _.pullAt(data, [1, 3]);

console.log(data) // ans ['a', 'c']
console.log(pulled) //ans ['b', 'd']

console.log(_.uniq([2, 1, 2])); // ans  [2, 1]
console.log(_.without([2, 1, 2, 3], 1, 2)); // ans [3]
console.log(_.shuffle([1, 2, 3, 4]));  // ans [4, 1, 3, 2]