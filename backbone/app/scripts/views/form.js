/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var FormView = Backbone.View.extend({

        template: JST['app/scripts/templates/form.ejs'],

        el: '.container',

        events: {
            'click button.validateFormBtn': 'validateForm'
        },

        initialize: function () {

        },

        render: function () {
            this.$el.html(this.template());
        },

        validateForm: function (e) {
            var formValid = true;
            var inputEntries = this.$el.find('.formEntry');
            e.preventDefault();
            this.hideErrors();
            console.log(inputEntries);
            _.each(inputEntries, function (entry) {
                if (!$(entry).find('input').val() && $(entry).hasClass('required')) {
                    $(entry).find('span.error.required').show();
                    formValid = false;
                }
                if ($(entry).hasClass('email') && !/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9_.-]+\.[a-z]{2,3}$/.test($(entry).find('input').val())) {
                    $(entry).find('span.error.email').show();
                    formValid = false;
                }
            });
            if (formValid) {
                this.$el.find('.formValid').show();
                this.$el.find('.formInvalid').hide();
            }
            else {
                this.$el.find('.formInvalid').show();
                this.$el.find('.formValid').hide();
            }
        },

        hideErrors: function () {
            this.$el.find('.error').hide();
        }

    });

    return FormView;
});
