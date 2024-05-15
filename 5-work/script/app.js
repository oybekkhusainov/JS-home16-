function rightmostLongestWord(str) {
         let words = str.split(' ');
         let leng = '';
         let max = 0;
     
         for (let i = 0; i < words.length; i++) {
             if (words[i].length >= max) {
                 leng = words[i];
                 max = words[i].length;
             }
         }
     
         return leng;
     }
    
     console.log(rightmostLongestWord("black red blue"));
     console.log(rightmostLongestWord("red blue gold"));