(function () {
    'use strict';

    angular
        .module('a3.sdk.models')
        .service('modelGenerator', modelGenerator);

    /* @ngInject */
    function modelGenerator(Restangular, RestangularType) {
        this.getModel = getModel;
        var models = {};

        // ex) 'dashboards'
        function getModel(modelName, type) {
            var model = models[modelName];

            if(!model) {
                var restangular = _getSource(type);
                model = restangular.all(modelName);

                model.one = function (id) {
                    return Restangular.one(modleName, id);
                };

                models[modelName] = model;
            }

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
