'use strict';

angular.module('mangaDetails')
    .component('mangaDetails', {
        templateUrl: 'manga-details/manga-details.template.html',
        controllerAs: "mdc",
        controller: ['$routeParams', 'Manga', '$scope', '$window',
            function MangaDetailsController($routeParams, Manga, $scope, $window) {
                var self = this;
                Manga.getManga($routeParams.mangaId)
                    .then(function onSuccess(response) {
                        //console.log(response.data.manga[0]);
                        $scope.manga = response.data.manga[0];
                    })
                    .catch(function onError() {
                        console.log("Erreur de récupération du manga : " + $routeParams.mangaId);
                    });
                self.submit = function () {
                    if ($window.localStorage.getItem("basket") == null) {
                        var a = [];
                        a.push($scope.manga);
                        $window.localStorage.setItem("basket", JSON.stringify(a));
                    }
                    else {
                        var valu = JSON.parse($window.localStorage.getItem("basket"));
                        valu.push($scope.manga);
                        $window.localStorage.setItem("basket", JSON.stringify(valu));
                    }
                    console.log(JSON.parse($window.localStorage.getItem("basket")));

                }
            }]
    });