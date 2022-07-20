/*
 * @Description:
 * @Version: 1.0.0
 * @Author: lax
 * @Date: 2022-07-20 16:27:47
 * @LastEditors: lax
 * @LastEditTime: 2022-07-20 20:04:17
 * @FilePath: \taogram-time\src\debug.js
 */

const Time = require("@/index.js");
const moment = require("moment");
const time = new Time();

// const d = new Date("2022-02-28 23:59:59");
// d.setSeconds(d.getUTCSeconds() + 10);
// console.log(moment(d).format("YYYY-MM-DD HH:mm:ss"));

console.log(moment(time).format("YYYY-MM-DD HH:mm:ss"));
console.log(moment(time.dt).format("YYYY-MM-DD HH:mm:ss"));
Time.setDeltaTAlgorithm();
console.log(time.jd);
