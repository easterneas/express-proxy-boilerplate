const proxy = require("express-http-proxy");
const parseQueryObjToQueryString = require("./qs");

/**
 * Initializes Proxy URL
 * @typedef {import('express').RequestHandler} RequestHandler
 *
 * @typedef {{ endpoint: string, target: string, proxyPrefix?: string, https?: boolean }} ProxyUrlParam
 * @param {ProxyUrlParam} param (required) endpoint path
 * @returns {[string, RequestHandler]}
 */
const initializeProxyUrl = ({
	endpoint,
	target,
	proxyPrefix = "",
	https = false,
}) => {
	return [
		endpoint,
		proxy(target, {
			proxyReqPathResolver: (req) => {
				const pathLength = endpoint.split("/*")[0].length;
				const trimmedPath = req.baseUrl.slice(pathLength);

				let finalUrl = proxyPrefix
					? `/${proxyPrefix}${trimmedPath}`
					: trimmedPath;

				if (Object.keys(req.query).length) {
					finalUrl += `?${parseQueryObjToQueryString(req.query)}`;
				}

				console.log({ finalUrl });

				return finalUrl;
			},
			https,
		}),
	];
};

module.exports = initializeProxyUrl;
