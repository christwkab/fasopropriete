(self["webpackChunkdu_property"] = self["webpackChunkdu_property"] || []).push([["src_app_pages_pricing_pricing_module_ts"],{

/***/ 730:
/*!************************************************************!*\
  !*** ./src/app/pages/pricing/monthly/monthly.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MonthlyComponent": () => (/* binding */ MonthlyComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_monthly_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./monthly.component.html */ 69909);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);



let MonthlyComponent = class MonthlyComponent {
    constructor() {
        this.items = [
            { name: 'free', price: 0, desc: 'Simplest package to get you started', properties: '10', agentProfiles: '1', agencyProfiles: '0', featuredProperties: '0' },
            { name: 'basic', price: 49, desc: 'The most popular package we offer', properties: '100', agentProfiles: '3', agencyProfiles: '1', featuredProperties: '0' },
            { name: 'premium', price: 79, desc: 'The perfect package for your small business', properties: '250', agentProfiles: '10', agencyProfiles: '5', featuredProperties: '50' },
            { name: 'professional', price: 159, desc: 'Our most advanced & complete package', properties: 'Unlimited', agentProfiles: 'Unlimited', agencyProfiles: 'Unlimited', featuredProperties: 'Unlimited' }
        ];
    }
    ngOnInit() {
    }
};
MonthlyComponent.ctorParameters = () => [];
MonthlyComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-monthly',
        template: _raw_loader_monthly_component_html__WEBPACK_IMPORTED_MODULE_0__.default
    })
], MonthlyComponent);



/***/ }),

/***/ 45761:
/*!****************************************************!*\
  !*** ./src/app/pages/pricing/pricing.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PricingComponent": () => (/* binding */ PricingComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_pricing_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./pricing.component.html */ 11025);
/* harmony import */ var _pricing_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pricing.component.scss */ 794);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let PricingComponent = class PricingComponent {
    constructor() { }
    ngOnInit() {
    }
};
PricingComponent.ctorParameters = () => [];
PricingComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-pricing',
        template: _raw_loader_pricing_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_pricing_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PricingComponent);



/***/ }),

/***/ 39001:
/*!*************************************************!*\
  !*** ./src/app/pages/pricing/pricing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "routes": () => (/* binding */ routes),
/* harmony export */   "PricingModule": () => (/* binding */ PricingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/shared.module */ 44466);
/* harmony import */ var _pricing_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pricing.component */ 45761);
/* harmony import */ var _yearly_yearly_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./yearly/yearly.component */ 93748);
/* harmony import */ var _monthly_monthly_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./monthly/monthly.component */ 730);








const routes = [
    { path: '', component: _pricing_component__WEBPACK_IMPORTED_MODULE_1__.PricingComponent, pathMatch: 'full' }
];
let PricingModule = class PricingModule {
};
PricingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        declarations: [
            _pricing_component__WEBPACK_IMPORTED_MODULE_1__.PricingComponent,
            _yearly_yearly_component__WEBPACK_IMPORTED_MODULE_2__.YearlyComponent,
            _monthly_monthly_component__WEBPACK_IMPORTED_MODULE_3__.MonthlyComponent
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes),
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule
        ]
    })
], PricingModule);



/***/ }),

/***/ 93748:
/*!**********************************************************!*\
  !*** ./src/app/pages/pricing/yearly/yearly.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "YearlyComponent": () => (/* binding */ YearlyComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_yearly_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./yearly.component.html */ 70698);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);



let YearlyComponent = class YearlyComponent {
    constructor() {
        this.items = [
            { name: 'free', price: 0, desc: 'Simplest package to get you started', properties: '10', agentProfiles: '1', agencyProfiles: '0', featuredProperties: '0' },
            { name: 'basic', price: 569, desc: 'The most popular package we offer', properties: '100', agentProfiles: '3', agencyProfiles: '1', featuredProperties: '0' },
            { name: 'premium', price: 929, desc: 'The perfect package for your small business', properties: '250', agentProfiles: '10', agencyProfiles: '5', featuredProperties: '50' },
            { name: 'professional', price: 1899, desc: 'Our most advanced & complete package', properties: 'Unlimited', agentProfiles: 'Unlimited', agencyProfiles: 'Unlimited', featuredProperties: 'Unlimited' }
        ];
    }
    ngOnInit() {
    }
};
YearlyComponent.ctorParameters = () => [];
YearlyComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-yearly',
        template: _raw_loader_yearly_component_html__WEBPACK_IMPORTED_MODULE_0__.default
    })
], YearlyComponent);



/***/ }),

