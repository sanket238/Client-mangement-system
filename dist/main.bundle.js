webpackJsonp([1,4],{

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2__ = __webpack_require__(159);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FirebaseService = (function () {
    function FirebaseService(af) {
        this.af = af;
        this.listings = this.af.database.list('/listings');
    }
    FirebaseService.prototype.getListings = function () {
        return this.listings;
    };
    FirebaseService.prototype.getListingDetails = function (id) {
        this.listing = this.af.database.object('/listings/' + id);
        return this.listing;
    };
    FirebaseService.prototype.addListing = function (listing) {
        return this.listings.push(listing);
    };
    FirebaseService.prototype.updateListing = function (id, listing) {
        return this.listings.update(id, listing);
    };
    FirebaseService.prototype.deleteListing = function (id) {
        return this.listings.remove(id);
    };
    FirebaseService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2__["d" /* AngularFire */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angularfire2__["d" /* AngularFire */]) === 'function' && _a) || Object])
    ], FirebaseService);
    return FirebaseService;
    var _a;
}());
//# sourceMappingURL=D:/project/firebase/src/firebase.service.js.map

/***/ }),

/***/ 399:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 399;


/***/ }),

/***/ 400:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(488);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(519);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=D:/project/firebase/src/main.js.map

/***/ }),

/***/ 518:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(705),
            styles: [__webpack_require__(698)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=D:/project/firebase/src/app.component.js.map

/***/ }),

