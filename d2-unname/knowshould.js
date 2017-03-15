var should =  require("should");
var num = 5;
var string = "abaozhi";
console.log((num).should.above(4));
// (5).should.above(4) 测试5 是不是大于4  倘若不是大于4的话则会抛出异常
console.log((string).should.startWith("a"));
