sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
function (Controller) {
    "use strict";

    return Controller.extend("project25.controller.View1", {
        onInit: function () {

        },
        onSubmit: function() {
            var oInput = this.getView().byId("_IDGenInput1");
            if (oInput) {
                var empId = oInput.getValue();
                if (empId === " ") {
                    oInput.setValueState("Error");
                    oInput.setValueStateText("EmployeeId is Mandatory, please fill it");
                }
            } else {
                console.error("Input control with ID '_IDGenInput1' not found.");
            }
        
        }
    });
});
