/**
 * This function will accept an array of numbers and return an array with the numbers 
 * sorted from smallest to largest.
 * @param {Array} arr - an array of numbers
 * @returns {Array} - an array of numbers sorted from smallest to largest
 */

function bubbleSort(arr){
    for(let i = 0; i < arr.length; i++){
        let swapped = false;
        for(let j = 0; j < arr.length; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                swapped = true;
            }
        }
        if(!swapped) break;
    }
    return arr; 
}

