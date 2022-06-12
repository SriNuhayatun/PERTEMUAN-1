// console.log("nuha");
// console.log("yatun");

// function fungsi1(){
//     console.log("nuha");
//     console.log("yatun");
// }
// fungsi1();

//call baskfunction= fungsi lain dijadikan argumen ke fungsi lain 
//kemudian dipanggil dari dalam fungsi itu
//function merupakan type data

function fungsi1(callback1,callback2){
    console.log("hai");
    callback2();
    callback1();
    
};
//cara1
// let fungsi2=function(){
//     console.log("hello world");
// }
//cara2
function fungsi2(){
    console.log("hello world");
};
function fungsi3(){
    console.log("Assalamu'alaikum");
}
fungsi1(fungsi2,fungsi3);



