'use strict';

angular.module('in100gramApp')
    .factory('errorHandlerInterceptor', function ($q, $rootScope) {
        return {
            'responseError': function (response) {
                if (!(response.status == 401 && response.data.path.indexOf("/api/account") == 0 )){
	                $rootScope.$emit('in100gramApp.httpError', response);
	            }
                return $q.reject(response);
            }
        };
    });