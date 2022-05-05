function palindrome(str) {
  let reverse = str.replace(/[^a-zA-Z0-9]/gi,"").split("").reverse()
if (reverse.join("").toLowerCase() === str.replace(/[^a-zA-Z0-9]/gi,"").toLowerCase()){
  return true 
} else {
  return false
}
}

console.log(palindrome("0_0 (: /-\ :) 0-0"));