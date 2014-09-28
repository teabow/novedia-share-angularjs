'use strict';

angular.module('angularApp')
    .controller('MainCtrl', ['$scope', function ($scope) {


        $scope.awesomeThings = [
            {id: 0, name: 'HTML5 Boilerplate'},
            {id: 1, name: 'AngularJS'},
            {id: 2, name: 'Karma'}
        ];


        $scope.remove = function (thing) {
            var index = -1;
            for (var i = 0 ; i < $scope.awesomeThings.length; i++) {
                if (thing.id === $scope.awesomeThings[i].id) {
                    index = i;
                }
            }
            if (index >= -1) {
               $scope.awesomeThings.splice(index, 1);
            }
        };

        $scope.add = function (value) {
            var newId = -1;
            for (var i = 0; i < $scope.awesomeThings.length; i++) {
                if ($scope.awesomeThings[i].id > newId) {
                    newId = $scope.awesomeThings[i].id;
                }
            }
            $scope.awesomeThings.push({id: newId + 1, name: value});
        };

    }]);
