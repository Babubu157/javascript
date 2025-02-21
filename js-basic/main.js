console.log("Сайн уу JS");

let message = "hello" ; //string
console.log(message);

let age = 42; //number
console.log(age);

let gpa = 4.5; //number
console.log(gpa);

let isStudent = true; //boolean
console.log(isStudent); 

let x; //undefined
console.log(x);

let n = null; //null
console.log(n);


//02.19

let a = 35;
let b = 6;

let c;

console.log("A=", a);
console.log("B=", b);

c = a + b;
console.log("A+B=",c);

c = a - b;
console.log("A-B=",c);

c = a/b;
console.log("A/B=",c);

c = a * b;
console.log("A*B=",c);

c = a%b;
console.log(c);

console.log("a===b =", a === b);
console.log("a !== b =", a!==b);
console.log( "a > b =", a>b);
console.log("a < b = ", a<b);
console.log("a >= b =", a>=b);
console.log("a === b && a > b = ", a === b && a > b);
console.log("a !== b && a > b = ", a !== b && a > b);
console.log("a === b || a > b = ", a === b && a > b);
console.log("a !== b || a > b = ", a !== b && a > b);

// Array

let birthYears = new Array (1990, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000);
let names = ["dorj", "bat", "nar", "sar", "od", "naraa", "saraa", "tsetseg", "tsas", "sod"]
console.log("Names =", names);
console.log("Birth years =", birthYears);

let matrix = [
    [1,2,3], 
    [4,5,6], 
    [7,8,9]
];

console.log("0: Name = ", names[0], "Age = ", birthYears[0]);
console.log("1: Name = ", names[1], "Age = ", birthYears[0]);
console.log("2: Name = ", names[2], "Age = ", birthYears[0]);
console.log("3: Name = ", names[3], "Age = ", birthYears[0]);
console.log("4: Name = ", names[4]);
console.log("5: Name = ", names[5]);
console.log("6: Name = ", names[6]);
console.log("7: Name = ", names[7]);
console.log("8: Name = ", names[8]);
console.log("9: Name = ", names[9]);

names[9] = 2024;
console.log(names[9]);

console.log("Array length:", names.length);


for (let tooluur=0; tooluur < 5; tooluur++){
    console.log(tooluur);
    
}

let count = 1;
while (count <= 10){
    console.log(count);
    count++; 
}

let counter = 1;
do {console.log(counter);
    counter++;
}
while(counter <= 5);


let sum=0;
for (i=0; i<10; i++)
{
    sum = sum + i
    
    
}

console.log("sum = ", sum);


let niilber = 0;
let too = 0;
while (too < 10)
{
    niilber = niilber + too;
    too++;
}
console.log("niilber = ",niilber);

// if 

let nas = 30;
if(nas >= 18) {
    console.log("Таны нас:", nas);
    console.log("Та насанд хүрсэн байна");
}
else{
    console.log("Таны нас:", nas);
    console.log("Та насанд хүрээгүй байна");
    
}

let weekNumber = 6;
let weekName;

if(weekNumber === 1){
    weekName = "Monday";
    console.log(weekName);
    
}else if (weekNumber === 2){
    weekName = "Tuesday";
    console.log(weekName);
}else if (weekNumber === 3){
    weekName = "Wednesday";
    console.log(weekName);
}else if (weekNumber === 4){
    weekName = "Thursdat";
    console.log(weekName);
}else if (weekNumber === 5){
    weekName = "Friday";
    console.log(weekName);
}else if (weekNumber === 6){
    weekName = "Saturday";
    console.log(weekName);
}else if (weekNumber === 7){
    weekName = "Sunday";
    console.log(weekName);
}else {
    console.log("буруу тоо");
    
}

// Bodlogo 1

let p;
let tal1 = 12;
let tal2 = 9;
let tal3 = 16;

p = tal1 + tal2 + tal3;

console.log("Бодлого 1 - Дурын гурвалжингийн периметрийг ол")
console.log("Дурын гурвалжингийн периметр:", p);

// Bodlogo 2

let numArray = [1,3,5,7,8.7]

let summary = 0;

for (i= 0; i <= numArray.length -1; i++){
    summary = Math.ceil(summary + numArray[i]);
}
console.log("Бодлого 2 - Бүхэл тооны нийлбэрийг ол: [1, 3, 5, 7, 8.7]")
console.log("Тооны нийлбэр: ", summary);

// Bodlogo 3

let h = 10;
let w = 5;

let per = (h+w)*2
let s = h*w


console.log("Бодлого 3 - Өгөгдсөн тэгш өнцөгтийн периметр ба талбайг ол. урт = 10 өргөн = 5")
console.log("P = ",per)
console.log("S = ",s)

// Bodlogo 4

let min = 0;
let sec = 0;

min = Math.floor(98/60);
sec = 98%60;

console.log("Бодлого 4 - Өгөгдсөн 98 секундыг минут секунд болго");
console.log("Хариу: ", min + "min " + sec +"sec");

// Bodlogo 5
let hour1 = 0;
let min1 = 0;
let sec1 = 0;

min1 = Math.floor(21297/60);
if(min1 > 60){
    hour1 = Math.floor(min1/60)
    min1 = min1%60
}
sec1 = 21297%60;

console.log("Бодлого 5 - Өгөгдсөн 1297 секундыг  цаг минут секунд болго");
console.log("Хариу: " + hour1 + "hour " + min1 + "min " + sec1 +"sec");


// Bodlogo 6

let min2 = 875;
let sec2 = 88;

let inSec = min2*60 + sec2

console.log("Бодлого 6 - Өгөгдсөн 875 минут 88  секундыг, секунд руу шилжүүл");
console.log("Хариу: ", inSec+ "sec");

