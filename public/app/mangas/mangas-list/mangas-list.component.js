'use strict';

angular
    .module('mangasList')
    .component('mangasList', {
        templateUrl: 'app/mangas/mangas-list/mangas-list.template.html',
        controllerAs: "mlc",
        controller: ['Manga', 
            function MangasListController(Manga) {
                var self = this; //ne fonctionne pas avec this. Ne fonctionne qu'avec $scope. A voir
                self.mangas = [];
                Manga.getAllMangas()
                    .then(function onSuccess(response) {
                        self.mangas = response.data['mangas'];
                    })
                    .catch( function onError() {
                        console.log("Erreur de récupération des mangas");
                    });
                self.orderMangas = 'name';
            }
        ]
    });