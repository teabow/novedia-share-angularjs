(function () {

    'use strict';

    var formValidationCtrlImpl = function ($scope) {

        $scope.validateForm = function () {
            if ($scope.mForm.$valid) {
                $scope.formStatus = 'Form valid';
            }
            else {
                $scope.formStatus = 'Form invalid';
            }
        };

    };

    angular.module('angularApp')
        .controller('FormValidationCtrl', ['$scope', formValidationCtrlImpl]);

})();