/*global define*/

define([
    'jquery',
    'backbone',
    'views/application',
    'views/form'
], function ($, Backbone, MainView, FormView) {
    'use strict';

    var ApplicationRouter = Backbone.Router.extend({

        routes: {
            '': 'displayHome',
            'form': 'displayForm'
        },

        displayHome: function () {
            var mainView = new MainView();
            mainView.render();
        },

        displayForm: function () {
            var formView = new FormView();
            formView.render();
        }


    });

    return ApplicationRouter;
});
