//for loop

for (let i = 1; i <= 5; i++) {
    console.log("Count: " + i);
  }

  let animals = ["cat", "dog", "bird", "fish"];

for (let i = 0; i < animals.length; i++) {
  console.log(animals[i]);
}

let numbers = [10, 20, 30, 40, 50];

for (let i = numbers.length - 1; i >= 0; i--) {
console.log(numbers[i]);
}

let colors = ["red", "green", "blue"];

for (let i = 0; i < colors.length; i++) {
console.log(colors[i]);
}

for (let i = 0; i <= 10; i += 2) {
 console.log(i);
}
  
//while loop
let i = 1;
while (i <= 5) {
console.log(i);
 i++;
}

let fruits = ["apple", "banana", "mango"];
let i = 0;

while (i < fruits.length) {
console.log(fruits[i]);
 i++;
}

let i = 0;
while (i <= 10) {
console.log(i);
i += 2;
}


let i = 5;
while (i > 0) {
console.log(i);
i--;
}

//do while loop

let i = 1;
do {
  console.log(i);
  i++;
} while (i <= 5);

let i = 0;
do {
  console.log(i);
  i += 2;
} while (i <= 10);


let fruits = ["apple", "banana", "orange"];
let i = 0;

do {
  console.log(fruits[i]);
  i++;
} while (i < fruits.length);

let i = 5;
do {
  console.log(i);
  i--;
} while (i > 0);
