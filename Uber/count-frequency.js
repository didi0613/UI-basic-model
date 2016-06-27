function getFrequency(mystring, numofwords) {
    mystring = mystring.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()]/g, "");
    var words = mystring.split(' '),
        sortedWords = words.sort(),
        uniqueWords = [],
        d = {},
        wordcount = 1,
        result = [];

    for (var i = 0; i < sortedWords.length; i++) {

        var currentword = sortedWords[i];

        if (sortedWords[i + 1] === currentword) {
            wordcount++;
        }

        if (!d[currentword]) {
            d[currentword] = true;
            uniqueWords.push({word: currentword, count: wordcount});
        }
    }

    uniqueWords = uniqueWords.slice(0, numofwords).sort(function (a, b) {
        return b.count - a.count;
    });

    for (i = 0; i < uniqueWords.length; i++) {

        result.push(uniqueWords[i].word);
    }

    return result.toString();
}