//syntax spread

let array1=[1,2,3];
//let array2=[...array1,7,8,20];
let array2=[7,8,20,...array1,...array1];
console.log(array2);