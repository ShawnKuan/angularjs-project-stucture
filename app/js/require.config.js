// the app/scripts/main.js file, which defines our RequireJS config
require.config({
  paths: {
    lodash:                     '../components/lodash/dist/lodash',
    angular:                    '../components/angular/angular',
    uiRouter:                   '../components/angular-ui-router/release/angular-ui-router',
    restangular:                '../components/restangular/src/restangular',
    uiBootstrap:                '../components/angular-bootstrap/ui-bootstrap' 

  },
  shim: {
    angular: {
      exports: 'angular'
    },
    uiRouter: {
      deps:['angular']
    },
    uiBootstrap: {
      deps:['angular']
    },
    restangular: {
        deps: ['angular', 'lodash']
    }
  }
});

require(["bootstrap"]);
