// fungsi

//function nama fungsi (argument){
  //  body program 

   // return value;
//}

//deklarasi fungi
function sayHello(){
    let data = "apa kabar";
    console.log(data);
}
 function sayKeren(){
    let data = "hai keren";
    console.log(data);
}

function say(dataInput){
    console.log(dataInput);
}

//main prtogran
say("halo apa kabar");
say("hai keren!");
say("ucup diman ya?");

function tambah(angka1,angka2){
    let hasil = angka1 + angka2;
    let message = `${angka1} + ${angka2} = ${hasil}`;
    console.log(message);
}

tambah(10,6);