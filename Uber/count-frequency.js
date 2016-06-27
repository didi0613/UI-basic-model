function getFrequency(string) {
    var cleanString = string.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()]/g, ""),
        words = cleanString.split(' '),
        frequencies = {},
        word, i, ret = {};

    for (i = 0; i < words.length; i++) {
        word = words[i];
        frequencies[word] = frequencies[word] || 0;
        frequencies[word]++;
    }
    words = Object.keys(frequencies);
    return words.sort(function (a, b) {
        return frequencies[b] - frequencies[a];
    });
}

console.log(getFrequency("hello world hello dear uber uber is the best"));