(function () {
    'use strict';

    angular.module('app').controller('$itemname$',
        ['$scope', 'Service', $itemname$]);

    function $itemname$($scope, Service) {
        $scope.service = Service;
    }
})();