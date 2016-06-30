function recompose(str1, str2) {
    var ret = [];
    for (var i = 0; i < str1.length; i++) {
        for (var j = 0; j < str2.length; j++) {
            var item = str1[i] + " jump " + str2[j];
            ret.push(item);
        }
    }

    return ret;
}