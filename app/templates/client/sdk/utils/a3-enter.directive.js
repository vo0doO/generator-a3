(function () {
    'use strict';

    angular
        .module('a3.sdk.utils')
        .directive('a3Enter', bgEnter);

    /* @ngInject */
    function bgEnter() {
        return function (scope, element, attrs) {
            element.bind("keydown keypress", function (event) {
                if (event.which === 13) {
                    scope.$apply(function () {
                        scope.$eval(attrs.ngEnter);
                    });

                    event.preventDefault();
                }
            });
        };
    }

})();
