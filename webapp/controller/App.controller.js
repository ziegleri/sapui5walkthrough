sap.ui.define([
    'sap/ui/core/mvc/Controller',
], function(Controller) {
    'use strict';
    return Controller.extend("mysap.ui5.walkthrough.controller.App", {
        onShowHello: function(){
            alert("Hello world!!!");
        }
    });
});