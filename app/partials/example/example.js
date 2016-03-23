(function() {
    'use strict';

    function Controller() {
        this.init();
    }

    Controller.prototype = {
        init: function() {
            var vm = this;

            vm.title = 'Example';
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
                            controller: 'ExampleCtrl',
                            controllerAs: 'example'
                        }
                    }
                });
        });

})();
