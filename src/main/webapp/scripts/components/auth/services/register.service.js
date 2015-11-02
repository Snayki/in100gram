'use strict';

angular.module('in100gramApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


