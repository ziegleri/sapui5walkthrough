sap.ui.define([
    'sap/ui/core/mvc/Controller'
], function(Controller) {
    'use strict';
    return Controller.extend("mysap.ui5.walkthrough.controller.BaseController", {
        onOpenDialog : function () {

            // create dialog lazily
            if (!this.pDialog) {
                this.pDialog = this.loadFragment({
                    name: "mysap.ui5.walkthrough.view.HelloDialog"
                });
            } 
            this.pDialog.then(function(oDialog) {
                oDialog.open();
            });
        }
    });
    
});