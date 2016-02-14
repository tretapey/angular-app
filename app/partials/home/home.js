(function() {
    'use strict';

    function Controller($scope) {
        this.$scope = $scope;

        this.init();
    }

    Controller.prototype = {
        init: function() {
            var vm = this;

            vm.$scope.title = 'Home';
            
        
        }
    };

    angular
        .module('myApp')
        .controller('HomeCtrl', Controller)

        .config(function ($stateProvider) {
            $stateProvider
                .state('app.home', {
                    url: '/home',
                    data: { pageDescription: 'Home' },
                    views: {
                        '@': {
                            templateUrl: 'partials/home/home.html',
                            controller: 'HomeCtrl'
                        }
                    }
                });
        });

})();
