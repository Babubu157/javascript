let products = [
  { name: "Гурил", price: 1500, quantity: 5 },
  { name: "Сүү", price: 3500, quantity: 2 },
  { name: "Өндөг", price: 500, quantity: 30 },
  { name: "Талх", price: 2000, quantity: 4 },
  { name: "Цагаан будаа", price: 4000, quantity: 3 },
  { name: "Элсэн чихэр", price: 3000, quantity: 2 },
  { name: "Давс", price: 1000, quantity: 1 },
  { name: "Цай", price: 5000, quantity: 2 },
  { name: "Самар", price: 8000, quantity: 1 },
  { name: "Жимс", price: 6000, quantity: 5 },
  { name: "Ногоо", price: 2500, quantity: 7 },
  { name: "Шоколад", price: 7000, quantity: 3 },
];
//1. Өгөгдсөн бүтээгдэхүүний нэрийг хэвлэ.
for (let i = 0; i < products.length; i++) {
  console.log("Барааны нэр: ", products[i].name);
}

//   2. Өгөгдсөн бүтээгдэхүүний нийт тоо ширхэгийг ол
let Qty = 0;
for (let i = 0; i < products.length; i++) {
  Qty = Qty + products[i].quantity;
}
console.log("Нийт үлдэгдэл: ", Qty);

//   3. Өгөгдсөн бүтээгдэхүүний нийт үнийн дүнг ол
let Price = 0;
for (let i = 0; i < products.length; i++) {
  Price = Price + products[i].price;
}
console.log("Нийт үнийн дүн: ", Price);

//   4. Өгөгдсөн бүтээгдэхүүний 3000₮-өөс дээш үнэтэй бүтээгдэхүүнүүдийг хэвлэ
console.log("====================== Bodlogo 4 =====================");
let price = 3000;
let prodLess3000 = 0;
const less3000 = (param) => {
  for (let i = 0; i < param.length; i++) {
    if (param[i].price > price) {
      console.log(param[i]);
    }
  }
};
less3000(products);

//   5. Өгөгдсөн бүтээгдэхүүний хамгийн хямд бүтээгдэхүүний нэрийг олж хэвлэ
console.log("====================== Bodlogo 5 =====================");
let cheapest = products[0].price;
const cheap = (list) => {
  for (let i = 1; i < list.length; i++) {
    if (products[i].price < cheapest) {
      cheapest = products[i];
    }
  }
  console.log(cheapest);
};
cheap(products);
//   6. Өгөгдсөн бүтээгдэхүүний  хамгийн их тоо ширхэгтэй бүтээгдэхүүнийг хэвлэ
console.log("====================== Bodlogo 5 =====================");
let max = products[0].quantity;
const maxQty = (list1) => {
  for (let i = 1; i < list1.length; i++) {
    if (products[i].quantity > max) {
      max = products[i];
    }
  }
  console.log(max);
};
maxQty(products);

//   7. Өгөгдсөн бүтээгдэхүүний 5-аас доош үлдсэн бүтээгдэхүүнүүдийг жагсаах
console.log("====================== Bodlogo 7 =====================");
const qty5 = (list2) => {
  for (let i = 1; i < list2.length; i++) {
    if (products[i].quantity < 5) {
      console.log(products[i]);
    }
  }
};
qty5(products);

//   8. Өгөгдсөн бүтээгдэхүүн дотор X бүтээгдэхүүн  байгаа эсэхийг шалга байвал мэдээллийг нь хэвлэ
console.log("====================== Bodlogo 8 =====================");
const check = (array, prodDetail) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i].name === prodDetail) {
      console.log(array[i]);
    }
  }
};

check(products, "Өндөг");
