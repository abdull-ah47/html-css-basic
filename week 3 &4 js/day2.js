//practice question(objects)

//question no1

const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020,
    color: "Blue"
  };
  console.log("Make:", car.make);
  console.log("Year:", car.year);

  //question  no2
  
const restaurant = {
    name: "Spice Garden",
    location: "Downtown",
    cuisine: "Indian",
    rating: 4.5
  };
  // Update the rating 
  restaurant.rating = 4.8;
  
  console.log(restaurant);

  //question no 3
  
const game = {
    title: "Mystic Quest",
    genre: "Adventure",
    platform: "PC"
  };
  game.releaseYear = new Date().getFullYear();
  console.log(game);
  
  //question n0o 4

const employee = {
    name: "Alice Johnson",
    position: "Software Engineer",
    department: "IT",
    salary: 80000
  };
  delete employee.salary;
  
  console.log(employee);

  //question  no 5
  // Define the person object
const person = {
    name: "Jav",
    age: "22",
    greet: function() {
      console.log(`Hello, my name is ${this.name}`);
    }
  };
  person.name = "Abdullah";
 person.greet();
  
 //question 6
 
const player = {
    username: "Guest",
    score: 0,
    showScore: function() {
      console.log(`Score for ${this.username} is ${this.score}`);
    }
  };
  
  player.username = "Gamer12";
  player.score = 150;
  
  player.showScore();
  
  //question no 7

const house = {
    rooms: 4,
    bathrooms: 2,
    garage: true,
    yard: "Large"
  };
  
  for (let property in house) {
    console.log(`${property}: ${house[property]}`);
  }
  
  


  
  