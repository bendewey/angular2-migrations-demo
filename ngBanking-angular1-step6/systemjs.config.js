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
    },
    meta: {
        'boot': {
            format: 'global',
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
                'app/billpayFormCmp.js'
            ]
        },
    }
});
//# sourceMappingURL=systemjs.config.js.map