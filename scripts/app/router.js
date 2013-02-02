// The router is responsible for routing client-side pages
// and associating them with actions and events.
define(function(require, exports) {

	"use strict";

	var Backbone = require("backbone");

	return Backbone.Router.extend({

		routes : {
			"": "home",
			"about": "about",
			"contact": "contact",
			"items/:id": "items"
		},

		home: function() {
			console.log("Home");
		},

		about: function() {
			console.log("About");
		},

		contact: function() {
			console.log("Contact");
		},

		items: function(id) {
			console.log("Item with id " + id);
		}
	});
});