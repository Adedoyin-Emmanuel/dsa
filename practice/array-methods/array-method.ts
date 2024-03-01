// Let's start with popping and pushing

// const cars = ["Lamboghini", "Bugatti", "Henenssey", "Volvo"];

// const newCar = cars.push("Maruwa");

// console.log(`New car is ${newCar}`);
// console.log(cars);

// const fruits = ["Banana", "Mango", "Strawberry", "Guava", "Berry"];

// const poppedFruit = fruits.pop();

// console.log(`Popped fruit is ${poppedFruit}`);

// console.log(fruits);

// Let's work with other array methods

// const ladies = ["Amanda", "Sarah", "Gift", "Chidi", "Moyo", "Totosi", "Simi"];

// console.log(ladies.toString());

// console.log(ladies.join(" * "));

// console.log(ladies.toLocaleString());

// console.log(ladies.copyWithin(2, 0));

// console.log(ladies.concat("Bola", "Oyin", "Magret"));

const guns = [
  "M4",
  "M16",
  "M500",
  "M4A1",
  "Desert Eagle",
  "M1887",
  "Wood Pecker",
  "USP",
  "QT9",
  "AK47",
  "AN91",
  "RUS47",
  "Fernecc",
  "UMP",
  "MP5",
  "MP40",
];

guns.map((gun, index) => {
  console.log(`I Use ${gun} in CODM`);
});

guns.every((gun, index) => {
  console.log(gun.includes("M"));
});