/***/ 519:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(478);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(484);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_firebase_service__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_listings_listings_component__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_navbar_navbar_component__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_listing_listing_component__ = __webpack_require__(523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_add_listing_add_listing_component__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_edit_listing_edit_listing_component__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__order_by_pipe__ = __webpack_require__(526);
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















var firebaseConfig = {
    apiKey: 'AIzaSyCbWc57lGrEmssTZ_HJfPYRyuwOYIZ6UAY',
    authDomain: 'listings-6ce1a.firebaseapp.com',
    databaseURL: 'https://listings-6ce1a.firebaseio.com',
    storageBucket: 'listings-6ce1a.appspot.com',
    messagingSenderId: '986513468196'
};
var firebaseAuthConfig = {
    provider: __WEBPACK_IMPORTED_MODULE_5_angularfire2__["a" /* AuthProviders */].Google,
    method: __WEBPACK_IMPORTED_MODULE_5_angularfire2__["b" /* AuthMethods */].Popup
};
var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'listings', component: __WEBPACK_IMPORTED_MODULE_10__components_listings_listings_component__["a" /* ListingsComponent */] },
    { path: 'listing/:id', component: __WEBPACK_IMPORTED_MODULE_12__components_listing_listing_component__["a" /* ListingComponent */] },
    { path: 'edit-listing/:id', component: __WEBPACK_IMPORTED_MODULE_14__components_edit_listing_edit_listing_component__["a" /* EditListingComponent */] },
    { path: 'add-listing', component: __WEBPACK_IMPORTED_MODULE_13__components_add_listing_add_listing_component__["a" /* AddListingComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_listings_listings_component__["a" /* ListingsComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_listing_listing_component__["a" /* ListingComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_add_listing_add_listing_component__["a" /* AddListingComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_edit_listing_edit_listing_component__["a" /* EditListingComponent */],
                __WEBPACK_IMPORTED_MODULE_15__order_by_pipe__["a" /* OrderBy */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages__["FlashMessagesModule"],
                __WEBPACK_IMPORTED_MODULE_5_angularfire2__["c" /* AngularFireModule */].initializeApp(firebaseConfig, firebaseAuthConfig),
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_6__services_firebase_service__["a" /* FirebaseService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=D:/project/firebase/src/app.module.js.map

/***/ }),

/***/ 520:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(106);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddListingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddListingComponent = (function () {
    function AddListingComponent(firebaseService, router) {
        this.firebaseService = firebaseService;
        this.router = router;
    }
    AddListingComponent.prototype.ngOnInit = function () {
    };
    AddListingComponent.prototype.onAddSubmit = function () {
        var listing = {
            firstname: this.firstname,
            lastname: this.lastname,
            email: this.email,
            phoneno: this.phoneno,
            city: this.city,
            businessname: this.businessname,
            status: this.status,
            state: this.state,
            country: this.country,
            bankaccno: this.bankaccno,
            street1: this.street1,
            street2: this.street2,
            pincode: this.pincode
        };
        this.firebaseService.addListing(listing);
        this.router.navigate(['listings']);
    };
    AddListingComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-listing',
            template: __webpack_require__(706),
            styles: [__webpack_require__(699)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__["a" /* FirebaseService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__["a" /* FirebaseService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], AddListingComponent);
    return AddListingComponent;
    var _a, _b;
}());
//# sourceMappingURL=D:/project/firebase/src/add-listing.component.js.map

/***/ }),

/***/ 521:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(106);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditListingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditListingComponent = (function () {
    function EditListingComponent(firebaseService, router, route) {
        this.firebaseService = firebaseService;
        this.router = router;
        this.route = route;
    }
    EditListingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.route.snapshot.params['id'];
        this.firebaseService.getListingDetails(this.id).subscribe(function (listing) {
            _this.firstname = listing.firstname;
            _this.lastname = listing.lastname;
            _this.email = listing.email;
            _this.phoneno = listing.phoneno;
            _this.city = listing.city;
            _this.businessname = listing.businessname;
            _this.status = listing.status;
            _this.state = listing.state;
            _this.country = listing.country;
            _this.bankaccno = listing.bankaccno;
            _this.street1 = listing.street1;
            _this.street2 = listing.street2;
            _this.pincode = listing.pincode;
        });
    };
    EditListingComponent.prototype.onEditSubmit = function () {
        var listing = {
            firstname: this.firstname,
            lastname: this.lastname,
            email: this.email,
            phoneno: this.phoneno,
            city: this.city,
            businessname: this.businessname,
            status: this.status,
            state: this.state,
            country: this.country,
            bankaccno: this.bankaccno,
            street1: this.street1,
            street2: this.street2,
            pincode: this.pincode
        };
        this.firebaseService.updateListing(this.id, listing);
        this.router.navigate(['/listings']);
    };
    EditListingComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-edit-listing',
            template: __webpack_require__(707),
            styles: [__webpack_require__(700)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__["a" /* FirebaseService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__["a" /* FirebaseService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === 'function' && _c) || Object])
    ], EditListingComponent);
    return EditListingComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=D:/project/firebase/src/edit-listing.component.js.map

/***/ }),

/***/ 522:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = (function () {
    function HomeComponent(af, flashMessage) {
        this.af = af;
        this.flashMessage = flashMessage;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.login = function () {
        this.af.auth.login();
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(708),
            styles: [__webpack_require__(701)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2__["d" /* AngularFire */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angularfire2__["d" /* AngularFire */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _b) || Object])
    ], HomeComponent);
    return HomeComponent;
    var _a, _b;
}());
//# sourceMappingURL=D:/project/firebase/src/home.component.js.map

/***/ }),

/***/ 523:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(106);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListingComponent = (function () {
    function ListingComponent(firebaseService, router, route) {
        this.firebaseService = firebaseService;
        this.router = router;
        this.route = route;
    }
    ListingComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Get ID
        this.id = this.route.snapshot.params['id'];
        this.firebaseService.getListingDetails(this.id).subscribe(function (listing) {
            _this.listing = listing;
            console.log(listing);
        });
    };
    ListingComponent.prototype.onDeleteClick = function () {
        this.firebaseService.deleteListing(this.id);
        this.router.navigate(['/listings']);
    };
    ListingComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-listing',
            template: __webpack_require__(709),
            styles: [__webpack_require__(702)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__["a" /* FirebaseService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__["a" /* FirebaseService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === 'function' && _c) || Object])
    ], ListingComponent);
    return ListingComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=D:/project/firebase/src/listing.component.js.map

/***/ }),

/***/ 524:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(106);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListingsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListingsComponent = (function () {
    function ListingsComponent(firebaseService, router, route) {
        this.firebaseService = firebaseService;
        this.router = router;
        this.route = route;
    }
    ListingsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.firebaseService.getListings().subscribe(function (listings) {
            console.log(listings);
            _this.listings = listings;
        });
    };
    ListingsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-listings',
            template: __webpack_require__(710),
            styles: [__webpack_require__(703)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__["a" /* FirebaseService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__["a" /* FirebaseService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === 'function' && _c) || Object])
    ], ListingsComponent);
    return ListingsComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=D:/project/firebase/src/listings.component.js.map

/***/ }),

/***/ 525:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarComponent = (function () {
    function NavbarComponent(af, flashMessage) {
        this.af = af;
        this.flashMessage = flashMessage;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.login = function () {
        this.af.auth.login();
    };
    NavbarComponent.prototype.logout = function () {
        this.af.auth.logout();
        this.flashMessage.show('You are logged out', { cssClass: 'alert-success', timeout: 3000 });
    };
    NavbarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(711),
            styles: [__webpack_require__(704)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2__["d" /* AngularFire */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angularfire2__["d" /* AngularFire */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _b) || Object])
    ], NavbarComponent);
    return NavbarComponent;
    var _a, _b;
}());
//# sourceMappingURL=D:/project/firebase/src/navbar.component.js.map

/***/ }),

/***/ 526:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderBy; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OrderBy = (function () {
    function OrderBy() {
    }
    // transform(value: any, args?: any): any {
    //   return null;
    // }
    OrderBy._orderByComparator = function (a, b) {
        if ((isNaN(parseFloat(a)) || !isFinite(a)) || (isNaN(parseFloat(b)) || !isFinite(b))) {
            //Isn't a number so lowercase the string to properly compare
            if (a.toLowerCase() < b.toLowerCase())
                return -1;
            if (a.toLowerCase() > b.toLowerCase())
                return 1;
        }
        else {
            //Parse strings as numbers to compare properly
            if (parseFloat(a) < parseFloat(b))
                return -1;
            if (parseFloat(a) > parseFloat(b))
                return 1;
        }
        return 0; //equal each other
    };
    OrderBy.prototype.transform = function (input, _a) {
        var _b = _a[0], config = _b === void 0 ? '+' : _b;
        if (!Array.isArray(input))
            return input;
        if (!Array.isArray(config) || (Array.isArray(config) && config.length == 1)) {
            var propertyToCheck = !Array.isArray(config) ? config : config[0];
            var desc = propertyToCheck.substr(0, 1) == '-';
            //Basic array
            if (!propertyToCheck || propertyToCheck == '-' || propertyToCheck == '+') {
                return !desc ? input.sort() : input.sort().reverse();
            }
            else {
                var property = propertyToCheck.substr(0, 1) == '+' || propertyToCheck.substr(0, 1) == '-'
                    ? propertyToCheck.substr(1)
                    : propertyToCheck;
                return input.sort(function (a, b) {
                    return !desc
                        ? OrderBy._orderByComparator(a[property], b[property])
                        : -OrderBy._orderByComparator(a[property], b[property]);
                });
            }
        }
        else {
            //Loop over property of the array in order and sort
            return input.sort(function (a, b) {
                for (var i = 0; i < config.length; i++) {
                    var desc = config[i].substr(0, 1) == '-';
                    var property = config[i].substr(0, 1) == '+' || config[i].substr(0, 1) == '-'
                        ? config[i].substr(1)
                        : config[i];
                    var comparison = !desc
                        ? OrderBy._orderByComparator(a[property], b[property])
                        : -OrderBy._orderByComparator(a[property], b[property]);
                    //Don't return 0 yet in case of needing to sort by next property
                    if (comparison != 0)
                        return comparison;
                }
                return 0; //equal each other
            });
        }
    };
    OrderBy = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'orderBy',
            pure: false
        }), 
        __metadata('design:paramtypes', [])
    ], OrderBy);
    return OrderBy;
}());
//# sourceMappingURL=D:/project/firebase/src/order-by.pipe.js.map

