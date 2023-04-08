/*
 * @Description:
 * @Version: 1.0.0
 * @Author: lax
 * @Date: 2023-04-08 12:52:27
 * @LastEditors: lax
 * @LastEditTime: 2023-04-08 22:09:06
 */
const NASA = require("@/algorithm/nasa.js");

describe(`method test`, () => {
	it(`year <- 500`, () => {
		expect(NASA(new Date("-000600-01-01T00:00:00.000Z"))).toBeCloseTo(18719.83);
	});
	it(`year >= -500 < 500`, () => {
		expect(NASA(new Date("-000100-01-01T00:00:00.000Z"))).toBeCloseTo(11637.09);
	});
	it(`year >= 500 < 1600`, () => {
		expect(NASA(new Date("+000600-01-01T00:00:00.000Z"))).toBeCloseTo(4738.848);
	});
	it(`year >= 1600 < 1700`, () => {
		expect(NASA(new Date("+001650-01-01T00:00:00.000Z"))).toBeCloseTo(50.133);
	});
	it(`year >= 1700 < 1800`, () => {
		expect(NASA(new Date("+001750-01-01T00:00:00.000Z"))).toBeCloseTo(13.375);
	});
	it(`year >= 1800 < 1860`, () => {
		expect(NASA(new Date("+001850-01-01T00:00:00.000Z"))).toBeCloseTo(7.112);
	});
	it(`year >= 1860 < 1900`, () => {
		expect(NASA(new Date("+001890-01-01T00:00:00.000Z"))).toBeCloseTo(-6.1209);
	});
	it(`year >= 1900 < 1920`, () => {
		expect(NASA(new Date("+001910-01-01T00:00:00.000Z"))).toBeCloseTo(10.445);
	});
	it(`year >= 1920 < 1941`, () => {
		expect(NASA(new Date("+001930-01-01T00:00:00.000Z"))).toBeCloseTo(24.13);
	});
	it(`year >= 1941 < 1961`, () => {
		expect(NASA(new Date("+001950-01-01T00:00:00.000Z"))).toBeCloseTo(29.086);
	});
	it(`year >= 1961 < 1986`, () => {
		expect(NASA(new Date("+001970-01-01T00:00:00.000Z"))).toBeCloseTo(40.234);
	});
	it(`year >= 1986 < 2005`, () => {
		expect(NASA(new Date("+001990-01-01T00:00:00.000Z"))).toBeCloseTo(56.921);
	});
	it(`year >= 2005 < 2050`, () => {
		expect(NASA(new Date("+002020-01-01T00:00:00.000Z"))).toBeCloseTo(71.621);
	});
	it(`year >= 2050 < 2150`, () => {
		expect(NASA(new Date("+002100-01-01T00:00:00.000Z"))).toBeCloseTo(202.838);
	});
	it(`year >= 2150`, () => {
		expect(NASA(new Date("+002200-01-01T00:00:00.000Z"))).toBeCloseTo(442.181);
	});
});
