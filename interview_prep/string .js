
//palindrome check

function isPalindrome(str) {
    let revesed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        revesed += str[i];
    }
    return revesed === str;
}
console.log(isPalindrome("racecar")); // Output: true
console.log(isPalindrome("hello")); // Output: false

console.log('------------------');
//anagram check


// reverse the string 

 function reverseString(str){
    let reversed = '';
    for ( let i = str.length -1 ; i >= 0 ; i-- ){
        reversed += str[i];
    }
    return reversed;
 }

console.log(reverseString("hello")); // Output: "olleh"

// count characters 
    function countCharacters(str){
        const charCount = {};
        for ( let char of str ){
            if ( charCount[char] ){
                charCount[char]++;
            } else {
                charCount[char] = 1;
            }

        }
        return charCount;
    }
    console.log(countCharacters("hello world"));


    // count vowels
    function countVowels(str){
        const vowels = 'aeiouAEIOU';
        let count = 0;
        for ( let char of str ){
            if ( vowels.includes(char)){
                count++;
            }
        }
        return count;
        }
    console.log(countVowels("hello world"));