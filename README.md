
# 数字的处理

## 常用的Math方法

- **Math.ceil  向上取整  Math.ceil(4.2) 返回值为5**

- **Math.floor 向下取整  Math.floor(4.2) 返回值为4**

- **Math.round 四舍五入 Math.round(4.2) 返回值为4，  Math.round(4.6)返回5**

- **Math.pow 计算幂等 Math.round(2,4) 返回16**

- **Math.sqrt 开方计算 Math.sqrt(9) 返回3**

- **Math.random 生成0-1的伪随机数**

## 数字与字符串相互转化

var a = 
String() 

- **将数字转化为拥有x位小数位的形式**

```

function roundTo (base, precison) {
    var m = Math.pow(10,precison);
    return Math.round(base * m) / m;
}
    
```

    
- 创建受约束的随机数

```

function randomBetween (min, max) {
    return min + Math.floor(Math.random() * (max - min + 1));
}

    
```
- 格式化货币值


```

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
    
```


## 字符串的处理