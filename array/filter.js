// filter() mengembalikan array baru yang berisi semua elemen yang memenuhi
//kondisi. Jika tidak ada nilai yang memenuhi kondisi maka akan mengembalikan array kosong.


const words = ['agus', 'aren', 'ari sandi', 'awaludin', 'arie akbar'];
const result = words.filter((word) => word.length > 6);

console.log(result);
// output: ["ari sandi", "awaludin", "arie akbar"]

const names = ['agus', 'aren', 'ari sandi', 'awaludin', 'arie akbar'];
const hasil = names.filter((name) => name.includes("r"));

console.log(hasil);
//output [ 'aren', 'ari sandi', 'arie akbar' ]