// idea : on sorted array , we can eliminate half of the search space at each step

function binarySearch(arr, target){
    let left = 0 , right = arr.length -1;
    while ( left <= right ){
        let mid =Math.floor((left + right)/2);
        
        if ( arr [mid] === target ) return mid;
        else if ( arr [mid] < target ) left = mid + 1;
        else right = mid -1;

    }
    return -1; // not found
}
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(binarySearch(array, 7)); // 6