sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/routing/History",
    "sap/ui/core/Fragment",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, History, Fragment) {
        "use strict";

        return Controller.extend("invoices.invoices.controller.Detail", {
            onInit: function () {
                console.log("Estoy en la vista detalle")
                 
            },
           
        });
    });