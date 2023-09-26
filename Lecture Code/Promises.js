// let x = new Promise(function exe(resolve, reject){

// setTimeout(()=>{console.log("Time Out")}, 3000)


// })
// console.log("Start")
// x.then(()=>console.log("Promise Done"));
// console.log("End")
console.log("------------------------------------")
// function createPromise(){
//     return new Promise(function exe(resolve, reject){

//     setTimeout(()=>{
//         console.log("Time Out")
//         resolve("done"); 
//     }, 3000)
    
    
    
//     })}
//     console.log("Start")
//     let y = createPromise();

//     y.then(function f(){console.log("Promise Done")});
//     console.log("End")



    function createPromise(){
        return new Promise(function exe(resolve, reject){
    
        setTimeout(()=>{
            console.log("Time Out")
            reject("ERROR 404"); 
        }, 3000)
        
        
        
        })}
        console.log("Start")
        let y = createPromise();
    
        y.then(function f(){console.log("Promise Done")})
        .catch(function f(value){
            console.log("Catch the error", value);
        });
        console.log("End")