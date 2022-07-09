sap.ui.define([
    'mysap/ui5/walkthrough/controller/BaseController.controller',
    'sap/m/MessageToast',
    'sap/ui/core/Fragment'
], function(BaseController, MessageToast, Fragment) {
    'use strict';
        return BaseController.extend("mysap.ui5.walkthrough.controller.HelloPanel", {
            onShowHello: function(){
            // read msg from i18n model
            var oBundle = this.getView().getModel("i18n").getResourceBundle();
            var sRecipient = this.getView().getModel().getProperty("/recipient/name");
            var sMsg = oBundle.getText("helloMsg", [sRecipient]);
            // show message
            MessageToast.show(sMsg);
            },

        });
    });