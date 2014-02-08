(function () {
    'use strict';

    angular.module('app').controller('Controller',
        ['$scope', Controller]);

    function Controller($scope, Service) {
        $scope.service = Service;
    }
})();