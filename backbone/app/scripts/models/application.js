/*global define*/

define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    var ApplicationModel = Backbone.Model.extend({

        initialize: function() {},

        defaults: {
            name: ''
        }

    });

    return ApplicationModel;
});
