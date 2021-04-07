/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"logaligroup4/sapui54/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});
