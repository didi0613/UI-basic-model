/*
 * 给一个array，都是正整数，没有重复，问是否存在一个subsequence其和等于target.
 * 例如：{1,2,5,6,10,12,17}, target=15. 应该返回true， 因为有{1,2,12}或{5，10}.
 * */

// DP Solution
var test = function (arr, n, target) {
    if (target === 0) {
        return true;
    }

    if (n === 0) {
        return false;
    }

    return test(arr, n - 1, target) || test(arr, n - 1, target - arr[n - 1]);
};

console.log(test([1, 2, 5, 6, 10, 12, 17], 6, 15));

// DFS Solution
var test = function(arr,target){
    var visited = new Array(arr.length);
    var ret = [];
    testBuilder(arr, target, ret, [], 0, 0, visited);
    return ret;
};

function testBuilder(arr,target, ret, item, sum, start,visited) {
    if(sum > target) {
        return false;
    }

    if(sum === target) {
        ret.push(item.slice());
    }

    for(var i=start;i<arr.length;i++) {
        if(!visited[i]) {
            visited[i] = true;
            item.push(arr[i]);
            sum+=arr[i];
            testBuilder(arr, target, ret, item, sum, i, visited);
            sum-=arr[i];
            item.pop();
            visited[i] = false;
        }
    }
}

console.log(test([1,2,5,6,10,12,17],15));