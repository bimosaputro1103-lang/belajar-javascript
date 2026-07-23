console.log("ejucneuc");

let dataString = "data string";
console.log(dataString);

//1.escaping string (\' \" \\ \n \r \t \b \f)
let data1 = 'ucup berkata "apa kabar dunia"';
console.log(data1);
let data2 = "otong berkata \"tetep asyyk\"";
console.log(data2);
let data3 ="ucup berjalan-jalan ditpj pantai, \nkerenn";
console.log(data3);

//2. literal string (template literal string)
let namaDepan = "otonng";
let namaBelakang = "surotong";
let umur = 7;
let namaLengkap = umur + " " +namaDepan + " " + namaBelakang; //menjadi masalah
console.log(namaLengkap);

//lebih elegann supaya ini tidak bikin error
let biodata = `${namaDepan} ${namaBelakang} dengan umur ${umur}`;
console.log(biodata);