// A Base View that all other views will extend.
define(function(require) {

	"use strict";

	var Backbone = require("backbone");

	return Backbone.View.extend({
		
		// We are unbinding the DOM element events, custom events and all
		// relevant HTML associated with the view in question from the DOM.
		// This approach is based on Derick Bailey's post on how to manage
		// page transitions for Backbone.js applications:
		// http://lostechies.com/derickbailey/2011/09/15/zombies-run-managing-page-transitions-in-backbone-apps/
		close: function() {
			this.remove();
			this.unbind();
		}

	});
});