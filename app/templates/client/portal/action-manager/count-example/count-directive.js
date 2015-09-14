(function() {
    'use strict';

    angular
        .module('<%= scriptAppName %>.action-manager')
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
        function controller($scope, countAction, reduxUtil) {

            var unsubscribe = reduxUtil.connect(mapStateScope, countAction, this);
            $scope.$on('destroy', unsubscribe);

            function mapStateScope(state) {
                return {
                    counter: state.counter
                };
            }
        }

    }
})();
