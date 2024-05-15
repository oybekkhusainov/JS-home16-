let inputArray = [1,3,6,8,46,28];

function calc(arr) {
     arr.sort((a, b) => a - b);
 
     let numbers = [];
     for (let i = 0; i < arr.length; i++) {
         for (let j = i + 1; j < arr.length; j++) {
             if (arr[j] - arr[i] === 2) {
                 numbers.push([arr[i], arr[j]]);
             }
         }
     }
     return numbers;
}

let result = calc(inputArray);
console.log(result); 
