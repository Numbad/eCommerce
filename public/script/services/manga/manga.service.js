'use strict';

angular.module('services.manga')
    .factory('Manga', ['$http', 
        function($http) {
            var service = {
                getAllMangas:getAll,
                getManga:getMangaById
            }
            return service;

            function getAll() {
                return $http.get("http://localhost:3000/mangas");
            }

            function getMangaById(manga) {
                return null;
            }
        }
    ]);