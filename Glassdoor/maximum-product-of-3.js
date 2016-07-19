/*
 * The O(n) solution is obtained by keeping track of the max three integers and the min two integers.
 * The max product will either be (min_one * min_two * max_one) or (max_one * max_two * max_three).
 * */
function maxProduct(arr) {
    var len = arr.length;
    if (len === 3) {
        return arr[0] * arr[1] * arr[2];
    }

    var maxThree = getMaxThree(arr);
    var minTwo = getMinTwo(arr);

    return Math.max(minTwo[0] * minTwo[1] * maxThree[0], maxThree[0] * maxThree[1] * maxThree[2]);
}

function getMaxThree(arr) {
    var ret = new Array(3);
    ret.fill(Number.MIN_VALUE);
    var len = arr.length;

    for (var i = 0; i < len; i++) {
        if (arr[i] >= ret[0]) {
            ret[2] = ret[3];
            ret[1] = ret[0];
            ret[0] = arr[i];
        } else if (arr[i] >= ret[1]) {
            ret[2] = ret[3];
            ret[1] = arr[i];
        } else if (arr[i] >= ret[2]) {
            ret[2] = arr[i];
        }
    }

    return ret;
}

function getMinTwo(arr) {
    var ret = new Array(2);
    ret.fill(Number.MAX_VALUE);
    var len = arr.length;

    for (var i = 0; i < len; i++) {
        if (arr[i] <= ret[0]) {
            ret[1] = ret[0];
            ret[0] = arr[i];
        } else if (arr[i] <= ret[1]) {
            ret[1] = arr[i];
        }
    }

    return ret;
}