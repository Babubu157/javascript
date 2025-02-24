console.log("Бодлого 3-1")

for (i=1; i<=100; i++){
    if(i%2 === 0){
        console.log("Тэгш тоонууд: ", i)
    }
}

console.log("=========================")
console.log("Бодлого 3-2")
for (i=1; i<=100; i++){
    if(i%2 !== 0){
        console.log("Сондгой тоонууд: ", i)
    }
}

console.log("=========================")
console.log("Бодлого 3-4")
let urj = 1;
for (i=1; i<=200; i++){
    if(i%2 === 0){
        urj = urj * i
    }
}
console.log("Тэгш тоонуудын үржвэр = ", urj)

console.log("=========================")
console.log("Бодлого 3-5")
let urj1 = 1;
for (i=1; i<=200; i++){
    if(i%2 !== 0){
        urj1 = urj1 * i
    }
}
console.log("сондгой тоонуудын үржвэр = ", urj1)

console.log("=========================")
console.log("Бодлого 3-6")
// let odd = 0;
// for (i=1; i<=148; i++){
//     if(i > 0 && i < 10){
//     if(i%2 !== 0){
//         odd++
//     }}
//     if(i>=10 && i<100){
//         if((i/10)%2 !== 0){
//             odd++;
//         }
//         if((i%10)%2 !== 0){
//             odd++
//         }
//     }
//     if(i>=100 && i<149){
//         if((i/100)%2 !== 0){
//             odd++;
//         }
//         if((i/10)%2 !== 0){
//             odd++;
//         }
//         if((i%10)%2 !== 0){
//             odd++
//         }
//     }
// }
    
// 1 -> 100 niilber

// let sum = 0;
// for (let tooluur = 0; tooluur < 100; tooluur = tooluur + 1) {
//   // sum = sum + tooluur;
//   if (tooluur % 2 === 0) {
//     sum += tooluur;
//   }
// }

// 1234
// let x = 1234;
// let digit = 0;
// let s = 0;
// let count = 0;

// while (x !== 0) {
//   digit = x % 10;
//   s = s + digit;
//   x = (x - digit) / 10;
//   count++;
//   console.log("=============");
//   console.log("D: ", digit);
//   console.log("S: ", s);
//   console.log("X: ", x);
//   console.log("=============");
// }
// console.log("SUM", kk);
// console.log("SUM", s);
// console.log("COUNT", count);

let digit = 0;
let odd = 0;
let x = 0;
for (i=1; i <= 148; i++){
x = i
    while (x !==0){
        digit = x % 10;
        if(digit % 2 !== 0){
            odd++;
        }
        x = (x - digit) /10;
    }
}

console.log("Нийт сондгой тоо: ", odd)

console.log("=========================")
console.log("Бодлого 3-7")
let even = 0;
for (i=1; i<=148; i++){
    if(i%2 === 0){
        console.log(i);
        even++;
    }
}
console.log("Нийт тэгш тоо: ", even);

console.log("=========================")
console.log("Бодлого 3-8")

let nomer = 1579;
nomer = nomer % 10;
if(nomer === 1 || nomer === 6 ) {
    console.log("Өнөөдөр Даваа гариг таны дугаар өнөөдөр явах эрхгүй байна")
} else if(nomer === 2 || nomer === 7 ){
    console.log("Өнөөдөр Мягмар гариг таны дугаар өнөөдөр явах эрхгүй байна")
} else if(nomer === 3 || nomer === 8 ){
    console.log("Өнөөдөр Лхагва гариг таны дугаар өнөөдөр явах эрхгүй байна")
} else if(nomer === 4 || nomer === 9 ){
    console.log("Өнөөдөр Пүрэв гариг таны дугаар өнөөдөр явах эрхгүй байна")
} if(nomer === 5 || nomer === 0 ){
    console.log("Өнөөдөр Баасан гариг таны дугаар өнөөдөр явах эрхгүй байна")
} 

console.log("=========================")
console.log("Бодлого 3-9")

for( i=1; i<=50; i++) {
    if(i%3 === 0 && i%5 ===0){
        console.log("fizzbuzz");
    } else if (i%3 === 0) {
        console.log("fizz");
    } else if (i%5 === 0) {
        console.log("buzz");
    }else {
        console.log(i)
    }
}

console.log("=========================")
console.log("Бодлого 1")

let birthYear = [1994, 1997, 2003, 1993, 2001];
let nas;
for(i=0; i<5; i++){
    nas = 2025 - birthYear[i];
    console.log("Age: ", nas);
}

console.log("=========================")
console.log("Бодлого 2")

let a = [1, 2, 3, 4]

for (i=0; i<4; i++){
    a[i] = a[i] * 2;
}

console.log(a)

console.log("=========================")
console.log("Бодлого 3")

let sum = 0;
let b = [11, 22, 33, 44];
 for (i=0; i<4; i++){
    if(b[i]%2 ===0){
        sum = sum + b[i];
    }
 }
 console.log("Тэгш тоонуудын нийлбэр: ", sum);


console.log("=========================")
console.log("Бодлого 4")

let c = [1,4,6,8,9,3];
let sumArray = 0;
for(i=0;i<c.length; i++){
sumArray = sumArray + c[i];
}
console.log(sumArray);

console.log("=========================")
console.log("Бодлого 5")

let c1 = [1,4,6,8,9,3];
let sumArray1 = 0;
for(i=0;i<c1.length; i++){
sumArray1 = sumArray1 + c1[i];
}
sumArray1 = Math.round(sumArray1/c1.length);
console.log("Массивын дундаж утга: ",sumArray1);

console.log("=========================")
console.log("Бодлого 6")

let c2 = [1,4,6,8,9,3,23,0,456];
let m = c2[0];

for(i=1; i<c2.length; i++){
    if(m < c2[i]){
        m = c2[i];
    }
}
console.log("Массивын хамгийн их тоо: ", m);