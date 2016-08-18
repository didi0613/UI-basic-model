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