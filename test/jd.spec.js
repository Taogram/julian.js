/*
 * @Description:
 * @Version: 1.0.0
 * @Author: lax
 * @Date: 2022-07-20 20:06:39
 * @LastEditors: lax
 * @LastEditTime: 2023-04-15 14:44:16
 * @FilePath: \julian.js\test\time.spec.js
 */
const { $DT$JD, $JD$DT } = require("@/jd.js");
const moment = require("moment");

describe(`《Astronomical.Algorithms》Julian Day Test`, () => {
	it(`$JD$DT 7.C JD=2436116.31`, () => {
		const date = $JD$DT(2436116.31);
		expect(
			moment(new Date("+001957-10-04T19:26:24.000Z")).isSame(date, "day")
		).toBe(true);
	});

	it(`$JD$DT 7.C JD=1842713`, () => {
		const date = $JD$DT(1842713);
		expect(
			moment(new Date("+000333-01-27T12:00:00.000Z")).isSame(date, "day")
		).toBe(true);
	});

	it(`$JD$DT 7.C JD=1507900.13`, () => {
		const date = $JD$DT(1507900.13);
		expect(
			moment(new Date("-000584-05-28T15:07:12.000Z")).isSame(date, "day")
		).toBe(true);
	});

	it(`$DT$JD 7.A 1957-10-4.81`, () => {
		const jd = $DT$JD(new Date("+001957-10-04T19:26:24.000Z"));
		expect(jd).toBeCloseTo(2436116.31, 1);
	});

	it(`$DT$JD 7.B 333-1-27 12:00:00`, () => {
		const jd = $DT$JD(new Date("+000333-01-27T12:00:00.000Z"));
		expect(jd).toBeCloseTo(1842713, 1);
	});

	it(`$DT$JD 7.B 2000-1-1 12:00:00`, () => {
		const jd = $DT$JD(new Date("+002000-01-01T12:00:00.000Z"));
		expect(jd).toBeCloseTo(2451545, 1);
	});

	it(`$DT$JD 7.B 1987-6-19 12:00:00`, () => {
		const jd = $DT$JD(new Date("+001987-06-19T12:00:00.000Z"));
		expect(jd).toBeCloseTo(2446966, 1);
	});

	it(`$DT$JD 7.B -1000-7-12 12:00:00`, () => {
		const jd = $DT$JD(new Date("-001000-07-12T12:00:00.000Z"));
		expect(jd).toBeCloseTo(1356001, 1);
	});

	it(`$DT$JD 7.B -1000-8-17.9`, () => {
		const jd = $DT$JD(new Date("-001001-08-17T21:00:00.000Z"));
		expect(jd).toBeCloseTo(1355671.4, 1);
	});
});
