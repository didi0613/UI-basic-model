function throttle(fn, threshhold) {
    var last = 0;

    return function () {
        var now = new Date();

        if (now > last + threshhold) {
            fn.apply(this);
            last = now;
        }
    }
}

$('body').on('mousemove', throttle(function (event) {
    console.log('tick');
}, 1000));