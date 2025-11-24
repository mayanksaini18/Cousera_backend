
//  finding the max value in an array

function findMax(arr){
    let max = - Infinity;
    for ( let i = 0; i < arr.length; i++ ){
        if ( arr[i] > max ) max = arr[i];
    }
    return max;
}

const array = [3, 5, 7, 2, 8, -1];
console.log(findMax(array)); // Output: 8


//  finding the min
function findMin(arr){
    let min =  Infinity;
    for ( let i = 0; i < arr.length; i++ ){
        if ( arr[i] < min ) min = arr[i];
    }
    return min;
}

const array2 = [3, 5, 7, 2, 8, -1];
console.log(findMin(array)); // Output: 8


// reversing the array 
 function reverseArray(arr){
    let left = 0 , right = arr.length -1;

    while ( left < right ){
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
    }

    return arr;

 }
    const array3 = [1, 2, 3, 4, 5];
    console.log(reverseArray(array3)); // Output: [5, 4, 3, 2, 1]


    let arr = [1, 2, 3, 4, 5 , 5 , 6 ,4 , 8 ,9 ,0 , 2 ,3 ,1 ];
    let unique =[...new Set(arr)]
    console.log(unique);