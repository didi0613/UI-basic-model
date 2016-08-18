// Use sorted string as index
var arr = ["stop", "post", "eat", "tea", "tops", "apple"];

var sort = function (arr) {
    var hashmap = {};
    for (var i = 0; i < arr.length; i++) {
        var temp = arr[i].split('').sort(function (a, b) {
            return a < b;
        }).join('');

        if (hashmap[temp]) {
            hashmap[temp].push(arr[i]);
        } else {
            hashmap[temp] = [arr[i]];
        }
    }

    var str = "";
    for (var item in hashmap) {
        for (var object in hashmap[item]) {
            str += hashmap[item][object] + " ";
        }
        str += "; "
    }
    return str;
};

console.log(sort(arr));

// use 26 进制
var arr = ["stop", "post", "eat", "tea", "tops", "apple"];

function categorizeWords(arr) {
    var hashmap = {};

    for (var i = 0; i < arr.length; i++) {
        var index = getKey(arr[i]);
        if (hashmap[index]) {
            hashmap[index].push(arr[i]);
        } else {
            hashmap[index] = [arr[i]];
        }
    }

    var str = "";
    for (var word in hashmap) {
        for (var object in hashmap[word]) {
            str += hashmap[word][object] + " ";
        }
        str += "; ";
    }
    return str;
}

function getKey(str) {
    var sum = 0;
    for (var i = 0; i < str.length; i++) {
        sum += parseInt(str[i].charCodeAt());
    }
    return sum;
}

console.log(categorizeWords(arr));