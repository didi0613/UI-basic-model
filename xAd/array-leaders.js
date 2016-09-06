function printLeaders(arr) {
    // scan from the right
    var ret = [arr[arr.length - 1]];
    var rightMax = arr[arr.length - 1];

    for (var i = arr.length - 2; i >= 0; i--) {
        if (arr[i] > rightMax) {
            ret.unshift(arr[i]);
            rightMax = arr[i];
        }
    }
    return ret;
}

console.log(printLeaders([16, 17, 4, 3, 5, 2]));