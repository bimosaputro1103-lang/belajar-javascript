console.log("wadidi8uye");

// operasi string

//1. char at
let dataString = "abcde";
let dataChar = dataString.charAt(0);
console.log(`character pada index 0 = ${dataChar}`);
dataChar = dataString.charAt(1);
console.log(`character pada index 1 = ${dataChar}`);
dataChar = dataString.charAt(2);
console.log(`character pada index 2 = ${dataChar}`);
dataChar = dataString.charAt(3);
console.log(`character pada index 3 = ${dataChar}`);
dataChar = dataString.charAt(4);
console.log(`character pada index 4 = ${dataChar}`);
dataChar = dataString.charAt(5);
console.log(`character pada index 5 = ${dataChar}`);//tidak ada character

//2. menyambung string
let namaDepan = "ucup";
let namaBelakang = "surucup";

let namaLengkap = namaDepan.concat(' ',namaBelakang,' si keren ');
console.log(namaLengkap)

//3. mengambil index (kemunculan perttama)
console.log(namaLengkap.indexOf('k'));
console.log(namaLengkap.indexOf('u'));
console.log(namaLengkap.indexOf('c'));
console.log(namaLengkap.indexOf('p'));

//4. substring
let namaLengkap_5_14 = namaLengkap.substring(5,14);
console.log(namaLengkap.substring(5,14));

//5.slice
console.log(namaLengkap.slice(5,14));
console.log(namaLengkap.slice(14,5));//menjadi kosong

//6.replace
namaLengkap =namaLengkap.replace('ucup surucup','otong surotong');
console.log(namaLengkap);

//7.toLower
console.log(namaLengkap.toLowerCase());

//8.uppercase
console.log(namaLengkap.toUpperCase());

//9. extract data number
let dataString2 = '10';
console.log(typeof dataString2);
let dataInteger = parseInt(dataString2);
console.log(dataInteger);
console.log(typeof dataInteger);

let dataString3 = '10.234'
console.log(typeof dataString3);
let dataFloat = parseFloat(dataString3);
console.log(dataFloat);
console.log(typeof dataFloat);

