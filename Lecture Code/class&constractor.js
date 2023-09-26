class product {
    
    history(){
        console.log("This is History", this.name, this.id, this.section);
    }
    
    
    
    constructor(n, i, s){
        this.name = n;
        this.id = i;
        this.section = s;

        // return 10 // we can not pass primitive data type 
        // return {x: 10, name: "ravi"} but we can return non primitive datatype
    }
    

    

}
const p= new product("ravi", 2212973, "IT")
console.log(p)
p.history();


///////////////////////    functional constructor
function product1(n, i, s){
    this.name = n;
    this.id = i;
    this.section = s;

    //return 29;      >>>>>>>>>>>>>>>>> cant return

    //return {c: "ravi"}
}

const d = new product1("ravi", 2212973, "IT");
console.log(d)