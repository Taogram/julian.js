/*
 * @Description:
 * @Version: 1.0.0
 * @Author: lax
 * @Date: 2022-01-08 23:46:17
 * @LastEditors: lax
 * @LastEditTime: 2022-07-20 20:25:06
 * @FilePath: \taogram-time\src\index.js
 */

const CALENDAR = require("@/default.js");
const NASA = require("@/algorithm/nasa.js");
const {
	isGregorianDays,
	UTC$DT,
	$DT$JD,
	DT$JD,
	$JD$UTC,
	JD$UTC,
} = require("@/jd.js");
const VERSION = "1.0.1";
class Time extends Date {
	#algorithm = Time.algorithm;

	constructor(_date = new Date()) {
		super(_date);
		const date = new Date(_date);
		this.year = date.getUTCFullYear();
		this.month = date.getUTCMonth() + 1;
		this.date = date.getUTCDate();
		this.hour = date.getUTCHours();
		this.minute = date.getUTCMinutes();
		this.second = date.getUTCSeconds();
		this.dt = UTC$DT(new Date(this), this.#algorithm.deltaT);
		this.jd = $DT$JD(this.dt);
	}

	static setDeltaTAlgorithm(algo) {
		this.algorithm.deltaT = algo;
	}
}

Time.algorithm = {};
Time.algorithm.deltaT = NASA;
Time.isGregorianDays = isGregorianDays;
Time.UTC$JD = DT$JD;
Time.JD$UTC = JD$UTC;
Time.$UTC$JD = $DT$JD;
Time.$JD$UTC = $JD$UTC;
Time.version = VERSION;
Time.CALENDAR = CALENDAR;
module.exports = Time;
