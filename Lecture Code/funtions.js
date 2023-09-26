// functions
function add(x, y){
    const v = x+y
    return v
}
console.log(add(5,2))
// arrow function 
const adding = x => x+x;
console.log(adding(3))

//annonymus fuction 

let r = function (){
    console.log("ravi gangwar")
}
r()

// immedetly invoke function 

(function h(){
    console.log("Hellow, Ravi")
})();

(function (x){
    console.log(x*x)
})(3)

// function expression