function callAPILimitedRate(limit) {
    var curTime = new Date();
    var startTime = curTime;
    var count = 0;
    var difference = curTime - startTime;
    if (difference > 60 * 1000) {
        count = 0;
        startTime = curTime;
    } else {
        count++;

        if (count > limit) {
            console.error("Exceed limitations");
        } else {
            // Call API
        }
    }
}