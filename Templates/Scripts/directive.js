(function() {
    'use strict';

    angular.module('app').directive('$itemname$', $itemname$);
    
    function $itemname$() {
        var self = {};

        self.replace = true;
        self.restrict = 'E';
        self.scope = {
        };
        self.templateUrl = '';
        self.link = function (scope, element, attrs) {
		}
		
		return self;
	}
})();