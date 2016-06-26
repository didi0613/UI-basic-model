function rg(url) {
    //http://www.linkedin.com?q1=v1&q2=v2
    var reg = /.*\?(\w+\=\w+)\&(\w+\=\w+)[\W|\w]*/;
    return url.replace(reg, "$1 $2");
}
console.log("xxxx", rg('http://www.linkedin.com?q1=v1&q2=v2#xxx'));
