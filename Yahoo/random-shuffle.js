function shuffle(array) {
    var currentIndex = array.length;

    while (currentIndex !== 0) {
        var randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        var temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

console.log("xxxxx", shuffle([1, 2, 3, 4, 5]));