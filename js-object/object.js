console.log("Object")

let person ={
    firstname: "Boloroo",
    lastname: "dorj",
    age: 22,
    address: {
        district: "HUD",
    },
    score: [90, 86, 100],

};

console.log("Person", person);
console.log("Person name: ", person.firstname);
console.log("Address: ", person.address.district);
console.log("Age: ", person['age']);

console.log("Person score: ", person.score[0]);
