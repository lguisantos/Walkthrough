sap.ui.define([], function () {
    "use strict";

    return {
        statusText: function (sStatus) {
            var resorceBundle = this.getView().getModel("i18n").getResourceBundle()
            switch (sStatus) {
                case "A":
                    return resorceBundle.getText("invoiceStatusA")
                case "B":
                    return resorceBundle.getText("invoiceStatusB")
                case "C":
                    return resorceBundle.getText("invoiceStatusC")
                default:
                    return sStatus
            }
        }
    }
})