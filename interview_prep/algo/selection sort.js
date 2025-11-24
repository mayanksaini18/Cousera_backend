

function bubblesort(arr){
    let n = arr.length

for ( let i = 0; i < n -1 ; i++ ){
     let mini = i ;
        for ( let j = i; j < n  ; j++ ){
            if ( arr[j] < arr[mini] ){
                mini = j;
            }
        }
        // swap
        let temp = arr[i];
        arr[i] = arr[mini];
        arr[mini] = temp;
    }
}
let array = [64, 34, 25, 12, 22, 11, 90];
bubblesort(array);
console.log("Sorted array: " + array);