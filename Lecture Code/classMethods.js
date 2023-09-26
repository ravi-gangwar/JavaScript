class product 
{
    history()
    {
        console.log("This is History", this.name, this.id, this.section);
    }
    constructor(n, i, s)
    {
        this.name = n;
        this.id = i;
        this.section = s;
        this.history()
    }
    static custom(){
        console.log("calling static methods")
    }
}
const f = new product("ravi", 2212973, "IT")
console.log(f);
//f.custom() // we cant call like this this class methods not object method
product.custom(); 


/////////////////////////////////////////////////////////////////////////////////////////////////////////


/*====================we can hide some information from user or front end

==============================by using # this symbol==============================*/
class product1
{
    
    #id; // declaration
    constructor(n, i, s)
    {
        this.name = n;
        this.#id = i; // <---------------<<
        this.section = s;
    }
    history1()
    {
        console.log("This is History", this.name, this.#id/*like this*/, this.section);
    }
}
const d = new product1("ravi", 2212973, "IT")
console.log(d);
d.history1();


///////////////////////////Getter and setter///////////////////////////////////
