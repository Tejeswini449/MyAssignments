let input = 'Hello World'
let split1 = input.split(" ")
// console.log(split1.length)
let lastWord = split1[(split1.length-1)]
console.log(lastWord)

let lengthOfLastWord = lastWord.length
console.log(lengthOfLastWord);

let s=" fly me to the moon "
let trimmedString = s.trim()
console.log(trimmedString)
let arrayOfs = trimmedString.split(" ")
console.log(arrayOfs)
let lastWordofs = arrayOfs[arrayOfs.length-1]
console.log(lastWordofs)
let lenOfLastWord = lastWordofs.length
console.log(lenOfLastWord)


// function isAnagram(word1,word2)
// {
// let splitWord1 = word1.split(" ").toUpperCase
// let SortedWord1 = word1.sort()
// let splitWord1 = word1.split(" ").toUpperCase
// let SortedWord1 = word1.sort()
// }

function isAnagram(word1,word2,callback)
{
    return callback(word1,word2)
}

    const anagramOrNot = (word1, word2) =>
    {
        sortedWord1 = word1.toUpperCase().split("").sort().join()
        sortedWord2 = word2.toUpperCase().split("").sort().join()

        return sortedWord1===sortedWord2
    }

console.log(isAnagram('hello','World',anagramOrNot))
console.log(isAnagram('silent','listen',anagramOrNot))