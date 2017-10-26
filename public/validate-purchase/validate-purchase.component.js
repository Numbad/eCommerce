'use strict';

angular
  .module('validatePurchase').
  component('validatePurchase', {
    templateUrl: '/validate-purchase/validate-purchase.template.html',
    controllerAs: "vpc",
    controller: function ValidatePurchaseController() {
        var self = this;
        this.test = "hey";
      }
  });
