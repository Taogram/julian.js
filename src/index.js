/*
 * @Description:
 * @Version: 1.0.0
 * @Author: lax
 * @Date: 2022-01-08 23:46:17
 * @LastEditors: lax
 * @LastEditTime: 2022-08-10 00:06:15
 * @FilePath: \taogram-time\src\index.js
 */

const NASA = require("@/algorithm/nasa.js");
const {
	isGregorianDays,
	DT$UTC,
	UTC$DT,
	$DT$JD,
	DT$JD,
	$JD$DT,
	JD$DT,
	UTC$JD,
	JD$UTC,
} = require("@/jd.js");
class Time extends Date {
	#algorithm = Time.algorithm;

	constructor(date = new Date()) {
		super(date);
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
Time.DT$UTC = DT$UTC;
Time.UTC$DT = UTC$DT;
Time.$DT$JD = $DT$JD;
Time.DT$JD = DT$JD;
Time.$JD$DT = $JD$DT;
Time.JD$DT = JD$DT;
Time.UTC$JD = UTC$JD;
Time.JD$UTC = JD$UTC;
module.exports = Time;
