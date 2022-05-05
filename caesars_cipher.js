function rot13(str) {
    let alphabet = ["a","b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let result = [];
    for (let char of str.toLowerCase()){    
        if (alphabet.includes(char) !== true){
            result.push(char)
        }
        else if (alphabet.indexOf(char) >= 13){
            result.push(alphabet[alphabet.indexOf(char) - 13])
        }
        else {
            result.push(alphabet[alphabet.indexOf(char) + 13] )
        }

        }
        return result.join("").toUpperCase();
    }
  
  console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));