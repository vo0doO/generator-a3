/**
 * @name Handler 등록하기
 * @description 개발자는 핸들러를 반드시 등록한다.
 */
(function (window) {
    'use strict';

    angular
        .module('a3.common.action', [])
        .run(run);

    /* @ngInject */
    function run(
        reduxManager,
        countHandler
    ) {

        // TODO must add action handler
        var applicationStateModel = {
            // example - TESTing
            counter: countHandler
        };

        reduxManager.registerStateHandler(applicationStateModel);

    }

})(this);
