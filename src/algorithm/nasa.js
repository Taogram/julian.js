/*
 * @Description:
 * @Version: 1.0.0
 * @Author: lax
 * @Date: 2022-08-25 21:25:47
 * @LastEditors: lax
 * @LastEditTime: 2024-02-21 23:46:47
 */
/**
 * by NASA:https://eclipse.gsfc.nasa.gov/SEcat5/deltatpoly.html
 * @param {*} date
 * @returns T
 */
module.exports = function NASA(date) {
	const year = date.getUTCFullYear();
	const m = date.getUTCMonth() + 1;
	let y = year + (m - 0.5) / 12;
	let t;
	let u;
	if (year < -500) {
		u = (y - 1820) / 100;
		t = -20 + 32 * u * u;
	}
	if (year >= -500 && year < 500) {
		u = y / 100;
		t =
			10583.6 -
			1014.41 * u +
			33.78311 * u * u -
			5.952053 * u * u * u -
			0.1798452 * u * u * u * u +
			0.022174192 * u * u * u * u * u +
			0.0090316521 * u * u * u * u * u * u;
	}
	if (year >= 500 && year < 1600) {
		u = (y - 1000) / 100;
		t =
			1574.2 -
			556.01 * u +
			71.23472 * u * u +
			0.319781 * u * u * u -
			0.8503463 * u * u * u * u -
			0.005050998 * u * u * u * u * u +
			0.0083572073 * u * u * u * u * u * u;
	}
	if (year >= 1600 && year < 1700) {
		u = y - 1600;
		t = 120 - 0.9808 * u - 0.01532 * u * u + (u * u * u) / 7129;
	}
	if (year >= 1700 && year < 1800) {
		u = y - 1700;
		t =
			8.83 +
			0.1603 * u -
			0.0059285 * u * u +
			0.00013336 * u * u * u -
			(u * u * u * u) / 1174000;
	}
	if (year >= 1800 && year < 1860) {
		u = y - 1800;
		t =
			13.72 -
			0.332447 * u +
			0.0068612 * u * u +
			0.0041116 * u * u * u -
			0.00037436 * u * u * u * u +
			0.0000121272 * u * u * u * u * u -
			0.0000001699 * u * u * u * u * u * u +
			0.000000000875 * u * u * u * u * u * u * u;
	}
	if (year >= 1860 && year < 1900) {
		u = y - 1860;
		t =
			7.62 +
			0.5737 * u -
			0.251754 * u * u +
			0.01680668 * u * u * u -
			0.0004473624 * u * u * u * u +
			(u * u * u * u * u) / 233174;
	}
	if (year >= 1900 && year < 1920) {
		u = y - 1900;
		t =
			-2.79 +
			1.494119 * u -
			0.0598939 * u * u +
			0.0061966 * u * u * u -
			0.000197 * u * u * u * u;
	}
	if (year >= 1920 && year < 1941) {
		u = y - 1920;
		t = 21.2 + 0.84493 * u - 0.0761 * u * u + 0.0020936 * u * u * u;
	}
	if (year >= 1941 && year < 1961) {
		u = y - 1950;
		t = 29.07 + 0.407 * u - (u * u) / 233 + (u * u * u) / 2547;
	}
	if (year >= 1961 && year < 1986) {
		u = y - 1975;
		t = 45.45 + 1.067 * u - (u * u) / 260 - (u * u * u) / 718;
	}
	if (year >= 1986 && year < 2005) {
		u = y - 2000;
		t =
			63.86 +
			0.3345 * u -
			0.060374 * u * u +
			0.0017275 * u * u * u +
			0.000651814 * u * u * u * u +
			0.00002373599 * u * u * u * u * u;
	}
	if (year >= 2005 && year < 2050) {
		u = y - 2000;
		t = 62.92 + 0.32217 * u + 0.005589 * u * u;
	}
	if (year >= 2050 && year < 2150) {
		u = (y - 1820) / 100;
		t = -20 + 32 * u * u - 0.5628 * (2150 - y);
	}
	if (year >= 2150) {
		u = (y - 1820) / 100;
		t = -20 + 32 * u * u;
	}
	return t;
};
