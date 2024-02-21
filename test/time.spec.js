/*
 * @Description:
 * @Version: 1.0.0
 * @Author: lax
 * @Date: 2022-07-20 20:06:39
 * @LastEditors: lax
 * @LastEditTime: 2024-02-22 00:29:49
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
		expect(moment(t.getDT()).diff(t, "seconds")).toBe(1);
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

describe(`calc test (ignore TD offset)`, () => {
	const TIME = "+000333-1-27 12:00:00.000Z";
	const time = new Time(TIME);

	it(`${TIME} Time Object same with Date Object`, () => {
		expect(time.getTime()).toBe(new Date(TIME).getTime());
	});

	it(`${TIME} Time: UTC = TD`, () => {
		expect(time.getDT().getTime()).toBe(time.getTime());
	});

	it(`${TIME} JD = 1842713`, () => {
		expect(time.getJD()).toBe(1842713);
	});
});

describe(`calc test ( TD offset )`, () => {
	const TIME = "+000333-1-27 12:00:00.000Z";
	const time = new Time(TIME, false);

	it(`${TIME} Time Object same with Date Object`, () => {
		expect(time.getTime()).toBe(new Date(TIME).getTime());
	});

	it(`${TIME} Time: UTC ~ TD`, () => {
		expect(time.getDT().getTime() / 10000).toBeCloseTo(
			time.getTime() / 10000,
			0
		);
	});

	it(`${TIME} JD = 1842713`, () => {
		expect(time.getJD()).toBeCloseTo(1842713);
	});
});

describe(`X $ X`, () => {
	const JD = 2448976.5;
	const TIME = "+001992-12-20T00:00:00.000Z";
	it(`JD$TD JD =${JD}`, () => {
		const { y, M, d, h, m, s } = Time.JD$TD(JD);
		const t = new Date(TIME);
		expect(t.getUTCFullYear()).toBe(y);
		expect(t.getUTCMonth()).toBe(M - 1);
		expect(t.getUTCDate()).toBe(d);
		expect(t.getUTCHours()).toBe(h);
		expect(t.getUTCMinutes()).toBe(m);
		expect(t.getUTCSeconds()).toBe(s);
	});

	it(`$JD$TD JD =${JD}`, () => {
		expect(moment(TIME).isSame(Time.$JD$TD(JD))).toBe(true);
	});
});
