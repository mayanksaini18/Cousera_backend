// at each iteration largest element bubbles up to the end
function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n ; i++) {
            for (let j = 0; j < n - i - 1; j++) 
                if (arr[j] > arr[j + 1]) {
                    // swap arr[j] and arr[j+1]
                    let temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }

    }
}
let array = [64, 34, 25, 12, 22, 11, 90];
bubbleSort(array);
console.log("Sorted array: " + array);