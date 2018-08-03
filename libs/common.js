const crypto = require('crypto')
module.exports={
    MD5_SUFFIX: 'sajdhsakjdnsa62183ui%$^$%',
    md5: function(str){
        // 以哪种方式加密
        var obj = crypto.createHash('md5')
        obj.update(str);
        // 以何种方式输出数据，16禁止
        return obj.digest('hex');
    }
}