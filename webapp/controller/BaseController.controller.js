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
        },

        onCloseDialog: function(){
			// note: We don't need to chain to the pDialog promise, since this event-handler
			// is only called from within the loaded dialog itself.
			this.byId("helloDialog").close();            
        }
    });
    
});