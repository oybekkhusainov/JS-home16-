let string = "salom";

function word(str) {
     str = str.trim();
     
     let last = str.lastIndexOf(' ');
     
     if (last === -1) {
         return str.length;
     }
     
     return str.length - last - 1;
 }
 console.log(word(string)); 
