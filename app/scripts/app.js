'use strict';

angular.module('app', ['ui.router', 'app.game', 'app.constant', 'app.gameservice', 'app.user.directive', 'app.computer.directive', 'app.result.directive'])
.config(function($stateProvider, $urlRouterProvider) {
        $stateProvider

            // route for the home page
            .state('app', {
                url:'/',
                views: {
                    'game': {
                        templateUrl : 'views/game.html',
                        controller  : 'GameController'
                    }
                }

            });

        $urlRouterProvider.otherwise('/');
    });
