(function () {
    'use strict';

    angular
        .module('a3.sdk.models')
        .service('modelGenerator', modelGenerator);

    /* @ngInject */
    function modelGenerator(RestangularType) {
        this.getModel = getModel;

        // ex) 'dashboards'
        function getModel(modelName, type) {
            var restangular = _getSource(type),
                model = restangular.all(modelName);

            model.one = function (id) {
                return Restangular.one(modleName, id);
            };

            return model;
        }

        // set base url for restangular in RestangularType
        function _getSource(type) {
            if (!type) {
                type = 'portal';
            }
            
            return RestangularType.getSource(type);
        }
    }

})();
