<!--
 * @Description: 
 * @Version: 1.0.0
 * @Author: lax
 * @Date: 2022-01-14 00:39:40
 * @LastEditors: lax
 * @LastEditTime: 2023-02-02 19:48:38
 * @FilePath: \Julian.js\readme.md
-->

# julian.js
Julian Day Object,extend `Date` Object
基于Date并支持儒略日的时间函数对象,主要用于天文或大时间尺度的计算


## USAGE/使用
```
const Time = require("julian.js");
const date = new Time();
const jd = date.getJD();
```

# API
## INIT/初始化
```
new Time(date,ignore)
```
### date
Date Object
Date对象
### ignore
ignore ΔT, default true
是否忽略力学时和世界协调时的差距(ΔT)

## JulianDay/儒略日
### object.getJulianDay()
get julian day
获取儒略日
### object.getJD()
same with getJulianDay()
获取儒略日 同getJulianDay()

### object.getModifiedJulianDay()
获取简化儒略日，即儒略日 - 2400000.5

### object.getMJD()
获取简化儒略日 同getModifiedJulianDay()

## 力学时 DynamicTime

### object.getDynamicTime()
获取力学时对应的date

### object.getDT()
获取力学时对应的date 同getDynamicTime()

### object.getDynamicDate()
获取力学时的天数
### object.getDynamicDay()
获取力学时的星期
### object.getDynamicFullYear()
获取力学时的年
### object.getDynamicHours()
获取力学时的小时
### object.getDynamicMilliseconds()
获取力学时的毫秒
### object.getDynamicMinutes()
获取力学时的分钟
### object.getDynamicMonth()
获取力学时的月份
### object.getDynamicSeconds()
获取力学时的秒数

## STATIC METHOD/静态方法
### time.UTC$DT
utc转DT

### time.DT$UTC
DT转utc

### time.UTC$JD
UTC转JD
### time.JD$UTC
JD转UTC
### time.DT$JD
DT转JD 
```
TIME.DT$JD(y,M,d,h,m,s);
```

### time.\$DT$JD
DT转JD
```
TIME.DT$JD(date);
```

### time.JD$DT
JD转DT
```
return {y,M,d,h,m,s}
```
### time.\$JD$DT
JD转DT
return date

### time.isGregorianDays
判断是否是格里历
```
TIME.isGregorianDays(year,month,date);
```

### time.setDeltaTAlgorithm
设置 DeltaT 算法 默认为NASA提供（src/algorithm/nasa.js）
DeltaT = UTC - DT
## 注意事项

* 该模块中的力学时为地球力学时和质心力学时的统称，不考虑两者之间的差值问题
* 该模块不考虑世界时和世界协调时的差值
