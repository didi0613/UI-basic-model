/*
 2.1、gas station
 输入：gas station 位置 [X0, X1, X2 ... Xn]
 条件：car 加一次油最多能跑 100，要求停最少次数到终点 (Xn)
 输出：停车加油的位置 ArrayList<Integer>()
 2.2、follow up
 每个station 有 cost [C0, C1, C2...]
 求使得 cost 最小，返回停车加油次数
 */
function minAddGas(arr) {
    var n = arr.length;
    var dp = new Array(n + 1).fill(n + 1);

    dp[0] = 0;
    dp[1] = 0;

    for (var i = 2; i <= n; i++) {
        for (var j = 0; j < i; j++) {
            if (arr[i] - arr[j] <= 100) {
                dp[i] = Math.min(dp[i], dp[j] + 1);
            }
        }
    }

    return dp[n];
}

var arr = [100, 150, 200, 230, 350, 400];
console.log("xxxx", minAddGas(arr));