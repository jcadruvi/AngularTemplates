(function () {
    'use strict';

    // Create the module and define its dependencies.
    var $itemname$ = angular.module('$itemname$', [
        // Angular modules 
        //'ngRoute'           // routing
    ]);

    app.config(['$locationProvider', '$routeProvider',
      function ($locationProvider, $routeProvider) {
          $locationProvider.hashPrefix('!');
          /*$routeProvider.
            when('/', {
                templateUrl:  ''
            });*/
      }]);

    // Execute bootstrapping code and any dependencies.
    app.run(['$q', '$rootScope',
        function ($q, $rootScope) {

        }]);

})();