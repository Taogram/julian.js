/*
 * @Description:
 * @Version: 1.0.0
 * @Author: lax
 * @Date: 2022-01-08 23:46:17
 * @LastEditors: lax
 * @LastEditTime: 2024-02-22 00:18:03
 * @FilePath: \Julian.js\src\index.js
 */

const NASA = require("@/algorithm/nasa.js");
const DEFAULT = require("@/algorithm/MorrisonAndStephenson.js");
const {
	isGregorianDays,
	TD$UTC,
	UTC$TD,
	$TD$JD,
	TD$JD,
	$JD$TD,
	JD$TD,
	UTC$JD,
	JD$UTC,
} = require("@/jd.js");
class AstronomicalDate extends Date {
	/**
	 * @description ΔT calculate algorithm/算法
	 * @default NASA
	 */
	#algorithm;

	/**
	 * @description Dynamic Time/力学时
	 */
	#td;

	/**
	 * @description Julian Day（TD）/儒略日（力学时）
	 */
	#jd;

	constructor(date = new Date(), ignore = true, algo) {
		super(date);
		this.#algorithm = algo || AstronomicalDate.algorithm.DIY || DEFAULT;
		this.#td = ignore
			? new Date(this)
			: UTC$TD(new Date(this), this.#algorithm);
		this.#jd = $TD$JD(this.#td);
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
		return this.#td;
	}

	getDT() {
		return this.getDynamicTime();
	}

	getDynamicDate() {
		return this.#td.getUTCDate();
	}

	getDynamicDay() {
		return this.#td.getUTCDay();
	}

	getDynamicFullYear() {
		return this.#td.getUTCFullYear();
	}

	getDynamicHours() {
		return this.#td.getUTCHours();
	}

	getDynamicMilliseconds() {
		return this.#td.getUTCMilliseconds();
	}

	getDynamicMinutes() {
		return this.#td.getUTCMinutes();
	}

	getDynamicMonth() {
		return this.#td.getUTCMonth();
	}

	getDynamicSeconds() {
		return this.#td.getUTCSeconds();
	}

	static setDeltaTAlgorithm(algo) {
		this.algorithm.DIY = algo;
	}
}

AstronomicalDate.algorithm = {};
AstronomicalDate.algorithm.DIY = undefined;
AstronomicalDate.algorithm.NASA = NASA;
AstronomicalDate.algorithm.DEFAULT = DEFAULT;
AstronomicalDate.isGregorianDays = isGregorianDays;
AstronomicalDate.TD$UTC = TD$UTC;
AstronomicalDate.UTC$TD = UTC$TD;
AstronomicalDate.$TD$JD = $TD$JD;
AstronomicalDate.TD$JD = TD$JD;
AstronomicalDate.$JD$TD = $JD$TD;
AstronomicalDate.JD$TD = JD$TD;
AstronomicalDate.UTC$JD = UTC$JD;
AstronomicalDate.JD$UTC = JD$UTC;
module.exports = AstronomicalDate;
