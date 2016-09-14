var throttle = function (callback, limit) {
    var wait = false;
    return function () {
        if (!wait) {
            wait = true;
            callback.call();
            setTimeout(function () {
                wait = false;
            }, limit);
        }
    }
};

var debounce = function (func, wait) {
    var timeout;
    return function () {
        clearTimeout(timeout);
        timeout = setTimeout(function () {
            func.call();
            timeout = null;
        }, wait);
    };
};

$('button').click (debounce(function () {
    $('#container').append('<div>hello world</div>');
}, 3000));

////////////////////////////HTML//////////////////////////////
// <button>Throttle Button</button>
// <div id="container"></div>