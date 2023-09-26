class Person {

    constructor(name) {
  
      this.name = name;
  
    }
  
    introduce() {
  
      console.log("Hello, my name is",this.name);
  
    }
}
  const myName = new Person("Anuj");
  myName.introduce();