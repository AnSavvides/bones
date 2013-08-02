define(function(require, exports) {

    "use strict";

    var Backbone = require("backbone"),
        Router = require("router"),
        global = require("global");

    exports.initialize = function() {
        // Creating a new router and assigning it to global
        // for easy access.
        global.router = new Router();

        // Ensuring that the initial URL is routed.
        Backbone.history.start();
    };
});