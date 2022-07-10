sap.ui.define([
    'mysap/ui5/walkthrough/controller/BaseController.controller',
    "sap/ui/model/json/JSONModel"
], function(BaseController, JSONModel) {
    'use strict';
    return BaseController.extend("mysap.ui5.walkthrough.controller.InvoiceList", {
        onInit : function () {
			var oViewModel = new JSONModel({
				currency: "EUR"
			});
			this.getView().setModel(oViewModel, "view");
		}
    });
    
});