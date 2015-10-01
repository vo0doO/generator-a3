(function() {
    'use strict';

    angular
        .module('a3.common')
        .service('model', model);

    /* @ngInject */
    function model(modelGenerator) {
        this.getDashboards = getDashboards;
        this.getWorkspaces = getWorkspaces;
        this.getTaskers = getTaskers;
        this.getSession = getSession;
        this.getTaskerList = getTaskerList;
        this.getEqpProcessTime = getEqpProcessTime;
        //performance index widget
        this.getEqpPerformanceIndex = getEqpPerformanceIndex;

        function getDashboards() {
            return modelGenerator.getModel('dashboards');
        }

        function getWorkspaces() {
            return modelGenerator.getModel('workspaces');
        }

        function getTaskers(workspaceId) {
            return modelGenerator.getModel('workspaces/' + workspaceId + '/taskers');
        }

        function getSession() {
            return modelGenerator.getModel('session');
        }

        function getTaskerList(){
            return modelGenerator.getModel('taskertypes');
        }

        function getEqpProcessTime(){
            return modelGenerator.getModel('mcc/equipmentprocesstime');
        }
    }

})();
