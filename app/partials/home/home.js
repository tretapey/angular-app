(function() {
    'use strict';

    function Controller() {
        this.init();
    }

    Controller.prototype = {
        init: function() {
            var vm = this;

            vm.title = 'Home';
        }
    };

    angular
        .module('myApp')
        .controller('HomeCtrl', Controller)

        .config(function ($stateProvider) {
            $stateProvider
                .state('app.home', {
                    url: '/',
                    data: { pageDescription: 'Home' },
                    views: {
                        '@': {
                            templateUrl: 'partials/home/home.html',
                            controller: 'HomeCtrl',
                            controllerAs: 'home'
                        }
                    }
                });
        });

})();
