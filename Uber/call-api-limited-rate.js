function callAPILimitedRate() {
    var curTime = new Date();
    var startTime = null;
    var count = 0;
    var difference = curTime - startTime;
    if (difference > 60 * 1000) {
        count = 0;
        startTime = curTime;
    } else {
        count++;
    }
}