/***/ }),

/***/ 527:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=D:/project/firebase/src/environment.js.map

/***/ }),

/***/ 698:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 699:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 700:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 701:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 702:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 703:
/***/ (function(module, exports) {

module.exports = "a:link{\r\n\ttext-decoration:none;\r\n}\r\nth{\r\n\ttext-align:center;\r\n}"

/***/ }),

/***/ 704:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 705:
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\">\n  <flash-messages></flash-messages>\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ 706:
/***/ (function(module, exports) {

module.exports = "<a [routerLink]=\"['/listings']\">Back</a>\n<br/>\n<h2 class=\"page-header\">Add User</h2>\n<form (submit)=\"onAddSubmit()\">\n\t<div class=\"form-group\">\n\t\t<label>FirstName</label>\n\t\t<input class=\"form-control\" type=\"text\" name=\"firstname\" [(ngModel)]=\"firstname\" required>\n\t</div>\n\t<div class=\"form-group\">\n\t\t<label>LastName</label>\n\t\t<input class=\"form-control\" type=\"text\" name=\"lastname\" [(ngModel)]=\"lastname\" required=\"\">\n\t</div>\n\t<div class=\"form-group\">\n\t\t<label>Email</label>\n\t\t<input class=\"form-control\" type=\"text\" name=\"email\" [(ngModel)]=\"email\" required>\n\t</div>\n\t<div class=\"form-group\">\n\t\t<label>BusinessName</label>\n\t\t<input class=\"form-control\" type=\"text\" name=\"businessname\" [(ngModel)]=\"businessname\" required>\n\t</div>\n\t<div class=\"form-group\">\n\t\t<label>Phonenumber</label>\n\t\t<input class=\"form-control\" type=\"number\" name=\"phoneno\" [(ngModel)]=\"phoneno\" required> \n\t</div>\n\t<div class=\"form-group\">\n\t\t<label>Bank Account no</label>\n\t\t<input class=\"form-control\" type=\"number\" name=\"bankaccno\" [(ngModel)]=\"bankaccno\">\n\t</div>\n\t<div class=\"form-group\">\n\t\t<label>Address</label>\n\t\t<input class=\"form-control\" type=\"text\" name=\"street1\" [(ngModel)]=\"street1\" placeholder=\"street1\">\n\t\t<input class=\"form-control\" type=\"text\" name=\"street2\" [(ngModel)]=\"street2\" placeholder=\"stree2\">\n\t\t<input class=\"form-control\" type=\"text\" name=\"city\" [(ngModel)]=\"city\" required placeholder=\"city\">\n\t\t<input class=\"form-control\" type=\"text\" name=\"state\" [(ngModel)]=\"state\" placeholder=\"state\">\n\t\t<input class=\"form-control\" type=\"text\" name=\"country\" [(ngModel)]=\"country\" placeholder=\"country\">\n\t\t<input class=\"form-control\" type=\"number\" name=\"pincode\" [(ngModel)]=\"pincode\" placeholder=\"pincode\">\n\t</div>\n\t<div class=\"form-group\">\n\t\t<label>Status</label>\n\t\t<select name=\"status\" class=\"form-control\" type=\"text\" [(ngModel)]=\"status\">\n\t\t\t\n\t\t\t<option value=\"active\">Active</option>\n\t\t\t<option value=\"passive\">Passive</option>\n\t\t\t<option value=\"pipeline\">Pipeline</option>\n\t\t\t<option value=\"prospect\">Prospect</option>\n\n\t\t</select>\n\t</div>\n\t<input type=\"submit\" value=\"submit\" class=\"btn btn-success\">\n</form>\n"

/***/ }),

