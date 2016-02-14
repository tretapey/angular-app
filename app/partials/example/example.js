(function() {
    'use strict';

    function Controller($scope) {
        this.$scope = $scope;

        this.init();
    }

    Controller.prototype = {
        init: function() {
            var vm = this;

            vm.$scope.title = 'Example';
            
        
        }
    };

    angular
        .module('myApp')
        .controller('ExampleCtrl', Controller)
    
        .config(function ($stateProvider) {
            $stateProvider
                .state('app.example', {
                    url: '/example',
                    data: { pageDescription: 'Example' },
                    views: {
                        '@': {
                            templateUrl: 'partials/example/example.html',
                            controller: 'ExampleCtrl'
                        }
                    }
                });
        });

})();
