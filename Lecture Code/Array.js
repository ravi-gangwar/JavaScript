let a = [1, 2 , 3, 3, "Ravi", true]

let b = new Array("a", "b", "y")
b[2]="z"


b.push(2,7,4)
// a.pop()
console.log(b)
// console.log(a)


// b.shift()
// console.log(b)

// b.unshift(9)
// console.log(b)

c=a.concat(b)
console.log(c)

s=c.join("")
console.log(s)


c.reverse();
console.log(c)

// i=a.indexOf("Ravi")
// console.log(i)

// p= a.slice(3,5)
// console.log(p)

// a.splice(2, 0, 11)  
// ///a.splice(index, number of element you want to delete, write what you want to add)  
// console.log(a)