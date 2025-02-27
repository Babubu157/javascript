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

// Object homework

let students = [
    {
      name: 'Сэд-Эрдэнэ',
      age: 19,
      gender: 'male',
      points: 70,
    },
    {
      name: 'Индра',
      age: 19,
      gender: 'female',
      points: 50,
    },
    {
      name: 'Хатнаа ',
      age: 21,
      gender: 'male',
      points: 99,
    },
    {
      name: 'Тэмүүлэн',
      age: 23,
      gender: 'male',
      points: 55,
    },
    {
      name: 'Намуун',
      age: 23,
      gender: 'female',
      points: 85,
    }   
    
  ];
  

// 1. Өгөгдсөн array-гаас эхний объектыг хэвлэж гаргах
console.log(students[0]);

// 2. Ангид хэдэн эрэгтэй, эмэгтэй сурагч байгааг ол.
let male = 0;
let female = 0;
for(let i=0; i<students.length; i++){
    if(students[i].gender === 'male'){
        male++;
    }else{
        female++;
    }
}
console.log("Male students: ", male);
console.log("Female students: ", female);

// 3. Сурагчдын насны дунджийг олох функц бичих
    let avg = 0;
    let Age = 0;
    for(let i =0; i<students.length; i++){
    Age = Age + students[i].age;
    avg = Age/students.length;
    console.log(avg);
}



// 4. Нас нь 21-ээс дээш буюу тэнцүү сурагчдыг ол

// 5. 60-аас дээш оноо авсан cурагчдийг тоол
