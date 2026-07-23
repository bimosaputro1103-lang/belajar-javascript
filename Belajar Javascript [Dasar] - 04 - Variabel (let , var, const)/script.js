// jadi ini adalah komen, jadi bebas aja

//1.vaeiabel dengan let
let nama = "jastin";

//tampil data
console.log(nama);

//kita ubah nilai variabel nama
nama = "jastin tin";
console.log(nama);

//2.variable dengan var
var namaDepan = "ucup";
console.log(namaDepan);
namaDepan = "jastin";
console.log(namaDepan);

//kelakuan dari var
let namaBelakang = "surucup";
{
    let namaBelakang = "surotong";
    console.log(namaBelakang);
}
console.log(namaBelakang);

//kelakukan dari var
var namaTengah = "keren";
{
    var namaTengah = "ganteng";
    console.log(namaTengah);
}
console.log(namaTengah);

//kasus khusus tanpa keyword akan jadi var
contohBaru ="bala-bala";
{
    gorengan = "combro";
}
console.log(gorengan);

//3. const
const TTL = "10 Maret 2022";
console.log(TTL);
//TTL = "11 Maret 2054"; ga  boleh dilakukan karena sudh janji konstan