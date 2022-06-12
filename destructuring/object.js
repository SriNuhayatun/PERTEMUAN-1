//object distructruring

let mahasiswa={
    nama:"sri nuhayatun",
    umur:20,
};

//cara biasa
// console.log(mahasiswa.nama);
// console.log(mahasiswa.umur);

//cara destructuring
let{nama,umur}=mahasiswa;
console.log(nama);
console.log(umur);
