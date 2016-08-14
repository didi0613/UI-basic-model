/* Given an array of characters, return the first character that only occurred once. */

var arr = ['e', 'b', 'c', 'd', 'f', 'r', 'b', 'c', 'z', 'a'];

var findFirstUnique = function (arr) {
    var hashmap = [];
    for (var i = 0; i < arr.length; i++) {
        if (hashmap[arr[i]]) {
            hashmap[arr[i]]++;
        } else {
            hashmap[arr[i]] = 1;
        }
    }

    // Scan the array and find the first count
    for (var j = 0; j <= arr.length; j++) {
        if (hashmap[arr[j]] === 1) {
            return arr[j];
        }
    }

    return -1;
};

console.log(findFirstUnique(arr));