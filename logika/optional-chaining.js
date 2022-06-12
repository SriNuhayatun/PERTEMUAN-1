//optional chaining(?)==>menghindari error ketika null/undefined

const mahasiswa = {
    nama: 'sri nuhayatun',
    angkatan: {
    nama: 'Neophyte'
    }
   };
   //console.log(mahasiswa.programStudi.nama);
   // output: error
   // karena programStudi bernilai undefined
   // program mencoba mendapatkan nama dari undefined
   console.log(mahasiswa.programStudi?.nama);
   // output: undefined