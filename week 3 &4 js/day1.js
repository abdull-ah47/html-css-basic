 //object creation
 const car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2021,
    start: function() {
      console.log("Car started");
    }
  };
  
  console.log(car.brand); // "Toyota"
  
  //new object creation
  const course = new Object();
course.title = "software";
course.author = "sir ali";
course.publishYear = 2025;
course.getInfo = function() {
  return `${this.title} by ${this.author}`;
};

console.log(course.getInfo()); 
const person = {
    name: "saAD",
    age: 20,
    introduce: function() {
      console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
    }
  };
  
  person.introduce();

  //deleting property
  const person = {
    name: "ahmed",
    age: 25
  };
  
  delete person.age;
  
  console.log(person);
  //deleting property
  const numbers = [1, 2, 3, 4];

delete numbers[2];

console.log(numbers); 

//add using dot nitation
const person = {
    name: "ali"
  };
  
  person.age = 25;
  
  console.log(person); 
  
  const car = {
    brand: "Toyota"
  };
  
  const newProperty = "model";
  car[newProperty] = "Corolla";
  
  console.log(car);
  //using spread notation
  const user = {
    name: "saad"
  };
  
  const updatedUser = { ...user, age: 30 };
  
  console.log(updatedUser); 


  
  
