'use strict';

angular.
module('eCommerceApp').
config(['$locationProvider' ,'$routeProvider',
  function config($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');
    $routeProvider.
      when('/mangas', {
        template: '<mangas-list></mangas-list>'
      }).
      when('/mangas/:mangaId', {
        template: '<manga-detail></manga-detail>'
      }).
      when('/mangas/validate', {
        template: '<validat-purchase></validate-purchase>'
      }).
      otherwise('/mangas');
  }
]);