/***/ 794:
/*!******************************************************!*\
  !*** ./src/app/pages/pricing/pricing.component.scss ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcmljaW5nLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ 69909:
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pricing/monthly/monthly.component.html ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div fxLayout=\"row wrap\">\r\n    <div *ngFor=\"let item of items\" fxFlex=\"100\" fxFlex.gt-sm=\"25\" fxFlex.sm=\"50\" class=\"p-2\">\r\n        <mat-card class=\"pricing-card text-center border-accent p-0 h-100\">\r\n            <h2 class=\"pricing-title my-3\">{{item.name}}</h2>\r\n            <div class=\"bg-accent pricing-header p-3\" fxLayout=\"column\" fxLayoutAlign=\"center center\">   \r\n                <h1>$ {{item.price}}<small> /mo</small></h1>\r\n                <p class=\"desc mb-2\">{{item.desc}}</p>\r\n            </div>\r\n            <div class=\"p-3\">\r\n                <p class=\"py-2\"><span class=\"mx-2 fw-500\">{{item.properties}}</span>Properties</p>\r\n                <p class=\"py-2\"><span class=\"mx-2 fw-500\">{{item.agentProfiles}}</span>Agent Profile<span *ngIf=\"item.agentProfiles != '1'\">s</span></p>\r\n                <p class=\"py-2\" [class.del]=\"item.agencyProfiles == '0'\" [class.text-muted]=\"item.agencyProfiles == '0'\">\r\n                  <span *ngIf=\"item.agencyProfiles != '0'\" class=\"mx-2 fw-500\">{{item.agencyProfiles}}</span>Agency Profile<span *ngIf=\"item.agencyProfiles != '1'\">s</span>\r\n                </p>\r\n                <p class=\"py-2\" [class.del]=\"item.featuredProperties == '0'\" [class.text-muted]=\"item.featuredProperties == '0'\">\r\n                  <span *ngIf=\"item.featuredProperties != '0'\" class=\"mx-2 fw-500\">{{item.featuredProperties}}</span>Featured Properties\r\n                </p> \r\n                <button mat-raised-button color=\"primary\" class=\"mt-3 uppercase\">Buy now</button>\r\n            </div>\r\n        </mat-card>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ 11025:
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pricing/pricing.component.html ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"p-3\">\r\n  <div class=\"theme-container\">\r\n\r\n      <div class=\"my-3\">\r\n        <div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"text-center\">  \r\n          <h1 class=\"uppercase\">Pricing packages</h1>             \r\n          <p>Choose a package that's best for your business.</p>\r\n        </div>\r\n        <mat-tab-group mat-align-tabs=\"center\" class=\"pricing-tabs\">\r\n          <mat-tab label=\"MONTHLY\"><app-monthly></app-monthly></mat-tab>\r\n          <mat-tab label=\"YEARLY\"><app-yearly></app-yearly></mat-tab>\r\n        </mat-tab-group>\r\n      </div> \r\n\r\n  </div>\r\n</div>");

/***/ }),

/***/ 70698:
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pricing/yearly/yearly.component.html ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div fxLayout=\"row wrap\">\r\n    <div *ngFor=\"let item of items\" fxFlex=\"100\" fxFlex.gt-sm=\"25\" fxFlex.sm=\"50\" class=\"p-2\">\r\n        <mat-card class=\"pricing-card text-center border-accent p-0 h-100\">\r\n            <h2 class=\"pricing-title my-3\">{{item.name}}</h2>\r\n            <div class=\"bg-accent pricing-header p-3\" fxLayout=\"column\" fxLayoutAlign=\"center center\">   \r\n                <h1>$ {{item.price}}<small> /yr</small></h1>\r\n                <p class=\"desc mb-2\">{{item.desc}}</p>\r\n            </div>\r\n            <div class=\"p-3\">\r\n                <p class=\"py-2\"><span class=\"mx-2 fw-500\">{{item.properties}}</span>Properties</p>\r\n                <p class=\"py-2\"><span class=\"mx-2 fw-500\">{{item.agentProfiles}}</span>Agent Profile<span *ngIf=\"item.agentProfiles != '1'\">s</span></p>\r\n                <p class=\"py-2\" [class.del]=\"item.agencyProfiles == '0'\" [class.text-muted]=\"item.agencyProfiles == '0'\">\r\n                  <span *ngIf=\"item.agencyProfiles != '0'\" class=\"mx-2 fw-500\">{{item.agencyProfiles}}</span>Agency Profile<span *ngIf=\"item.agencyProfiles != '1'\">s</span>\r\n                </p>\r\n                <p class=\"py-2\" [class.del]=\"item.featuredProperties == '0'\" [class.text-muted]=\"item.featuredProperties == '0'\">\r\n                  <span *ngIf=\"item.featuredProperties != '0'\" class=\"mx-2 fw-500\">{{item.featuredProperties}}</span>Featured Properties\r\n                </p> \r\n                <button mat-raised-button color=\"primary\" class=\"mt-3 uppercase\">Buy now</button>\r\n            </div>\r\n        </mat-card>\r\n    </div>\r\n</div>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_pricing_pricing_module_ts.js.map