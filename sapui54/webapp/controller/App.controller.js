// @ts-nocheck
sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
         * 
         * @param {typeof sap.ui.core.mvc.Controller}           Controller
         * 
         */

    function (Controller) {
        "use strict";

        return Controller.extend("logaligroup4.sapui54.controller.App", {

            onInit: () => {

            },
            onOpenDialog: function (){
                this.getOwnerComponent().openHelloDialog();
                
            },

        });

    });