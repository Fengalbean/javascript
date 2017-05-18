/**
 * Created by dobbin on 2015/11/26.
 */
'use strict';
(function(){
    /**
     * 将数字转化为拥有x位小数位的形式
     * @param base
     * @param precison
     * @returns {number}
     */
    function roundTo (base, precison) {
        var m = Math.pow(10,precison);
        return Math.round(base * m) / m
    }
    // for example
    log(roundTo(3.1456,2));
    /**
     * 创建受约束的随机数
     * @param min
     * @param max
     * @returns {*}
     */
    function randomBetween (min, max) {
        return min + Math.floor(Math.random() * (max - min + 1));
    }
    // 例如生成1-10的10个随机数
    (function(){
        var arr = [];
        for (var i = 0; i < 10; i++ ) {
            arr.push(randomBetween(1,10));
        }
        log(arr);
    })();
    /**
     * 格式化货币值
     * @param base
     * @param precison
     * @returns {string}
     */
    function formatTo (base, precison) {
        var a = roundTo(base,precison);
        var s = a.toString();
        var decimalIndex = s.indexOf('.');
        if (precison > 0 && decimalIndex < 0) {
            decimalIndex = s.length;
            s += '.';
        }
        while (decimalIndex + precison + 1 > s.length) {
            s += '0';
        }
        return s;
    }
    log(formatTo(3000,3));

})();