/***/ 707:
/***/ (function(module, exports) {

module.exports = "<a [routerLink]=\"['/listings']\">Back</a>\n<br/>\n<h2 class=\"page-header\">Edit listing</h2>\n<form (submit)=\"onEditSubmit()\">\n\t<div class=\"form-group\">\n\t\t<label>FirstName</label>\n\t\t<input class=\"form-control\" type=\"text\" name=\"firstname\" [(ngModel)]=\"firstname\" required>\n\t</div>\n\t<div class=\"form-group\">\n\t\t<label>LastName</label>\n\t\t<input class=\"form-control\" type=\"text\" name=\"lastname\" [(ngModel)]=\"lastname\" required=\"\">\n\t</div>\n\t<div class=\"form-group\">\n\t\t<label>Email</label>\n\t\t<input class=\"form-control\" type=\"text\" name=\"email\" [(ngModel)]=\"email\" required>\n\t</div>\n\t<div class=\"form-group\">\n\t\t<label>BusinessName</label>\n\t\t<input class=\"form-control\" type=\"text\" name=\"businessname\" [(ngModel)]=\"businessname\" required>\n\t</div>\n\t<div class=\"form-group\">\n\t\t<label>Phonenumber</label>\n\t\t<input class=\"form-control\" type=\"number\" name=\"phoneno\" [(ngModel)]=\"phoneno\" required> \n\t</div>\n\t<div class=\"form-group\">\n\t\t<label>Bank Account no</label>\n\t\t<input class=\"form-control\" type=\"number\" name=\"bankaccno\" [(ngModel)]=\"bankaccno\">\n\t</div>\n\t<div class=\"form-group\">\n\t\t<label>Address</label>\n\t\t<input class=\"form-control\" type=\"text\" name=\"street1\" [(ngModel)]=\"street1\" placeholder=\"street1\">\n\t\t<input class=\"form-control\" type=\"text\" name=\"street2\" [(ngModel)]=\"street2\" placeholder=\"stree2\">\n\t\t<input class=\"form-control\" type=\"text\" name=\"city\" [(ngModel)]=\"city\" required placeholder=\"city\">\n\t\t<input class=\"form-control\" type=\"text\" name=\"state\" [(ngModel)]=\"state\" placeholder=\"state\">\n\t\t<input class=\"form-control\" type=\"text\" name=\"country\" [(ngModel)]=\"country\" placeholder=\"country\">\n\t\t<input class=\"form-control\" type=\"number\" name=\"pincode\" [(ngModel)]=\"pincode\" placeholder=\"pincode\">\n\t</div>\n\t<div class=\"form-group\">\n\t\t<label>Status</label>\n\t\t<select name=\"status\" class=\"form-control\" type=\"text\" [(ngModel)]=\"status\">\n\t\t\t\n\t\t\t<option value=\"active\">Active</option>\n\t\t\t<option value=\"passive\">Passive</option>\n\t\t\t<option value=\"pipeline\">Pipeline</option>\n\t\t\t<option value=\"prospect\">Prospect</option>\n\n\t\t</select>\n\t</div>\n\t<input type=\"submit\" value=\"submit\" class=\"btn btn-success\">\n</form>\n"

/***/ }),

