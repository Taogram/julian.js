/*
 * @Description:
 * @Version: 1.0.0
 * @Author: lax
 * @Date: 2022-07-20 20:06:39
 * @LastEditors: lax
 * @LastEditTime: 2022-08-10 00:08:47
 * @FilePath: \taogram-time\test\time.spec.js
 */
const Time = require("@/index.js");
const moment = require("moment");

describe("Time test", () => {
	it(`Time Object instanceof date`, () => {
		expect(new Time() instanceof Date).toBe(true);
	});

	it(`set algorithm`, () => {
		Time.setDeltaTAlgorithm(() => {
			return 1;
		});
		const now = new Time();
		expect(moment(now.dt).diff(now, "seconds")).toBe(-1);
	});
});

describe(`calc test`, () => {
	it(`DT 333/1/27 12:00:00`, () => {
		expect(new Time("0333-1-27 12:00:00Z").jd).toBeCloseTo(1842713);
	});
});
