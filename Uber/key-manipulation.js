// Save the max key value
var maxKey = [];
var maxValue = Number.MIN_VALUE;

// mapping key => count
var map = {};
function addKey(key) {
    if (key in map) {
        map[key]++;
    } else {
        map[key] = 1;
    }

    if (maxKey.length === 0) {
        maxKey.push(key);
    } else {
        if (map[key] > maxValue) {
            maxValue = map[key];
            maxKey.splice(0, maxKey.length);
            maxKey.push(map[key]);
        } else if (map[key] === maxValue) {
            // if there are multiple same key value pairs
            maxKey.push(key);
        }
    }
}

function getCountForKey(key) {
    return (key in map) ? map[key] : 0;
}

function getKeyWithMaxCount() {
    return maxKey;
}

function decrementKey(key) {
    if (key in map) {
        map[key]--;
    }
}