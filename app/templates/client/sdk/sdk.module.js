(function () {
    'use strict';

    angular.module('a3.sdk', [
        // angular
        'ngSanitize',
        'ngTouch',
        // angular-ui
        'ui.sortable',
        'ui.router',
        'ui.bootstrap',
        // developers
        'ngGrid',
        'ng.deviceDetector',
        'ngSelectable',
        // sdk
        'a3.sdk.charts',
        'a3.sdk.config',
        'a3.sdk.models',
        'a3.sdk.utils',
        'a3.sdk.logger',
        'a3.sdk.session',
        // Redux
        'ngRedux'
    ]);

})();
