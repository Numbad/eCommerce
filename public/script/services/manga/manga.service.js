'use strict';

angular.module('services.manga')
    .factory('Manga', ['$http',
        function ($http) {
            var service = {
                getAllMangas: getAll,
                getManga: getMangaById
            }
            return service;

            function getAll() {
                //return $http.get("http://localhost:3000/mangas");
                return $http.get("https://radiant-thicket-74699.herokuapp.com/mangas");
            }

            function getMangaById(mangaId) {
                //return $http.get("http://localhost:3000/mangas/" + mangaId);
                return $http.get("https://radiant-thicket-74699.herokuapp.com/mangas/" + mangaId);
            }

        }
    ]);