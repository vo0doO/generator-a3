/**
 * restangular per portal, spc, fdc
 * @ref : http://stackoverflow.com/questions/22274975/is-it-possible-to-use-restangular-setbaseurl-for-two-api-access-points
 * @return {[type]} [description]
 */
(function () {
    'use strict';

    angular
        .module('a3.sdk.models')
        .service('RestangularType', RestangularType);

    /* @ngInject */
    function RestangularType(Restangular, config) {
        this.getSource = getSource;
        this.getPortal = getPortal;
        this.getSPC = getSPC;
        this.getFDC = getFDC;
        this.getReports = getReports;
        this.getMPA = getMPA;

        function getSource(type) {
            if (type === 'portal') {
                return getPortal();
            } else if (type === 'spc') {
                return getSPC();
            } else if (type === 'fdc') {
                return getFDC();
            } else if (type === 'reports') {
                return getReports();
            } else if (type === 'mpa') {
                return getMPA();
            } else if (type === 'dcp') {
                return getDCP();
            } else {
                return getPortal();
            }
        }

        // from A-Cubed Portal
        function getPortal() {
            return Restangular.withConfig(function (RestangularConfigurer) {
                RestangularConfigurer.setBaseUrl(config.portal_url);
            });
        }

        // from SPC
        function getSPC() {
            return Restangular.withConfig(function (RestangularConfigurer) {
                RestangularConfigurer.setBaseUrl(config.spc_url);
            });
        }

        // from FDC
        function getFDC() {
            return Restangular.withConfig(function (RestangularConfigurer) {
                RestangularConfigurer.setBaseUrl(config.fdc_url);
            });
        }

        // from Report
        function getReports() {
            return Restangular.withConfig(function (RestangularConfigurer) {
                RestangularConfigurer.setBaseUrl(config.report_url);
            });
        }

        // from MCC
        function getMPA() {
            return Restangular.withConfig(function (RestangularConfigurer) {
                RestangularConfigurer.setBaseUrl(config.mpa_url);
            });
        }

        // from DCP
        function getDCP() {
            return Restangular.withConfig(function (RestangularConfigurer) {
                RestangularConfigurer.setBaseUrl(config.dcp_url);
            });
        }
    }

})();
