function convertToRoman(num) {
    const roman_num = ["I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M"];
    const numbers = [1,4,5,9,10,40,50,90,100,400,500,900,1000];

for (let i in numbers){
    if (num === numbers[i]){
        return roman_num[i]
    }
} 
let roman = [];
while (num > 0){
    for (let i in numbers){
        if (num > 1000){
            num -= numbers[12]
            roman.push(roman_num[12]);
            break;
        }else if (num > numbers[i]){
            continue;
        } else if (num === numbers[i]){
            roman.push(roman_num[i]);
            num -= numbers[i];
            break;
        }
         else {
            roman.push(roman_num[i-1]);
            num -= numbers[i-1];
            break;
            }
        }
    }
    return roman.join("");
}
   
   console.log(convertToRoman(3999));