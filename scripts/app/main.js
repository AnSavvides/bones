require.config({
	
	// We are loading modules from scripts/app by default.
	baseUrl: "scripts/app",
	
	// Setting up mappings for modules not found under baseUrl.
	// Paths are relative to baseUrl.
	paths: {
		"jquery" : [
			"http://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min",
			"../libraries/jquery"
		],
		"underscore": [
			"http://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.4.3/underscore-min.js",
			"../libraries/underscore"
		],
		"backbone": [
			"http://cdnjs.cloudflare.com/ajax/libs/backbone.js/0.9.10/backbone-min.js",
			"../libraries/backbone"
		],
		"bootstrap": [
			"http://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/2.2.2/bootstrap.min.js",
			"../libraries/bootstrap"
		],
		"handlebars": [
			"http://cdnjs.cloudflare.com/ajax/libs/handlebars.js/1.0.rc.2/handlebars.min.js",
			"../libraries/handlebars"
		]
	},

	// Configuring dependencies and exports for globals that do not use
	// the require.js syntax (i.e. using define() for declarations).
	// Note: a shim does not trigger code to load, a require call
	// is still needed.
	shim: {
		"jquery": {
			exports: "$"
		},
		"underscore": {
			exports: "_"
		},
		"backbone": {
			deps: ["underscore", "jquery"],
			exports: "Backbone"
		},
		"bootstrap": {
			deps: ["jquery"]
		},
		"handlebars": {
			exports: "Handlebars"
		}
	}
});

// Now we have the main application logic
require(["jquery", "app"], function($, app) {
	app.initialize();
});