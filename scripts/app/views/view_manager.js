// Our view manager takes care of transitions between views
// in order to make sure that we clean up views that are no
// longer needed.
define(function(require, exports) {

    "use strict";

    var $ = require("jquery");

    // Showing the view that has been passed as an argument
    // and taking care of the previous view.
    exports.showView = function(view) {
        if (this.currentView) {
            this.currentView.close();
        }

        this.currentView = view;
        this.currentView.render();
     
        $("#main").html(this.currentView.el);
        
        this.currentView.afterRender();
    };

});