sap.ui.define([], function (){
    'use strict';
    return {       
        namespace: {
            name: "invoices/invoices"
        },
        service: {
            northwindUrl:"/northwind/northwind.svc" 
        },
        properties: {
           invoices: "/Invoices"
        },
        models: {
            invoiceModel: "invoiceModel",
            i18n: "i18n"
        },
        routes: {
            detailRoute: "RouteDetail"
        },
        filters: {
            customerName: "CustomerName"
        }
        
    }
}, true)