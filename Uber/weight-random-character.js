// Weight Random Character，
// 输入e.g. data = [{label: 'A', weight: 2}, {label: 'B', weight: 3}, {label: 'C', weight: 5}]，
// 实现randLabel(data)，
// 按权重随机输出label（'A'，'B'或'C'，'A'的可能性为20%，'B'为30%，'C'为50%）

// Idea
// 1. 首先是输入不多，权重不大的情况：按照构建一个字符串比如str = 'AABBBCCCCC'，
// 随机生成范围rand = [0, str.length - 1]的整数，返回str[rand]；

// 2. 如果输入比较多，权重数字很大，对输入进行处理把权重变成累计权重，
// 比如对于上面的输入处理成data ＝ [{label: 'A', cumulativeWeight: 2},
// {label: 'B', cumulativeWeight: 5}, {label: 'C', cumulativeWeight: 10}]，
// 随机生成范围rand = [0, data[data.length - 1].cumulativeWeight)的整数，
// 对于data中元素elem从第一个开始搜索，
// 如果rand < elem.cumulativeWeight则返回elem.label；

// 3. 在产生随机数后可以进一步把搜索改为二分搜索