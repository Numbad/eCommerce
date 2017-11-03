'use strict';

angular
    .module('eCommerceApp')
    .component('sideBar', {
        templateUrl: 'sidebar/sidebar.template.html',
        controllerAs: "sbc",
        controller:function SidebarController() {
            var self = this;
            self.mangas = [];
        }

    });