const Laboratory = require("@moleculer/lab");

module.exports = {
	mixins: [Laboratory.AgentService],
	settings: {
		token: "some-secret-test",
		apiKey: "some-api-key"
	}
};