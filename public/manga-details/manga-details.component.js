'use strict';

angular.module('mangaDetails')
    .component('mangaDetails', {
        templateUrl: 'manga-details/manga-details.template.html',
        controllerAs: "mdc",
        controller: ['$routeParams', 'Manga', '$scope',  
            function MangaDetailsController($routeParams, Manga, $scope) {
                var self = this;
                Manga.getManga($routeParams.mangaId)
                    .then(function onSuccess(response) {
                        //console.log(response.data.manga[0]);
                        $scope.manga = response.data.manga[0];
                    })
                    .catch(function onError() {
                        console.log("Erreur de récupération du manga : " + $routeParams.mangaId);
                    });
            }]
    });