/***/ 708:
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center\">\n  <div class=\"container\">\n    <h1>Customer Data</h1>\n    <p>Customer data is here </p>\n    <a (click)=\"login()\"><img src=\"assets/img/google.png\"></a>\n  </div>\n</div>\n"

/***/ }),

/***/ 709:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"listing\">\n    <a [routerLink]=\"['/listings']\">Go Back</a>\n    <br>\n    <h2 class=\"page-header\">{{listing.firstname}}  {{listing.lastname}} <!-- <small>{{listing.city}}</small> --></h2>\n    <div class=\"row\">\n      \n      <div>\n        <ul class=\"list-group\">\n          <li class=\"list-group-item\">Name: {{listing.firstname}}  {{listing.lastname}}</li>\n          <li class=\"list-group-item\">Email: {{listing.email}}</li>\n          <li class=\"list-group-item\">Phone: {{listing.phoneno}}</li>\n          <li class=\"list-group-item\">City: {{listing.city}}</li>\n        </ul>\n      </div>\n      <a class=\"btn btn-default\" [routerLink]=\"['/edit-listing/' +listing.$key]\">Edit</a>\n      <a (click)=\"onDeleteClick()\" class=\"btn btn-danger\">Delete</a>\n    </div>\n\n  </div>\n"

/***/ }),

