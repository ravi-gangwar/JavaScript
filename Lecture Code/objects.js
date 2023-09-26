let obj = {id: 101, name: "alex", salary: 19999}
console.log(obj)


// new object 

let nobj = new Object()
nobj.id = 101
nobj.salary = 5000
console.log(nobj)

// new method of object 

function oj (i, n, s){
    this.id = i
    this.name = n
    this.salary = s
}

let a = new oj(2212973, "Ravi", "1cr")
console.log(a)
// accese of objet key value 

console.log(a.id)
console.log(a['id'])

a.id = 9389988605
a['id'] = '9870648229'

console.log(a)

// how to delete in object
delete obj.id
console.log(obj)

// object methods 

// printiing key and value of an object in an Array
let b = { id: 2212970, name: "Ravi gangwar", class: "New-group-2"}

let keys = Object.keys(b)
console.log(keys)

let value = Object.values(b)
console.log(value)

// key value pair print in one time 

let entries = Object.entries(b)
console.log(entries)

// to freeze the object key value pair to cant be update it anymore

// Object.freeze(b);
// b.name = "tannu"

console.log(b)

// only updates in object but not to done any operaton to remove and add;

Object.seal(b)
b.id= 100
b.address = "Bly"
delete b.id
console.log(b)

// objects assign in new variable

let g = Object.assign({branch: "IT"}, b)
console.log(g)
    