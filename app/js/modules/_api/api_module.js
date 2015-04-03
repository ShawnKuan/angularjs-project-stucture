define([
    'angular',
    'restangular',
    './services/api'
], function(
    angular,
    Restangular,
    api
) {
    var module = angular.module('wdc.api', ['restangular']);

    module.factory({
        api: api
    });
});