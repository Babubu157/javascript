let students = [
      {
        name: "Сэд-Эрдэнэ",
        age: 19,
        gender: "male",
        points: 70,
      },
      {
        name: "Индра",
        age: 19,
        gender: "female",
        points: 50,
      },
      {
        name: "Хатнаа",
        age: 21,
        gender: "female",
        points: 99,
      },
      {
        name: "Тэмүүлэн",
        age: 23,
        gender: "male",
        points: 55,
      },
      {
        name: "Намуун",
        age: 23,
        gender: "female",
        points: 85,
      },
    ];
     
    //bodlogo-1
     
    console.log(students[0]);
     
    console.log("==========================");
     
    //bodlogo-2
     
    let eregtei = 0;
    let emegtei = 0;
    for (let p = 0; p < students.length; p++) {
      if (students[p].gender === "male") {
        eregtei++;
      } else {
        emegtei++;
      }
    }
    console.log("eregtei:", eregtei);
    console.log("emegtei:", emegtei);
    console.log("======================");
    //bodlogo-4
     
    aa = 0;
     
    for (let i = 0; i < students.length; i++) {
      if (students[i].age >= 21) {
        aa++;
      }
    }
     
    console.log("21-ээс дээш настай оюутан: ", aa);
     
    console.log("========================");
     
    //bodlogo-5
     
    dd = 0;
     
    for (let q = 0; q < students.length; q++) {
      if (students[q].points >= 60) {
        dd++;
      }
    }
     
    console.log("60-аас дээш оноо авсан оюутан:", dd);
    console.log("==================================");
     
    //bodlogo-3
     
    dundaj = 0;
    niit = 0;
     
    for (let kb = 0; kb < students.length; kb++) {
      niit += students[kb].age;
      dundaj = niit / students.length;
    }
     
    console.log("Dundaj nas:", dundaj);
     
    //angid
     
    let oddcount = 0;
    for (let k = 0; k < 11; k++) {
      let too = k;
      while (too !== 0) {
        let digitt = too % 10;
        if (digitt % 2 === 1) {
          oddcount++;
        }
        too = (too - digitt) / 10;
      }
    }
     
    console.log("Sondgoi too:", oddcount);
     
    //bodlogo-7
     
    let www = [1, 4, 6, 9, 11];
    let ttt = [];
    let j = 0;
    for (let ko = www.length - 1; ko >= 0; ko--) {
      console.log(www[ko]);
    }
     
    //bodlogo-8
     
    let x = 3;
    output = 0;
    toot = [2, 3, 5, 8, 3];
     
    for (let iii = 0; 0 < iii.length; iii++) {}
   has context menu