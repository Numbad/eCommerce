'use strict';

angular.module('eCommerceApp')
  .config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');
      $routeProvider
        .when('/mangas', {
          template: '<mangas-list></mangas-list>'
        })
        .when('/mangas/:mangaId', {
          template: '<manga-details></manga-details>'
        })
        .when('/validate', {
          template: '<validate-purchase></validate-purchase>'
        })
        .otherwise('/mangas');
    }
]);
