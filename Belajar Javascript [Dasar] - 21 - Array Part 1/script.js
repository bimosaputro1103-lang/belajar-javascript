// cara lama
let siswa1 = "ucup";
let siswa2 = "otong";
let siswa3 = "mario";

//cara array
let array_siswa = ["ucup","otong","mario",];
console.log(array_siswa);

//jelaskan tentang operasi/operator/method/fungsi

//1.indexing
console.log(array_siswa[0]);
console.log(array_siswa[2]);
console.log(array_siswa[3]); // undifine

//2. property length
let panjang_array = array_siswa.length;
console.log(`panjang array = ${panjang_array}`);

//3. tambah dan hapus member

array_siswa.push("Asep");
console.log(`tambah asep dibelakang --> ${array_siswa}`);

let ambil_siswa = array_siswa.pop();
console.log(`hapus ${ambil_siswa} di belakang --> ${array_siswa}`);

array_siswa.unshift("Asep");
console.log(`tambah asep didepan --> ${array_siswa}`);

ambil_siswa = array_siswa.shift();
console.log(`hapus ${ambil_siswa} di depan --> $`);