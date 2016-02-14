(function() {
    'use strict';

    angular
        .module('myApp', [
            'ngAnimate',
            'ngCookies',
            'ngResource',
            'ngSanitize',
            'ngTouch',
            'ui.router'
        ])
        .config(function($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise("/home");

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

