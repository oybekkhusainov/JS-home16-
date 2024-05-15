
function sumOfIntegersInString(str) {
    let numbers = str.match(/\d+/g);
    
    if (numbers) {
        let sum = numbers.reduce(function(arc, sur) {
            return arc + parseInt(sur , ); 
        });
        return sum; 
    } else {
        return 0; 
    }
}

let string = "salommfqwfvefqf";
let res = sumOfIntegersInString(string)
console.log(res);
