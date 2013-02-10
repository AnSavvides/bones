define(function(require) {

	"use strict";

	var BaseView = require("views/base"),
		home = require("text!/templates/home.html");

	return BaseView.extend({

		template: home,

		render: function() {
			this.$el.html(this.template);
		}

	});

});