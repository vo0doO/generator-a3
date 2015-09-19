(function() {
    'use strict';

    angular
        .module('a3.common.router')
        .service('router', router);

    /* @ngInject */
    function router($state) {
        this.login = login;
        this.main = main;
        this.home = home;

        function login() {
            $state.go('login');
        }

        function main() {
            $state.go('main');
        }

        function home() {
            $state.go('home');
        }
    }

})();
