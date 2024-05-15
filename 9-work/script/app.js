function findUniq(arr){
    for(let i = 0; i < arr.length; i++){
        if(arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i]))return arr[i]
        return arr[i]

        


    }
}
let result = findUniq([1, 1, 1, 2, 1, 1])
console.log(result)