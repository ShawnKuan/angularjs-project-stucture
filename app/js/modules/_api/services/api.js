define([
    'angular'
], function (angular) {
    return ['$q', 'Restangular', api];

    function api($q, Restangular) {

        return {
            login: function (settings) {
                return Restangular.one('api/user/login')
                    .post(null,
                    {
                        'userAccount': settings.userAccount,
                        'pw':          settings.pw
                    }
                );
            },

            getUserStatus: function() {
                return Restangular.one('api/user/status').get();
            },

            logout: function() {
                return Restangular.one('api/user/logout').get();
            },

            getImeis: function() {
                return Restangular.one('api/imeis').get();
            },

            getDevices: function() {
                return Restangular.one('api/devices').get();
            }
            
        };
    }
});