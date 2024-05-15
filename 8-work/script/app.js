let word1 = "salom"
let word2 = "hello"

function anagram  (a,b){
    if(word1.length === word2.length) return true
    return false
}

let result = anagram(word1,word2)
console.log(result);