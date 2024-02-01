const server = require("./app");

const port = process.env.PORT || 3001;

server.listen(port, () => {
	console.log(`Proxy server listening on port ${port}`);
});
