(function() {
    'use strict';

    angular
        .module('a3.common.action')
        .directive('counter', counter);

    function counter() {
        return {
            restrict: 'E',
            scope: {},
            template: [
                '<div>',
                    '<p>Clicked: {{vm.counter}} times </p>',
                    '<button ng-click="vm.increment()">+</button>',
                    '<button ng-click="vm.decrement()">-</button>',
                    '<button ng-click="vm.incrementIfOdd()">Increment if odd</button>',
                    '<button ng-click="vm.incrementAsync()">Increment Async</button>',
                '</div>'
            ].join(''),
            controller: controller,
            controllerAs: 'vm',
            bindToController: true
        };

        /* @ngInject */
        function controller($scope, countAction, countHandler, stateManager) {

            // ex1)
            stateManager.$watch(countAction, _mappingValue, $scope, this);
            function _mappingValue(state) {
                return {
                    counter: state.counter
                };
            }

            // ex2)
            stateManager.subscribe(function() {
                console.log('>>> total state:', stateManager.getState());
            });
            stateManager.dispatch(countAction.increment());
        }

    }
})();
