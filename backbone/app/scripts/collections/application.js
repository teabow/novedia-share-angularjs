/*global define*/

define([
    'underscore',
    'backbone',
    'models/application'
], function (_, Backbone, ApplicationModel) {
    'use strict';

    var ApplicationCollection = Backbone.Collection.extend({

        model: ApplicationModel,

        initialize: function () {
            this.add(new ApplicationModel({name: 'HTML5 Boilerplateee'}));
            this.add(new ApplicationModel({name: 'Backbone.js'}));
            this.add(new ApplicationModel({name: 'RequireJS'}));
        }

    });

    return ApplicationCollection;
});
