// The router is responsible for routing client-side pages
// and associating them with actions and events.
define(function(require) {

	"use strict";

	var Backbone = require("backbone"),
		HomeView = require("views/home"),
		viewManager = require("views/view_manager");

	return Backbone.Router.extend({

		viewManager: viewManager,

		routes : {
			"": "home"
		},

		home: function() {
			this.viewManager.showView(new HomeView());
		}

	});
});