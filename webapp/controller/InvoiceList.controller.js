sap.ui.define([
    'mysap/ui5/walkthrough/controller/BaseController.controller',
    "sap/ui/model/json/JSONModel",
    "../model/formatter"
], function(BaseController, JSONModel, formatter) {
    'use strict';
    return BaseController.extend("mysap.ui5.walkthrough.controller.InvoiceList", {
        formatter: formatter,
        onInit : function () {
			var oViewModel = new JSONModel({
				currency: "EUR"
			});
			this.getView().setModel(oViewModel, "view");
		}
    });
    
});