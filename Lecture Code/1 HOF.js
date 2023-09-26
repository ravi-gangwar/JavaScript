const powerTwo = (n) => {                       // function
    return n ** 2
}
function powerCube (powerTwo, n){            // function pass 
    return powerTwo(n) * n
}
//////////////////////////////////////////////////////////////////////////////////////////
function sayHello(){
    return () => {                      // this is a function that return a value that is console.log not "Hello ravi"
        console.log("Hello Ravi")
    }
}
let guessValue = sayHello()             /// guessValue = () => {  console.log("Hello Ravi")}

guessValue() // output is Hello Ravi.
////////////////////////////////////////////////////////////////////////////////////////

const higherOrder = n =>{
    const oneFun = m =>{
        const twoFun = p =>{
            return n+m+p                // Function declaration 
        }
        return oneFun
    }
    return twoFun
}

higherOrder(n)(m)(p)             //Function calling
///////////////////////////////////////////////////////////////

function oneMoreHello(){
    console.log("Ravi")
}
setInterval(oneMoreHello, 1000)      // means onemoreHello function call krro every 1 secounds 


setTimeout(oneMoreHello, 2000)  // this function do 1times after given time.(2sec)