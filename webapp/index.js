sap.ui.define([
    "sap/ui/core/mvc/XMLView"
], function(XMLView) {
    'use strict';

    XMLView.create({
        viewName: "mysap.ui5.walkthrough.view.App"
    }).then(function (oView) {
        oView.placeAt("content");
    });    
    
});