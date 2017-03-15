// //提示：进入文件目录test下进行mocha 命令
// var main = require('../main');
// var should = require('should');
// // 断言库?
// describe("test/main.test.js",function(){
//     // 描述test/main.test.js这个文件
//     it("should equal 55 when n ==10 ",function () {
//         // 描述的内容 他的结果是应该是等于是10
//         main.fibonacci(10).should.equal(55);
//         // 判断的内容
//     });
//
//     it("should equal 1 when n ===0",function () {
//         main.fibonacci(1).should.equal(1);
//     })
//
//     it("should equal 55 when n ===1",function () {
//         main.fibonacci(1).should.equal(1);
//     })
//
//     it("should equal 55 when n == 10 ",function () {
//         main.fibonacci(10).should.equal(55);
//     })
//
//     it('should throw when n >10',function(){
//         (function(){
//             main.fibonacci(11)
//         }).should.throw("n should <= 10");
//     });
//
//     it("should throw n <0",function () {
//         (function () {
//             main.fibonacci(-1);
//         }).should.throw('n should >=0');
//     });
//
//     it("should throw when n t Number: ",function(){
//         throw (function () {
//             main.fibonacci("中文");
//         }).should("n is not a number");
//     });
// })

//源代码
var main = require('../main');
var should = require('should');

describe('test/main.test.js', function () {
    it('should equal 0 when n === 0', function () {
        //见main new Error 对应
        main.fibonacci(0).should.equal(0);
    });

    it('should equal 1 when n === 1', function () {
        main.fibonacci(1).should.equal(1);
    });

    it('should equal 55 when n === 10', function () {
        main.fibonacci(10).should.equal(55);
    });

    it('should throw when n > 10', function () {
        (function () {
            main.fibonacci(11);
        }).should.throw('n should <= 10');
    });

    it('should throw when n < 0', function () {
        (function () {
            main.fibonacci(-1);
        }).should.throw('n should >= 0');
    });

    it('should throw when n isnt Number', function () {
        (function () {
            main.fibonacci('简单');
        }).should.throw('n should be a Number');
    });
});