'use strict';

angular
    .module('sideBar')
    .component('sideBar', {
        templateUrl: 'app/sidebar/sidebar.template.html',
        controllerAs: "sbc",
        controller: function SidebarController($window, $interval) {
            var self = this;
            if (typeof (localStorage.getItem('shoppingList')) == 'undefined') {
                self.mangas = [];
                localStorage.setItem("shoppingList", JSON.stringify(self.shoppingList));
            }
            else {
                self.mangas = JSON.parse(localStorage.getItem('shoppingList'));
            }

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
            var navButton = document.getElementById('navbarSideButton');
            navButton.addEventListener('click', function () {
                document.getElementById('navbarSide').classList.add("reveal");
                document.querySelector('.overlay').style.display = 'block';
                var close = document.querySelector('#close');
                close.addEventListener('click', function () {
                    hide();
                });
            });
            var overlay = document.querySelector('.overlay');
            overlay.addEventListener('click', function () {
                hide();
            });


            $interval(refresh, 1000);
            function refresh() {
                if (localStorage.getItem("shoppingList") != null && JSON.parse(localStorage.getItem("shoppingList")).length != 0) {
                    if (self.mangas.length != JSON.parse(localStorage.getItem('shoppingList')).length) {
                        self.mangas = JSON.parse(localStorage.getItem('shoppingList'));
                    }
                } else
                    self.mangas = JSON.parse(localStorage.getItem('shoppingList'));
            }
            function hide() {
                document.getElementById('navbarSide').classList.remove("reveal");
                document.querySelector('.overlay').style.display = 'none';
            }
        }

    });