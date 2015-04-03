angular.module('wdc.template', []).run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('js/modules/dashboard/templates/dashboard.html',
    "<div ng-class=\"{'sidebar-collapse': isSidebarCollapse, 'sidebar-open': !isSidebarCollapse}\"><div ng-include=\"'js/modules/dashboard/templates/header.html'\"></div><div ng-include=\"'js/modules/dashboard/templates/left.html'\"></div><div class=content-wrapper><section class=content-header><h1>Dashboard <small>Control panel</small></h1><ol class=breadcrumb><li><a href=#><i class=\"fa fa-dashboard\"></i> Home</a></li><li class=active>Dashboard</li></ol></section><div ui-view></div></div><div ng-include=\"'js/modules/dashboard/templates/footer.html'\"></div></div>"
  );


  $templateCache.put('js/modules/dashboard/templates/footer.html',
    "<footer class=main-footer><div class=\"pull-right hidden-xs\"><b>Version</b> 1.0</div><strong>Copyright © 2014-2015 TRIPLSOFT</strong> All rights reserved.</footer>"
  );


  $templateCache.put('js/modules/dashboard/templates/header.html',
    "<header class=main-header><a ui-sref=dashboard.imeis class=logo>Shawn Dashboard</a><nav class=\"navbar navbar-static-top\" role=navigation><a href=javascript:; ng-click=sidebarToggle() class=sidebar-toggle><span class=sr-only>Toggle navigation</span></a><div class=navbar-custom-menu><ul class=\"nav navbar-nav\"><li class=\"dropdown user user-menu\" dropdown><a href=# dropdown-toggle><img src=./img/user-default.png class=user-image alt=\"User Image\"> <span class=hidden-xs>{{user.userAccount}}</span></a><ul class=dropdown-menu><li class=user-header><img src=./img/user-default.png class=img-circle alt=\"User Image\"><p>{{user.userAccount}} - Manager <small>Member since Nov. 2012</small></p></li><li class=user-footer><div class=pull-right><button ng-click=logout() class=\"btn btn-default btn-flat\">Sign out</button></div></li></ul></li></ul></div></nav></header>"
  );


  $templateCache.put('js/modules/dashboard/templates/left.html',
    "<aside class=main-sidebar><section class=sidebar><ul class=sidebar-menu><li class=header>MAIN NAVIGATION</li><li ui-sref-active=active><a ui-sref=dashboard.imeis><i class=\"fa fa-dashboard\"></i> Imeis</a></li><li ui-sref-active=active><a ui-sref=dashboard.devices><i class=\"fa fa-book\"></i> Devieces</a></li></ul></section></aside>"
  );


  $templateCache.put('js/modules/devices/templates/devices.html',
    "<section class=content><table class=\"table table-bordered table-hover\"><tr><th>device_id</th><th>device_status</th><th>last_update</th><th>last_cars</th><th>config_version</th><th>adb_version</th><th>apkinstall_version</th><th>adb_version</th><th>update_version</th></tr><tr ng-repeat=\"device in devices\"><td>{{device.device_id}}</td><td>{{device.device_status}}</td><td>{{device.last_update}}</td><td>{{device.last_cars}}</td><td>{{device.config_version}}</td><td>{{device.adb_version}}</td><td>{{device.apkinstall_version}}</td><td>{{device.adb_version}}</td><td>{{device.update_version}}</td></tr></table></section>"
  );


  $templateCache.put('js/modules/imeis/templates/imeis.html',
    "<section class=content><table class=\"table table-bordered table-hover\"><tr><th>config_version</th><th>daily_seq_num</th><th>device_id</th><th>install_app_fail</th><th>install_app_succ</th><th>install_phone_last</th><th>manufacturer</th><th>model</th><th>operator_id</th><th>os_version</th></tr><tr ng-repeat=\"imei in imeis\"><td>{{imei.config_version}}</td><td>{{imei.daily_seq_num}}</td><td>{{imei.device_id}}</td><td>{{imei.install_app_fail}}</td><td>{{imei.install_app_succ}}</td><td>{{imei.install_phone_last}}</td><td>{{imei.manufacturer}}</td><td>{{imei.model}}</td><td>{{imei.operator_id}}</td><td>{{imei.os_version}}</td></tr></table></section>"
  );


  $templateCache.put('js/modules/login/templates/login.html',
    "<div class=container><div class=row><div class=\"col-md-4 col-md-offset-4\"><div class=\"login-panel panel panel-default\"><div class=panel-heading><h3 class=panel-title>Please Sign In WDC</h3></div><div class=panel-body><form name=loginForm><fieldset><div class=form-group><input class=form-control placeholder=\"User Name\" name=userAccount ng-model=settings.userAccount required autofocus></div><div class=form-group><input class=form-control placeholder=Password type=password ng-model=settings.pw required></div><button type=submit ng-click=login() ng-class=\"{disabled: !loginForm.$valid}\" class=\"btn btn-lg btn-success btn-block btn-flat\">Login</button></fieldset></form></div></div></div></div></div>"
  );

}]);
