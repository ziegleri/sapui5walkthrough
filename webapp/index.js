sap.ui.define([
    "sap/ui/core/ComponentContainer"
], function(ComponentContainer) {
    'use strict';

    new ComponentContainer({
		name: "mysap.ui5.walkthrough",
		settings : {
			id : "walkthrough"
		},
		async: true
	}).placeAt("content");
    
});