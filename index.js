// Code your solutions in this file
// function writeCards(names, event) {
//   const newArray = [];
//   for (let i = 0; i < names.length; i++) {
//     newArray.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
//   }
//   return newArray;
// }

// function countDown(number) {
//   while (number >= 0) {
//     console.log(number);
//     number--;
//   }
// }

// redoing the code
function writeCards(array, event) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`);
  }
  return newArray;
}

function countDown(number) {
  while (number >= 0) {
    console.log(number);
    number--;
  }
}
