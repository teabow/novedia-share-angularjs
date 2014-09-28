/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'collections/application',
    'models/application'
], function ($, _, Backbone, JST, Collection, Model) {
    'use strict';

    var ApplicationView = Backbone.View.extend({

        template: JST['app/scripts/templates/application.ejs'],

        listItemTemplate: JST['app/scripts/templates/listItem.ejs'],

        el: '.container',

        events: {
            'click button.addToListBtn': 'addToList',
            'click button.removeFromListBtn': 'removeFromList',
            'click button.displayFormBtn': 'displayForm'
        },

        initialize: function () {
            this.collection = new Collection();
            this.collection.on('add', this.updateList, this);
            this.collection.on('remove', this.updateList, this);
        },

        render: function () {
            this.$el.html(this.template());
            this.updateList();
        },

        addToList: function () {
            var newName = this.$el.find('input[name="nameInput"]').val();
            if (newName) {
                this.collection.add(new Model({name: newName}));
            }
        },

        removeFromList: function (e) {
            var name = $(e.currentTarget).data('name');
            var model = null;
            _.each(this.collection.models, function (modelIt) {
                if (modelIt.get('name') === name) {
                    model = modelIt;
                }
            });
            this.collection.remove(model);
        },

        updateList: function () {
            var self = this;
            var list = this.$el.find('ul.contentList');
            var tmp = '';
            _.each(this.collection.models, function (model) {
                tmp += self.listItemTemplate({name: model.get('name')});
            });
            list.html(tmp);
        },

        displayForm: function () {
            Backbone.history.navigate('form', {trigger: true});
        }

    });

    return ApplicationView;
});
