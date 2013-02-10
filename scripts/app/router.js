// The router is responsible for routing client-side pages
// and associating them with actions and events.
define(function(require, exports) {

	"use strict";

	var Backbone = require("backbone");

	return Backbone.Router.extend({

		routes : {
			"": "home",
		},

		home: function() {
			console.log("...home!");
		}

	});
});