/***/ 710:
/***/ (function(module, exports) {

module.exports = "<div class=\"container main-content\">\n\t<table class=\"table table-bordered\">\n\t\t<tr >\n\t\t\t<th colspan=\"7\">Based on status:Active</th>\n\n\t\t</tr>\n\t\t<tr>\n\t\t\t<th>#</th>\n\t\t\t<th>Name</th>\n\t\t\t<th>Email</th>\n\t\t\t\n\t\t\t\n\t\t</tr>\n\t\t<tr *ngFor=\"let listing of listings; let i=index \">\n\t\t\t\n\t\t\t\n\t\t\t\t<td *ngIf=\"listing.status =='active'\">{{i}}</td>\n\t\t\t\t<td *ngIf=\"listing.status =='active'\"><a [routerLink]=\"['/listing/'+listing.$key]\">{{listing.firstname}} {{listing.lastname}}</a></td>\n\n\t\t\t\t<td *ngIf=\"listing.status =='active'\"><a [routerLink]=\"['/listing/'+listing.$key]\">{{listing.email}}</a></td>\n\n\t\t\t\t\n\t\t\t\t\n\t\t\t\t\n\t     \t\t\n\t     \t\n\t\t\t\n\t\t</tr>\n\n\t</table>\n\n<br><br>\n\n<table class=\"table table-bordered\">\n\t\t<tr >\n\t\t\t<th colspan=\"7\">Based on status:Pipeline</th>\n\n\t\t</tr>\n\t\t<tr>\n\t\t\t<th>#</th>\n\t\t\t<th>Name</th>\n\t\t\t<th>Email</th>\n\t\t\t\n\t\t\t\n\t\t</tr>\n\t\t<tr *ngFor=\"let listing of listings; let i=index \">\n\t\t\t\n\t\t\t\n\t\t\t\t<td *ngIf=\"listing.status =='pipeline'\">{{i}}</td>\n\t\t\t\t<td *ngIf=\"listing.status =='pipeline'\"><a [routerLink]=\"['/listing/'+listing.$key]\">{{listing.firstname}} {{listing.lastname}}</a></td>\n\n\t\t\t\t<td *ngIf=\"listing.status =='pipeline'\"><a [routerLink]=\"['/listing/'+listing.$key]\">{{listing.email}}</a></td>\n\n\t\t\t\t\n\t\t\t\t\n\t\t\t\t\n\t     \t\t\n\t     \t\n\t\t\t\n\t\t</tr>\n\n\t</table>\n\n<br><br>\n\n\t<table class=\"table table-bordered\">\n\t\t<tr >\n\t\t\t<th colspan=\"7\">Based on status:Passive</th>\n\n\t\t</tr>\n\t\t<tr>\n\t\t\t<th>#</th>\n\t\t\t<th>Name</th>\n\t\t\t<th>Email</th>\n\t\t\t\n\t\t</tr>\n\t\t<tr *ngFor=\"let listing of listings; let i=index \">\n\t\t\t\n\t\t\t\n\t\t\t\t<td *ngIf=\"listing.status =='passive'\">{{i}}</td>\n\t\t\t\t<td *ngIf=\"listing.status =='passive'\"><a [routerLink]=\"['/listing/'+listing.$key]\">{{listing.firstname}} {{listing.lastname}}</a></td>\n\n\t\t\t\t<td *ngIf=\"listing.status =='passive'\"><a [routerLink]=\"['/listing/'+listing.$key]\">{{listing.email}}</a></td>\n\n\t\t\t\t\n\t\t\t\t\n\t\t\t\t\n\t     \t\t\n\t     \t\n\t\t\t\n\t\t</tr>\n\n\t</table>\n\n<br><br>\n\t\t<table class=\"table table-bordered\">\n\t\t<tr>\n\t\t\t<th colspan=\"7\">Total no of Users</th>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<th>#</th>\n\t\t\t<th>Name</th>\n\t\t\t<th>Email</th>\n\t\t\t<th>Business Name</th>\n\t\t\t<th>City</th>\n\t\t\t<th>PhoneNo</th>\n\t\t\t<th>Actions</th>\n\t\t</tr>\n\t\t<tr *ngFor=\"let listing of listings; let i=index \">\n\t\t\n\t\t\t<td>{{i}}</td>\n\t\t\t<td><a [routerLink]=\"['/listing/'+listing.$key]\">{{listing.firstname}} {{listing.lastname}}</a></td>\n\n\t\t\t<td><a [routerLink]=\"['/listing/'+listing.$key]\">{{listing.email}}</a></td>\n\n\t\t\t<td><a [routerLink]=\"['/listing/'+listing.$key]\">{{listing.businessname}}</a></td>\n\n\t\t\t<td><a [routerLink]=\"['/listing/'+listing.$key]\">{{listing.city}}</a></td>\n\n\t\t\t<td><a [routerLink]=\"['/listing/'+listing.$key]\">{{listing.phoneno}}</a></td>\n\n\t\t\t<td><a class=\"btn btn-default\" [routerLink]=\"['/edit-listing/' +listing.$key]\">Edit</a>\n\t\t\t\n     \t\t</td>\n\t\t\t\n\t\t</tr>\n\n\t</table>\n\t\n</div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<!-- <ul class=\"list-group\">\n  <li class=\"list-group-item\" *ngFor=\"let listing of listings\">\n    <a [routerLink]=\"['/listing/'+listing.$key]\">{{listing.firstname}}</a>\n  </li>\n</ul> -->\n"

/***/ }),

/***/ 711:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\">\n      <div class=\"container\">\n        <div class=\"navbar-header\">\n          <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n            <span class=\"sr-only\">Toggle navigation</span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n          </button>\n          <a class=\"navbar-brand\" href=\"#\">Dashboard</a>\n        </div>\n        <div id=\"navbar\" class=\"collapse navbar-collapse\">\n          <ul class=\"nav navbar-nav navbar-left\">\n            <li><a [routerLink]=\"['/']\">Home</a></li>\n            <li *ngIf=\"(af.auth | async)\"><a [routerLink]=\"['/listings']\">Listings</a></li>\n            <li *ngIf=\"(af.auth | async)\"><a [routerLink]=\"['/add-listing']\">Add User</a></li>\n          </ul>\n          <ul class=\"nav navbar-nav navbar-right\">\n            <li *ngIf=\"!(af.auth | async)\"><a (click)=\"login()\">Login</a></li>\n            <li *ngIf=\"(af.auth | async)\"><a (click)=\"logout()\">Logout</a></li>\n          </ul>\n        </div><!--/.nav-collapse -->\n      </div>\n    </nav>\n"

/***/ }),

/***/ 735:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(400);


/***/ })

},[735]);
//# sourceMappingURL=main.bundle.map