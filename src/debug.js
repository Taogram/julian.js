/*
 * @Description:
 * @Version: 1.0.0
 * @Author: lax
 * @Date: 2022-07-20 16:27:47
 * @LastEditors: lax
 * @LastEditTime: 2022-07-20 16:34:48
 * @FilePath: \taogram-time\src\debug.js
 */
const moment = require("moment");
const d = new Date("2022-02-28 23:59:59");
d.setSeconds(d.getUTCSeconds() + 10);
console.log(moment(d).format("YYYY-MM-DD HH:mm:ss"));
