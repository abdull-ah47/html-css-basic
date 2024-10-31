//practice questions(array of objects)
const users = [
    { username: "user1", name: "Leanne Graham", zipcode: "92998-3874" },
    { username: "user2", name: "Ervin Howell", zipcode: "90566-7771" },
    { username: "user3", name: "Patricia Lebsack", zipcode: "53919-4257" },
    // more users...
  ];
  const firstUsername = users[0].username;
  console.log("Username of the first user:", firstUsername);

  //question no 2
  const users = [
    { username: "user1", name: "Leanne Graham", email: "leanne@example.com" },
    { username: "user2", name: "Ervin Howell", email: "ervin@example.com" },
    { username: "user3", name: "Patricia Lebsack", email: "patricia@example.com" }
  ];
users.push({
    username: "user4",
    name: "John Doe",
    email: "john@example.com"
  });
  
  console.log(users);

  //question no 3
  const users = [
    { id: 1, username: "user1", name: "Leanne Graham", email: "leanne@example.com" },
    { id: 2, username: "user2", name: "Ervin Howell", email: "ervin@example.com" },
    { id: 3, username: "user3", name: "Patricia Lebsack", email: "patricia@example.com" },
    { id: 4, username: "user4", name: "John Doe", email: "john@example.com" },
    { id: 5, username: "user5", company: { name: "TechCorp", catchphrase: "Innovating the future" } }
  ];
// Remove the last user
const removedUser = users.pop();

console.log("Removed User:", removedUser);
console.log("Updated Users Array:", users);

//question no 4
const users = [
    { id: 1, username: "user1", name: "Leanne Graham", email: "leanne@example.com", phone: "555-0101" },
    { id: 2, username: "user2", name: "Ervin Howell", email: "ervin@example.com", phone: "555-0102" },
    { id: 3, username: "Bret", name: "Patricia Lebsack", email: "patricia@example.com", phone: "555-0103" },
    { id: 4, username: "user4", name: "John Doe", email: "john@example.com", phone: "555-0104" },
  ];

if (userToUpdatePhone) {
  // Update the phone number
  userToUpdatePhone.phone = "123-456-7890";
  console.log("Updated Phone Number for User ID 3:", userToUpdatePhone);
} else {
  console.log("User with ID 3 not found.");
}
  
    //question no 5
    const users = [
        { id: 1, username: "user1", name: "Leanne Graham", email: "leanne@example.com", address: { city: "Gwenborough" } },
        { id: 2, username: "user2", name: "Ervin Howell", email: "ervin@example.com", address: { city: "McKenzie" } },
        { id: 3, username: "Bret", name: "Patricia Lebsack", email: "patricia@example.com", address: { city: "South Elvis" } },
        { id: 4, username: "user4", name: "John Doe", email: "john@example.com", address: { city: "Westworld" } },
      ];

users.forEach(user => {
    console.log(user.name);
  });
        
  //question no 7
  const users = [
    { id: 1, username: "user1", name: "Leanne Graham", email: "leanne@example.com", website: "leannegraham.com" },
    { id: 2, username: "user2", name: "Ervin Howell", email: "ervin@example.com", website: "ervinhowell.com" },
    { id: 3, username: "Bret", name: "Patricia Lebsack", email: "patricia@example.com", website: "patricialebsack.com" },
    { id: 4, username: "user4", name: "John Doe", email: "john@example.com", website: "johndoe.com" }
  ];
  const emailAddresses = users.map(user => user.email);
console.log("Email Addresses:", emailAddresses);

//question no 9
const users = [
    { id: 1, username: "user1", name: "Leanne Graham", email: "leanne@example.com" },
    { id: 2, username: "user2", name: "Ervin Howell", email: "ervin@example.com" },
    { id: 3, username: "Bret", name: "Patricia Lebsack", email: "patricia@example.com" },
    { id: 4, username: "user4", name: "John Doe", email: "john@example.com" }
  ];

  const sortedByName = users.sort((a, b) => a.name.localeCompare(b.name));
console.log("Users sorted by Name (alphabetical):", sortedByName);
