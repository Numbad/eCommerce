'use strict';

angular
  .module('validatePurchase').
  component('validatePurchase', {
    templateUrl: '/validate-purchase/validate-purchase.template.html',
    controllerAs: "vpc",
    controller: function ValidatePurchaseController($interval) {
      var self = this;
      self.shoppingCart = JSON.parse(localStorage.getItem('shoppingList'))
      self.due = getDue(self.shoppingCart).toFixed(2);
      function getDue(shoppingCart) {
        var due = 0;
        for (var i = 0; i < shoppingCart.length; i++) {
          due = due + parseFloat(shoppingCart[i].price);
        }
        return due;
      }
      $('#navbarSide').removeClass('reveal');
      $('.overlay').hide();
      $interval(refresh, 1000);
      function refresh() {
        if (localStorage.getItem("shoppingList") != null &&  JSON.parse(localStorage.getItem("shoppingList")).length != 0)
          if (self.shoppingCart.length != JSON.parse(localStorage.getItem('shoppingList')).length) {
            self.shoppingCart = JSON.parse(localStorage.getItem('shoppingList'));
            self.due = getDue(self.shoppingCart).toFixed(2);
          }
      }
      self.clear = function () {
        console.log("fg");

        localStorage.setItem('shoppingList', JSON.stringify([]));
      }
    }
  });
