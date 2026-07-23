//numbers - 64-bit 

let nilai = 10;// integer - nilai bilangan bulat
let nilai_float = 10.123;//float - nilai bilangan desimal
let nilai_big_int = 12344424234324324234563455n;//bignit


//menggunakan data ini gimana

let angka = 5.123;

let angka_int = parseInt(angka);
console.log(angka_int);

let angka_2 = 10;
let angka_2_float = parseInt(angka_2);
console.log(angka_2_float);

//merubah string -regex
let data = "10.98";
console.log(data);
console.log(parseInt(data));
console.log(parseFloat(data));

//contoh
let pembelian = "1000";
let pajak = 1200;
let bayar = parseInt (pembelian) + pajak;
console.log(bayar);