(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('angular-atomic', ['exports', '@angular/core'], factory) :
    (global = global || self, factory(global['angular-atomic'] = {}, global.ng.core));
}(this, function (exports, core) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AngularAtomicService = /** @class */ (function () {
        function AngularAtomicService() {
        }
        AngularAtomicService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        AngularAtomicService.ctorParameters = function () { return []; };
        /** @nocollapse */ AngularAtomicService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function AngularAtomicService_Factory() { return new AngularAtomicService(); }, token: AngularAtomicService, providedIn: "root" });
        return AngularAtomicService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AngularAtomicComponent = /** @class */ (function () {
        function AngularAtomicComponent() {
        }
        /**
         * @return {?}
         */
        AngularAtomicComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        AngularAtomicComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'lib-angular-atomic',
                        template: "\n    <p>\n      angular-atomic works!\n    </p>\n  "
                    }] }
        ];
        /** @nocollapse */
        AngularAtomicComponent.ctorParameters = function () { return []; };
        return AngularAtomicComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ButtonComponent = /** @class */ (function () {
        function ButtonComponent() {
        }
        /**
         * @return {?}
         */
        ButtonComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        ButtonComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'at-button',
                        template: "<p>button works!</p>\n",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        ButtonComponent.ctorParameters = function () { return []; };
        return ButtonComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BannerLargeComponent = /** @class */ (function () {
        function BannerLargeComponent() {
        }
        /**
         * @return {?}
         */
        BannerLargeComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        BannerLargeComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'ml-banner-large',
                        template: "<p>banner-large works!</p>\n",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        BannerLargeComponent.ctorParameters = function () { return []; };
        return BannerLargeComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AngularAtomicModule = /** @class */ (function () {
        function AngularAtomicModule() {
        }
        AngularAtomicModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [AngularAtomicComponent, ButtonComponent, BannerLargeComponent],
                        imports: [],
                        exports: [AngularAtomicComponent]
                    },] }
        ];
        return AngularAtomicModule;
    }());

    exports.AngularAtomicComponent = AngularAtomicComponent;
    exports.AngularAtomicModule = AngularAtomicModule;
    exports.AngularAtomicService = AngularAtomicService;
    exports.ɵa = ButtonComponent;
    exports.ɵb = BannerLargeComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=angular-atomic.umd.js.map
