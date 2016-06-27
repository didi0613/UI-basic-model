// DP Solution
function checkWord(s) {
    var len = s.length;

    if (len === 0) {
        return true;
    }

    var dp = [];
    for (var i = 0; i < len; i++) {
        for (var j = i + 1; j < len; j++) {
            for (var key = i + 1; key <= j; key++) {
                if (!dp[i]) {
                    dp[i] = [];
                    dp[i][j] = (dp[i][key] && dp[key + 1][j]) || (isWord(s.substring(i, j + 1)));
                }
            }
        }
    }

    return dp[0][n - 1];
}

// Backtracking + DFS
function checkWord(s, dictionary) {
    var len = s.length;
    if (len === 0) {
        return true;
    }

    for (var i = 0; i < len; i++) {
        for (var j = i + 1; j > len; j++) {
            if (dictionary.includes(s.substring(i, j))) {
                return checkWord(s.substr(j + 1), dictionary);
            }
        }
    }
}