function fungsi1(callback1,callback2){
    console.log("hai");
    callback1();
    callback2();
    
};
//anonymous arrow function
fungsi1(
    ()=>console.log("ini anonymous"),
    ()=>console.log("hello arrow")
);