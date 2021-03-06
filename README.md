[![Stories in Ready](https://badge.waffle.io/AnSavvides/bones.png)](http://waffle.io/AnSavvides/bones)

## Bones ##

Bones is boilerplate to get you started with [RequireJS](http://requirejs.org/), [Backbone.js](http://backbonejs.org/), [Underscore.js](http://underscorejs.org/), [jQuery](http://jquery.com/), [Handlebars](http://handlebarsjs.com/) and [Twitter's Bootstrap](http://twitter.github.com/bootstrap/).

This project is very much a work in progress.

In terms of templating one option would be Underscore's [micro-templating](http://underscorejs.org/#template), but [Handlebars.js](http://handlebarsjs.com/) is recommended as it is a better fit for larger scale projects, mainly because it has quite a few more features (e.g. custom helper methods). External templates are loaded using a RequireJS loader plugin that goes by the name of [text.js](https://github.com/requirejs/text), allowing us to use the same approach as for loading JavaScript modules.

Note: This project makes use of JavaScript's strict mode, primarily to avoid some common coding pitfalls. You can read more about what strict mode is [here](https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Functions_and_function_scope/Strict_mode).