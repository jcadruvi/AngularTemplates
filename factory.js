(function () {
    'use strict';
	
    angular.module('app').factory('Service', ['$location', Service]);

    function Service($location) {
        var self = {};
		

        return self;
    }
})();