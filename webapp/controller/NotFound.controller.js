sap.ui.define([
		"gpc/linde/de/controller/BaseController"
	], function (BaseController) {
		"use strict";

		return BaseController.extend("gpc.linde.de.controller.NotFound", {

			/**
			 * Navigates to the worklist when the link is pressed
			 * @public
			 */
			onLinkPressed : function () {
				this.getRouter().navTo("worklist");
			}

		});

	}
);