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

/**
 * give two arrays of numbers returns a new array with the values from both arrays sorted
 * 
 * @param {Array} arr1 - an array of numbers
 * @param {Array} arr2 - an array of numbers
 * @returns a new array with values from both arrays sorted
 */
function merge(arr1, arr2){
    const results = [];
    let i = 0;
    let j = 0;
   while( i < arr1.length && j < arr2.length){
        if(arr1[i] < arr2[j]){
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j]);
            j++;
        }
    }
    while(i < arr1.length){
        results.push(arr1[i])
        i++
    }
    while(j < arr2.length){
        results.push(arr2[j])
        j++
    }
    return results;
}


