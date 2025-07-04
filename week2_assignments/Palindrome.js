var reversedString = ""
var originalString = "racecar"

function reverseString()
{
 let word="racecar"
 let splittedWord = word.split("")
 console.log(splittedWord)

 for(let i=splittedWord.length -1; i>=0 ; i--)
 {
    reversedString = reversedString+splittedWord[i]
    //console.log(splittedWord[i])
 }      
 console.log(reversedString)
}

function palindrome()
{
 if(reversedString===originalString)
 {
    return true
 }
 else
 {
    return false
 }
}


reverseString()
console.log(palindrome())