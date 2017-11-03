'use strict';

angular.module('mangaDetails')
    .component('mangaDetails', {
        templateUrl: 'manga-details/manga-details.template.html',
        controllerAs: 'mdc',
        controller: ['$routeParams', 'Manga', '$window', 'toaster', 
            function MangaDetailsController($routeParams, Manga, $window, toaster) {
                var self = this;
                self.manga = null;
                //localStorage.setItem("shoppingList", null);
                if(localStorage.getItem("shoppingList") == null) {
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
                
                self.addShoppingCart = function(manga, tome) {
                    if(manga.name.length != 0 && tome > 0) {
                        self.shoppingList.push(manga);
                        localStorage.setItem("shoppingList", JSON.stringify(self.shoppingList));

                        toaster.pop('success', manga.name + ' - Tome ' + tome + ' a été ajouté au panier');
                    }
                }
            }]
    });