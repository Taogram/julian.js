module.exports = function (date) {
	const year = date.getUTCFullYear();
	return -15 + 0.00325 * (year - 1810) * (year - 1810);
};
