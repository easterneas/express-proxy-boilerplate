/**
 * @typedef {{ endpoint: string, target: string, proxyPrefix?: string, https?: boolean }} ProxyUrlParam
 * @type {ProxyUrlParam[]}
 */
const proxies = [
	/**
	 * Format:
	 * {
	 *   target: "host:port/base-endpoint", // the target's domain/IP, with optional port and base-endpoint/path
	 *   endpoint: "/endpoint/*",           // the endpoint to be proxied, with optional wildcard (*)
	 *   proxyPrefix: "endpoint/prefix",    // prepend the target with the endpoint prefix
	 *   https: boolean                     // if true, use HTTPS protocol instead
	 * }
	 */
];

module.exports = proxies;
