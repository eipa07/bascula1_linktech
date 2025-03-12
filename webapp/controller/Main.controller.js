sap.ui.define([

    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast",
    "zqmed03bascula/zqmed03bascula/controller/BaseController"
], (JSONModel, MessageToast, BaseController) => {
    "use strict";

    return BaseController.extend("zqmed03bascula.zqmed03bascula.controller.Main", {
        onInit() {

            var _headerModel = new JSONModel();
            _headerModel.loadData("./model/Header.json", false);
            this.getView().setModel(_headerModel, "headerModel");

            var _detailModel = new JSONModel();
            _detailModel.loadData("./model/Detail.json", false);
            this.getView().setModel(_detailModel, "detailModel");

            // Aquí registramos un evento global para escuchar las teclas presionadas
            window.addEventListener("keydown", this._handleKeyDown.bind(this), false);

        },

        _handleKeyDown: function(oEvent) {
            var key = oEvent.key;
          
            // Comprobar si la tecla es la que definimos como atajo, por ejemplo: Ctrl + D
            if (oEvent.ctrlKey && key === 'i') {
                this.onPressIncluir();
            }
          },

          onExit: function() {
            // Limpieza cuando se destruya la vista
            window.removeEventListener("keydown", this._handleKeyDown, false);
          },

       

        onPressIncluir: function(oEvent){
            

            const aIndices = this.byId("MainView_Table_Header").getSelectedIndices();
			let sMsg;
			if (aIndices.length < 1) {
				sMsg = "no item selected";
			} else {
				sMsg = aIndices;
			}
			MessageToast.show(sMsg);

            this.getRouter().navTo("RouteDetail", {
                "arguments": aIndices
            }, false);
        },


        onBoletaRequest: function (oEvent) {
            //let sInputValue_Boleta = oEvent.getSource().getValue();
            //this._boletaInputId = oEvent.getSource().getId();
           /*  if (!this._oVHParnrDialog) {
                this._oVHParnrDialog = sap.ui.xmlfragment(
                    "report.ricefw.view.fragments.ParnrSelectionDialog",
                    this
                );
                this.getView().addDependent(this._oVHParnrDialog);
            }

            // Implement filter functionality
            this._oVHParnrDialog.getBinding("items").filter([new Filter(
                "Parnr", FilterOperator.Contains, sInputValue_Parnr
            )]);

            this._oVHParnrDialog.open(sInputValue_Parnr); */
        },




    });
});