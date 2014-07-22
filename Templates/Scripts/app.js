(function () {
    'use strict';

    // Create the module and define its dependencies.
    var $itemname$ = angular.module('$itemname$', [
        // Angular modules 
        'ui.router',
        'ngAnimate'
    ]);

    app.config(function ($stateProvider, $urlRouterProvider) {
        //$urlRouterProvider.otherwise("/jobs");

        /*$stateProvider
          .state('jobs', {
              url: "/jobs",
              templateUrl: "/Home/jobs.html",
              controller: 'jobController'
          });*/
    });
})();