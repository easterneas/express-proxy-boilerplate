const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");

const initializeProxyUrl = require("./utils/proxy");
const proxies = require("./data/proxies");

const app = express();

app.use(cors({ origin: "*" }));
app.use(bodyParser.json());

for (const proxyParams of proxies) {
	app.use(...initializeProxyUrl(proxyParams));
}

module.exports = app;
