const common = require('./libs/common')
//str里加的字符串随便，但是一定不能丢失
var str = '123456';
var str = common.md5(str+'sajdhsakjdnsa62183ui%$^$%')
console.log(str)
