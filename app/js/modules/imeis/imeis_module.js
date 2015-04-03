define([
    'angular',
    './controllers/ImeisCtrl'
], function(
    angular,
    ImeisCtrl
) {
    var module = angular.module('wdc.imeis', [

    ]).controller({
        ImeisCtrl: ImeisCtrl
    });
});
