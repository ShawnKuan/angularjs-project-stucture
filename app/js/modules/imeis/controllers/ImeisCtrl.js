define(function() {
	
	var ImeisCtrl = function($scope, $rootScope, $state, api) {

		api.getImeis().then(function(result){
			$scope.imeis = result;
		});
	};

	return ['$scope', '$rootScope', '$state', 'api', ImeisCtrl];
});