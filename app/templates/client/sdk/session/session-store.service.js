(function () {
    'use strict';

    angular
        .module('a3.sdk.session')
        .service('sessionStore', sessionStore);

    /* @ngInject */
    function sessionStore(localStorageService) {
        // biz defined key
        var LOGIN_KEY = 'acubed_login';
        this.isSignin = isSignin;
        this.setSignin = setSignin;
        this.clearSignin = clearSignin;

        this.set = set;
        this.get = get;
        this.remove = remove;
        this.clearAll = clearAll;

        function setSignin(value) {
            set(LOGIN_KEY, value);
        }

        function isSignin() {
            if(get(LOGIN_KEY)) {
                return true;
            } else {
                return false;
            }
        }

        function clearSignin() {
            remove(LOGIN_KEY);
        }

        function set(key, value, expired) {
            if (localStorageService.isSupported) {
                localStorageService.set(key, value);
            }

            if (localStorageService.cookie.isSupported) {
                // if null, 1 day
                if (!expired) {
                    expired = 1;
                }
                localStorageService.cookie.set(key, value, expired);
            }
        }

        function get(key) {
            var value;
            if (localStorageService.isSupported) {
                value = localStorageService.get(key);
                if (value) {
                    return value;
                }
            }

            if (localStorageService.cookie.isSupported) {
                value = localStorageService.cookie.get(key);
                if (value) {
                    return value;
                }
            }
        }

        function remove(key) {
            if (localStorageService.isSupported) {
                localStorageService.remove(key);
            }

            if (localStorageService.cookie.isSupported) {
                localStorageService.cookie.remove(key);
            }
        }

        function clearAll(key) {
            if (localStorageService.isSupported) {
                localStorageService.clearAll(key);
            }

            if (localStorageService.cookie.isSupported) {
                localStorageService.cookie.clearAll(key);
            }
        }
    }

})();
