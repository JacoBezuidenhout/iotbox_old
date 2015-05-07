'use strict';

/**
 * @ngdoc function
 * @name iotboxApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the iotboxApp
 */
angular.module('iotboxApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
