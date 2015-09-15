(function () {
    'use strict';

    angular
        .module('a3.sdk.config')
        .constant('config', {
            name: 'local',
            api_version: '1',
            context: 'a3',

            portal_url: 'service',
            spc_url: 'service',
            fdc_url: 'serivce',
            report_url: 'service',
            mpa_url: 'service',
            dcp_url: 'service',

        });

})();
