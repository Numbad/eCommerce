'use strict';

angular
    .module('eCommerceApp')
    .component('sideBar', {
        templateUrl: 'sidebar/sidebar.template.html',
        controllerAs: "sbc",
        controller: function SidebarController($window, $interval) {
            var self = this;
            if (JSON.parse(localStorage.getItem('shoppingList')) == null)
                self.mangas = [];
            else
                self.mangas = JSON.parse(localStorage.getItem('shoppingList'));

            self.deleteFromSCart = function (manga) {
                var index = self.mangas.indexOf(manga);
                if (index != -1) {
                    self.mangas.splice(index, 1);
                    localStorage.setItem("shoppingList", JSON.stringify(self.mangas));
                }
                if (self.mangas.length == 0) {
                    $('#navbarSide').removeClass('reveal');
                    $('.overlay').hide();
                }
            }
            console.log($window.location.hash);
            $interval(refresh, 1000);
            function refresh() {
                if (self.mangas.length != JSON.parse(localStorage.getItem('shoppingList')).length) {
                    self.mangas = JSON.parse(localStorage.getItem('shoppingList'));
                }
            }
        }

    });