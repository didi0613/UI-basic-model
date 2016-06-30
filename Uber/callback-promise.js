// 有两个api：/v1/api1返回{result: val1}，/v1/api2返回
// {result: val2}，提供异步方法request(url, success)，
// 写代码打印出{result: val1 + val2}，
// 不能使用Promise，不能嵌套callback。

// callback
function addResults(urls) {
    var cache = [];

    urls.forEach(function (url) {
        request(url, function (res) {
            cache.push(res);

            if (cache.length === urls.length) {
                var sum = cache.reduce(function (a, b) {
                    return a + b;
                }, 0);
                return sum;
            }
        });
    });
}

// promise
function addResults(urls) {
    var promises = urls.map(function(url) {
        return new Promise((resolve) => { request(url, resolve); });
    });

    Promise.all(promises).then(results => {
        var sum = cache.reduce((prev, cur) => { return prev + cur; }, 0);
    console.log({result: sum});
});
}