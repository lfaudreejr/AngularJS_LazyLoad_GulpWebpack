'use strict'

export const router = app =>
  app.config([
    '$stateProvider',
    '$locationProvider',
    '$urlRouterProvider',
    function($stateProvider, $locationProvider, $urlRouterProvider) {
      $locationProvider.hashPrefix('!')
      $urlRouterProvider.otherwise('/')

      $stateProvider
        .state('main', {
          url: '/',
          template: require('./main/main.pug'),
          controller: 'MainController'
        })
        .state('contacts', {
          url: '/contacts',
          template: require('./contacts/contacts.pug'),
          controller: 'ContactsController',
          lazyLoad: $transition$ => {
            const $ocLazyLoad = $transition$.injector().get('$ocLazyLoad')

            return import(/* webpackChunkName: "contacts" */ './contacts/contacts')
              .then(mod => $ocLazyLoad.load(mod.Contacts))
              .catch(err => {
                throw new Error('Ooops, something went wrong, ' + err)
              })
          }
        })
        .state('countries', {
          url: '/countries',
          template: require('./country-list/country-list.pug'),
          controller: 'CountryListController',
          lazyLoad: $transition$ => {
            const $ocLazyLoad = $transition$.injector().get('$ocLazyLoad')

            return import(/* webpackChunkName: "country-list" */ './country-list/country-list')
              .then(mod => $ocLazyLoad.load(mod.CountryList))
              .catch(err => {
                throw new Error('Ooops, something went wrong, ' + err)
              })
          }
        })
    }
  ])
