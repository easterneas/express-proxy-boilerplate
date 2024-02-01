# Express Proxy Boilerplate

The Express proxy boilerplate app will serve as a (reverse) proxy server.

## Background

I have a use case, where I need a server that acts as a proxy. This server will be served behind one or more VPNs.

Also, there may be another use case where I can use this as reverse proxy server for much smaller scale, with the performance much lower than NGINX -- although the ease of config will be a trade-off.

I recommend to pair this little app with runtime package(s) like PM2 or nodemon (or similar).

## Setup

Go ahead and clone this repository. After that, run:

```sh
npm install # or yarn, or pnpm install
```

And it's ready to be configured!

## Proxies Configuration

This file contains the configuration for proxy servers that are used  to forward requests to upstream services. Each entry in the `proxies` array defines a proxy configuration.

### Proxy Configuration Format

```js
{
  target : "host:port/base-endpoint", // the target's domain/IP, with optional port and base-endpoint/path
  endpoint: "/endpoint/*",            // the endpoint to be proxied, with optional wildcard (*)
  proxyPrefix: "endpoint/prefix",     // prepend the target  with the endpoint prefix
  https: boolean                      // if true, use HTTPS protocol instead
}
```

#### Notes

* The `target` property must be a valid hostname or IP address.
* The `endpoint` property must start with a forward slash (`/`).
* The `proxyPrefix` property is optional. If not specified, the target will be used as is.
* The `https` property is optional. If not specified, the HTTP protocol will be used.

#### Tip!

* If you want to "redirect" the server with different endpoints, you can combine `endpoint` and `proxyPrefix`, where:
  * `endpoint` will be the endpoint where your app will make a request to this proxy server, and
  * `proxyPrefix` will be the target server's endpoint from the proxy server.

### Example

```js
const proxies = [
  {
    target: "example.com:80",
    endpoint: "/api/*",
    proxyPrefix: "/api"
  },
  {
    target: "localhost:3000",
    endpoint: "/socket.io/*"
  },
  {
    target: "https://secure-service.com:443",
    endpoint: "/secure/*",
    https: true
  }
 ];

module.exports = proxies;
```

## Usage

You can run with range of runtime apps like PM2:

```sh
pm2 start -x "node server.js" # you can add --name argument here, if you need such use case
```