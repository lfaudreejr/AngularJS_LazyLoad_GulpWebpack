'use strict'
import angular from 'angular'

export const Contacts = angular.module('app').controller('ContactsController', [
  '$scope',
  function($scope) {
    $scope.contact = 'Larry'
  }
])