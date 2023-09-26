class product2
{
    
    #id; // declaration
    constructor(n, i, s)
    {
        this.name = n;
        this.#id = i; // <---------------<<
        this.section = s;
    }
    set idSet(r){
        if(r<0) return;
        this.#id = r;
        
    }
    get idGet(){
        console.log(this.#id)
    }
}
const g = new product2("ravi", 2212973, "IT")

g.idSet= 2212900;
g.idGet;
