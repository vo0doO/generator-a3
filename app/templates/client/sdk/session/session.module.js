(function () {
    'use strict';

    angular
        .module('a3.sdk.session', ['ngCookies', 'LocalStorageModule'])
        .config(config);

    /* @ngInject */
    function config(localStorageServiceProvider) {
        localStorageServiceProvider
            .setPrefix('acubed')
            .setStorageType('localStorage')
            .setNotify(true, true);
    }

})();
