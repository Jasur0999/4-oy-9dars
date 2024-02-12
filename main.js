//  1- task  //////////////////////////

// const me = {
//     firstName: "Sultonqul",
//     lastName: "Nortoyloqov",
//     age: 23,
//     languages: ["js", "python", "c++", "nodejs"],
//     friends: ["Jamshid", "Abbos", "Jalol", "Mar'uf"],
//   };

//   for (let key in me) {
//     if (Array.isArray(me[key])) {
//       console.log(`${key}: ${me[key].join(",")}`);
//     } else {
//       console.log(`${key}: ${me[key]}`);
//     }
//   }

//  2- task  //////////////////////////

// function createSquaredObject(n) {
//   let squaredObject = {};
//   for (let i = 1; i <= n; i++) {
//     squaredObject[i] = i * i;
//   }
//   return squaredObject;
// }
// console.log(createSquaredObject(5));

//  3- task  //////////////////////////

// let misolObject = {
//     name: 'John',
//     age: 25,
//     city: 'New York'
//   };

//   let kalitlar = Object.keys(misolObject);
//   let qiymatlar = Object.values(misolObject);

//   console.log(kalitlar);
//   console.log(qiymatlar);

//   let yigindi = kalitlar.concat(qiymatlar);
//   console.log(yigindi);

//  5- task  //////////////////////////////

// let mahsulotlar = {"Apelsin": 10000, "Olma": 12000, "Mandarin": 8000, "Banan": 20000};
// let narxlar = Object.values(mahsulotlar);
// let jamiNarx = narxlar.reduce((a, b) => a + b, 0);
// console.log(jamiNarx);

//  6- task  //////////////////////////////

// function defineObject(obj) {
//     for (const key in obj) {
//       if (typeof obj[key] !== 'string') {
//         return false;
//       }
//     }
//     return true;
//   }

//   const input = {abc: '1', 123: '2', d: '5'};
//   console.log(defineObject(input));

//  7- task  //////////////////////////////

// function minMaxWord(sentence) {
//     let words = sentence.split(' ');
//     let min = words[0];
//     let max = words[0];

//     for (let i = 1; i < words.length; i++) {
//       if (words[i].length < min.length) {
//         min = words[i];
//       }
//       if (words[i].length > max.length) {
//         max = words[i];
//       }
//     }

//     return {minWord: min, maxWord: max};
//   }

//   console.log(minMaxWord("Men Sultonqul Programmerning guruhlarida o’qiyman."));

//  8- task  //////////////////////////////

// let input = {a: false, b: 12, c: true, d: 0};
// let output = {};
// Object.keys(input).forEach(key => {
//   if (input[key]) {
//     output[key] = input[key];
//   }
// });

// console.log(output);


//  9- task  //////////////////////////////

// const people = [
//     { name: "Sultonqul", age: 23 },
//     { name: "Erkin", age: 20 },
//     { name: "Temur", age: 21 },
//   ];
//   function getNameMaxAge(people) {
//     let maxAge = 0;
//     let maxName = "";
//     for (let i = 0; i < people.length; i++) {
//       if (people[i].age > maxAge) {
//         maxAge = people[i].age;
//         maxName = people[i].name;
//       }
//     }
//     return maxName;
//   }
  
//   console.log(getNameMaxAge(people)); 


//  10- task  //////////////////////////////

// function countOccurrences(arr) {
//     var obj = {};
//     for (var i = 0; i < arr.length; i++) {
//       if (obj[arr[i]]) {
//         obj[arr[i]]++;
//       } else {
//         obj[arr[i]] = 1;
//       }
//     }
//     return obj;
//   }
  
//   var inputArray = [7, 8, 4, 5, 7, 5, 4, 8, 5, 4, 7, 9];
//   var outputObject = countOccurrences(inputArray);
//   console.log(outputObject);


//  11- task  //////////////////////////////





//  12- task  //////////////////////////////

// books.forEach(book => {
//     if (book.alreadyRead) {
//       console.log(`${book.title} o'qigan`);
//     } else {
//       console.log(`${book.title} o'qilmagan`);
//     }
//   });