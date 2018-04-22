jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
		"sap/ui/test/Opa5",
		"gpc/linde/de/test/integration/pages/Common",
		"sap/ui/test/opaQunit",
		"gpc/linde/de/test/integration/pages/Worklist",
		"gpc/linde/de/test/integration/pages/Object",
		"gpc/linde/de/test/integration/pages/NotFound",
		"gpc/linde/de/test/integration/pages/Browser",
		"gpc/linde/de/test/integration/pages/App"
	], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "gpc.linde.de.view."
	});

	sap.ui.require([
		"gpc/linde/de/test/integration/WorklistJourney",
		"gpc/linde/de/test/integration/ObjectJourney",
		"gpc/linde/de/test/integration/NavigationJourney",
		"gpc/linde/de/test/integration/NotFoundJourney",
		"gpc/linde/de/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});