/*
 * @Description:
 * @Version: 1.0.0
 * @Author: lax
 * @Date: 2022-01-09 12:09:47
 * @LastEditors: lax
 * @LastEditTime: 2024-07-23 21:29:53
 * @FilePath: \julian.js\src\jd.js
 */

const CALENDAR = { a: 365.25, JC_BASE: 2299161 };
const DeltaT = require("@/algorithm/nasa.js");

/**
 * @description 是否是格里高利历 凡小于历元为1582年10月15日
 * @param {*} year
 * @param {*} month
 * @param {*} day
 * @returns
 */
function isGregorianDays(year, month, day) {
	if (year < 1582) {
		return false;
	}

	if (year === 1582) {
		if (month < 10 || (month === 10 && day < 15)) return false;
	}

	return true;
}

/**
 * @description UTC=>TD
 * @param {UTC} date UTC时间
 * @param {*} algo 算法
 * @returns date(TD)
 */
function UTC$TD(date, algo = DeltaT) {
	const T = new Date(date);
	const offset = algo(T);
	T.setUTCSeconds(T.getUTCSeconds() + offset);
	return T;
}

/**
 * @description TD=>UTC
 * @param {UTC} date TD时间
 * @param {*} algo 算法
 * @returns date(UTC)
 */
function TD$UTC(date, algo = DeltaT) {
	const T = new Date(date);
	const offset = algo(T);
	T.setUTCSeconds(T.getUTCSeconds() - offset);
	return T;
}

/**
 * @description 获取儒略日Julian Day 参数单位为力学时
 * @param {TD} _year
 * @param {TD} _month
 * @param {TD} date
 * @param {TD} hour
 * @param {TD} minute
 * @param {TD} second
 * @returns {JD} jd
 */
function TD$JD(_year, _month, date, hour, minute, second) {
	let month = _month;
	let year = _year;
	if (month <= 2) {
		month += 12;
		year -= 1;
	}

	let B = 0;

	if (isGregorianDays(year, month, date)) {
		let A = ~~(year / 100);
		B = 2 - A + ~~(A / 4);
	}

	const result =
		~~(CALENDAR.a * (year + 4716)) +
		~~(30.6001 * (month + 1)) +
		B +
		date +
		-1524.5 +
		((second / 60 + minute) / 60 + hour) / 24;
	return result;
}

function $TD$JD(_date) {
	if (!(_date instanceof Date)) throw new Error("this arg is not Date");
	const year = _date.getUTCFullYear();
	const month = _date.getUTCMonth() + 1;
	const date = _date.getUTCDate();
	const hour = _date.getUTCHours();
	const minute = _date.getUTCMinutes();
	const second = _date.getUTCSeconds();

	return TD$JD(year, month, date, hour, minute, second);
}

/**
 * @description 儒略日转力学时
 * @param {JD} _JD
 * @returns {TD} time
 */
function JD$TD(_JD) {
	let JDF = _JD + 0.5;
	let Z = ~~JDF;
	let F = JDF - Z;
	let A;
	let a;
	if (Z < CALENDAR.JC_BASE) {
		A = Z;
	} else {
		a = ~~((Z - 1867216.25) / 36524.25);
		A = Z + 1 + a - ~~(a / 4);
	}
	let B = A + 1524;
	let C = ~~((B - 122.1) / 365.25);
	let D = ~~(365.25 * C);
	let E = ~~((B - D) / 30.6001);
	let d = ~~(B - D - ~~(30.6001 * E) + F);
	let M;
	let y;
	if (E < 14) {
		M = E - 1;
	} else if (E === 14 || E === 15) {
		M = E - 13;
	}
	if (M > 2) {
		y = C - 4716;
	} else if (M === 1 || M === 2) {
		y = C - 4715;
	}
	let h_ = F * 24.0001;
	let h = ~~h_;
	let m_ = (h_ - h) * 60.0001;
	let m = ~~m_;
	let s = ~~((m_ - m) * 60.0001);
	return { y, M, d, h, m, s };
}

function $JD$TD(jd) {
	const { y, M, d, h, m, s } = JD$TD(jd);
	const y_ = String(Math.abs(y));
	let yPrefix = y < 0 ? "-000000" : "+000000";
	const yyyy = yPrefix.substring(0, 7 - y_.length) + y_;
	const MM = String(M).length === 1 ? "0" + M : M;
	const dd = String(d).length === 1 ? "0" + d : d;
	const hh = String(h).length === 1 ? "0" + h : h;
	const mm = String(m).length === 1 ? "0" + m : m;
	const ss = String(s).length === 1 ? "0" + s : s;
	return new Date(`${yyyy}-${MM}-${dd}T${hh}:${mm}:${ss}.000Z`);
}

function UTC$JD(date, algo) {
	return $TD$JD(UTC$TD(date, algo));
}

function JD$UTC(JD, algo) {
	return TD$UTC($JD$TD(JD), algo);
}

module.exports = {
	isGregorianDays,
	TD$UTC,
	UTC$TD,
	$TD$JD,
	TD$JD,
	$JD$TD,
	JD$TD,
	UTC$JD,
	JD$UTC,
};
