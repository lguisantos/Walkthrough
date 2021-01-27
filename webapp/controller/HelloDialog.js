sap.ui.define([
    "sap/ui/base/ManagedObject",
    "sap/ui/core/Fragment"
], function (ManagedObject, Fragment) {
    "use strict";

    return ManagedObject.extend("sap.ui.demo.walkthrough.controller.HelloDialo", {
        constructor: function (oView) {
            this._oView = oView
        },
        exit: function () {
            delete this._oView
        },
        open: function () {
            var oView = this._oView

            //create a lazily dialog
            if (!this.pDialog) {
                var oFragmentController = {
                    onClosedialog: function () {
                        oView.byId("helloDialog").close()
                    }
                }
                this.pDialog = Fragment.load({
                    id: oView.getId(),
                    name: "sap.ui.demo.walkthrough.view.HelloDialog",
                    controller: oFragmentController
                }).then(function (oDialog) {
                    // connect dialog to the root view of this component (models, lifecycle)
                    oView.addDependent(oDialog)
                    return oDialog
                })
            }
            this.pDialog.then(function (oDialog) {
                oDialog.open()
            })
        },

    })
})