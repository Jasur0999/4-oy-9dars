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

// const books =
//   {
//     title: "Halqa",
//     author: "Akrom Malik",
//     alreadyRead: false,
//   },
//   {
//     title: "Dunyo ishlari",
//     author: "O'tkir Hoshimov",
//     alreadyRead: true,
//   },
//   {
//     title: "Vaqtning qadri",
//     author: "Abdulfattoh Abu G'udda",
//     alreadyRead: false,
//   },
// ;

// books.forEach((book, index) => {
//   if (book.alreadyRead) {
//     console.log(${index + 1}. ${book.author}ning "${book.title}" kitobi o'qilgan;);
//   } else {
//     console.log(${index + 1}. ${book.author}ning "${book.title}" kitobi o'qilmagan;);
//   }
// });

//  13- task  //////////////////////////////

// const input = {1: 20, 2: 30, 3: 20, 4: 40, 5: 30, 6: 50, 7: 40, 8: 20};
// const output = Object.entries(input).reduce((acc, key, value) => {
//     if (!accvalue) {
//         accvalue = key;
//     } else {
//         accvalue.push(key);
//     }
//     return acc;
// }, {});

// console.log(output);

//  14- task  //////////////////////////////

// let obj1 = { a: 3, b: 10, c: 5, d: 7 };
// let obj2 = { a: 10, d: 4, e: 6, f: 15 };
// let obj = {};
// for (let key in obj1) {
//     if (!(key in obj2)) {
//         obj[key] = obj1[key];
//     }
// }
// for (let key in obj2) {
//     if (!(key in obj1)) {
//         obj[key] = obj2[key];
//     }
// }

// console.log(obj);

//  15- task  //////////////////////////////

// const products = [
//     { name: "Product 1", price: 20000, discount: 10, quantity: 5 },
//     { name: "Product 2", price: 10000, discount: 20, quantity: 4 },
//     { name: "Product 3", price: 15000, discount: 8, quantity: 10 },
//     { name: "Product 4", price: 18000, discount: 5, quantity: 6 },
//     { name: "Product 5", price: 5000, discount: 10, quantity: 16 },
//   ];
//   let totalSum = products.reduce((sum, product) => {
//       let discountedPrice = product.price - (product.price * (product.discount /100));
//       return sum + (discountedPrice * product.quantity);
//   },0);

//   console.log(totalSum);

//  16- task  //////////////////////////////

//  17- task  //////////////////////////////

// const obj = {
//     "it": 20,
//     "mushuk": 10,
//     "sigir": 200,
//     "tovuq": 2
//   };

//   const arr = Object.entries(obj).flat();
//   console.log(arr);

//  18- task  //////////////////////////////

// function calculateGPA(grades) {
//     let totalGradePoints = 0;
//     let totalCredits = 0;
//     for (let i = 0; i < grades.length; i++) {
//       totalGradePoints += grades[i].grade * grades[i].kredit;
//       totalCredits += grades[i].kredit;
//     }

//     const GPA = totalGradePoints / totalCredits;
//     return GPA;
//   }

//   const grades = [
//     { name: "Fizika", grade: 4, kredit: 6 },
//     { name: "Matematika", grade: 5, kredit: 6 },
//     { name: "Tarix", grade: 4, kredit: 4 },
//     { name: "Dasturlash", grade: 5, kredit: 8 },
//   ];

//   const result = calculateGPA(grades);
//   console.log("Your GPA is:", result);

//  19- task  //////////////////////////////

// function checkAnswers(right_answers, my_answers) {
//     let correctCount = 0;
//     let wrongQuestions = [];
//     for (let question in right_answers) {
//       if (right_answers[question] === my_answers[question]) {
//         correctCount++;
//       } else {
//         wrongQuestions.push(question);
//       }
//     }
//     return { correctCount, wrongQuestions };
//   }
  
//   const result = checkAnswers(right_answers, my_answers);
//   console.log(`To'g'ri javoblar soni: ${result.correctCount}`);
//   console.log(`Noto'g'ri javoblar: ${result.wrongQuestions.join(", ")}`);


//  20- task  //////////////////////////////

// function multiplyValues(obj, n) {
//     const res = {};
//     for (let key in obj) {
//       res[key] = obj[key] * n;
//     }
//     return res;
//   }
  
//   const obj = { a: 2, b: 3, c: 4, d: 6 };
//   const n = 3;
//   const result = multiplyValues(obj, n);
//   console.log(result); 


//  21- task  //////////////////////////////

// const { name, company: { name: companyName, price, founder: { firstName, lastName, birthDate } } } = product;
// console.log(name);
// console.log(companyName); 
// console.log(price); 
// console.log(firstName); 
// console.log(lastName); 
// console.log(birthDate); 


//  22- task  //////////////////////////////

// let students = [
//     { name: "Ali", grade: 95 },
//     { name: "Vali", grade: 85 },
//     { name: "Soli", grade: 75 },
//     { name: "Asal", grade: 65 },
//   ];  
//   let totalGrade = students.reduce((total, student) => total + student.grade, 0) / students.length;  
//   let newStudents = students.map(student => {
//       let newGrade;
//       if (student.grade >= 90) {
//           newGrade = 5;
//       } else if (student.grade >= 80) {
//           newGrade = 4;
//       } else if (student.grade >= 70) {
//           newGrade = 3;
//       } else {
//           newGrade =2;
//       }
//       return { ...student, grade: newGrade };
//   });
  
//   console.log(totalGrade); 
//   console.log(newStudents);


//  25- task  //////////////////////////////

// function countPassed(pupils) {
//     let passedCount = 0;
//     for (let pupil of pupils) {
//       if (pupil.percent >= 70) {
//         passedCount++;
//       }
//     }
//     return passedCount;
//   }
  
//   console.log(countPassed(pupils));
