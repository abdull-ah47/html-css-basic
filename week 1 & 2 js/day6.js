//question 1

let string = "                                         ok";
let trimmedString = string.trimStart();


let lengthOfString = trimmedString.length;
console.log("Length of the trimmed string:", lengthOfString);


function isLengthGreaterThan10(s) {
    return s.length > 10;
}
console.log("Is the string length greater than 10?", isLengthGreaterThan10(trimmedString));


function findLongestWordLength(sentence) {
    let words = sentence.split(' ');
    let longestWord = words.reduce((longest, currentWord) => currentWord.length > longest.length ? currentWord : longest, "");
    return longestWord.length;
}


let sentence = "Given a sentence, find the length of the longest word in the sentence";
console.log("Length of the longest word:", findLongestWordLength(sentence));

//question no 2


function firstAndLastChar(str) {
    let firstChar = str.charAt(0);
    let lastChar = str.charAt(str.length - 1);
    return { firstChar, lastChar };
}


function middleChar(str) {
    let middleIndex = Math.floor(str.length / 2);
    return str.charAt(middleIndex);
}


let exampleString = "JavaScript";


let { firstChar, lastChar } = firstAndLastChar(exampleString);
console.log("First character:", firstChar);
console.log("Last character:", lastChar);


console.log("Middle character:", middleChar(exampleString));


//question no 3


function containsJavaScript(sentence) {
    let lowerCaseSentence = sentence.toLowerCase();
    return lowerCaseSentence.includes("javascript");
}

function capitalizeFirstChar(str) {
    let lowerCaseStr = str.toLowerCase();
    return lowerCaseStr.charAt(0).toUpperCase() + lowerCaseStr.slice(1);
}


let sentence = "I am abdullah!";
let string = "hello";


console.log("Contains 'javascript'?", containsJavaScript(sentence));
console.log("Capitalized string:", capitalizeFirstChar(string));



//question no 5

function extractBetweenIndicesSlice(str, start, end) {
    return str.slice(start, end);
}


function extractBetweenIndicesSubstring(str, start, end) {
    return str.substring(start, end);
}


let start = 4;
let end = 10;


console.log("Extracted between indices with slice:", extractBetweenIndicesSlice(exampleString, start, end));
console.log("Extracted between indices with substring:", extractBetweenIndicesSubstring(exampleString, start, end));

//question no 6

function replaceSpacesWithUnderscores(sentence) {
    return sentence.replace(/ /g, "_");
}


let sentence = "JavaScript is fun to learn!";
console.log("Sentence with underscores:", replaceSpacesWithUnderscores(sentence));
// Function to replace the first occurrence of a given character with another character
function replaceFirstOccurrence(str, oldChar, newChar) {
    return str.replace(oldChar, newChar);
}


let exampleString = "JavaScript";
let oldChar = "a";
let newChar = "o";


console.log("String after replacement:", replaceFirstOccurrence(exampleString, oldChar, newChar));

//question no 7

function splitCommaSeparatedValues(str) {
    return str.split(",");
}


let csvString = "apple,banana,orange,grape";
console.log("Array of values:", splitCommaSeparatedValues(csvString));

function splitIntoCharacters(sentence) {
    return sentence.split("");
}

let sentence = "JavaScript";
console.log("Array of characters:", splitIntoCharacters(sentence));

//question 8

function checkAndTrimSpaces(str) {
    let trimmedString = str.trim();
    

    if (str.length !== trimmedString.length) {
        console.log("The string had leading or trailing spaces. After trimming:", trimmedString);
    } else {
        console.log("The string had no leading or trailing spaces.");
    }

    return trimmedString;
}


let exampleString = "   Hello, World!   ";
let trimmedResult = checkAndTrimSpaces(exampleString);

//question no 10

function concatenateWithSpace(str1, str2) {
    return str1.concat(" ", str2);
}


let string1 = "Hello";
let string2 = "World";
console.log("Concatenated string:", concatenateWithSpace(string1, string2));

function concatenateFullName(firstName, lastName) {
    return firstName.concat(" ", lastName);
}


let firstName = "John";
let lastName = "bhsi";
console.log("Full name:", concatenateFullName(firstName, lastName));

