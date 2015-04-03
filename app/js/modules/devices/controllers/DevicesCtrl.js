define(function() {
	
	var DevicesCtrl = function($scope, $rootScope, $state, api) {

		api.getDevices().then(function(result) {
			$scope.devices = result;
		});
	};

	return ['$scope', '$rootScope', '$state', 'api', DevicesCtrl];
});