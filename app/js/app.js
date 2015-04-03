define([
    'angular',
    'config',
    'modules/_common/common_module',
    'modules/_api/api_module',
    'modules/login/login_module',
    'modules/dashboard/dashboard_module',
    'modules/imeis/imeis_module',
    'modules/devices/devices_module'

], function (
    angular
) {
    try {
        angular.module('wdc.template');
    } catch (e) {
        angular.module('wdc.template', []);
    }

    var module = angular.module('wdc', [
        'ui.router',
        'ui.bootstrap',
        'restangular',
        'wdc.template',
        'wdc-module-common',
        'wdc.config',
        'wdc.api',
        'wdc.login',
        'wdc.dashboard',
        'wdc.imeis',
        'wdc.devices'

    ]);

    module.config(['$stateProvider', '$urlRouterProvider', 
        function($stateProvider, $urlRouterProvider ) {

            $urlRouterProvider.otherwise('/');

            $stateProvider
                .state('login', {
                    url: '/',
                    controller: 'LoginCtrl',
                    templateUrl: 'js/modules/login/templates/login.html'
                })
                .state('dashboard', {
                    url: '/dashboard',
                    abstract: true,
                    controller: 'DashboardCtrl',
                    templateUrl: 'js/modules/dashboard/templates/dashboard.html',
                    resolve: {
                        userStatus: ['api', '$rootScope', 
                          function(api, $rootScope){
                            return api.getUserStatus().then(function(result){
                                $rootScope.user = result;
                            });
                          }]
                    }
                })
                .state('dashboard.overview', {
                    url: '',
                    template: 'Dashboard OverView Area'
                })
                .state('dashboard.imeis', {
                    url: '/imeis',
                    controller: 'ImeisCtrl',
                    templateUrl: 'js/modules/imeis/templates/imeis.html'
                })
                .state('dashboard.devices', {
                    url: '/devices',
                    controller: 'DevicesCtrl',
                    templateUrl: 'js/modules/devices/templates/devices.html'
                });
        }
    ]);

    module.run(['$rootScope', 'Restangular', '$state', 
        function($rootScope, Restangular, $state) {

            Restangular.addRequestInterceptor(function(element, operation, route, url) { 
                $rootScope.loading = true;
                return element;
            });

            Restangular.addResponseInterceptor(function(data, operation, what, url, response, deferred) {
                $rootScope.loading = false;
                return data;
            });

            Restangular.setErrorInterceptor(function(response, deferred, responseHandler) {
                if(response.status === 404) {
                    alert('Not Found');
                }
                if(response.status === 503) {
                    alert('Service unavailable');
                }
                if(response.status === 401) {
                    $state.go('login');
                }
                $rootScope.loading = false;
                return response;
            });

        }
    ]);
});