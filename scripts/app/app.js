define(function(require, exports) {

	"use strict";

	var Backbone = require("backbone"),
		Router = require("router"),
		global = require("global");

	exports.initialize = function() {
		// Creating a new router and assigning it to global
		// for easy access.
		global.router = new Router();

		// Ensuring that the initial URL is routed. We are using HTML5's pushState
		// here - you can read more about it over at MDN:
		// https://developer.mozilla.org/en-US/docs/DOM/Manipulating_the_browser_history#The_pushState()
		Backbone.history.start({pushState: true});
	};
});