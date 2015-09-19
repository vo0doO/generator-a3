(function () {
    'use strict';

    angular
        .module('a3.common.i18n', ['pascalprecht.translate'])
        .config(config);

    /* @ngInject */
    function config($translateProvider) {

        $translateProvider.useStaticFilesLoader({
          prefix: 'common/i18n/locale-',
          suffix: '.json'
        });

        var lang = 'en';
        if(navigator.browserLanguage) {
            lang = navigator.browserLanguage;
        } else if(navigator.language) {
            lang = navigator.language;
        }

        $translateProvider.fallbackLanguage(['en']);
        $translateProvider
            .registerAvailableLanguageKeys(['en', 'ko'], {
                'en_US': 'en',
                'ko_KR': 'ko'
            })
            .determinePreferredLanguage(lang);

        //$translateProvider.useLocalStorage();
        $translateProvider.useSanitizeValueStrategy('escaped');
    }

})();
