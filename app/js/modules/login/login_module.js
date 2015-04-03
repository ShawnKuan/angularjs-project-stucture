define([
    'angular',
    './controllers/LoginCtrl'
], function(
    angular,
    LoginCtrl
) {
    var module = angular.module('wdc.login', [

    ]).controller({
        LoginCtrl: LoginCtrl
    });
});
