<!--
 * @Description: 
 * @Version: 1.0.0
 * @Author: lax
 * @Date: 2022-01-14 00:39:40
 * @LastEditors: lax
 * @LastEditTime: 2022-01-14 01:06:51
 * @FilePath: \time\readme.md
-->
# info
Julian Day Date Object use like origin Date Object
基于Date并支持儒略日的时间函数对象


## use it like Date
```
const date = new Time("YYYY-MM-DD");
```

## get jd
```
date.getJD();
```

## utc to jd
month between 1-12
```
const jd = TIME.UTC$JD(y,M,d,h,m,s);
```
or
```
const jd = TIME.$UTC$JD(date);
```

## jd to utc
```
const {y,M,d,h,m,s} = TIME.JD$UTC(jd);
```
or
```
const date = TIME.$JD$UTC(jd);
```

## is GregorianDays
```
TIME.isGregorianDays(year);
```
