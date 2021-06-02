"use strict";

const os = require("os");
require("@moleculer/lab");
const packageJson = require("./package.json");

module.exports = {
	// It will be unique when scale up instances in Docker or on local computer
	nodeID: os.hostname().toLowerCase() + "-" + process.pid + "-v" + packageJson.version,

	logLevel: "info",

	//transporter: "nats://localhost:4222",

	cacher: "memory",

	metrics: {
		enabled: true,
		reporter: "Laboratory"
	},

	tracing: {
		enabled: true,
		exporter: "Laboratory"
	},

	logger: [{
		type: "Console",
		options: { /*...*/ }
	}, "Laboratory"],
};