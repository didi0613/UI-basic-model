// Solution 1 Constructor
var hashMap = {
    Set: function (key, value) {
        this[key] = value
    },
    Get: function (key) {
        return this[key]
    },
    Contains: function (key) {
        return this.Get(key) == null ? false : true
    },
    Remove: function (key) {
        delete this[key]
    }
};

// Solution 2
var map = {};
// add a item
map[key1] = value1;
// or remove it
delete map[key1];
// or determine whether a key exists
key1 in map;