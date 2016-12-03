declare var System: any;

System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  paths: {
    // paths serve as alias
    'npm:': 'node_modules/',
  },
  // map tells the System loader where to look for things
  map: {
    // our app is within the app folder
    'boot': 'app/boot.js',

    // angular bundles
    '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
    '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
    '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
    '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
    '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
    '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
    '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
    '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
    '@angular/upgrade/static': 'npm:@angular/upgrade/bundles/upgrade-static.umd.js',

    // other libraries
    'rxjs': 'npm:rxjs'
  },
  meta: {
    'boot': {
      //format: 'global', // load this module as a global
      deps: [
        'npm:angular/angular.js',
        'npm:angular-route/angular-route.js',

        // dependencies to load before this module
        'app/app.js',
        'app/generalLedgerSvc.js',
        'app/appCmp.js',
        'app/accountsCmp.js',
        'app/accountCmp.js',
        'app/accountListItemCmp.js',
        'app/depositFormCmp.js',
        'app/billpayFormCmp.js',

        'app/app.module.js'
      ]
    },
  }
});
