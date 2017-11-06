'use strict';

angular.module('mangaDetails')
    .component('mangaDetails', {
        templateUrl: 'manga-details/manga-details.template.html',
        controllerAs: "mdc",
        controller: function MangaDetailsController() {
            var self = this;
            this.test = "détails";
        }
    });