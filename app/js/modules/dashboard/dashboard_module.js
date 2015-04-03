define([
    'angular',
    './controllers/DashboardCtrl'
], function(
    angular,
    DashboardCtrl
) {
    var module = angular.module('wdc.dashboard', [

	]).controller({
        DashboardCtrl: DashboardCtrl
    });
});