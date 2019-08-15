import { Injectable, ɵɵdefineInjectable, Component, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AngularAtomicService {
    constructor() { }
}
AngularAtomicService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
AngularAtomicService.ctorParameters = () => [];
/** @nocollapse */ AngularAtomicService.ngInjectableDef = ɵɵdefineInjectable({ factory: function AngularAtomicService_Factory() { return new AngularAtomicService(); }, token: AngularAtomicService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AngularAtomicComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
AngularAtomicComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-angular-atomic',
                template: `
    <p>
      angular-atomic works!
    </p>
  `
            }] }
];
/** @nocollapse */
AngularAtomicComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ButtonComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
ButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'at-button',
                template: "<p>button works!</p>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
ButtonComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BannerLargeComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
BannerLargeComponent.decorators = [
    { type: Component, args: [{
                selector: 'ml-banner-large',
                template: "<p>banner-large works!</p>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
BannerLargeComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AngularAtomicModule {
}
AngularAtomicModule.decorators = [
    { type: NgModule, args: [{
                declarations: [AngularAtomicComponent, ButtonComponent, BannerLargeComponent],
                imports: [],
                exports: [AngularAtomicComponent]
            },] }
];

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
