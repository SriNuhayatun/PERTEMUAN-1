let numbers = [1, 4, 9, 16];
let newNumbers = numbers.map(function(n) {
    //return n*3;
    return ("Angka"+n);
});
console.log(numbers);
//output:[1,4,9,16]

console.log(newNumbers);
// output [ 'Angka1', 'Angka4', 'Angka9', 'Angka16' ]
