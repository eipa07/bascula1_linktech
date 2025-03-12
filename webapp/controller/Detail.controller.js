sap.ui.define([
    "zqmed03bascula/zqmed03bascula/controller/BaseController",
    "sap/ui/model/json/JSONModel",
], (BaseController, JSONModel) => {
    "use strict";

    return BaseController.extend("zqmed03bascula.zqmed03bascula.controller.Detail", {
        onInit() {

            var oRouter = this.getRouter();

            oRouter.getRoute("RouteDetail").attachMatched(this._onObjectMatched, this);

        },

        _onObjectMatched: function(oEvent){
            var oArgs = oEvent.getParameter("arguments");
            //var _headerId = oArgs

            console.log(oArgs);
        },

        onPressIncluir: function(oEvent){

            this.getRouter().navTo("RegistroBoleta", {
                "estado": 1
            }, false);
        },

        goBackBtn: function(){
            this.goBack();
        }


       




    });
});