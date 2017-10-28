'use strict';

angular.module('mangasList')
    .component('mangasList', {
        templateUrl: 'mangas-list/mangas-list.template.html',
        controllerAs: "mlc",
        controller: ['Manga', '$scope', 
            function MangasListController(Manga, $scope) {
                var self = this; //ne fonctionne pas avec this. Ne fonctionne qu'avec $scope. A voir
                self.mangas = [];
                Manga.getAllMangas()
                    .then(function onSuccess(response) {
                        $scope.mangas = response.data['mangas'];
                    })
                    .catch( function onError() {
                        console.log("Erreur de récupération des mangas");
                    });
                self.orderMangas = 'name';
            }
        ]
    });