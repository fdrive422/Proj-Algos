// Push Front: given an array and an additional value, insert this value at the beginning of the array. You may use .push(), you are able do this without it though!
function pushFront(arr, value) {
    for (let i = arr.length; i >= 0; i--) {
        arr[i] = arr[i - 1];
    }
    arr[0] = value

    return arr
}
console.log(pushFront([5, 7, 2, 3], 8)) // => [8,5,7,2,3]
console.log(pushFront([99], 7)) // => [7,99]]))

// Pop Front: given an array, remove and return the value at the beginning of the array. Prove the value is removed from the array by printing it. You may use .pop(), you are able do this without it though!
function popFront(arr) {
    let value = arr[0];
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i + 1]
    }
    arr.length = arr.length - 1
    console.log(arr)

    return value
}
console.log(popFront([0, 5, 10, 15])) // => 0 returned, with [5,10,15] printed in the function
console.log(popFront([4, 5, 7, 9])) // => 4 returned, with [5,7,9] printed in the function


// Pop Front using pop() method
function popFront(arr) {
    let value = arr[0];
    for (let i = 1; i < arr.length; i++) {
        arr[i - 1] = arr[i]
    }
    arr.pop(); // pop extra value
    console.log(arr)

    return value
}
console.log(popFront([0, 5, 10, 15])) // => 0 returned, with [5,10,15] printed in the function
console.log(popFront([4, 5, 7, 9])) // => 4 returned, with [5,7,9] printed in the function


// Insert At: Given an array, index, and additional value, insert the value into array at given index. You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val). You may use .push(), you are able do this without it though!
function insertAt(arr, index, value) {
    for (let i = arr.length; i >= index; i--) {
        arr[i] = arr[i - 1];
    }
    arr[index] = value

    return arr
}
console.log(insertAt([100, 200, 5], 2, 311)) // => [100,200,311,5]
console.log(insertAt([9, 33, 7], 1, 42)) // => [9,42,33,7]


// Remove At: given an array and an index into array, remove and return the array value at that index. Prove the value is removed from the array by printing it. Think of popFront(arr) as equivalent to removeAt(arr,0).
function removeAt(arr, index) {
    let value = arr[index];
    for (let i = index + 1; i < arr.length; i++) {
        arr[i - 1] = arr[i]
    }
    arr.pop()
    console.log(arr)

    return value
}
console.log(removeAt([1000, 3, 204, 77], 1)) // => 3 returned, with [1000,204,77] printed in the function
console.log(removeAt([8, 20, 55, 44, 98], 3)) // => 44 returned, with [8,20,55,98] printed in the function


// Swap Pairs: swap positions of successive pairs of values of given array. If length is odd, do not change the final element.
function inserAt(arr) {
    if (arr.length % 2 == 0) {
        for (let i = 0; i < arr.length; i += 2) {
            value = arr[i + 1];
            arr[i + 1] = arr[i];
            arr[i] = value;
        }
    } else {
        for (let i = 0; i < arr.length - 1; i += 2) {
            value = arr[i + 1];
            arr[i + 1] = arr[i]
            arr[i] = value
        }
    }

    return arr
}
console.log(inserAt([1, 2, 3, 4])) // => [2,1,4,3]
console.log(inserAt(["Brendan", true, 42])) // => [true,"Brendan",42]


// Remove Duplicates: Given a sorted array, remove duplicate values. Because array elements are already in order, all duplicate values will be grouped together. If you already made the Remove At function, you are welcome to use that! If you solved this using nested loops, for an extra challenge, try to do it without any nested loops!
function removedDuplicates(arr) {
    let value = arr[0];
    let sort = [arr[0]];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== value) {
            sort = [...sort, arr[i]];
            value = arr[i];
        }
    }

    return sort;
}
console.log(removedDuplicates([-2, -2, 3.14, 5, 5, 10])) // => [-2,3.14,5,10]
console.log(removedDuplicates([9, 19, 19, 19, 19, 19, 29])) // => [9,19,29]