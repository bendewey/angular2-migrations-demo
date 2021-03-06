// Bootstrap the angular app module
//angular
//    .bootstrap(document.documentElement, ['ngBanking']);
"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var static_1 = require('@angular/upgrade/static');
var app_module_1 = require('./app.module');
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule).then(function (platformRef) {
    var upgrade = platformRef.injector.get(static_1.UpgradeModule);
    upgrade.bootstrap(document.documentElement, ['ngBanking']);
});
//# sourceMappingURL=boot.js.map