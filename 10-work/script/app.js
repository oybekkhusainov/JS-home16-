let word1 = ["abc","gds"]
let word2 = ["ab","cgds"]

function hasWord(word1, word2) {
    word1 = word1.reduce((a,b)=>a+b),
    word2 = word2.reduce((c,d)=>c+d);
    if (word1 === word2) return true
        return false
        
        
    
}
let result = hasWord(word1,word2)
console.log(result)