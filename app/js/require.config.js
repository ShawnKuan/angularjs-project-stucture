// the app/scripts/main.js file, which defines our RequireJS config
require.config({
  paths: {
    lodash:                     '../components/lodash/dist/lodash',
    angular:                    '../components/angular/angular',
    uiRouter:                   '../components/angular-ui-router/release/angular-ui-router',
    restangular:                '../components/restangular/src/restangular',
    angularGettext:             '../components/angular-gettext/dist/angular-gettext.min',
    zh_CN:                      'translations/po/zh_CN',
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
    },
    angularGettext: {
        deps: ['angular']
    },
    zh_CN: {
        deps: ['angularGettext']
    }
  }
});

require(["bootstrap"]);
