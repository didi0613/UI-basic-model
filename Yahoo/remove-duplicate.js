var removeDup = function (str) {
    var hashmap = new Array(str.length).fill(false);
    var arr = str.split('');
    for (var i = 0; i < arr.length; i++) {
        if (hashmap[arr[i]]) {
            arr.splice(i, 1);
            i--;
        } else {
            hashmap[arr[i]] = true;
        }
    }
    return arr.join('');
};

// abrcd
console.log('xxxx', removeDup('abracadabra'));