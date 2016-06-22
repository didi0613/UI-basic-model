function endorsementsBuilder(arr) {
    var hash = [];
    for (var i in arr) {
        if (hash[arr[i].skill]) {
            hash[arr[i].skill].push(arr[i].user);
        } else {
            hash[arr[i].skill] = [arr[i].user];
        }
    }

    var ret = [];
    for (var j in hash) {
        ret.push({skill: j, user: hash[j], count: hash[j].length});
    }

    // Follow up sort
    ret.sort(function (a, b) {
        return a.count - b.count;
    });

    return ret;
}

console.log(endorsementsBuilder(endorsements));