sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/m/MessageToast',
    "sap/ui/model/json/JSONModel"
], function(Controller, MessageToast, JSONModel) {
    'use strict';
    return Controller.extend("mysap.ui5.walkthrough.controller.App", {
        onInit: function(){
            var oData = {
                recepient: {
                    name: "World"
                }
            };
            var oModel = new JSONModel(oData);
            this.getView().setModel(oModel);
        },

        onShowHello: function(){
            MessageToast.show("Hello world!!!");
        }
    });
});