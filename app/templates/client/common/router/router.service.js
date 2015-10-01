(function() {
    'use strict';

    angular
        .module('a3.common.router')
        .service('router', router);

    /* @ngInject */
    function router($state) {
        this.login = login;
        this.main = main;
        this.dashboard = dashboard;
        this.workspace = workspace;

        function login() {
            $state.go('login');
        }

        function main() {
            $state.go('main');
        }

        //TODO must get dashboardId per userId
        function dashboard(dashboardId) {
            $state.go('home.dashboards', {dashboardId: dashboardId});
        }

        //TODO must get dashboardId per userId
        function workspace(workspaceId) {
            $state.go('home.workspace', {workspaceId: workspaceId});
        }

    }

})();
