import { Injectable, ɵɵdefineInjectable, Component, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AngularAtomicService = /** @class */ (function () {
    function AngularAtomicService() {
    }
    AngularAtomicService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    AngularAtomicService.ctorParameters = function () { return []; };
    /** @nocollapse */ AngularAtomicService.ngInjectableDef = ɵɵdefineInjectable({ factory: function AngularAtomicService_Factory() { return new AngularAtomicService(); }, token: AngularAtomicService, providedIn: "root" });
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
        { type: Component, args: [{
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
        { type: Component, args: [{
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
        { type: Component, args: [{
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
        { type: NgModule, args: [{
                    declarations: [AngularAtomicComponent, ButtonComponent, BannerLargeComponent],
                    imports: [],
                    exports: [AngularAtomicComponent]
                },] }
    ];
    return AngularAtomicModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { AngularAtomicComponent, AngularAtomicModule, AngularAtomicService, ButtonComponent as ɵa, BannerLargeComponent as ɵb };
//# sourceMappingURL=angular-atomic.js.map
