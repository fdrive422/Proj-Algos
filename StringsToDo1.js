// Remove Blanks - create a function that, given a string, returns all of that string’s contents, but without blanks. 
function removeBlanks(string) {
    // make new string
    let newString = " "
    for (let i = 0; i < string.length; i++) {
        if (string[i] != " ") {
            newString += string[i]
        }
    }
    return newString
}
console.log(removeBlanks(" Pl ayTha tF u nkyM usi c ")) // => "PlayThatFunkyMusic"
console.log(removeBlanks("I can not BELIEVE it's not BUTTER")) // => "IcannotBELIEVEit'snotBUTTER"


// Get Digits - create a JavaScript function that given a string, returns the integer made from the string’s digits. You are allowed to use isNaN() and Number().
function getDigits(string) {
    let newDigits = " "
    for (let i in string) {
        if (!isNaN(string[i])) {
            newDigits += string[i]
        }
    }
    return Number(newDigits)
}
console.log(getDigits("abc8c0d1ngd0j0!8")) // => 801008
console.log(getDigits("0s1a3y5w7h9a2t4?6!8?0")) // => 1357924680


// Acronyms - create a function that, given a string, returns the string’s acronym (first letter of the word capitalized). You are allowed to use .split() and .toUpperCase().
function createAcronyms(string) {
    let acronymArr = string.split(' ')
    let acronymStr = ' '

    for (let word in acronymArr) {
        if (acronymArr[word].length > 0) {
            acronymStr += acronymArr[word][0].toUpperCase()
        }
    }

    return acronymStr
}
console.log(createAcronyms(" there's no free lunch - gotta pay yer way. ")) // => "TNFL-GPYW". 
console.log(createAcronyms("Live from New York, it's Saturday Night!")) // => "LFNYISN". 


// Count Non-Spaces- create a function that, given a string, returns the number of non-space characters found in the string. 
function countNonSpaces(string) {
    let counter = 0
    for (let char in string) {
        if (string[char] != ' ') {
            counter++
        }
    }
    return counter
}
console.log(countNonSpaces("Honey pie, you are driving me crazy")) // => 29
console.log(countNonSpaces("Hello world !")) //=> 11


// Remove Shorter Strings - create a function that, given an array of strings and a numerical value, returns an array that only contains strings longer than or equal to the given value.
function removeShorterStrings(arr, len) {
    let newStrings = []
    let nextIndex = 0
    for (let value in arr) {
        if (arr[value].length >= len) {
            newStrings[nextIndex++] = arr[value]
        }
    }
    return newStrings
}
console.log(removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4)) // => ['Good morning', 'sunshine', 'Earth', 'says', 'hello']
console.log(removeShorterStrings(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3)) //=> ['There', 'bug', 'the', 'system']