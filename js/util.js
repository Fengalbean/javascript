/**
 * Created by Administrator on 2016/11/26.
 */

// 检测数据类型
function type(o) {
    var s = Object.prototype.toString.call(o);
    return s.match(/\[object (.*?)\]/)[1].toLowerCase();
}
// 打印日志
function log (str) {
    if ( type(str) === 'object' ) {
        return console.log(JSON.stringify(str)+'\n');
    }
    return console.log(str);
}
