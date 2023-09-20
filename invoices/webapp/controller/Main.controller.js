sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "invoices/invoices/util/Formatter",
    "invoices/invoices/util/Constants",    
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,
	JSONModel,	
	Filter,
	FilterOperator,
	Formatter,
	Constants,
	) {
        "use strict";

        return Controller.extend("invoices.invoices.controller.Main", {
            Formatter: Formatter,
            onInit: function () {              
                
                const url = sap.ui.require.toUrl(Constants.namespace.name) + Constants.service.northwindUrl; 
                this._model = new sap.ui.model.odata.v2.ODataModel(url, {
                    json: true,
                    headers: {
                        "DataServiceVersion": "2.0",
                        "Cache-Control": "no-cache, no-store",
                        "Pragma": "no-cache"
                    },
                    useBatch: false
                })

                this._model.read(Constants.properties.invoices, {
                    async: true,
                    success: jQuery.proxy(this.success, this),
                    error: jQuery.proxy(this.error, this)
                })

                

            },
            success: function (oData) {
                const oModel = new JSONModel(oData.results);
                this.getView().setModel(oModel, Constants.models.invoiceModel); //Constants
                console.log(oModel); // corroborar si veo ok el modelo?*/
            },
            error: function () {
                alert("Error");
            },
            
            //BUSCADOR
            onSearch: function (oEvent) {
                var oTable = this.byId("invoicesTable");
                var oTableBinding = oTable.getBinding("items"); //representa el enlace de datos entre la tabla y el modelo de datos// un objeto que proporciona métodos para interactuar con los datos en la tabla
                var sQuery = oEvent.getSource().getValue();

                if (sQuery && sQuery.length > 0) {
                    var oFilter = new Filter(Constants.filters.customerName, FilterOperator.Contains, sQuery);
                    oTableBinding.filter([oFilter]); //El argumento que se pasa a este método es un array de objetos de filtro, en este caso, [oFilter] es un array que contiene un solo filtro (oFilter).
                } else {
                    oTableBinding.filter([]);
                }
            },
            //Evento del item de la tabla
            onItemPress: function (oEvent) {

                // El path - posición del invoice
                const oItem = oEvent.getSource().getBindingContext(Constants.models.invoiceModel);
                const sPath = oItem.getPath();

                // Obtener los datos del invoice en sPath
                const oInvoiceData = this.getView().getModel(Constants.models.invoiceModel).getProperty(sPath);
                console.log(oInvoiceData);

                var detailModel = new JSONModel(oInvoiceData);
                this.getOwnerComponent().setModel(detailModel, 'detailModel') // Accedo a la app globalmente y seteo el model con el detalle

                // Navegar a la vista Detalle
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo(Constants.routes.detailRoute);
            }
        });
    });
