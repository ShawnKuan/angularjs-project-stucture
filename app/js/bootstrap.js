// Include libraries that should be included at "all times" and are dependencies
// to some other behaviors.
//
// Add some functionalities to specific parts of existing libraries
define([
    'lodash',
    'angular',
    'angularGettext',
    'zh_CN',
    'uiRouter',
    'uiBootstrap',

    // modules
    'app'
], function (

) {
    
    angular.element().ready(function() {
        angular.bootstrap(document, ['wdc']);
    });
    
    require(["template"]);
});