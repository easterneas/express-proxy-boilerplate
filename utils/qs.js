/**
 * Parses Express' request query object into URL string.
 * @typedef {import('express').Request['query']} ParsedQs
 *
 * @param {ParsedQs} queryObj query object
 * @returns {string}
 */
const parseQueryObjToQueryString = (queryObj) => {
	const keys = Object.keys(queryObj);
	const querystrings = [];

	for (const key of keys) {
		querystrings.push(`${key}=${queryObj[key]}`);
	}

	return querystrings.join("&") || "";
};

module.exports = parseQueryObjToQueryString;
