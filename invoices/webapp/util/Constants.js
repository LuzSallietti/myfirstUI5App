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
           invoices: "/Invoices",
           uniqueCustomerIds: "/UniqueCustomerIds",
           uniqueCustomerNames: "/UniqueCustomerNames"
        },
        models: {
            invoiceModel: "invoiceModel",
            i18n: "i18n"
        },
        routes: {
            detailRoute: "RouteDetail"
        },
        filters: {
            customerName: "CustomerName",
            customerId: "CustomerID"
        }
        
    }
}, true)