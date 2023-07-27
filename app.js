const filterOutOdds = (...nums) => nums.filter(num => num % 2 === 0);

function findMin(...nums){
    let min;
    for (let num of nums){
        if (min == null){
            min = num;
        }
        else if (num < min){
            min = num;
        }
    }
    return min;
}

const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2});


function doubleAndReturnArgs(arr, ...args){
    args = args.map((val) => val * 2);
    
    return [...arr, ...args];
}

/** remove a random element in the items array
and return a new array without that item. */

function removeRandom(items) {
    const rand = Math.floor(Math.random() * (items.length - 1));

    return items.splice(rand, 1);
}

/** Return a new array with every item in array1 and array2. */

const extend = (array1, array2) => [...array1, ...array2];

/** Return a new object with all the keys and values
from obj and a new key/value pair */

function addKeyVal(obj, key, val) {
    const newObj = {...obj};

    newObj[key] = val;

    return newObj;

}


/** Return a new object with a key removed. */

function removeKey(obj, key) {
    delete obj[key];

    return obj;
}


/** Combine two objects and return a new object. */

const combine = (obj1, obj2) => ({...obj1, ...obj2});


/** Return a new object with a modified key and value. */

function update(obj, key, val) {
    obj[key] = val;

    return obj;
}