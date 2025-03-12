/* global QUnit */
// https://api.qunitjs.com/config/autostart/
QUnit.config.autostart = false;

sap.ui.require([
	"zqm_ed03_bascula/zqm_ed03_bascula/test/unit/AllTests"
], function (Controller) {
	"use strict";
	QUnit.start();
});