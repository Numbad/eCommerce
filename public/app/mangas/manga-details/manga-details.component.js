'use strict';

angular.module('mangaDetails')
    .component('mangaDetails', {
        templateUrl: 'app/mangas/manga-details/manga-details.template.html',
        controllerAs: 'mdc',

        controller: ['$routeParams', 'Manga', '$window', 'toaster',
            function MangaDetailsController($routeParams, Manga, $window, toaster) {
                var self = this;
                self.manga = null;
                if (localStorage.getItem("shoppingList") == null) {
                    self.shoppingList = [];
                    localStorage.setItem("shoppingList", JSON.stringify(self.shoppingList));
                }
                else
                    self.shoppingList = JSON.parse(localStorage.getItem("shoppingList"));
                Manga.getManga($routeParams.mangaId)
                    .then(function onSuccess(response) {
                        self.manga = response.data.manga[0];
                    })
                    .catch(function onError() {
                        console.log("Erreur de récupération du manga : " + $routeParams.mangaId);
                    });

                self.addShoppingCart = function (manga, tome) {
                    if (manga.name.length != 0 && tome > 0) {
                        var shoppingList = [];
                        if (localStorage.getItem('shoppingList') != null)
                            shoppingList = JSON.parse(localStorage.getItem('shoppingList'));

                        var obj = {
                            'id': manga.id,
                            'name': manga.name,
                            'img': manga.volumes[tome - 1].urlImage,
                            'tome': tome,
                            'price': manga.price
                        }
                        shoppingList.push(obj);

                        localStorage.setItem("shoppingList", JSON.stringify(shoppingList));
                        toaster.pop('success', manga.name + ' - Tome ' + tome + ' a été ajouté au panier');
                    }
                }
            }]
    });