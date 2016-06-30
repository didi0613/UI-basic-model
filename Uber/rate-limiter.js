function rateLimiter(fn, limit) {
    var startTime = new Date();
    var currentTime = new Date();
    var count = 0;
    if (currentTime - startTime > 60 * 1000) {
        count === 0;
        startTime = currentTime;
    } else {
        if (count > limit) {
            console.error("Exceed the limit");
        } else {
            count++;
            fn.apply(this, arguments);
        }
    }
}

// http://blog.gssxgss.me/not-a-simple-problem-rate-limiting/