// Bodlogo 7

let hour = 83;
let min3 = 84;
let sec3 = 85;

let inSec1 = hour*60*60 + min3*60 + sec3

console.log("Бодлого 7 - Өгөгдсөн 83 цаг 84 минут 85  секундыг, секунд руу шилжүүл");
console.log("Хариу: ", inSec1+ "sec");

///////////// 02.20 Bodlogo //////////////

// Bodlogo 1
console.log("////////////////////////////////////////////////////////////////////////////")
let oe_array = [3, 2, 11, 7];

console.log("Бодлого 1 - Өгөгдсөн тоонуудын тэгш сондгойг ол")
console.log("Бодлого 1 - Хариу")

for (i=0; i<=3; i++){
    if(oe_array[i]%2 === 0){
        console.log(oe_array[i], "энэ тоо бол тэгш тоо");
    }else{
        console.log(oe_array[i], "энэ тоо бол сондгой тоо");
    }
}

console.log("////////////////////////////////////////////////////////////////////////////")

let toonuud = [9, 3, 2, 7, 1]
let a1 = toonuud[0];
let b1 = 0;
console.log("Бодлого 2 - Өгөгдсөн тоонуудын багыг ол")
console.log("Бодлого 2 - Хариу")

for(i=1;i<=4;i++){
   
    b1 = toonuud[i];
    if(a1>b1){
        a1 = b1;
    }else{
  a1 = a1;
    }
}
console.log("Хамгийн бага тоо: ", a1)

too1 = 9;
too2 = 3;
too3 = 2;

if(too1 < too2 && too1 < too3){
    console.log("Хамгийн бага тоо бол: ", too1)
} else if(too2 < too1 && too2 < too3){
    console.log("Хамгийн бага тоо бол: ", too2)
} else if(too3 < too1 && too3 < too2){
    console.log("Хамгийн бага тоо бол: ", too3)
}

console.log("////////////////////////////////////////////////////////////////////////////")

let toonuud1 = [11, 20, 4, 3]
let a2 = toonuud[0];
let b2 = 0;
console.log("Бодлого 3 - Өгөгдсөн тоонуудын ихийг ол")
console.log("Бодлого 3 - Хариу")

for(i=1;i<=3;i++){
   
    b2 = toonuud[i];
    if(a2>b2){
        a2 = a2;
    }else{
    a2 = b2;
    }
}
console.log("Хамгийн их тоо: ", a2)

console.log("////////////////////////////////////////////////////////////////////////////")

let toonuud2 = [2, 9, 4]
let b3 = 1;
console.log("Бодлого 4 - 5 аас бага тооны үржвэрийг ол")
console.log("Бодлого 4 - Хариу")

for(i=0;i<=2;i++){
     if(toonuud2[i] < 5){
b3 = b3 * toonuud2[i]
     }
    
}
console.log("5-аас бага тоонуудын үржвэр: ", b3)

n1 = 2;
n2 = 9;
n3 = 4;

urj = 1;

if (n1 < 5) {
urj = urj * n1;
}
if( n2 < 5) {
    urj = urj * n2;
}
 if( n3 < 5) {
    urj = urj * n3;
 }

 console.log("Үржвэр = ", urj)

 if (n1 > 5) {
  n1 = 1;
    }
    if( n2 > 5) {
     n2 = 1;
    }
     if( n3 > 5) {
      n3 = 3;
     }
     console.log("Үржвэр = ", n1*n2*n3)
    

console.log("////////////////////////////////////////////////////////////////////////////")

let toonuud3 = [11, 9, 4, 3]
let b4 = 1;
console.log("Бодлого 5 - 5 аас их тооны үржвэрийг ол")
console.log("Бодлого 5 - Хариу")

for(i=0;i<=2;i++){
     if(toonuud3[i] > 5){
b4 = b4 * toonuud3[i]
     }
    
}
console.log("5-аас их тоонуудын үржвэр: ", b4)

console.log("////////////////////////////////////////////////////////////////////////////")
console.log("Бодлого 6 - Өгөгдсөн сар аль улирал вэ")
console.log("Бодлого 6 - Хариу")
let sar = 0;
 if(sar === 12 || sar === 1 || sar === 2) {
    console.log("Өвлийн улирал юм бишүү дээ");
 } else if (sar === 3 || sar === 4 || sar === 5){
    console.log("Хавар хавар хавар ш дээ");
 }else if(sar === 6 || sar === 7 || sar === 8){
    console.log("Зуны улирал юм байнаа");
 }else if(sar === 9 || sar === 10 || sar === 11){
    console.log("Намар");
 }else {
    console.log("Буруу утга оруулсан байна")
 }


console.log("////////////////////////////////////////////////////////////////////////////")

console.log("////////////////////////////////////////////////////////////////////////////")
console.log("Бодлого 7 - Шалгалтын онооноос хамаарч дүн гарга")
console.log("Бодлого 7 - Хариу")
let onoo = 99;
 if(onoo<60) {
    console.log("Таны оноо:" + onoo + " байна. Маш муу");
 } else if (60 <= onoo && onoo < 70){
    console.log("Таны оноо:" + onoo + " байна. Хангалттай");
 }else if(70 <= onoo && onoo < 80){
    console.log("Таны оноо:" + onoo + " байна. Дунд");
 }else if(80 <= onoo && onoo < 90){
    console.log("Таны оноо:" + onoo + " байна. Сайн");
 }else if (90 <= onoo && onoo <= 100) {
    console.log("Таны оноо:" + onoo + " байна. Маш сайн");
 }else {
    console.log("Буруу утга оруулсан байна")
 }


 


