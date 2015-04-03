define([
    'angular',
    './controllers/DevicesCtrl'
], function(
    angular,
    DevicesCtrl
) {
    var module = angular.module('wdc.devices', [

    ]).controller({
        DevicesCtrl: DevicesCtrl
    });
});
