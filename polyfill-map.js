var map = function (arr, callback) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        newArr.push(callback(arr[i]));
    }
    return newArr;
};

$('button').click(function () {
    if (typeof this.map === "function") {
        $('#container').append(this.map([1, 2, 3, 4, 5], function (item) {
            return item * 2;
        }));
    } else {
        $('#container').append(map([1, 2, 3, 4, 5], function (item) {
            return item * 2;
        }));
    }
});


///////////////////HTML////////////////////
// <button>Clicke Me!</button>
// <div id="container"></div>