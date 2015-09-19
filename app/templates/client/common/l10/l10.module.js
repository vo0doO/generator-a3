(function () {
    'use strict';

    angular
        .module('a3.common.l10', ['pascalprecht.translate'])
        .config(config);

    /* @ngInject */
    function config($translateProvider) {
        // timezone L10
        moment().zone((new Date()).getTimezoneOffset());

        // Pluralization L10
        // This use https://github.com/SlexAxton/messageformat.js v0.2.2
        // $translateProvider.useMessageFormatInterpolation();
        // $translateProvider.addInterpolation('$translateMessageFormatInterpolation');
    }

})();
