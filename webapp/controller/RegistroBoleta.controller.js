sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("zqmed03bascula.zqmed03bascula.controller.RegistroBoleta", {
        onInit() {

          // pag 175 - 402

          var oRouter = this.getRouter();

          oRouter.getRoute("detail").attachMatched(this._onObjectMatched, this);

        },

        _onObjectMatched: function(){
            var oArgs = oEvent.getParameter("arguments");
            //var _headerId = oArgs

            console.log(oArgs);
        },

        goBackBtn: function(){
            this.goBack();
        }



    });
});