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
}  