define([
    'angular'
], function(
    angular
) {
    'use strict';

    // Declare app level module which depends on filters, and services
    angular.module('wdc.config', [])
        .constant('DEFAULT_SETTING', {
            'debug': false,
            'timeout': 10000,
            'translate' : {
            	'lang' : 'en',
            	'debug': false
            }
        });
});