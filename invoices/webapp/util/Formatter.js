sap.ui.define([], function (){
    'use strict';
    return{
        formatDate: function (milliseconds){
            // Convertir los milisegundos de la cadena            
            const date = new Date(milliseconds);            
            const day = String(date.getDate()).padStart(2, '0');
            const month = String(date.getMonth() + 1).padStart(2, '0');
            const year = date.getFullYear();

            return `${day}/${month}/${year}`;
        }                  
    };
}, true)