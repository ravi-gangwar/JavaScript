function calllBack(){
    setTimeout(()=>console.log("this is set time out"), 3000) // this is callBack function 
}
calllBack(); // first call this but not print or nor javaScript wait for the complete execution of the setTimeout function beacaus it asynchronus function mean this is not javaScript function
console.log("Start"); // step 1 print 
for(let i =0; i<10000000; i++){  // then  execute this  step 2
 
}
console.log("End") // step 3