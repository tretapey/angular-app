(function() {
    'use strict';

    angular
        .module('myApp', [
            'ngAnimate',
            'ngCookies',
            'ngResource',
            'ngSanitize',
            'ngTouch',
            'ui.router',
            'ui.bootstrap'
        ])
        .config(function($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/');

            $stateProvider
                .state('app', {
                    url: '',
                    abstract: true,
                });
        })
        .run(function ($state, $rootScope) {
            $rootScope.$state = $state;
        });

})();

