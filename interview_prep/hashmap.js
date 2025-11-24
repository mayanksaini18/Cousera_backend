/**
 * We will do:

Frequency counter

Check anagram

First non-repeating character

Two-sum problem

Count words

Check duplicates in array
 */

// Frequency counter

function charFrequency(str){
    let Fmap = {};

    for ( let ch of str ){
        if ( Fmap[ch] ){
            Fmap[ch]++;
        } else {
            Fmap[ch] = 1;
        }

    }
    return Fmap;
}
console.log(charFrequency("hello world"));
//Time Complexity: O(n)
//Each character becomes a key, and its count becomes value.
//Space Complexity: O(n)

// Check anagram
// Two strings are anagram if they have the same characters with same count.
function areAnagrams(str1, str2){
    if ( str1.length !== str2.length ) return false;

    let map ={};

    for ( let ch of str1 ){
         if ( map[ch] ){
            map[ch]++;
            } else {
                map[ch] = 1;
            }
    }

    for ( let ch of str2 ){
        if ( map[ch] ){
            map[ch]--;
        } else {
            return false;
        }
    }
    return true;
}
console.log(areAnagrams("listen", "silent")); // true
// timpe complexity : O(n)

// First non-repeating character
function firstNonRepeatingChar(str){
    let map = {};
    for ( let ch of str ){
        if ( map[ch] ){
            map[ch]++;
        } else {
            map[ch] = 1;
        }
    }
    for ( let ch of str ){
        if ( map[ch] === 1 ) return ch;
    }
}

// Two-sum problem
function twoSum(arr, target){
    let map = {}; // value - > index
    for ( let i = 0; i < arr.length; i++ ){
         for ( let j = i + 1; j < arr.length; j++ ){
            if ( arr[i] + arr[j] === target ){
                return [i, j];
            }
         }
    }         
}

function OptimalTwoSum(arr, target){
    let map = {}; // value - > index
    for ( let i = 0; i < arr.length; i++ ){
        // arr[i] + x = target => x = target - arr[i]
        let x = target - arr[i];
        if ( map[x] !== undefined ){
            return [map[x], i];
        } else {
            map[arr[i]] = i;
            }
         }
}
        
console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
console.log(OptimalTwoSum([2, 7, 11, 15], 9)); // [0, 1]

// Count words

function countWords(str){
    let words = str.split(' ');
    let map = {};
    for ( let word of words ){
        if ( map[word] ){
            map[word]++;
        } else {
            map[word]=1;
        }
    }
    return map;
}
console.log(countWords("hello world hello")); // { hello: 2, world: 1 }

// count dulplicates in array
function hasDuplicates(arr){
  let map = {} ;
  for  ( let num of arr ){
    if ( map[num] ) return true;
    else {
        map[num] = 1;
    }

  }
    return false;
}
console.log(hasDuplicates([1, 2, 3, 4, 5, 1])); // true