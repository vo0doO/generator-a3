(function() {
    'use strict';

    angular
        .module('a3.sdk.logger')
        .service('logger', logger);

    /* @ngInject */
    function logger($log) {
        this.log = log;
        this.info = info;
        this.warn = warn;
        this.error = error;
        this.debug = debug;

        function log() {
            $log['log'].apply(null, [].slice.call(arguments));
        }

        function info() {
            $log['info'].apply(null, [].slice.call(arguments));
            return this;
        }

        function warn() {
            $log['warn'].apply(null, [].slice.call(arguments));
            return this;
        }

        function error() {
            $log['error'].apply(null, [].slice.call(arguments));
            return this;
        }

        function debug() {
            $log['debug'].apply(null, [].slice.call(arguments));
            return this;
        }

    }

})();
