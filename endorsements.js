/*
 Ouput
 [
 { skill: 'javascript', user: [ 'Chad', 'Bill', 'Sue' ], count: 3 },
 { skill: 'css', user: [ 'Sue', 'Bill' ], count: 2 },
 { skill: 'html', user: [ 'Sue' ], count: 1 }
 ];
 */

var endorsements = [
    { skill: 'javascript', user: 'Chad' },
    { skill: 'javascript', user: 'Bill' },
    { skill: 'css', user: 'Sue' },
    { skill: 'javascript', user: 'Sue' },
    { skill: 'css', user: 'Bill' },
    { skill: 'html', user: 'Sue' }
];

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