// const originalObject = {
//     prop1: 'value1',
//     prop2: 'value2',
//     prop3: 'value3'
//   };
  
//   const transformedObject = Object.fromEntries(
//     Object.entries(originalObject).map(([key, value]) => [key, value.toUpperCase()])
//   );
  
//   console.log(transformedObject);


// const entries = [
//     ['prop1', 'value1'],
//     ['prop2', 'value2'],
//     ['prop3', 'value3']
//   ];
  
//   const obj = Object.fromEntries(entries);
  
//   console.log(obj);
//   const obj = {
//     prop1: 'value1',
//     prop2: 'value2',
//     prop3: 'value3'
//   };
  
//   const entries = Object.entries(obj);
  
//   console.log(entries);
// let array = [['ravi', 'gangwar'], ['harshit' ,'sharma']]
// let obj = Object.fromEntries(array)
// console.log(obj)
// let arr = Object.entries(obj)
// console.log(arr)


// let obj = [
//          { author: 'ravi', year: 2009, book: 'hackTheworld'},
//          {author: 'Harshit', year: 2011, book: 'Blockchain'}]
//          let author = obj.map(({author, year, book}) => {if(year < 2010){return{author, year, book}} /*else {return{author: author.toUpperCase(), year, book}}*/})
// console.log(author)
// let obj = [
//   { author: 'ravi', year: 2009, book: 'hackTheworld' },
//   { author: 'Harshit', year: 2011, book: 'Blockchain' }
// ];

// let authors = obj.map(({ author, year, book }) => {if (year < 2010) {return { author, year, book }} else {return { author: author.toUpperCase(), year, book }}});

// console.log(authors);

// function filterAndCapitalizeBooks(books) {
//   const filteredBooks = books.filter(book => book.year >= 2010);

//   const capitalizedBooks = filteredBooks.map(book => {
//     return {
//       author: book.author.toUpperCase(),
//       year: book.year,
//       title: book.title
//     };
//   });

//   return capitalizedBooks;
// }

// // Example usage
// const books = [
//   { author: 'Ravi', year: 2009, title: 'hackTheworld' },
//   { author: 'Harshit', year: 2011, title: 'Blockchain' },
//   { author: 'John Doe', year: 2008, title: 'Web Development 101' }
// ];

// const filteredAndCapitalizedBooks = filterAndCapitalizeBooks(books);
// console.log(filteredAndCapitalizedBooks);

let arr = [];
let obj1 = {id: 13, name: 'harshit'}
let obj = new Object();
obj.id = 12;
obj.name= 'ravi'
arr.push(obj);
arr.push(obj1)
let newvar = arr;
console.log(newvar)

