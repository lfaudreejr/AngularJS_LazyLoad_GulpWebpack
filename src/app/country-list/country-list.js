'use strict'
import angular from 'angular'

export const CountryList = angular
  .module('app')
  .controller('CountryListController', [
    '$http',
    '$scope',
    function($http, $scope) {
      $http
        .get('https://restcountries.eu/rest/v2/all?fields=name;flag')
        .then(({ data }) => {
          $scope.countries = data
        })
    }
  ])
