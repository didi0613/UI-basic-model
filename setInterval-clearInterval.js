var timeoutId = null;

function interval(func, wait, times) {
    setTimeout(function (wait, times) {
        return function () {
            if (typeof t === "undefined" || t-- > 0) {
                timeoutId = setTimeout(interv, w);
                try {
                    func.call(null);
                }
                catch (e) {
                    t = 0;
                    throw e.toString();
                }
            }
        }
    }, wait);
}

interval(function () {
    $("#container").append("<div>Hello World</div>")
}, 1000, 10);

$("button").click(function () {
    window.clearTimeout(timeoutId);
});

///////////////////HTML/////////////////////
// <button>Clear Interval</button>
// <div id="container"></div>