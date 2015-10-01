/**
* @description
* you must install underscore.string
* TODO bower install underscore --save &&  bower install underscore.string --save
*/
(function(window) {
    'use strict';

    angular
        .module('a3.sdk.utils')
        .service('generator', generator);

    /* @ngInject */
    function generator($compile) {
        this.createDirective = createDirective;

        function createDirective(directiveTypeName, scope, style) {
            if(!style) {
                style = 'height:inherit;';
            }
            var directiveName = _.string.dasherize(directiveTypeName);

            // var el = angular.element('<div style="' + style + '" ' + directiveName + '></div>');
            var el = angular.element('<div ' + directiveName + '></div>');
            $compile(el)(scope);

            return el;
        }
    }

})(this);
