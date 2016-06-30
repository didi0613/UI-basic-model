var input = [
    ['A', 1.1, 2.3],
    ['B', 1.3, 3.4]
];

function loginOut(input) {
    var login = [];
    var logout = [];
    var ret = [];

    for (var i in input) {
        login.push(input[i][1]);
        logout.push(input[i][2]);
    }

    var index1 = 0, index2 = 0;
    var n = 0;
    login.sort();
    logout.sort();
    while (index1 < login.length && index2 < logout.length) {
        if (login[index1] <= logout[index2]) {
            n++;
            ret.push({time: login[index1], num: n});
            index1++;
        } else {
            n--;
            ret.push({time: logout[index2], num: n});
            index2++;
        }
    }

    if (index2 > 0) {
        while (index2 < logout.length) {
            n--;
            ret.push({time: logout[index2], num: n});
            index2++;
        }
    }

    return ret;
}