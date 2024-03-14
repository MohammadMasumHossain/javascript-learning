// function numberOFVowel(vowelString) {
//     let count = 0;
//     for (let vowel of vowelString) {
//         if (vowel === "a" || vowel === "e" || vowel === "i" || vowel === "o" || vowel === "u") {
//             count++;
//         }
//     }
//     console.log(count);
// }



// numberOFVowel("masum");

const arrowfunction = (charOfString) => {
    let count = 0;
    for (let char of charOfString) {
        char = char.toLowerCase();
        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
            count++;
        }
    }
    return count;
}

let vowel = arrowfunction("i lOve you");
console.log(vowel);
