// function fungsi1(callback1){
//     console.log("hai");
//     callback1();
    
// };

// //anonymous function=argumen tak bernama
// fungsi1(function(){
//     console.log("Assalamu'alaikum");
// });

function fungsi1(callback1,callback2){
    console.log("hai");
    callback1();
    callback2();
    
};

//anonymous function=argumen tak bernama
fungsi1(function(){
    console.log("Assalamu'alaikum");
},function(){
    console.log("hello world");
});