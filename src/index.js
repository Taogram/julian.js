/*
 * @Description:
 * @Version: 1.0.0
 * @Author: lax
 * @Date: 2022-01-08 23:46:17
 * @LastEditors: lax
 * @LastEditTime: 2022-08-10 10:42:22
 * @FilePath: \Julian.js\src\index.js
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
class AstronomicalDate extends Date {
	#algorithm = AstronomicalDate.algorithm;

	#dt;

	#jd;

	constructor(date = new Date(), ignore = true) {
		super(date);
		this.#dt = ignore
			? new Date(this)
			: UTC$DT(new Date(this), this.#algorithm.deltaT);
		this.#jd = $DT$JD(this.#dt);
	}

	getJulianDay() {
		return this.#jd;
	}

	getJD() {
		return this.getJulianDay();
	}

	getModifiedJulianDay() {
		return this.getJulianDay() - 2400000.5;
	}

	getMJD() {
		return this.getModifiedJulianDay();
	}

	getDynamicTime() {
		return this.#dt;
	}

	getDT() {
		return this.getDynamicTime();
	}

	getDynamicDate() {
		return this.#dt.getUTCDate();
	}

	getDynamicDay() {
		return this.#dt.getUTCDay();
	}

	getDynamicFullYear() {
		return this.#dt.getUTCFullYear();
	}

	getDynamicHours() {
		return this.#dt.getUTCHours();
	}

	getDynamicMilliseconds() {
		return this.#dt.getUTCMilliseconds();
	}

	getDynamicMinutes() {
		return this.#dt.getUTCMinutes();
	}

	getDynamicMonth() {
		return this.#dt.getUTCMonth();
	}

	getDynamicSeconds() {
		return this.#dt.getUTCSeconds();
	}

	static setDeltaTAlgorithm(algo) {
		this.algorithm.deltaT = algo;
	}
}

AstronomicalDate.algorithm = {};
AstronomicalDate.algorithm.deltaT = NASA;
AstronomicalDate.isGregorianDays = isGregorianDays;
AstronomicalDate.DT$UTC = DT$UTC;
AstronomicalDate.UTC$DT = UTC$DT;
AstronomicalDate.$DT$JD = $DT$JD;
AstronomicalDate.DT$JD = DT$JD;
AstronomicalDate.$JD$DT = $JD$DT;
AstronomicalDate.JD$DT = JD$DT;
AstronomicalDate.UTC$JD = UTC$JD;
AstronomicalDate.JD$UTC = JD$UTC;
module.exports = AstronomicalDate;
