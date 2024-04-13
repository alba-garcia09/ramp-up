
// function fibonacci (number1, number2, limit) {
//   let miArray=[number1,number2];

//   for (let i = 1; miArray[miArray.length-1]<=limit; i++) {
//     let newNumber= miArray[i]+miArray[i-1];
//     miArray.push(newNumber)

//   }
//   miArray.pop()
//   console.log(miArray)

// }

// fibonacci (2,4,16)


function fibonacci(number1, number2, limit) {
  console.log(number1);
  console.log(number2);
  let miArray = [number1, number2];

  for (let i = 2; miArray[i - 1] <= limit; i++) {
    let newNumber = miArray[i - 1] + miArray[i - 2];
    if (newNumber <= limit) {
      console.log(newNumber)
      miArray.push(newNumber);
    } else {
      return console.log(miArray);
    }
  }
}

fibonacci(2, 4, 42);




