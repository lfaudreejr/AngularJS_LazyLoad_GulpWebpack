'use strict'
import angular from 'angular'

export const Main = angular.module('app').controller('MainController', [
  '$scope',
  function($scope) {
    $scope.name = 'Larry'
  }
])