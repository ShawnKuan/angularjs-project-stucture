define(function() {
	
	var dashboardCtrl = function($scope, $rootScope, $state, api) {

		$scope.isSidebarCollapse = false;

		$scope.sidebarToggle = function(){
			$scope.isSidebarCollapse = !$scope.isSidebarCollapse;
		}

		$scope.logout = function(){
			api.logout().then(function(result){
				delete $rootScope.user;
				$state.go('login');
			});
		};
	};

	return ['$scope', '$rootScope', '$state', 'api', dashboardCtrl];
});