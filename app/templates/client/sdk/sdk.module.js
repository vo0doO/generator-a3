(function () {
    'use strict';

    angular.module('a3.sdk', [
        // angular base
        'ngCookies',
        'ngResource',
        'ngSanitize',
        // custom
        'a3.sdk.charts',
        'a3.sdk.utils',
        'a3.sdk.models',
        'a3.sdk.config',
        'a3.sdk.logger',
        'a3.sdk.session',
        'ngRedux'
    ]);

})();
