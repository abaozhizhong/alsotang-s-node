
// var fibonacci = function (n) {
//     if (n == 0) {
//         return 0;
//     }
//     if (n == 1) {
//         return 1;
//     }
//     return fibonacci(n - 1) + fibonacci(n - 2);
// }


var fibonacci = function (n) {
    if (typeof n !== 'number') {
        //抛出异常跟后面的对应也会通过mocha测试
        throw new Error("n should be a Number");
    }
    if (n < 0) {
        throw new Error("n should >= 0");
    }
    if (n > 10) {
        throw new Error("n should <= 10");
    }
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}


if (require.main === module) {
    //如果 直接node main 执行文件的话则执行下面的程序
    process.argv.forEach(function (value, index) {
        // process.argv 是node main 20 10 5 后面的参数 process.argv[2]开始 是20
        console.log("index: " + index + "value: " + value);
    })
    var n = Number(process.argv[2]);
    console.log('fibonacci' + n + 'is', fibonacci(n));
}
exports.fibonacci = fibonacci;