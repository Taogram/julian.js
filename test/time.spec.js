/*
 * @Description:
 * @Version: 1.0.0
 * @Author: lax
 * @Date: 2022-07-20 20:06:39
 * @LastEditors: lax
 * @LastEditTime: 2022-08-25 23:01:47
 * @FilePath: \julian.js\test\time.spec.js
 */
const Time = require("@/index.js");
const moment = require("moment");

describe("AstronomicalDate test", () => {
	Time.setDeltaTAlgorithm(() => {
		return 1;
	});
	const t = new Time(null, false);
	const now = new Time();
	it(`AstronomicalDate Object instanceof date`, () => {
		expect(t instanceof Date).toBe(true);
	});
	it(`set algorithm`, () => {
		expect(moment(t.getDT()).diff(t, "seconds")).toBe(-1);
	});
	it(`getDynamicDate`, () => {
		expect(now.getDynamicDate()).toBe(now.getUTCDate());
	});
	it(`getDynamicDay`, () => {
		expect(now.getDynamicDay()).toBe(now.getUTCDay());
	});
	it(`getDynamicFullYear`, () => {
		expect(now.getDynamicFullYear()).toBe(now.getUTCFullYear());
	});
	it(`getDynamicHours`, () => {
		expect(now.getDynamicHours()).toBe(now.getUTCHours());
	});
	it(`getDynamicMilliseconds`, () => {
		expect(now.getDynamicMilliseconds()).toBe(now.getUTCMilliseconds());
	});
	it(`getDynamicMinutes`, () => {
		expect(now.getDynamicMinutes()).toBe(now.getUTCMinutes());
	});
	it(`getDynamicMonth`, () => {
		expect(now.getDynamicMonth()).toBe(now.getUTCMonth());
	});
	it(`getDynamicSeconds`, () => {
		expect(now.getDynamicSeconds()).toBe(now.getUTCSeconds());
	});
});

describe(`calc test (ignore DT offset)`, () => {
	const time = new Time("0333-1-27 12:00:00Z");

	it(`UTC 333/1/27 12:00:00 UTC = DT`, () => {
		expect(time.getDT().getTime()).toBeCloseTo(time.getTime());
	});

	it(`UTC 333/1/27 12:00:00 JD = 1842713`, () => {
		expect(time.getJD()).toBeCloseTo(1842713);
	});
});

describe(`X $ X`, () => {
	it(`JD$DT JD =2448976.5`, () => {
		const jd = 2448976.5;
		const { y, M, d, h, m, s } = Time.JD$DT(jd);
		expect(
			moment("1992-12-20 00:00:00").isSame(new Date(y, M - 1, d, h, m, s))
		).toBe(true);
	});

	it(`$JD$DT JD =2448976.5`, () => {
		const jd = 2448976.5;
		expect(moment("1992-12-20 00:00:00").isSame(Time.$JD$DT(jd))).toBe(true);
	});
});
