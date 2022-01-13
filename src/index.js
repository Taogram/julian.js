/*
 * @Description:
 * @Version: 1.0.0
 * @Author: lax
 * @Date: 2022-01-08 23:46:17
 * @LastEditors: lax
 * @LastEditTime: 2022-01-14 01:00:44
 * @FilePath: \time\src\index.js
 */

const CALENDAR = require("@/time/default.js");
const {
	isGregorianDays,
	$UTC$JD,
	UTC$JD,
	$JD$UTC,
	JD$UTC,
} = require("@/time/julianDay/index.js");
const VERSION = "1.0.0";

class Time extends Date {
	constructor(_date = new Date()) {
		super(_date);
		const date = new Date(_date);
		this.year = date.getUTCFullYear();
		this.month = date.getUTCMonth() + 1;
		this.date = date.getUTCDate();
		this.hour = date.getUTCHours();
		this.minute = date.getUTCMinutes();
		this.second = date.getUTCSeconds();
		this.jd = this.getJD();
	}

	getJD(
		y = this.year,
		M = this.month,
		d = this.date,
		h = this.hour,
		m = this.minute,
		s = this.second
	) {
		return UTC$JD(y, M, d, h, m, s);
	}
}
Time.isGregorianDays = isGregorianDays;
Time.UTC$JD = UTC$JD;
Time.JD$UTC = JD$UTC;
Time.$UTC$JD = $UTC$JD;
Time.$JD$UTC = $JD$UTC;
Time.version = VERSION;
Time.CALENDAR = CALENDAR;
module.exports = Time;
