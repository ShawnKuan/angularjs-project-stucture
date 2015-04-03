define(function() {
	
	var LoginCtrl = function($scope, $rootScope, $state, api) {

		$scope.login = function(){
			api.login($scope.settings).then(function(result){
				if(result && result.userAccount){
					$state.go('dashboard.imeis');
				}
			});
		};
	};

	return ['$scope', '$rootScope', '$state', 'api', LoginCtrl];
});