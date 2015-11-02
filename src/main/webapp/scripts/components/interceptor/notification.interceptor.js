 'use strict';

angular.module('in100gramApp')
    .factory('notificationInterceptor', function ($q, AlertService) {
        return {
            response: function(response) {
                var alertKey = response.headers('X-in100gramApp-alert');
                if (angular.isString(alertKey)) {
                    AlertService.success(alertKey, { param : response.headers('X-in100gramApp-params')});
                }
                return response;
            }
        };
    });
