const addNum = (array, num) => array.map((value) => value + num)
console.log(addNum([1, 2, 3], 2)) // [ 3, 4, 5 ]
console.log(addNum([-2, -1, 0, 99], 2)) // [ 0, 1, 2, 101 ]
console.log(addNum([-2, -1, -3, -4], 2)) // [ 0, 1, -1, -2 ]
