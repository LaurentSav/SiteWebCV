function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _contact_contact_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./contact/contact.component */
    "./src/app/contact/contact.component.ts");
    /* harmony import */


    var _projet_projet_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./projet/projet.component */
    "./src/app/projet/projet.component.ts");
    /* harmony import */


    var _projet_calculatrice_calculatrice_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./projet/calculatrice/calculatrice.component */
    "./src/app/projet/calculatrice/calculatrice.component.ts");
    /* harmony import */


    var _projet_projet_home_projet_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./projet/projet-home/projet-home.component */
    "./src/app/projet/projet-home/projet-home.component.ts");
    /* harmony import */


    var _projet_piano_piano_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./projet/piano/piano.component */
    "./src/app/projet/piano/piano.component.ts");
    /* harmony import */


    var _projet_taquin_taquin_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./projet/taquin/taquin.component */
    "./src/app/projet/taquin/taquin.component.ts");
    /* harmony import */


    var _projet_puissance4_puissance4_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./projet/puissance4/puissance4.component */
    "./src/app/projet/puissance4/puissance4.component.ts");

    var routes = [{
      path: '',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    }, {
      path: 'Projet',
      component: _projet_projet_component__WEBPACK_IMPORTED_MODULE_4__["ProjetComponent"],
      children: [{
        path: '',
        component: _projet_projet_home_projet_home_component__WEBPACK_IMPORTED_MODULE_6__["ProjetHomeComponent"]
      }, {
        path: 'Calculatrice',
        component: _projet_calculatrice_calculatrice_component__WEBPACK_IMPORTED_MODULE_5__["CalculatriceComponent"]
      }, {
        path: 'Piano',
        component: _projet_piano_piano_component__WEBPACK_IMPORTED_MODULE_7__["PianoComponent"]
      }, {
        path: 'Taquin',
        component: _projet_taquin_taquin_component__WEBPACK_IMPORTED_MODULE_8__["TaquinComponent"]
      }, {
        path: 'Puissance4',
        component: _projet_puissance4_puissance4_component__WEBPACK_IMPORTED_MODULE_9__["Puissance4Component"]
      }]
    }, {
      path: 'Contact',
      component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_3__["ContactComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'Laurent SAVIVANH';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 35,
      vars: 0,
      consts: [[1, "Head-Container"], [1, "Titre"], [1, "Titre2"], ["href", "#", "routerLink", "/", "id", "Home", 1, "underline"], ["href", "#", "routerLink", "/Projet", "id", "Projet", 1, "underline"], ["href", "#", "routerLink", "/Contact", "id", "Contact", 1, "underline"], [1, "BottomLigne"], [1, "container"], [1, "text-center"], ["id", "iconn"], ["href", "https://www.flaticon.com/authors/cursor-creative", "title", "Cursor Creative"], ["href", "https://www.flaticon.com/", "title", "Flaticon"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Laurent Savivanh");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Etudiant en Ing\xE9nierie Informatique");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nav");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Projet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Contact");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Angular 10");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Icons made by ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Cursor Creative");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " from ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " www.flaticon.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2FzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.sass']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./contact/contact.component */
    "./src/app/contact/contact.component.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
    /* harmony import */


    var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ngx-bootstrap/carousel */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/carousel/fesm2015/ngx-bootstrap-carousel.js");
    /* harmony import */


    var _projet_projet_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./projet/projet.component */
    "./src/app/projet/projet.component.ts");
    /* harmony import */


    var _projet_calculatrice_calculatrice_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./projet/calculatrice/calculatrice.component */
    "./src/app/projet/calculatrice/calculatrice.component.ts");
    /* harmony import */


    var _projet_projet_home_projet_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./projet/projet-home/projet-home.component */
    "./src/app/projet/projet-home/projet-home.component.ts");
    /* harmony import */


    var _projet_piano_piano_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./projet/piano/piano.component */
    "./src/app/projet/piano/piano.component.ts");
    /* harmony import */


    var _projet_taquin_taquin_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./projet/taquin/taquin.component */
    "./src/app/projet/taquin/taquin.component.ts");
    /* harmony import */


    var _projet_puissance4_puissance4_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./projet/puissance4/puissance4.component */
    "./src/app/projet/puissance4/puissance4.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeModule"], ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_8__["CarouselModule"].forRoot()]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__["ContactComponent"], _projet_projet_component__WEBPACK_IMPORTED_MODULE_9__["ProjetComponent"], _projet_calculatrice_calculatrice_component__WEBPACK_IMPORTED_MODULE_10__["CalculatriceComponent"], _projet_projet_home_projet_home_component__WEBPACK_IMPORTED_MODULE_11__["ProjetHomeComponent"], _projet_piano_piano_component__WEBPACK_IMPORTED_MODULE_12__["PianoComponent"], _projet_taquin_taquin_component__WEBPACK_IMPORTED_MODULE_13__["TaquinComponent"], _projet_puissance4_puissance4_component__WEBPACK_IMPORTED_MODULE_14__["Puissance4Component"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeModule"], ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_8__["CarouselModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__["ContactComponent"], _projet_projet_component__WEBPACK_IMPORTED_MODULE_9__["ProjetComponent"], _projet_calculatrice_calculatrice_component__WEBPACK_IMPORTED_MODULE_10__["CalculatriceComponent"], _projet_projet_home_projet_home_component__WEBPACK_IMPORTED_MODULE_11__["ProjetHomeComponent"], _projet_piano_piano_component__WEBPACK_IMPORTED_MODULE_12__["PianoComponent"], _projet_taquin_taquin_component__WEBPACK_IMPORTED_MODULE_13__["TaquinComponent"], _projet_puissance4_puissance4_component__WEBPACK_IMPORTED_MODULE_14__["Puissance4Component"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeModule"], ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_8__["CarouselModule"].forRoot()],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/contact/contact.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/contact/contact.component.ts ***!
    \**********************************************/

  /*! exports provided: ContactComponent */

  /***/
  function srcAppContactContactComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactComponent", function () {
      return ContactComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @fortawesome/free-brands-svg-icons */
    "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");

    var ContactComponent = /*#__PURE__*/function () {
      function ContactComponent() {
        _classCallCheck(this, ContactComponent);

        this.faLinkedin = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faLinkedin"];
        this.faTwitter = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faTwitter"];
        this.faFacebook = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faFacebook"];
        this.faGithub = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faGithub"];
      }

      _createClass(ContactComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          document.getElementById('Home').style.fontWeight = 'normal';
          document.getElementById('Projet').style.fontWeight = 'normal';
          document.getElementById('Contact').style.fontWeight = 'bold';
        }
      }]);

      return ContactComponent;
    }();

    ContactComponent.ɵfac = function ContactComponent_Factory(t) {
      return new (t || ContactComponent)();
    };

    ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ContactComponent,
      selectors: [["app-contact"]],
      decls: 66,
      vars: 4,
      consts: [[1, "wrap", "align-items-center"], [1, "text-center"], [1, "row", "responsive-marge-top"], [1, "col-md-6"], [1, "row", "marge-left"], [1, "Helvt"], [1, "BottomBlueLigne", "marge-left", "marge-bot"], [1, "row", "text-left", "marge-left"], [1, "row"], [1, "col-lg-6", "col-12", "col-sm-12"], [1, "font-weight-bold"], [1, "col-lg-4", "col-12", "col-sm-12"], [1, "col-lg-8", "col-12", "col-sm-12"], [1, "row", "text-left", "marge-left", "responsive-marge-top"], ["id", "social", 1, "row", "text-left", "marge-left"], [1, "col-lg-2", "col-md-3", "col-3", "nopadding"], ["href", "https://www.linkedin.com/in/laurent-savivanh-42342618b", "target", "_blank"], [1, "btn", "nodeco", "size"], [1, "h1", "text-primary", 3, "icon"], ["href", "https://fr-fr.facebook.com/laurent.savivanh", "target", "_blank"], ["href", "https://twitter.com/SavivanhL", "target", "_blank"], ["href", "https://github.com/LaurentSav", "target", "_blank"]],
      template: function ContactComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "INFO RAPIDE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h4", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "T\xE9l\xE9phone");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "07.82.34.64.32");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h4", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "E-Mail");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "laurentsavivanh@gmail.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h1", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "R\xC9SEAUX SOCIAUX");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "fa-icon", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "fa-icon", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "fa-icon", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "fa-icon", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "h1", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Autres Informations");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Autres");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faLinkedin);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faFacebook);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faTwitter);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faGithub);
        }
      },
      directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FaIconComponent"]],
      styles: [".BottomBlueLigne[_ngcontent-%COMP%] {\n  border-bottom: 6px solid #2980b9;\n  width: 15%;\n}\n\n.Helvt[_ngcontent-%COMP%] {\n  font-family: Arial, Helvetica, sans-serif;\n  font-weight: bold;\n  font-size: 2rem;\n}\n\n.marge-top[_ngcontent-%COMP%] {\n  margin-top: 5%;\n}\n\n.marge-left[_ngcontent-%COMP%] {\n  margin-left: 3%;\n}\n\n.marge-bot[_ngcontent-%COMP%] {\n  margin-bottom: 2%;\n}\n\n.wrap[_ngcontent-%COMP%] {\n  margin: auto;\n  width: 80%;\n  min-height: 100%;\n}\n\n.nodeco[_ngcontent-%COMP%]:focus {\n  text-decoration: none !important;\n  outline: none;\n  box-shadow: none;\n}\n\n.size[_ngcontent-%COMP%] {\n  transition: all 0.2s ease-in-out;\n}\n\n.size[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n}\n\n#social[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.wrap[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.nopadding[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\n@media only screen and (max-width: 425px) {\n  .responsive-marge-top[_ngcontent-%COMP%] {\n    margin-top: 10%;\n  }\n\n  h4[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n\n  p[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n\n  h1[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n\n  h3[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n\n  .Helvt[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n\n  .BottomBlueLigne[_ngcontent-%COMP%] {\n    border-bottom: 6px solid #2980b9;\n    width: 25%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0NBQUE7RUFDQSxVQUFBO0FBQ0o7O0FBQ0E7RUFDSSx5Q0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQUVKOztBQURBO0VBQ0ksY0FBQTtBQUlKOztBQUhBO0VBQ0ksZUFBQTtBQU1KOztBQUxBO0VBQ0ksaUJBQUE7QUFRSjs7QUFQQTtFQUNJLFlBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUFVSjs7QUFUQTtFQUNJLGdDQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FBWUo7O0FBVkE7RUFDSSxnQ0FBQTtBQWFKOztBQVhBO0VBQ0kscUJBQUE7QUFjSjs7QUFYQTtFQUNJLFdBQUE7QUFjSjs7QUFaQTtFQUNJLFlBQUE7QUFlSjs7QUFiQTtFQUNJLFVBQUE7QUFnQko7O0FBVkE7RUFFSTtJQUNJLGVBQUE7RUFZTjs7RUFWRTtJQUNJLGVBQUE7RUFhTjs7RUFaRTtJQUNJLGVBQUE7RUFlTjs7RUFkRTtJQUNJLGVBQUE7RUFpQk47O0VBaEJFO0lBQ0ksZUFBQTtFQW1CTjs7RUFsQkU7SUFDSSxpQkFBQTtFQXFCTjs7RUFuQkU7SUFDSSxnQ0FBQTtJQUNBLFVBQUE7RUFzQk47QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIi5Cb3R0b21CbHVlTGlnbmVcclxuICAgIGJvcmRlci1ib3R0b206IDZweCBzb2xpZCAjMjk4MGI5XHJcbiAgICB3aWR0aDogMTUlXHJcblxyXG4uSGVsdnRcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCxIZWx2ZXRpY2Esc2Fucy1zZXJpZlxyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRcclxuICAgIGZvbnQtc2l6ZTogMi4wcmVtXHJcbi5tYXJnZS10b3BcclxuICAgIG1hcmdpbi10b3A6IDUlXHJcbi5tYXJnZS1sZWZ0XHJcbiAgICBtYXJnaW4tbGVmdDogMyVcclxuLm1hcmdlLWJvdFxyXG4gICAgbWFyZ2luLWJvdHRvbTogMiVcclxuLndyYXBcclxuICAgIG1hcmdpbjogYXV0b1xyXG4gICAgd2lkdGg6IDgwJVxyXG4gICAgbWluLWhlaWdodDogMTAwJVxyXG4ubm9kZWNvOmZvY3VzXHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudFxyXG4gICAgb3V0bGluZTogbm9uZVxyXG4gICAgYm94LXNoYWRvdzogbm9uZVxyXG5cclxuLnNpemVcclxuICAgIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1pbi1vdXRcclxuXHJcbi5zaXplOmhvdmVyXHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSlcclxuXHJcblxyXG4jc29jaWFsXHJcbiAgICB3aWR0aDogMTAwJVxyXG5cclxuLndyYXBcclxuICAgIGhlaWdodDogMTAwJVxyXG5cclxuLm5vcGFkZGluZ1xyXG4gICAgcGFkZGluZzogMFxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MjZweCkgYW5kIChtYXgtd2lkdGg6IDc2OHB4KVxyXG5cclxuICAgIFxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuICBhbmQgKG1heC13aWR0aDogNDI1cHgpXHJcblxyXG4gICAgLnJlc3BvbnNpdmUtbWFyZ2UtdG9wXHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTAlXHJcbiAgICAgICAgXHJcbiAgICBoNFxyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweFxyXG4gICAgcCBcclxuICAgICAgICBmb250LXNpemU6IDE2cHhcclxuICAgIGgxXHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4XHJcbiAgICBoM1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjJweFxyXG4gICAgLkhlbHZ0XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW1cclxuXHJcbiAgICAuQm90dG9tQmx1ZUxpZ25lXHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogNnB4IHNvbGlkICMyOTgwYjlcclxuICAgICAgICB3aWR0aDogMjUlIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-contact',
          templateUrl: './contact.component.html',
          styleUrls: ['./contact.component.sass']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @fortawesome/free-solid-svg-icons */
    "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
    /* harmony import */


    var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-bootstrap/carousel */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/carousel/fesm2015/ngx-bootstrap-carousel.js");

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);

        this.faAngleRight = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faChevronRight"];
        this.faAngleLeft = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faChevronLeft"];
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          document.getElementById('Home').style.fontWeight = 'bold';
          document.getElementById('Projet').style.fontWeight = 'normal';
          document.getElementById('Contact').style.fontWeight = 'normal';
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)();
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 193,
      vars: 2,
      consts: [[1, "wrap"], [1, "row"], [1, "col-md-4"], ["src", ".\\assets\\Image\\Photo.jpeg", "alt", "Photo de Profile", 1, "smaller-image", "black-border", "center-block"], ["id", "cv", 1, "row", "responsive-marge-top"], ["download", "", "target", "_blank", "href", ""], [1, "marge-top", "btn", "btn-outline-primary", "center-block", "nodeco"], [1, "col-md-8"], ["id", "Bonjour", 1, "Helvt", "responsive-marge-top"], ["id", "Experience", 1, "displayinline"], [1, "row", "marge-left"], [1, "Helvt"], [1, "BottomBlueLigne", "marge-left", "marge-bot"], [1, "row", "height50", "marge-left", "align-items-center"], [1, "col-md-1"], [1, "col-md-10"], [1, "FCarousel", 3, "interval"], [1, "grey", "font-weight-bold"], [1, "marge-left", "marge-bot"], ["id", "Formation", 1, "displayinline"], [1, "row", "marge-left", "height50", "align-items-center"], ["id", "TECHNIQUES", 1, "displayinline"], [1, "row", "marge-left", "marge-top"], [1, "col-md-5"], [1, "font-weight-bold"], ["id", "Humaines", 1, "displayinline"], [1, "row", "marge-left", "align-items-center", "marge-top"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "T\xE9l\xE9charger CV");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h1", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "BONJOUR,");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Je suis un \xE9l\xE8ve ing\xE9nieur en informatique, actuellement au Canada pour obtenir un double dipl\xF4me en ma\xEEtrise informatique.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Je suis a la recherche d'un stage de fin d'\xE9tude en informatique d'une dur\xE9e de 6 mois (PFE) pour juillet-ao\xFBt 2021. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h1", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "EXP\xC9RIENCES");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "carousel", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "slide");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h3", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Landis+Gyr \u2013 Ing\xE9nieur Logiciel Stagiaire");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Mascot, Australie - 01 juillet 2019 au 25 ao\xFBt 2019 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Stage en ing\xE9nierie software dans lequel plusieurs t\xE2ches m'ont \xE9t\xE9 confi\xE9s pour assurer la qualit\xE9 des produits commercialis\xE9s par l'entreprise.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "R\xE9solution de bugs dans une application (en Visual Basic), cr\xE9ation d'une application pour interagir plus facilement");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "avec certaines bases de donn\xE9es de l'entreprise, collaboration avec d'autres ing\xE9nieur pour relancer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "slide");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h3", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "UNICEF - B\xE9n\xE9vole");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Calais, France - 2018 \xE0 2019");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Collecte de Fond, Sensibilisation aupr\xE8s des enfants...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "h1", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "FORMATIONS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "carousel", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "slide");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "h3", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "UQAC - Double Dipl\xF4me en Matrise Informatique (Professionnel)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Chicoutimi, Canada - 2020 \xE0 2021 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Formation visant \xE0 d\xE9velopper chez l\u2019\xE9tudiant des comp\xE9tences avanc\xE9es dans des secteurs de pointe de l\u2019informatique. En plus de permettre l\u2019acquisition de connaissances de haut niveau, le programme de ma\xEEtrise cherche \xE0 d\xE9velopper chez ce dernier ses capacit\xE9s d\u2019analyse et de synth\xE8se.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "slide");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "h3", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "EILCO - Dipl\xF4me d'Ing\xE9nieur G\xE9n\xE9ralistes en Informatique ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Calais, France - 2018 \xE0 2021 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "L\u2019objectif de la sp\xE9cialit\xE9 \xAB Informatique \xBB est de former des ing\xE9nieurs ayant des comp\xE9tences en mati\xE8re de d\xE9veloppement, de d\xE9ploiement et d\u2019audit de syst\xE8mes informatiques sur des environnements alliant r\xE9partition et mobilit\xE9.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "slide");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "h3", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Classe Pr\xE9paratoire aux Grandes \xC9coles");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Meaux, France - 2016-2018");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Formation pr\xE9parant l'\xE9tudiant aux concours d'entr\xE9e et aux admissions sur titre de nombreuses \xE9cole d'ing\xE9nieurs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "h1", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "COMP\xC9TENCES TECHNIQUES");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "h3", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "D\xE9veloppement web");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, " Front-End ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "HTML");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "CSS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "JAVASCRIPT");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Bootstrap");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "XML");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Angular");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, " Back-End: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Ruby on Rails");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "Python");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "Ruby");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Firebase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "ASP.NET");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "h3", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "Langages de programmation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "JAVA ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "C#");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "C");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "Python");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "Visual Basic");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "Assembleur (D\xE9butant)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "h3", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "D\xE9veloppement mobile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "Android");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "Flutter(D\xE9butant)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](146, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](148, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "h3", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "SQL");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "PL/SQL");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "MySQL");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "Postgresql");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "Firebase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "MS SQL");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](163, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](164, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](165, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "h1", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "COMP\xC9TENCES HUMAINES");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](170, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](172, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "h3", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, "Langages:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, "Fran\xE7ais (Langue Maternelle)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, "Anglais (Courant, TOEIC : 960)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "Espagnol (D\xE9butant)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "h3", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, "Soft-Skills");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, "Flexible");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, "Sens de l'organisation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, "Rigoureux");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](192, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("interval", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("interval", 0);
        }
      },
      directives: [ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_2__["CarouselComponent"], ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_2__["SlideComponent"]],
      styles: [".wrap[_ngcontent-%COMP%] {\n  margin: auto;\n  width: 80%;\n}\n\n.smaller-image[_ngcontent-%COMP%] {\n  width: 100%;\n  border-color: lightgrey;\n  border-width: 2px;\n  border-style: solid;\n  border-radius: 50%;\n}\n\n.marge-top[_ngcontent-%COMP%] {\n  margin-top: 5%;\n}\n\n.marge-left[_ngcontent-%COMP%] {\n  margin-left: 3%;\n}\n\n.marge-bot[_ngcontent-%COMP%] {\n  margin-bottom: 2%;\n}\n\n#cv[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n\n.Helvt[_ngcontent-%COMP%] {\n  font-family: Arial, Helvetica, sans-serif;\n  font-weight: bold;\n  font-size: 2rem;\n}\n\n.BottomBlueLigne[_ngcontent-%COMP%] {\n  border-bottom: 6px solid #2980b9;\n  width: 10%;\n}\n\n#RowInfo[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", sans-serif;\n}\n\n.cont[_ngcontent-%COMP%] {\n  height: 0px;\n  overflow: hidden;\n}\n\n.show[_ngcontent-%COMP%] {\n  overflow: visible;\n  height: auto;\n}\n\n.nodeco[_ngcontent-%COMP%]:focus {\n  text-decoration: none !important;\n  outline: none;\n  box-shadow: none;\n}\n\n.nomargin[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n  margin-top: 0px3;\n}\n\n#Experience[_ngcontent-%COMP%] {\n  height: 250px;\n}\n\n#Formation[_ngcontent-%COMP%] {\n  height: 350px;\n}\n\n.height50[_ngcontent-%COMP%] {\n  height: 80%;\n}\n\n@media only screen and (min-width: 350px) and (max-width: 425px) {\n  .responsive-marge-top[_ngcontent-%COMP%] {\n    margin-top: 10%;\n  }\n\n  h4[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n\n  p[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n\n  h1[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n\n  h3[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n\n  #Experience[_ngcontent-%COMP%] {\n    height: 350px;\n  }\n\n  #Formation[_ngcontent-%COMP%] {\n    height: 450px;\n  }\n\n  .BottomBlueLigne[_ngcontent-%COMP%] {\n    width: 25%;\n  }\n\n  li[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n\n@media only screen and (min-width: 426px) and (max-width: 768px) {\n  .responsive-marge-top[_ngcontent-%COMP%] {\n    margin-top: 0%;\n  }\n\n  h4[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n\n  p[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n\n  h1[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n\n  h3[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n\n  #Experience[_ngcontent-%COMP%] {\n    height: 300px;\n  }\n\n  #Formation[_ngcontent-%COMP%] {\n    height: 400px;\n  }\n\n  .BottomBlueLigne[_ngcontent-%COMP%] {\n    width: 15%;\n  }\n\n  li[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n}\n\n@media only screen and (max-width: 350px) {\n  .responsive-marge-top[_ngcontent-%COMP%] {\n    margin-top: 10%;\n  }\n\n  h4[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n\n  p[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n\n  h1[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n\n  h3[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n\n  .Helvt[_ngcontent-%COMP%] {\n    font-size: 1.75rem;\n  }\n\n  #Experience[_ngcontent-%COMP%] {\n    height: 400px;\n  }\n\n  #Formation[_ngcontent-%COMP%] {\n    height: 550px;\n  }\n\n  .BottomBlueLigne[_ngcontent-%COMP%] {\n    width: 25%;\n  }\n\n  li[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLFVBQUE7QUFDSjs7QUFBQTtFQUNJLFdBQUE7RUFFQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUVKOztBQUFBO0VBQ0ksY0FBQTtBQUdKOztBQUZBO0VBQ0ksZUFBQTtBQUtKOztBQUpBO0VBQ0ksaUJBQUE7QUFPSjs7QUFKQTtFQUNJLHVCQUFBO0FBT0o7O0FBTEE7RUFDSSx5Q0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQVFKOztBQU5BO0VBQ0ksZ0NBQUE7RUFDQSxVQUFBO0FBU0o7O0FBUEE7RUFFSSxpQ0FBQTtBQVNKOztBQVBBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0FBVUY7O0FBUkE7RUFDRSxpQkFBQTtFQUNBLFlBQUE7QUFXRjs7QUFSQTtFQUNJLGdDQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FBV0o7O0FBVkE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0FBYUo7O0FBWEE7RUFDSSxhQUFBO0FBY0o7O0FBYkE7RUFDSSxhQUFBO0FBZ0JKOztBQWRBO0VBQ0ksV0FBQTtBQWlCSjs7QUFmQTtFQUNJO0lBQ0ksZUFBQTtFQWtCTjs7RUFoQkU7SUFDSSxlQUFBO0VBbUJOOztFQWxCRTtJQUNJLGVBQUE7RUFxQk47O0VBcEJFO0lBQ0ksZUFBQTtFQXVCTjs7RUF0QkU7SUFDSSxlQUFBO0VBeUJOOztFQXZCRTtJQUNJLGFBQUE7RUEwQk47O0VBekJFO0lBQ0ksYUFBQTtFQTRCTjs7RUEzQkU7SUFDSSxVQUFBO0VBOEJOOztFQTVCRTtJQUNJLGVBQUE7RUErQk47QUFDRjs7QUE1QkE7RUFDSTtJQUNJLGNBQUE7RUE4Qk47O0VBNUJFO0lBQ0ksZUFBQTtFQStCTjs7RUE5QkU7SUFDSSxlQUFBO0VBaUNOOztFQWhDRTtJQUNJLGVBQUE7RUFtQ047O0VBbENFO0lBQ0ksZUFBQTtFQXFDTjs7RUFuQ0U7SUFDSSxhQUFBO0VBc0NOOztFQXJDRTtJQUNJLGFBQUE7RUF3Q047O0VBdkNFO0lBQ0ksVUFBQTtFQTBDTjs7RUF4Q0U7SUFDSSxlQUFBO0VBMkNOO0FBQ0Y7O0FBeENBO0VBQ0k7SUFDSSxlQUFBO0VBMENOOztFQXhDRTtJQUNJLGVBQUE7RUEyQ047O0VBMUNFO0lBQ0ksZUFBQTtFQTZDTjs7RUE1Q0U7SUFDSSxlQUFBO0VBK0NOOztFQTlDRTtJQUNJLGVBQUE7RUFpRE47O0VBL0NFO0lBQ0ksa0JBQUE7RUFrRE47O0VBL0NFO0lBQ0ksYUFBQTtFQWtETjs7RUFqREU7SUFDSSxhQUFBO0VBb0ROOztFQW5ERTtJQUNJLFVBQUE7RUFzRE47O0VBcERFO0lBQ0ksZUFBQTtFQXVETjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBcclxuICAgIG1hcmdpbjogYXV0b1xyXG4gICAgd2lkdGg6IDgwJVxyXG4uc21hbGxlci1pbWFnZSBcclxuICAgIHdpZHRoOiAxMDAlXHJcblxyXG4gICAgYm9yZGVyLWNvbG9yOiBsaWdodGdyZXlcclxuICAgIGJvcmRlci13aWR0aDogMnB4XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkXHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCVcclxuXHJcbi5tYXJnZS10b3BcclxuICAgIG1hcmdpbi10b3A6IDUlXHJcbi5tYXJnZS1sZWZ0XHJcbiAgICBtYXJnaW4tbGVmdDogMyVcclxuLm1hcmdlLWJvdFxyXG4gICAgbWFyZ2luLWJvdHRvbTogMiVcclxuXHJcblxyXG4jY3ZcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyXHJcblxyXG4uSGVsdnRcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCxIZWx2ZXRpY2Esc2Fucy1zZXJpZlxyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRcclxuICAgIGZvbnQtc2l6ZTogMi4wcmVtXHJcblxyXG4uQm90dG9tQmx1ZUxpZ25lXHJcbiAgICBib3JkZXItYm90dG9tOiA2cHggc29saWQgIzI5ODBiOVxyXG4gICAgd2lkdGg6IDEwJVxyXG5cclxuI1Jvd0luZm9cclxuICAgIFxyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmXHJcblxyXG4uY29udFxyXG4gIGhlaWdodDogMHB4XHJcbiAgb3ZlcmZsb3c6IGhpZGRlblxyXG5cclxuLnNob3dcclxuICBvdmVyZmxvdzogdmlzaWJsZVxyXG4gIGhlaWdodDogYXV0b1xyXG5cclxuXHJcbi5ub2RlY286Zm9jdXNcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50XHJcbiAgICBvdXRsaW5lOiBub25lXHJcbiAgICBib3gtc2hhZG93OiBub25lXHJcbi5ub21hcmdpblxyXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4XHJcbiAgICBtYXJnaW4tdG9wOiAwcHgzXHJcblxyXG4jRXhwZXJpZW5jZVxyXG4gICAgaGVpZ2h0OiAyNTBweFxyXG4jRm9ybWF0aW9uXHJcbiAgICBoZWlnaHQ6IDM1MHB4XHJcblxyXG4uaGVpZ2h0NTBcclxuICAgIGhlaWdodDogODAlXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDM1MHB4KSBhbmQgKG1heC13aWR0aDogNDI1cHgpXHJcbiAgICAucmVzcG9uc2l2ZS1tYXJnZS10b3BcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMCVcclxuICAgICAgICBcclxuICAgIGg0XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4XHJcbiAgICBwIFxyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweFxyXG4gICAgaDFcclxuICAgICAgICBmb250LXNpemU6IDE4cHhcclxuICAgIGgzXHJcbiAgICAgICAgZm9udC1zaXplOiAyMnB4XHJcbiAgICBcclxuICAgICNFeHBlcmllbmNlXHJcbiAgICAgICAgaGVpZ2h0OiAzNTBweFxyXG4gICAgI0Zvcm1hdGlvblxyXG4gICAgICAgIGhlaWdodDogNDUwcHhcclxuICAgIC5Cb3R0b21CbHVlTGlnbmVcclxuICAgICAgICB3aWR0aDogMjUlXHJcblxyXG4gICAgbGlcclxuICAgICAgICBmb250LXNpemU6IDE2cHhcclxuXHJcbiAgICAgICAgXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQyNnB4KSBhbmQgKG1heC13aWR0aDogNzY4cHgpXHJcbiAgICAucmVzcG9uc2l2ZS1tYXJnZS10b3BcclxuICAgICAgICBtYXJnaW4tdG9wOiAwJVxyXG4gICAgICAgIFxyXG4gICAgaDRcclxuICAgICAgICBmb250LXNpemU6IDIycHhcclxuICAgIHAgXHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4XHJcbiAgICBoMVxyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweFxyXG4gICAgaDNcclxuICAgICAgICBmb250LXNpemU6IDI0cHhcclxuICAgIFxyXG4gICAgI0V4cGVyaWVuY2VcclxuICAgICAgICBoZWlnaHQ6IDMwMHB4XHJcbiAgICAjRm9ybWF0aW9uXHJcbiAgICAgICAgaGVpZ2h0OiA0MDBweFxyXG4gICAgLkJvdHRvbUJsdWVMaWduZVxyXG4gICAgICAgIHdpZHRoOiAxNSVcclxuXHJcbiAgICBsaVxyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweFxyXG5cclxuXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gIGFuZCAobWF4LXdpZHRoOiAzNTBweClcclxuICAgIC5yZXNwb25zaXZlLW1hcmdlLXRvcFxyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwJVxyXG4gICAgICAgIFxyXG4gICAgaDRcclxuICAgICAgICBmb250LXNpemU6IDIwcHhcclxuICAgIHAgXHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4XHJcbiAgICBoMVxyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweFxyXG4gICAgaDNcclxuICAgICAgICBmb250LXNpemU6IDIycHhcclxuXHJcbiAgICAuSGVsdnRcclxuICAgICAgICBmb250LXNpemU6IDEuNzVyZW1cclxuXHJcbiAgICBcclxuICAgICNFeHBlcmllbmNlXHJcbiAgICAgICAgaGVpZ2h0OiA0MDBweFxyXG4gICAgI0Zvcm1hdGlvblxyXG4gICAgICAgIGhlaWdodDogNTUwcHhcclxuICAgIC5Cb3R0b21CbHVlTGlnbmVcclxuICAgICAgICB3aWR0aDogMjUlXHJcblxyXG4gICAgbGlcclxuICAgICAgICBmb250LXNpemU6IDE2cHhcclxuICAgICAgICAiXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.sass']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/projet/calculatrice/calculatrice.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/projet/calculatrice/calculatrice.component.ts ***!
    \***************************************************************/

  /*! exports provided: CalculatriceComponent */

  /***/
  function srcAppProjetCalculatriceCalculatriceComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalculatriceComponent", function () {
      return CalculatriceComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @fortawesome/free-solid-svg-icons */
    "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");

    var CalculatriceComponent = /*#__PURE__*/function () {
      function CalculatriceComponent() {
        _classCallCheck(this, CalculatriceComponent);

        this.fabackspace = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faBackspace"];
        this.input = ['', '', ''];
        this.leString = '';
        this.output = '';
      }

      _createClass(CalculatriceComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          document.getElementById('Resultat').innerHTML = '';
        }
      }, {
        key: "Clear",
        value: function Clear() {
          this.leString = '';
          this.input = ['', '', ''];
          this.output = '';
          this.Affichage();
        }
      }, {
        key: "ClearForm",
        value: function ClearForm() {
          this.leString = '';

          if (this.input[1] === '+' || this.input[1] === '-' || this.input[1] === '*' || this.input[1] === '/') {
            this.input[2] = '';
          } else {
            this.input[0] = '';
          }

          this.Affichage();
        }
      }, {
        key: "InputChiffre",
        value: function InputChiffre(chiffre) {
          this.leString += chiffre;

          if (this.input[1] === '+' || this.input[1] === '-' || this.input[1] === '*' || this.input[1] === '/') {
            this.input[2] = this.leString;
          } else {
            this.input[0] = this.leString;
          }

          this.Affichage();
        }
      }, {
        key: "InputVirgule",
        value: function InputVirgule(virgule) {
          if (this.leString.indexOf('.') <= -1) {
            this.InputChiffre('.');
          }
        }
      }, {
        key: "InputOperator",
        value: function InputOperator(Operator) {
          if (this.input[2] !== '') {
            this.Equal();
          }

          this.leString = '';
          this.input[1] = Operator;
          this.Affichage();
        }
      }, {
        key: "Erase",
        value: function Erase() {
          this.leString = this.leString.substring(0, this.leString.length - 1);

          if (this.input[1] === '+' || this.input[1] === '-' || this.input[1] === '*' || this.input[1] === '/') {
            this.input[2] = this.leString;
          } else {
            this.input[0] = this.leString;
          }

          this.Affichage();
        }
      }, {
        key: "Equal",
        value: function Equal() {
          this.leString = '';
          this.output += this.calcul(parseFloat(this.input[0]), this.input[1], parseFloat(this.input[2]));
          this.input = [this.output, '', ''];
          this.output = '';
          this.Affichage();
        }
      }, {
        key: "calcul",
        value: function calcul(num1, operateur, num2) {
          if (operateur === '+') {
            return num1 + num2;
          }

          if (operateur === '-') {
            return num1 - num2;
          }

          if (operateur === '*') {
            return num1 * num2;
          }

          if (operateur === '/') {
            return num1 / num2;
          }
        }
      }, {
        key: "Affichage",
        value: function Affichage() {
          document.getElementById('Resultat').innerHTML = this.input[0] + ' ' + this.input[1] + ' ' + this.input[2];
        }
      }]);

      return CalculatriceComponent;
    }();

    CalculatriceComponent.ɵfac = function CalculatriceComponent_Factory(t) {
      return new (t || CalculatriceComponent)();
    };

    CalculatriceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CalculatriceComponent,
      selectors: [["app-calculatrice"]],
      decls: 48,
      vars: 1,
      consts: [["id", "CalculBoite"], [1, "row"], ["id", "Resultat", 1, "col-md-12", "col-12", "Taille"], [1, "col-md-3", "col-3", "Taille", "Bouton", "BoutonNuage", "Border", 3, "click"], [1, "text-dark", 3, "icon"], [1, "col-md-3", "col-3", "Taille", "Bouton", "BoutonBleu", "Border", 3, "click"], ["id", "7", 1, "col-md-3", "col-3", "Taille", "Bouton", "BoutonBlanc", "Border", 3, "click"], ["id", "8", 1, "col-md-3", "col-3", "Taille", "Bouton", "BoutonBlanc", "Border", 3, "click"], ["id", "9", 1, "col-md-3", "col-3", "Taille", "Bouton", "BoutonBlanc", "Border", 3, "click"], ["id", "4", 1, "col-md-3", "col-3", "Taille", "Bouton", "BoutonBlanc", "Border", 3, "click"], ["id", "5", 1, "col-md-3", "col-3", "Taille", "Bouton", "BoutonBlanc", "Border", 3, "click"], ["id", "6", 1, "col-md-3", "col-3", "Taille", "Bouton", "BoutonBlanc", "Border", 3, "click"], ["id", "1", 1, "col-md-3", "col-3", "Taille", "Bouton", "BoutonBlanc", "Border", 3, "click"], ["id", "2", 1, "col-md-3", "col-3", "Taille", "Bouton", "BoutonBlanc", "Border", 3, "click"], ["id", "3", 1, "col-md-3", "col-3", "Taille", "Bouton", "BoutonBlanc", "Border", 3, "click"], [1, "col-md-3", "col-3", "Taille", "Bouton", "BoutonNuage", "Border"], ["id", "0", 1, "col-md-3", "col-3", "Taille", "Bouton", "BoutonBlanc", "Border", 3, "click"], [1, "col-md-3", "col-3", "Taille", "Bouton", "Border", "BoutonRouge", 3, "click"]],
      template: function CalculatriceComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "120");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculatriceComponent_Template_div_click_5_listener() {
            return ctx.Clear();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "A/C");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculatriceComponent_Template_div_click_7_listener() {
            return ctx.ClearForm();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Clear");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculatriceComponent_Template_div_click_9_listener() {
            return ctx.Erase();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "fa-icon", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculatriceComponent_Template_div_click_11_listener() {
            return ctx.InputOperator("/");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "/");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculatriceComponent_Template_div_click_14_listener() {
            return ctx.InputChiffre("7");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "7 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculatriceComponent_Template_div_click_16_listener() {
            return ctx.InputChiffre("8");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "8");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculatriceComponent_Template_div_click_18_listener() {
            return ctx.InputChiffre("9");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "9");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculatriceComponent_Template_div_click_20_listener() {
            return ctx.InputOperator("*");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculatriceComponent_Template_div_click_23_listener() {
            return ctx.InputChiffre("4");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculatriceComponent_Template_div_click_25_listener() {
            return ctx.InputChiffre("5");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculatriceComponent_Template_div_click_27_listener() {
            return ctx.InputChiffre("6");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculatriceComponent_Template_div_click_29_listener() {
            return ctx.InputOperator("-");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "-");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculatriceComponent_Template_div_click_32_listener() {
            return ctx.InputChiffre("1");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculatriceComponent_Template_div_click_34_listener() {
            return ctx.InputChiffre("2");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculatriceComponent_Template_div_click_36_listener() {
            return ctx.InputChiffre("3");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculatriceComponent_Template_div_click_38_listener() {
            return ctx.InputOperator("+");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "+");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculatriceComponent_Template_div_click_42_listener() {
            return ctx.InputChiffre("0");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculatriceComponent_Template_div_click_44_listener() {
            return ctx.InputVirgule(".");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculatriceComponent_Template_div_click_46_listener() {
            return ctx.Equal();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "=");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.fabackspace);
        }
      },
      directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FaIconComponent"]],
      styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Orbitron&display=swap\");\n#CalculBoite[_ngcontent-%COMP%] {\n  border: 2px solid black;\n  width: 50vh;\n  background-color: #3c6382;\n  padding: 3%;\n  font-family: \"Orbitron\", sans-serif;\n  margin: auto;\n  font-size: 2.5vh;\n  opacity: 0.9;\n}\n.Taille[_ngcontent-%COMP%] {\n  height: 10vh;\n}\n.Bouton[_ngcontent-%COMP%] {\n  padding: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: all 0.2s ease-in-out;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.Bouton[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n  z-index: 100;\n}\n.BoutonBlanc[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}\n.BoutonRouge[_ngcontent-%COMP%] {\n  background-color: #eb2f06;\n}\n.BoutonNuage[_ngcontent-%COMP%] {\n  background-color: #dcdde1;\n}\n.BoutonBleu[_ngcontent-%COMP%] {\n  background-color: #00a8ff;\n}\n.Border[_ngcontent-%COMP%] {\n  border: 0.5px solid #3c6382;\n  z-index: 1;\n  position: relative;\n}\n#Resultat[_ngcontent-%COMP%] {\n  border: 2px solid black;\n  background-color: #ffffff;\n  display: flex;\n  justify-content: right;\n  align-items: center;\n  margin-bottom: 10%;\n}\n@media only screen and (max-width: 425px) {\n  #CalculBoite[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .Taille[_ngcontent-%COMP%] {\n    height: 7vh;\n    width: 50%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamV0L2NhbGN1bGF0cmljZS9jYWxjdWxhdHJpY2UuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsNkVBQUE7QUFNUjtFQUNJLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLG1DQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQUpKO0FBT0E7RUFDSSxZQWhCTTtBQVlWO0FBTUE7RUFFSSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7TUFBQSxxQkFBQTtVQUFBLGlCQUFBO0FBSko7QUFLSTtFQUNJLHFCQUFBO0VBQ0EsWUFBQTtBQUhSO0FBS0E7RUFDSSx5QkFBQTtBQUZKO0FBR0E7RUFDSSx5QkFBQTtBQUFKO0FBQ0E7RUFDSSx5QkFBQTtBQUVKO0FBREE7RUFDSSx5QkFBQTtBQUlKO0FBRkE7RUFDSSwyQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQUtKO0FBREE7RUFDSSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUlKO0FBRkE7RUFDSTtJQUNJLFdBQUE7RUFLTjs7RUFKRTtJQUNJLFdBQUE7SUFDQSxVQUFBO0VBT047QUFDRiIsImZpbGUiOiJzcmMvYXBwL3Byb2pldC9jYWxjdWxhdHJpY2UvY2FsY3VsYXRyaWNlLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3JiaXRyb24mZGlzcGxheT1zd2FwJylcclxuICAgIFxyXG4kQnV0dG9uSDogMTB2aFxyXG5cclxuXHJcblxyXG4jQ2FsY3VsQm9pdGVcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrXHJcbiAgICB3aWR0aDogNTB2aFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNjNjM4MlxyXG4gICAgcGFkZGluZzogMyVcclxuICAgIGZvbnQtZmFtaWx5OiAnT3JiaXRyb24nLCBzYW5zLXNlcmlmXHJcbiAgICBtYXJnaW46IGF1dG9cclxuICAgIGZvbnQtc2l6ZTogMi41dmhcclxuICAgIG9wYWNpdHk6IDAuOVxyXG4gICAgXHJcblxyXG4uVGFpbGxlXHJcbiAgICBoZWlnaHQ6ICRCdXR0b25IXHJcblxyXG4uQm91dG9uXHJcblxyXG4gICAgcGFkZGluZzogMFxyXG4gICAgZGlzcGxheTogZmxleFxyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXJcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXJcclxuICAgIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1pbi1vdXRcclxuICAgIHVzZXItc2VsZWN0OiBub25lXHJcbiAgICAmOmhvdmVyXHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpXHJcbiAgICAgICAgei1pbmRleDogMTAwXHJcbiAgICBcclxuLkJvdXRvbkJsYW5jXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmXHJcbi5Cb3V0b25Sb3VnZVxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ViMmYwNlxyXG4uQm91dG9uTnVhZ2VcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkY2RkZTFcclxuLkJvdXRvbkJsZXVcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMGE4ZmZcclxuXHJcbi5Cb3JkZXJcclxuICAgIGJvcmRlcjogMC41cHggc29saWQgIzNjNjM4MlxyXG4gICAgei1pbmRleDogMVxyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlXHJcbiAgICBcclxuXHJcblxyXG4jUmVzdWx0YXRcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmXHJcbiAgICBkaXNwbGF5OiBmbGV4XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHJpZ2h0XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyXHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMCVcclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiAgYW5kIChtYXgtd2lkdGg6IDQyNXB4KVxyXG4gICAgI0NhbGN1bEJvaXRlXHJcbiAgICAgICAgd2lkdGg6IDEwMCVcclxuICAgIC5UYWlsbGVcclxuICAgICAgICBoZWlnaHQ6IDd2aFxyXG4gICAgICAgIHdpZHRoOiA1MCVcclxuXHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CalculatriceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-calculatrice',
          templateUrl: './calculatrice.component.html',
          styleUrls: ['./calculatrice.component.sass']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/projet/piano/piano.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/projet/piano/piano.component.ts ***!
    \*************************************************/

  /*! exports provided: PianoComponent */

  /***/
  function srcAppProjetPianoPianoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PianoComponent", function () {
      return PianoComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var PianoComponent = /*#__PURE__*/function () {
      function PianoComponent() {
        _classCallCheck(this, PianoComponent);

        this.notes = [
        /* 2 */
        {
          key: 81,
          sound: this.createSound('../../../assets/Piano/c2.ogg')
        }, {
          key: 90,
          sound: this.createSound('../../../assets/Piano/c-2.ogg')
        }, {
          key: 83,
          sound: this.createSound('../../../assets/Piano/d2.ogg')
        }, {
          key: 69,
          sound: this.createSound('../../../assets/Piano/d-2.ogg')
        }, {
          key: 68,
          sound: this.createSound('../../../assets/Piano/e2.ogg')
        }, {
          key: 70,
          sound: this.createSound('../../../assets/Piano/f2.ogg')
        }, {
          key: 84,
          sound: this.createSound('../../../assets/Piano/f-2.ogg')
        }, {
          key: 71,
          sound: this.createSound('../../../assets/Piano/g2.ogg')
        }, {
          key: 89,
          sound: this.createSound('../../../assets/Piano/g-2.ogg')
        }, {
          key: 72,
          sound: this.createSound('../../../assets/Piano/a2.ogg')
        }, {
          key: 85,
          sound: this.createSound('../../../assets/Piano/a-2.ogg')
        }, {
          key: 74,
          sound: this.createSound('../../../assets/Piano/b2.ogg')
        },
        /* 3 */
        {
          key: 1,
          sound: this.createSound('../../../assets/Piano/c3.ogg')
        }, {
          key: 1,
          sound: this.createSound('../../../assets/Piano/c-3.ogg')
        }, {
          key: 1,
          sound: this.createSound('../../../assets/Piano/d3.ogg')
        }, {
          key: 1,
          sound: this.createSound('../../../assets/Piano/d-3.ogg')
        }, {
          key: 1,
          sound: this.createSound('../../../assets/Piano/e3.ogg')
        }, {
          key: 1,
          sound: this.createSound('../../../assets/Piano/f3.ogg')
        }, {
          key: 1,
          sound: this.createSound('../../../assets/Piano/f-3.ogg')
        }, {
          key: 1,
          sound: this.createSound('../../../assets/Piano/g3.ogg')
        }, {
          key: 1,
          sound: this.createSound('../../../assets/Piano/g-3.ogg')
        }, {
          key: 1,
          sound: this.createSound('../../../assets/Piano/a3.ogg')
        }, {
          key: 1,
          sound: this.createSound('../../../assets/Piano/a-3.ogg')
        }, {
          key: 1,
          sound: this.createSound('../../../assets/Piano/b3.ogg')
        },
        /* 4 */
        {
          key: 1,
          sound: this.createSound('../../../assets/Piano/c4.ogg')
        }, {
          key: 1,
          sound: this.createSound('../../../assets/Piano/c-4.ogg')
        }, {
          key: 1,
          sound: this.createSound('../../../assets/Piano/d4.ogg')
        }, {
          key: 1,
          sound: this.createSound('../../../assets/Piano/d-4.ogg')
        }, {
          key: 1,
          sound: this.createSound('../../../assets/Piano/e4.ogg')
        }, {
          key: 1,
          sound: this.createSound('../../../assets/Piano/f4.ogg')
        }, {
          key: 1,
          sound: this.createSound('../../../assets/Piano/f-4.ogg')
        }, {
          key: 1,
          sound: this.createSound('../../../assets/Piano/g4.ogg')
        }, {
          key: 1,
          sound: this.createSound('../../../assets/Piano/g-4.ogg')
        }, {
          key: 1,
          sound: this.createSound('../../../assets/Piano/a4.ogg')
        }, {
          key: 1,
          sound: this.createSound('../../../assets/Piano/a-4.ogg')
        }, {
          key: 1,
          sound: this.createSound('../../../assets/Piano/b4.ogg')
        }];
      }

      _createClass(PianoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "createSound",
        value: function createSound(file) {
          var sound = new Audio(file);
          return {
            start: function start() {
              sound.play();
            },
            stop: function stop() {
              sound.pause();
              sound.currentTime = 0;
              sound.volume = 1.0;
            }
          };
        }
      }, {
        key: "onKeyDown",
        value: function onKeyDown(event) {
          console.log(event.key.charCodeAt(0));
          this.notes.forEach(function (note) {
            if (note.key === event.key.charCodeAt(0)) {
              note.sound.start();
            }
          });
        }
      }, {
        key: "onKeyUp",
        value: function onKeyUp(event) {
          console.log(event.key.charCodeAt(0));
          this.notes.forEach(function (note) {
            if (note.key === event.key.charCodeAt(0)) {
              note.sound.stop();
            }
          });
        }
      }]);

      return PianoComponent;
    }();

    PianoComponent.ɵfac = function PianoComponent_Factory(t) {
      return new (t || PianoComponent)();
    };

    PianoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PianoComponent,
      selectors: [["app-piano"]],
      hostBindings: function PianoComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function PianoComponent_keydown_HostBindingHandler($event) {
            return ctx.onKeyDown($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"])("keyup", function PianoComponent_keyup_HostBindingHandler($event) {
            return ctx.onKeyUp($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
        }
      },
      decls: 9,
      vars: 0,
      consts: [["id", "wrap"], ["id", "piano"], [1, "key"]],
      template: function PianoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["#piano[_ngcontent-%COMP%] {\n  display: flex;\n  background-color: black;\n}\n\n.key[_ngcontent-%COMP%] {\n  height: 30vh;\n  width: 7.5vh;\n  background-color: white;\n  border: 5px solid black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamV0L3BpYW5vL3BpYW5vLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7QUFFSiIsImZpbGUiOiJzcmMvYXBwL3Byb2pldC9waWFuby9waWFuby5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIiNwaWFub1xyXG4gICAgZGlzcGxheTogZmxleFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2tcclxuXHJcbi5rZXlcclxuICAgIGhlaWdodDogMzB2aFxyXG4gICAgd2lkdGg6IDcuNXZoXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZVxyXG4gICAgYm9yZGVyOiA1cHggc29saWQgYmxhY2siXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PianoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-piano',
          templateUrl: './piano.component.html',
          styleUrls: ['./piano.component.sass']
        }]
      }], function () {
        return [];
      }, {
        onKeyDown: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['document:keydown', ['$event']]
        }],
        onKeyUp: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['document:keyup', ['$event']]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/projet/projet-home/projet-home.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/projet/projet-home/projet-home.component.ts ***!
    \*************************************************************/

  /*! exports provided: ProjetHomeComponent */

  /***/
  function srcAppProjetProjetHomeProjetHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjetHomeComponent", function () {
      return ProjetHomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var ProjetHomeComponent = /*#__PURE__*/function () {
      function ProjetHomeComponent() {
        _classCallCheck(this, ProjetHomeComponent);
      }

      _createClass(ProjetHomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ProjetHomeComponent;
    }();

    ProjetHomeComponent.ɵfac = function ProjetHomeComponent_Factory(t) {
      return new (t || ProjetHomeComponent)();
    };

    ProjetHomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProjetHomeComponent,
      selectors: [["app-projet-home"]],
      decls: 37,
      vars: 0,
      consts: [["id", "Projects", 1, "center-align-items", "align-items-center"], [1, "row", "marge-left"], [1, "Helvt"], [1, "BottomBlueLigne", "marge-left", "marge-bot"], [1, "row", "marge-top", "marge-left"], ["id", "Calcul", 1, "col-lg-3", "col-md-4", "col-12", "Taille", "imagerie"], ["href", "#", "routerLink", "./Calculatrice", "id", "Calculatrice"], ["src", ".\\assets\\Image\\Calculatrice.PNG", "alt", "Calculatrice"], [1, "col-lg-3", "col-md-4", "col-12", "Taille", "imagerie"], ["href", "#", "routerLink", "./Piano", "id", "Piano"], ["src", ".\\assets\\Image\\Piano.PNG", "alt", "Calculatrice"], [1, "col-lg-3", "col-md-4", "col-12", "Taille"], ["href", "#", "routerLink", "./Taquin", "id", "Calculatrice"], ["src", ".\\assets\\Image\\Taquin.png", "alt", "Calculatrice"], ["href", "#", "routerLink", "./Puissance4", "id", "Calculatrice"], ["src", ".\\assets\\Image\\Puissance4.png", "alt", "Calculatrice"]],
      template: function ProjetHomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "JavaScript / TypeScript");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Calculatrice");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Piano (WiP)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h1", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Java");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "R\xE9solution de grilles de Taquin avec l'algorithme A*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Puissance 4 avec IA bas\xE9 sur l'algorithme Alpha-Beta");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: [".BottomBlueLigne[_ngcontent-%COMP%] {\n  border-bottom: 6px solid #2980b9;\n  width: 10%;\n}\n\n.Helvt[_ngcontent-%COMP%] {\n  font-family: Arial, Helvetica, sans-serif;\n  font-weight: bold;\n  font-size: 2rem;\n}\n\n#Projects[_ngcontent-%COMP%] {\n  margin: auto;\n  height: 100%;\n}\n\n.marge-left[_ngcontent-%COMP%] {\n  margin-left: 5%;\n}\n\n.marge-top[_ngcontent-%COMP%] {\n  margin-top: 3%;\n}\n\n.Taille[_ngcontent-%COMP%] {\n  height: 20vh;\n  width: 20vh;\n}\n\n.imagerie[_ngcontent-%COMP%] {\n  height: 100%;\n  text-align: center;\n  transition: all 0.2s ease-in-out;\n}\n\n.imagerie[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 200px;\n  width: 80%;\n}\n\n.imagerie[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamV0L3Byb2pldC1ob21lL3Byb2pldC1ob21lLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0NBQUE7RUFDQSxVQUFBO0FBQ0o7O0FBQ0E7RUFDSSx5Q0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQUVKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7QUFDSjs7QUFDQTtFQUNJLGVBQUE7QUFFSjs7QUFEQTtFQUNJLGNBQUE7QUFJSjs7QUFGQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FBS0o7O0FBRkE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtBQUtKOztBQUpJO0VBQ0ksYUFBQTtFQUNBLFVBQUE7QUFNUjs7QUFMSTtFQUNJLHFCQUFBO0FBT1IiLCJmaWxlIjoic3JjL2FwcC9wcm9qZXQvcHJvamV0LWhvbWUvcHJvamV0LWhvbWUuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuQm90dG9tQmx1ZUxpZ25lXHJcbiAgICBib3JkZXItYm90dG9tOiA2cHggc29saWQgIzI5ODBiOVxyXG4gICAgd2lkdGg6IDEwJVxyXG5cclxuLkhlbHZ0XHJcbiAgICBmb250LWZhbWlseTogQXJpYWwsSGVsdmV0aWNhLHNhbnMtc2VyaWZcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkXHJcbiAgICBmb250LXNpemU6IDIuMHJlbVxyXG5cclxuXHJcblxyXG4jUHJvamVjdHNcclxuICAgIG1hcmdpbjogYXV0b1xyXG4gICAgaGVpZ2h0OiAxMDAlXHJcblxyXG4ubWFyZ2UtbGVmdFxyXG4gICAgbWFyZ2luLWxlZnQ6IDUlXHJcbi5tYXJnZS10b3BcclxuICAgIG1hcmdpbi10b3A6IDMlXHJcblxyXG4uVGFpbGxlXHJcbiAgICBoZWlnaHQ6IDIwdmhcclxuICAgIHdpZHRoOiAyMHZoXHJcblxyXG5cclxuLmltYWdlcmllXHJcbiAgICBoZWlnaHQ6IDEwMCVcclxuICAgIHRleHQtYWxpZ246IGNlbnRlclxyXG4gICAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLWluLW91dFxyXG4gICAgaW1nXHJcbiAgICAgICAgaGVpZ2h0OiAyMDBweFxyXG4gICAgICAgIHdpZHRoOiA4MCVcclxuICAgICY6aG92ZXJcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSlcclxuXHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjetHomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-projet-home',
          templateUrl: './projet-home.component.html',
          styleUrls: ['./projet-home.component.sass']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/projet/projet.component.ts":
  /*!********************************************!*\
    !*** ./src/app/projet/projet.component.ts ***!
    \********************************************/

  /*! exports provided: ProjetComponent */

  /***/
  function srcAppProjetProjetComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjetComponent", function () {
      return ProjetComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var ProjetComponent = /*#__PURE__*/function () {
      function ProjetComponent() {
        _classCallCheck(this, ProjetComponent);
      }

      _createClass(ProjetComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          document.getElementById('Home').style.fontWeight = 'normal';
          document.getElementById('Projet').style.fontWeight = 'bold';
          document.getElementById('Contact').style.fontWeight = 'normal';
        }
      }]);

      return ProjetComponent;
    }();

    ProjetComponent.ɵfac = function ProjetComponent_Factory(t) {
      return new (t || ProjetComponent)();
    };

    ProjetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProjetComponent,
      selectors: [["app-projet"]],
      decls: 1,
      vars: 0,
      template: function ProjetComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2pldC9wcm9qZXQuY29tcG9uZW50LnNhc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjetComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-projet',
          templateUrl: './projet.component.html',
          styleUrls: ['./projet.component.sass']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/projet/puissance4/puissance4.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/projet/puissance4/puissance4.component.ts ***!
    \***********************************************************/

  /*! exports provided: Puissance4Component */

  /***/
  function srcAppProjetPuissance4Puissance4ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Puissance4Component", function () {
      return Puissance4Component;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var Puissance4Component = /*#__PURE__*/function () {
      function Puissance4Component() {
        _classCallCheck(this, Puissance4Component);
      }

      _createClass(Puissance4Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return Puissance4Component;
    }();

    Puissance4Component.ɵfac = function Puissance4Component_Factory(t) {
      return new (t || Puissance4Component)();
    };

    Puissance4Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: Puissance4Component,
      selectors: [["app-puissance4"]],
      decls: 22,
      vars: 0,
      consts: [["id", "Puissance4", 1, "container"], [1, "container"], [1, "marginauto"], ["id", "FrameP", "src", "https://replit.com/@LaurentSavivanh/Puissance4?embed=1&output=1#Main.java", "title", "Puissance4"], ["id", "Code"], ["href", "https://repl.it/@LaurentSavivanh/Puissance4#Main.java"], ["href", "https://github.com/LaurentSav/Puissance4"], ["href", "https://github.com/LaurentSav/Projet_IA"]],
      template: function Puissance4Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Description du projet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "iframe", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "nb : Il faut appuyer sur le bouton run");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Code : ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Replit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " ou ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "GitHub");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "J'ai refais ce projet mais de fa\xE7on plus organis\xE9 et plus professionnel: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "GitHub");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["#FrameP[_ngcontent-%COMP%] {\n  height: 50vh;\n  width: 80vh;\n  margin: auto;\n}\n\n#Puissance4[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n}\n\n#Code[_ngcontent-%COMP%] {\n  margin-top: 2%;\n}\n\n.marginauto[_ngcontent-%COMP%] {\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamV0L3B1aXNzYW5jZTQvcHVpc3NhbmNlNC5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUNBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUFFSjs7QUFEQTtFQUNJLGNBQUE7QUFJSjs7QUFGQTtFQUNJLFlBQUE7QUFLSiIsImZpbGUiOiJzcmMvYXBwL3Byb2pldC9wdWlzc2FuY2U0L3B1aXNzYW5jZTQuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjRnJhbWVQXHJcbiAgICBoZWlnaHQ6IDUwdmhcclxuICAgIHdpZHRoOiA4MHZoXHJcbiAgICBtYXJnaW46IGF1dG9cclxuXHJcbiNQdWlzc2FuY2U0XHJcbiAgICBkaXNwbGF5OiBmbGV4XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyXHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uXHJcbiNDb2RlXHJcbiAgICBtYXJnaW4tdG9wOiAyJVxyXG5cclxuLm1hcmdpbmF1dG9cclxuICAgIG1hcmdpbjogYXV0b1xyXG5cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Puissance4Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-puissance4',
          templateUrl: './puissance4.component.html',
          styleUrls: ['./puissance4.component.sass']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/projet/taquin/taquin.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/projet/taquin/taquin.component.ts ***!
    \***************************************************/

  /*! exports provided: TaquinComponent */

  /***/
  function srcAppProjetTaquinTaquinComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TaquinComponent", function () {
      return TaquinComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var TaquinComponent = /*#__PURE__*/function () {
      function TaquinComponent() {
        _classCallCheck(this, TaquinComponent);
      }

      _createClass(TaquinComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TaquinComponent;
    }();

    TaquinComponent.ɵfac = function TaquinComponent_Factory(t) {
      return new (t || TaquinComponent)();
    };

    TaquinComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TaquinComponent,
      selectors: [["app-taquin"]],
      decls: 10,
      vars: 0,
      consts: [["id", "Puissance4"], ["id", "FrameP", "src", "https://replit.com/@LaurentSavivanh/Taquin?embed=1&output=1#Main.java", "title", "Puissance4"], ["id", "Code"], ["href", "https://repl.it/@LaurentSavivanh/Taquin#Main.java"], ["href", "https://github.com/LaurentSav/Taquin"]],
      template: function TaquinComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "iframe", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Code : ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Replit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " ou ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "GitHub");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["#FrameP[_ngcontent-%COMP%] {\n  height: 50vh;\n  width: 80vh;\n  margin: auto;\n}\n\n#Puissance4[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n}\n\n#Code[_ngcontent-%COMP%] {\n  margin-top: 5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamV0L3RhcXVpbi90YXF1aW4uY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFDSjs7QUFDQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FBRUo7O0FBREE7RUFDSSxjQUFBO0FBSUoiLCJmaWxlIjoic3JjL2FwcC9wcm9qZXQvdGFxdWluL3RhcXVpbi5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIiNGcmFtZVBcclxuICAgIGhlaWdodDogNTB2aFxyXG4gICAgd2lkdGg6IDgwdmhcclxuICAgIG1hcmdpbjogYXV0b1xyXG5cclxuI1B1aXNzYW5jZTRcclxuICAgIGRpc3BsYXk6IGZsZXhcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXJcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW5cclxuI0NvZGVcclxuICAgIG1hcmdpbi10b3A6IDUlIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TaquinComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-taquin',
          templateUrl: './taquin.component.html',
          styleUrls: ['./taquin.component.sass']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\Laurent\Angular\ProjetLaurent\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map