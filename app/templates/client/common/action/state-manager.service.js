(function () {
    'use strict';

    angular
        .module('a3.common.action')
        .service('stateManager', stateManager);

    /* @ngInject */
    function stateManager(reduxManager) {
        // general
        this.dispatch = dispatch;
        this.subscribe = subscribe;
        this.getState = getState;
        this.$watch = $watch;

        // biz state
        this.getCurrent = getCurrent;
        this.getSidebar = getSidebar;
        this.getWidgetItems = getWidgetItems;
        this.getTaskerItems = getTaskerItems;


        /////////////////////////////////////////////////////////////////////
        //
        // Biz
        //
        /////////////////////////////////////////////////////////////////////
        function getCurrent() {
            return getState().current;
        }

        function getSidebar() {
            return _setCurrent(getState().sidebar);
        }

        function getWidgetItems() {
            return _setCurrent(getState().widgetItems);
        }

        function getTaskerItems() {
            return _setCurrent(getState().taskerItems);
        }

        function _setCurrent(obj) {
            // NOT USED

            // if(!obj) {
            //     obj = {};
            // }
            //
            // if(getState().current) {
            //     obj.currentActionType = getState().current.actionType;
            // }

            return obj;
        }


        /////////////////////////////////////////////////////////////////////
        //
        // General
        //
        /////////////////////////////////////////////////////////////////////
        function getState() {
            return reduxManager.getStore().getState();
        }

        function dispatch(action) {
            return reduxManager.getStore().dispatch(action);
        }

        // inject reducer fn
        function subscribe(reducerCB, scope) {
            var unsubscribe = reduxManager.getStore().subscribe(reducerCB);

            if(unsubscribe && scope) {
                scope.$on('destroy', unsubscribe);
            }

            return unsubscribe;
        }

        function $watch(action, mapStateScope, scope, that) {
            return reduxManager.connect(action, mapStateScope, scope, that);
        }
    }

})();
