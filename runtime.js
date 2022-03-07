const perf = require('execution-time')();


function doublerAppend(nums){
    perf.start()

    let new_nums = [5,9,10,25,6,7,8];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
        let resultsAppend = perf.stop
    }

}

// Results for the extraLargeArray
// insert 1.0034081 s
// append 4.8653 ms
function doublerInsert(nums){
perf.start()
    let new_nums = [5,9,10,25,6,7,8];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
        let resultsInsert = perf.stop()
    }

}
// Results for the extraLargeArray
// insert 1.2571821 s
// append 5.4099 ms

function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}
// In the case of .push, the runtime complexity for an array should always be O(1) because the only one element is being effected, the element that is pushed, all other elements in the array remain static.
// In the case of .unshift, the entire array is effected, as an element is added to beginning of the array, all subsequent elements must of necessity, move or back. The runtime complexity is therefore O(n) as the length of the array is relevant. The longer the array, the more complex and taxing the runtime.

const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);



// How long does it take to double every number in a given 
// array? 

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(extraLargeArray);
let resultsAppend = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(extraLargeArray);
let resultsInsert = perf.stop();


console.log('Results for the extraLargeArray');
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);
