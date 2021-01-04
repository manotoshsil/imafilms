(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! C:\Study\imaf\imafilms-ang\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "9nUm":
    /*!***************************************************************!*\
      !*** ./src/app/mycomponents/loginpage/loginpage.component.ts ***!
      \***************************************************************/

    /*! exports provided: LoginpageComponent */

    /***/
    function nUm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginpageComponent", function () {
        return LoginpageComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../user.service */
      "xdv0");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");

      var _c0 = function _c0(a0) {
        return {
          "d-none": a0
        };
      };

      var _c1 = function _c1(a0) {
        return {
          "d-block": a0
        };
      };

      var LoginpageComponent = /*#__PURE__*/function () {
        function LoginpageComponent(user) {
          _classCallCheck(this, LoginpageComponent);

          this.user = user;
          this.loginform = true;
          this.recoverform = false;
        }

        _createClass(LoginpageComponent, [{
          key: "showRecoverForm",
          value: function showRecoverForm() {
            this.loginform = !this.loginform;
            this.recoverform = !this.recoverform;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "loginGoogle",
          value: function loginGoogle() {
            this.user.login();
          }
        }]);

        return LoginpageComponent;
      }();

      LoginpageComponent.ɵfac = function LoginpageComponent_Factory(t) {
        return new (t || LoginpageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]));
      };

      LoginpageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: LoginpageComponent,
        selectors: [["app-loginpage"]],
        decls: 64,
        vars: 6,
        consts: [[1, "auth-wrapper", "d-flex", "no-block", "justify-content-center", "align-items-center", 2, "background", "url(assets/images/background/login-register.jpg) no-repeat center center"], [1, "auth-box", "m-3", "m-md-0"], ["id", "loginform", 3, "ngClass"], [1, "logo"], [1, "db"], ["src", "assets/images/logo-icon.png", "alt", "logo"], [1, "font-medium", "m-b-20"], [1, "row"], [1, "col-12"], ["id", "loginform", 1, "form-horizontal", "m-t-20"], [1, "input-group", "mb-3"], [1, "input-group-prepend"], ["id", "basic-addon1", 1, "input-group-text"], [1, "ti-user"], ["type", "text", "placeholder", "Username", "aria-label", "Username", "aria-describedby", "basic-addon1", 1, "form-control"], ["id", "basic-addon2", 1, "input-group-text"], [1, "ti-pencil"], ["type", "text", "placeholder", "Password", "aria-label", "Password", "aria-describedby", "basic-addon1", 1, "form-control"], [1, "form-group", "row"], [1, "col-md-12"], [1, "custom-control", "custom-checkbox", "d-flex"], ["type", "checkbox", "id", "customCheck1", 1, "custom-control-input"], ["for", "customCheck1", 1, "custom-control-label", "font-14"], ["href", "javascript:void(0)", "id", "to-recover", 1, "text-dark", "font-14", "ml-auto", 3, "click"], [1, "fa", "fa-lock", "m-r-5"], [1, "form-group", "text-center"], [1, "col-xs-12", "p-b-20"], ["href", "/dashboard/dashboard1", 1, "btn", "btn-block", "btn-lg", "btn-info"], [1, "col-xs-12", "col-sm-12", "col-md-12", "m-t-10", "text-center"], [1, "social"], ["href", "javascript:void(0)", "data-toggle", "tooltip", "title", "", "data-original-title", "Login with Facebook", 1, "btn", "btn-facebook", "mr-2"], ["aria-hidden", "true", 1, "fab", "fa-facebook"], ["href", "javascript:void(0)", "data-toggle", "tooltip", "title", "", "data-original-title", "Login with Google", 1, "btn", "btn-googleplus", 3, "click"], ["aria-hidden", "true", 1, "fab", "fa-google-plus"], [1, "form-group", "m-b-0", "m-t-10"], [1, "col-sm-12", "text-center"], ["href", "authentication/signup", 1, "text-info", "m-l-5"], ["id", "recoverform", 3, "ngClass"], [1, "row", "m-t-20"], ["type", "email", "required", "", "placeholder", "Username", 1, "form-control", "form-control-lg"], ["type", "submit", "name", "action", 1, "btn", "btn-block", "btn-lg", "btn-danger"]],
        template: function LoginpageComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Sign In to Admin");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "form", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Remember me");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginpageComponent_Template_a_click_27_listener() {
              return ctx.showRecoverForm();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Forgot pwd?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Log In");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "i", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginpageComponent_Template_a_click_39_listener() {
              return ctx.loginGoogle();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "i", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " Don't have an account? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Sign Up");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "h5", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Recover Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Enter your Email and instructions will be sent to you!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "form", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "input", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "button", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Reset");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx.recoverform));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c1, ctx.recoverform));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbnBhZ2UuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginpageComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-loginpage',
            templateUrl: './loginpage.component.html',
            styleUrls: ['./loginpage.component.css']
          }]
        }], function () {
          return [{
            type: _user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "APW9":
    /*!***********************************************************!*\
      !*** ./src/app/shared/breadcrumb/breadcrumb.component.ts ***!
      \***********************************************************/

    /*! exports provided: BreadcrumbComponent */

    /***/
    function APW9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BreadcrumbComponent", function () {
        return BreadcrumbComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser */
      "cUpR");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "SVse");

      function BreadcrumbComponent_ng_template_8_li_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var url_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", url_r1.url);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](url_r1.title);
        }
      }

      function BreadcrumbComponent_ng_template_8_li_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var url_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](url_r1.title);
        }
      }

      function BreadcrumbComponent_ng_template_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, BreadcrumbComponent_ng_template_8_li_0_Template, 3, 2, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BreadcrumbComponent_ng_template_8_li_1_Template, 2, 1, "li", 9);
        }

        if (rf & 2) {
          var last_r2 = ctx.last;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !last_r2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", last_r2);
        }
      }

      var BreadcrumbComponent = /*#__PURE__*/function () {
        function BreadcrumbComponent(router, activatedRoute, titleService) {
          var _this = this;

          _classCallCheck(this, BreadcrumbComponent);

          this.router = router;
          this.activatedRoute = activatedRoute;
          this.titleService = titleService;
          this.pageInfo = Object.create(null);
          this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (event) {
            return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"];
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function () {
            return _this.activatedRoute;
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (route) {
            while (route.firstChild) {
              route = route.firstChild;
            }

            return route;
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (route) {
            return route.outlet === 'primary';
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function (route) {
            return route.data;
          })).subscribe(function (event) {
            _this.titleService.setTitle(event['title']);

            _this.pageInfo = event;
          });
        }

        _createClass(BreadcrumbComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return BreadcrumbComponent;
      }();

      BreadcrumbComponent.ɵfac = function BreadcrumbComponent_Factory(t) {
        return new (t || BreadcrumbComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]));
      };

      BreadcrumbComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: BreadcrumbComponent,
        selectors: [["app-breadcrumb"]],
        decls: 9,
        vars: 2,
        consts: [[1, "page-breadcrumb"], [1, "row"], [1, "col-12", "align-self-center"], [1, "page-title"], [1, "d-flex", "align-items-center"], ["aria-label", "breadcrumb"], [1, "breadcrumb"], ["ngFor", "", 3, "ngForOf"], ["class", "breadcrumb-item", 3, "routerLink", 4, "ngIf"], ["class", "breadcrumb-item active", 4, "ngIf"], [1, "breadcrumb-item", 3, "routerLink"], ["href", "javascript:void(0)"], [1, "breadcrumb-item", "active"]],
        template: function BreadcrumbComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nav", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ol", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, BreadcrumbComponent_ng_template_8_Template, 2, 2, "ng-template", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.pageInfo == null ? null : ctx.pageInfo.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pageInfo == null ? null : ctx.pageInfo.urls);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BreadcrumbComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-breadcrumb',
            templateUrl: './breadcrumb.component.html'
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
          }, {
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false,
        firebaseConfig: {
          apiKey: "AIzaSyCAHzx7cUfw1NMVTyhUHDHAteWK7HFDLok",
          authDomain: "imafilms.firebaseapp.com",
          projectId: "imafilms",
          storageBucket: "imafilms.appspot.com",
          messagingSenderId: "313712269969",
          appId: "1:313712269969:web:3cd2442145c560d3747d30",
          measurementId: "G-GD3CJJQDMZ"
        }
      };
      /*
       * In development mode, to ignore zone related error stack frames such as
       * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
       * import the following file, but please comment it out in production mode
       * because it will have performance impact when throw error
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "Gtm6":
    /*!***************************************************************************!*\
      !*** ./src/app/shared/horizontal-sidebar/horizontal-sidebar.component.ts ***!
      \***************************************************************************/

    /*! exports provided: HorizontalSidebarComponent */

    /***/
    function Gtm6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HorizontalSidebarComponent", function () {
        return HorizontalSidebarComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _horizontal_sidebar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./horizontal-sidebar.service */
      "ucw6");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var angular_feather__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! angular-feather */
      "1tbR");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ngx-translate/core */
      "TSSN");

      function HorizontalSidebarComponent_li_2_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var sidebarnavItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, sidebarnavItem_r1.title));
        }
      }

      var _c0 = function _c0(a0) {
        return [a0];
      };

      function HorizontalSidebarComponent_li_2_a_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function HorizontalSidebarComponent_li_2_a_2_Template_a_mouseover_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var sidebarnavItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r6.addExpandClass(sidebarnavItem_r1.title);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i-feather", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var sidebarnavItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", sidebarnavItem_r1["class"] === "" ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, sidebarnavItem_r1.path) : null)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, sidebarnavItem_r1["class"]))("routerLinkActive", sidebarnavItem_r1.submenu.length != 0 ? "" : "active");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", sidebarnavItem_r1.icon)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c0, sidebarnavItem_r1.icon));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 6, sidebarnavItem_r1.title));
        }
      }

      function HorizontalSidebarComponent_li_2_ul_3_li_1_a_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function HorizontalSidebarComponent_li_2_ul_3_li_1_a_1_Template_a_mouseover_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

            var sidebarnavSubItem_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            return ctx_r14.addActiveClass(sidebarnavSubItem_r11.title);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var sidebarnavSubItem_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", sidebarnavSubItem_r11.submenu.length > 0 ? null : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, sidebarnavSubItem_r11.path))("routerLinkActive", sidebarnavSubItem_r11.submenu.length != 0 ? "" : "router-link-active")("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, sidebarnavSubItem_r11["class"]));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c0, sidebarnavSubItem_r11.icon));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 5, sidebarnavSubItem_r11.title));
        }
      }

      function HorizontalSidebarComponent_li_2_ul_3_li_1_ul_2_li_1_a_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var sidebarnavSubsubItem_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", sidebarnavSubsubItem_r19.submenu.length != 0 ? "" : "")("routerLink", sidebarnavSubsubItem_r19.submenu.length > 0 ? null : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, sidebarnavSubsubItem_r19.path));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, sidebarnavSubsubItem_r19.icon));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 4, sidebarnavSubsubItem_r19.title));
        }
      }

      function HorizontalSidebarComponent_li_2_ul_3_li_1_ul_2_li_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HorizontalSidebarComponent_li_2_ul_3_li_1_ul_2_li_1_a_1_Template, 5, 10, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var sidebarnavSubsubItem_r19 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, sidebarnavSubsubItem_r19["class"]));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !sidebarnavSubsubItem_r19.extralink);
        }
      }

      var _c1 = function _c1(a0) {
        return {
          "in": a0
        };
      };

      function HorizontalSidebarComponent_li_2_ul_3_li_1_ul_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HorizontalSidebarComponent_li_2_ul_3_li_1_ul_2_li_1_Template, 2, 4, "li", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var sidebarnavSubItem_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, ctx_r13.showSubMenu === sidebarnavSubItem_r11.title));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", sidebarnavSubItem_r11.submenu);
        }
      }

      function HorizontalSidebarComponent_li_2_ul_3_li_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HorizontalSidebarComponent_li_2_ul_3_li_1_a_1_Template, 5, 13, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HorizontalSidebarComponent_li_2_ul_3_li_1_ul_2_Template, 2, 4, "ul", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var sidebarnavSubItem_r11 = ctx.$implicit;

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx_r10.showSubMenu === sidebarnavSubItem_r11.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", sidebarnavSubItem_r11.submenu.length > 0 ? "" : "active");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !sidebarnavSubItem_r11.extralink);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sidebarnavSubItem_r11.submenu.length > 0);
        }
      }

      function HorizontalSidebarComponent_li_2_ul_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HorizontalSidebarComponent_li_2_ul_3_li_1_Template, 3, 5, "li", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var sidebarnavItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, ctx_r4.showMenu === sidebarnavItem_r1.title));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", sidebarnavItem_r1.submenu);
        }
      }

      function HorizontalSidebarComponent_li_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HorizontalSidebarComponent_li_2_div_1_Template, 3, 3, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HorizontalSidebarComponent_li_2_a_2_Template, 5, 14, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HorizontalSidebarComponent_li_2_ul_3_Template, 2, 4, "ul", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var sidebarnavItem_r1 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx_r0.showMenu === sidebarnavItem_r1.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, sidebarnavItem_r1.ddclass))("routerLinkActive", sidebarnavItem_r1.submenu.length != 0 ? "" : "active");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sidebarnavItem_r1.extralink === true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !sidebarnavItem_r1.extralink);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sidebarnavItem_r1.submenu.length > 0);
        }
      }

      var HorizontalSidebarComponent = /*#__PURE__*/function () {
        function HorizontalSidebarComponent(menuServise, router) {
          var _this2 = this;

          _classCallCheck(this, HorizontalSidebarComponent);

          this.menuServise = menuServise;
          this.router = router;
          this.showMenu = '';
          this.showSubMenu = '';
          this.sidebarnavItems = [];
          this.path = '';
          this.menuServise.items.subscribe(function (menuItems) {
            _this2.sidebarnavItems = menuItems; // Active menu 

            _this2.sidebarnavItems.filter(function (m) {
              return m.submenu.filter(function (s) {
                if (s.path === _this2.router.url) {
                  _this2.path = m.title;
                }
              });
            });

            _this2.addExpandClass(_this2.path);
          });
        }

        _createClass(HorizontalSidebarComponent, [{
          key: "addExpandClass",
          value: function addExpandClass(element) {
            if (element === this.showMenu) {
              this.showMenu = element;
            } else {
              this.showMenu = element;
            }
          }
        }, {
          key: "addActiveClass",
          value: function addActiveClass(element) {
            if (element === this.showSubMenu) {
              this.showSubMenu = element;
            } else {
              this.showSubMenu = element;
            }

            window.scroll({
              top: 0,
              left: 0,
              behavior: 'smooth'
            });
          }
        }]);

        return HorizontalSidebarComponent;
      }();

      HorizontalSidebarComponent.ɵfac = function HorizontalSidebarComponent_Factory(t) {
        return new (t || HorizontalSidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_horizontal_sidebar_service__WEBPACK_IMPORTED_MODULE_2__["HorizontalSidebarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
      };

      HorizontalSidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HorizontalSidebarComponent,
        selectors: [["app-horizontal-sidebar"]],
        decls: 3,
        vars: 1,
        consts: [[1, "sidebar-nav"], ["id", "sidebarnav"], ["class", "sidebar-item", 3, "ngClass", "active", "routerLinkActive", 4, "ngFor", "ngForOf"], [1, "sidebar-item", 3, "ngClass", "routerLinkActive"], ["class", "nav-small-cap", 4, "ngIf"], ["class", "sidebar-link waves-effect waves-dark", 3, "routerLink", "ngClass", "routerLinkActive", "mouseover", 4, "ngIf"], ["aria-expanded", "false", "class", "collapse first-level", 3, "ngClass", 4, "ngIf"], [1, "nav-small-cap"], [1, "sidebar-link", "waves-effect", "waves-dark", 3, "routerLink", "ngClass", "routerLinkActive", "mouseover"], [3, "name", "ngClass"], [1, "hide-menu"], ["aria-expanded", "false", 1, "collapse", "first-level", 3, "ngClass"], ["class", "sidebar-item", 3, "active", "routerLinkActive", 4, "ngFor", "ngForOf"], [1, "sidebar-item", 3, "routerLinkActive"], ["class", "sidebar-link", 3, "routerLink", "routerLinkActive", "ngClass", "mouseover", 4, "ngIf"], ["aria-expanded", "false", "class", "collapse second-level", 3, "ngClass", 4, "ngIf"], [1, "sidebar-link", 3, "routerLink", "routerLinkActive", "ngClass", "mouseover"], [3, "ngClass"], ["aria-expanded", "false", 1, "collapse", "second-level", 3, "ngClass"], ["class", "sidebar-item", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "sidebar-item", 3, "ngClass"], ["class", "sidebar-link", 3, "routerLinkActive", "routerLink", 4, "ngIf"], [1, "sidebar-link", 3, "routerLinkActive", "routerLink"]],
        template: function HorizontalSidebarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HorizontalSidebarComponent_li_2_Template, 4, 9, "li", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.sidebarnavItems);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], angular_feather__WEBPACK_IMPORTED_MODULE_4__["FeatherComponent"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HorizontalSidebarComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-horizontal-sidebar',
            templateUrl: './horizontal-sidebar.component.html'
          }]
        }], function () {
          return [{
            type: _horizontal_sidebar_service__WEBPACK_IMPORTED_MODULE_2__["HorizontalSidebarService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "MOmx":
    /*!**************************************************!*\
      !*** ./src/app/layouts/blank/blank.component.ts ***!
      \**************************************************/

    /*! exports provided: BlankComponent */

    /***/
    function MOmx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BlankComponent", function () {
        return BlankComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "iInd");

      var BlankComponent = function BlankComponent() {
        _classCallCheck(this, BlankComponent);
      };

      BlankComponent.ɵfac = function BlankComponent_Factory(t) {
        return new (t || BlankComponent)();
      };

      BlankComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: BlankComponent,
        selectors: [["app-blank-layout"]],
        decls: 1,
        vars: 0,
        template: function BlankComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlankComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-blank-layout',
            templateUrl: './blank.component.html',
            styleUrls: []
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "RxpE":
    /*!************************************************!*\
      !*** ./src/app/layouts/full/full.component.ts ***!
      \************************************************/

    /*! exports provided: FullComponent */

    /***/
    function RxpE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FullComponent", function () {
        return FullComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "G0yt");
      /* harmony import */


      var _shared_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../shared/breadcrumb/breadcrumb.component */
      "APW9");
      /* harmony import */


      var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-perfect-scrollbar */
      "aLe/");
      /* harmony import */


      var _shared_horizontal_header_horizontal_navigation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../shared/horizontal-header/horizontal-navigation.component */
      "hi56");
      /* harmony import */


      var _shared_vertical_header_vertical_navigation_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../shared/vertical-header/vertical-navigation.component */
      "o4Kg");
      /* harmony import */


      var _shared_horizontal_sidebar_horizontal_sidebar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../shared/horizontal-sidebar/horizontal-sidebar.component */
      "Gtm6");
      /* harmony import */


      var _shared_vertical_sidebar_vertical_sidebar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../shared/vertical-sidebar/vertical-sidebar.component */
      "aQxE");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");

      function FullComponent_div_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-horizontal-navigation", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function FullComponent_div_17_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-vertical-navigation", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("toggleSidebar", function FullComponent_div_17_Template_app_vertical_navigation_toggleSidebar_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r10.toggleSidebarType();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function FullComponent_div_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-horizontal-sidebar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function FullComponent_div_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-vertical-sidebar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("perfectScrollbar", ctx_r3.config);
        }
      }

      function FullComponent_ng_template_36_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 36);
        }
      }

      function FullComponent_ng_template_37_div_27_Template(rf, ctx) {
        if (rf & 1) {
          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Sidebar Types");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FullComponent_ng_template_37_div_27_Template_input_ngModelChange_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r14.options.sidebartype = $event;
          })("change", function FullComponent_ng_template_37_div_27_Template_input_change_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r16.options.sidebartype = "mini-sidebar";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Mini Sidebar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FullComponent_ng_template_37_div_27_Template_input_ngModelChange_8_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r17.options.sidebartype = $event;
          })("change", function FullComponent_ng_template_37_div_27_Template_input_change_8_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r18.options.sidebartype = "iconbar";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Icon Sidebar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FullComponent_ng_template_37_div_27_Template_input_ngModelChange_12_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r19.options.sidebartype = $event;
          })("change", function FullComponent_ng_template_37_div_27_Template_input_change_12_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r20.options.sidebartype = "overlay";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Overlay Sidebar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FullComponent_ng_template_37_div_27_Template_input_ngModelChange_16_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

            var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r21.options.sidebartype = $event;
          })("change", function FullComponent_ng_template_37_div_27_Template_input_change_16_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r22.options.sidebartype = "full";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Full Sidebar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r12.options.sidebartype);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r12.options.sidebartype);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r12.options.sidebartype);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r12.options.sidebartype);
        }
      }

      function FullComponent_ng_template_37_div_28_Template(rf, ctx) {
        if (rf & 1) {
          var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Logo Backgrounds");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FullComponent_ng_template_37_div_28_Template_a_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r23.options.logobg = "skin1";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FullComponent_ng_template_37_div_28_Template_a_click_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);

            var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r25.options.logobg = "skin2";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FullComponent_ng_template_37_div_28_Template_a_click_9_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);

            var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r26.options.logobg = "skin3";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FullComponent_ng_template_37_div_28_Template_a_click_11_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);

            var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r27.options.logobg = "skin4";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FullComponent_ng_template_37_div_28_Template_a_click_13_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);

            var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r28.options.logobg = "skin5";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FullComponent_ng_template_37_div_28_Template_a_click_15_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);

            var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r29.options.logobg = "skin6";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function FullComponent_ng_template_37_Template(rf, ctx) {
        if (rf & 1) {
          var _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Layout Settings");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function FullComponent_ng_template_37_Template_input_change_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31);

            var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r30.options.layout = ctx_r30.options.layout == "vertical" ? "horizontal" : "vertical";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Horizontal");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function FullComponent_ng_template_37_Template_input_change_8_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31);

            var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r32.options.theme = ctx_r32.options.theme == "light" ? "dark" : "light";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Dark Theme");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function FullComponent_ng_template_37_Template_input_change_12_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31);

            var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r33.options.sidebarpos = ctx_r33.options.sidebarpos == "fixed" ? "absolute" : "fixed";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Fixed Sidebar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function FullComponent_ng_template_37_Template_input_change_16_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31);

            var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r34.options.headerpos = ctx_r34.options.headerpos == "fixed" ? "absolute" : "fixed";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Fixed Header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function FullComponent_ng_template_37_Template_input_change_20_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31);

            var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r35.options.boxed = ctx_r35.options.boxed == "full" ? "boxed" : "full";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Boxed Layout");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function FullComponent_ng_template_37_Template_input_change_24_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31);

            var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r36.options.dir = ctx_r36.options.dir == "rtl" ? "ltr" : "rtl";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "RTL");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, FullComponent_ng_template_37_div_27_Template, 19, 4, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, FullComponent_ng_template_37_div_28_Template, 16, 0, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h5", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Navbar Backgrounds");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "ul", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FullComponent_ng_template_37_Template_a_click_34_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31);

            var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r37.options.navbarbg = "skin1";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FullComponent_ng_template_37_Template_a_click_36_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31);

            var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r38.options.navbarbg = "skin2";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FullComponent_ng_template_37_Template_a_click_38_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31);

            var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r39.options.navbarbg = "skin3";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FullComponent_ng_template_37_Template_a_click_40_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31);

            var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r40.options.navbarbg = "skin4";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FullComponent_ng_template_37_Template_a_click_42_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31);

            var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r41.options.navbarbg = "skin5";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FullComponent_ng_template_37_Template_a_click_44_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31);

            var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r42.options.navbarbg = "skin6";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h5", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Sidebar Backgrounds");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "ul", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "li", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FullComponent_ng_template_37_Template_a_click_50_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31);

            var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r43.options.sidebarbg = "skin1";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "li", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FullComponent_ng_template_37_Template_a_click_52_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31);

            var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r44.options.sidebarbg = "skin2";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "li", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "a", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FullComponent_ng_template_37_Template_a_click_54_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31);

            var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r45.options.sidebarbg = "skin3";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "li", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "a", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FullComponent_ng_template_37_Template_a_click_56_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31);

            var ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r46.options.sidebarbg = "skin4";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "li", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "a", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FullComponent_ng_template_37_Template_a_click_58_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31);

            var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r47.options.sidebarbg = "skin5";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "li", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "a", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FullComponent_ng_template_37_Template_a_click_60_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31);

            var ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r48.options.sidebarbg = "skin6";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("checked", ctx_r5.options.layout == "horizontal" ? "checked" : null);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("checked", ctx_r5.options.theme == "dark" ? "checked" : null);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("checked", ctx_r5.options.sidebarpos == "fixed" ? "checked" : null);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("checked", ctx_r5.options.headerpos == "fixed" ? "checked" : null);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("checked", ctx_r5.options.boxed == "boxed" ? "checked" : null);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("checked", ctx_r5.options.dir == "rtl" ? "checked" : null);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.options.layout === "vertical");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.options.layout === "vertical");
        }
      }

      function FullComponent_ng_template_39_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 82);
        }
      }

      function FullComponent_ng_template_40_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Chris Evans");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Just see the my admin!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "9:30 AM");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "span", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Ray Hudson");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "I've sung a song! See you at");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "9:10 AM");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "span", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Lb James");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "I am a singer!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "9:08 AM");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "img", 99);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "span", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Don Andres");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Just see the my admin!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "9:02 AM");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "img", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "span", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Chris Evans");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "span", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Just see the my admin!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "span", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "9:30 AM");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "a", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "span", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "img", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "span", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "span", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Ray Hudson");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "span", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "I've sung a song! See you at");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "span", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "9:10 AM");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "a", 103);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "span", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "img", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "span", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "span", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Lb James");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "span", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "I am a singer!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "span", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "9:08 AM");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "a", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "span", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "img", 99);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "span", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "span", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Don Andres");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "span", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Just see the my admin!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "span", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "9:02 AM");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "a", 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "span", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "img", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "span", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "span", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Chris Evans");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "span", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Just see the my admin!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "span", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "9:30 AM");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "a", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "span", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "img", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "span", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "span", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Ray Hudson");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "span", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "I've sung a song! See you at");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "span", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "9:10 AM");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "a", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "span", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "img", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "span", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "span", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "Lb James");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "span", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "I am a singer!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "span", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "9:08 AM");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "a", 108);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "span", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "img", 99);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "span", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "span", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "Don Andres");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "span", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "Just see the my admin!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "span", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "9:02 AM");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("perfectScrollbar", ctx_r7.config);
        }
      }

      function FullComponent_ng_template_42_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 109);
        }
      }

      function FullComponent_ng_template_43_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 110);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h6", 111);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Activity Timeline");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 112);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 113);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 115);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 116);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 117);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Meeting today ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 118);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " 5pm");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 119);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "you can write anything ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 113);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 120);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 121);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 116);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 117);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Send documents to Clark");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 119);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Lorem Ipsum is simply ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 113);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 122);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 123);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 116);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 117);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Go to the Doctor ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 118);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "5 minutes ago");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 119);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Contrary to popular belief");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 113);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 122);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "img", 124);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 116);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 125);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Stephen");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 118);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "5 minutes ago");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 119);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Approve meeting with tiger");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 113);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 126);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "i", 115);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 116);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 117);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Meeting today ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span", 118);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " 5pm");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 119);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "you can write anything ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 113);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 120);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "i", 121);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 116);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 117);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Send documents to Clark");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 119);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Lorem Ipsum is simply ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 113);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 122);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "img", 127);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 116);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 117);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Go to the Doctor ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "span", 118);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "5 minutes ago");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 119);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Contrary to popular belief");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 113);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 122);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "img", 128);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 116);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "a", 125);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Stephen");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "span", 118);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "5 minutes ago");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 119);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Approve meeting with tiger");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "show-sidebar": a0
        };
      };

      var _c1 = function _c1(a0) {
        return {
          "show-service-panel": a0
        };
      };

      var FullComponent = /*#__PURE__*/function () {
        function FullComponent(router) {
          _classCallCheck(this, FullComponent);

          this.router = router;
          this.config = {};
          this.tabStatus = 'justified';
          this.isCollapsed = false;
          this.showSettings = false;
          this.showMobileMenu = false;
          this.expandLogo = false;
          this.options = {
            theme: 'light',
            dir: 'ltr',
            layout: 'vertical',
            sidebartype: 'full',
            sidebarpos: 'fixed',
            headerpos: 'fixed',
            boxed: 'full',
            navbarbg: 'skin1',
            sidebarbg: 'skin6',
            logobg: 'skin6' // six possible values: skin(1/2/3/4/5/6)

          };
        }

        _createClass(FullComponent, [{
          key: "Logo",
          value: function Logo() {
            this.expandLogo = !this.expandLogo;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this.router.url === '/') {
              this.router.navigate(['/dashboard/classic']);
            }

            this.defaultSidebar = this.options.sidebartype;
            this.handleSidebar();
          }
        }, {
          key: "onResize",
          value: function onResize(event) {
            this.handleSidebar();
          }
        }, {
          key: "handleSidebar",
          value: function handleSidebar() {
            this.innerWidth = window.innerWidth;

            switch (this.defaultSidebar) {
              case 'full':
              case 'iconbar':
                if (this.innerWidth < 1170) {
                  this.options.sidebartype = 'mini-sidebar';
                } else {
                  this.options.sidebartype = this.defaultSidebar;
                }

                break;

              case 'overlay':
                if (this.innerWidth < 767) {
                  this.options.sidebartype = 'mini-sidebar';
                } else {
                  this.options.sidebartype = this.defaultSidebar;
                }

                break;

              default:
            }
          }
        }, {
          key: "toggleSidebarType",
          value: function toggleSidebarType() {
            switch (this.options.sidebartype) {
              case 'full':
              case 'iconbar':
                this.options.sidebartype = 'mini-sidebar';
                break;

              case 'overlay':
                this.showMobileMenu = !this.showMobileMenu;
                break;

              case 'mini-sidebar':
                if (this.defaultSidebar === 'mini-sidebar') {
                  this.options.sidebartype = 'full';
                } else {
                  this.options.sidebartype = this.defaultSidebar;
                }

                break;

              default:
            }
          }
        }]);

        return FullComponent;
      }();

      FullComponent.ɵfac = function FullComponent_Factory(t) {
        return new (t || FullComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
      };

      FullComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FullComponent,
        selectors: [["app-full-layout"]],
        hostBindings: function FullComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function FullComponent_resize_HostBindingHandler($event) {
              return ctx.onResize($event);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
          }
        },
        decls: 45,
        vars: 28,
        consts: [["id", "main-wrapper", 3, "ngClass", "dir"], [1, "topbar"], [1, "d-flex", "top-navbar", "navbar-expand-lg", 3, "ngClass"], [1, "navbar-header", 3, "ngClass"], ["href", "javascript:void(0)", 1, "nav-toggler", "waves-effect", "waves-light", "d-block", "d-lg-none", 3, "click"], [3, "ngClass"], ["href", "/", 1, "navbar-brand"], [1, "logo-icon"], ["src", "assets/images/logo-icon.png", "alt", "homepage", 1, "dark-logo"], ["src", "assets/images/logo-light-icon.png", "alt", "homepage", 1, "light-logo"], [1, "logo-text"], ["src", "assets/images/logo-text.png", "alt", "homepage", 1, "dark-logo"], ["src", "assets/images/logo-light-text.png", "alt", "homepage", 1, "light-logo"], ["href", "javascript:void(0)", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", 1, "topbartoggler", "d-block", "d-lg-none", "waves-effect", "waves-light", 3, "click"], [1, "ti-more"], ["id", "navbarSupportedContent", 1, "navbar-collapse", "collapse", 3, "ngbCollapse"], ["class", "w-100", 4, "ngIf"], [1, "left-sidebar", 3, "mouseover", "mouseout"], [4, "ngIf"], [1, "page-wrapper"], [1, "container-fluid"], [1, "footer", "text-center"], ["href", "https://wrappixel.com"], [1, "customizer", 3, "ngClass"], ["href", "javascript:void(0)", 1, "service-panel-toggle", 3, "click"], [1, "fa", "fa-spin", "fa-cog"], [1, "customizer-body", "custom-pills", 3, "perfectScrollbar"], ["type", "pills", 3, "justify"], ["ngbTabTitle", ""], ["ngbTabContent", ""], [1, "chat-windows"], [1, "w-100"], [1, "w-100", "d-flex", "align-items-center", "justify-content-between"], [3, "toggleSidebar"], [1, "scroll-sidebar"], [1, "scroll-sidebar", 3, "perfectScrollbar"], [1, "mdi", "mdi-wrench", "font-20"], [1, "p-15", "border-bottom"], [1, "font-medium", "m-b-20", "m-t-10"], [1, "custom-control", "custom-checkbox", "m-t-10"], ["type", "checkbox", "name", "layout", "id", "layout", 1, "custom-control-input", 3, "change"], ["for", "layout", 1, "custom-control-label"], ["type", "checkbox", "name", "theme-view", "id", "theme-view", 1, "custom-control-input", 3, "change"], ["for", "theme-view", 1, "custom-control-label"], ["type", "checkbox", "name", "sidebar-position", "id", "sidebar-position", 1, "custom-control-input", 3, "change"], ["for", "sidebar-position", 1, "custom-control-label"], ["type", "checkbox", "name", "header-position", "id", "header-position", 1, "custom-control-input", 3, "change"], ["for", "header-position", 1, "custom-control-label"], ["type", "checkbox", "name", "boxed-layout", "id", "boxed-layout", 1, "custom-control-input", 3, "change"], ["for", "boxed-layout", 1, "custom-control-label"], ["type", "checkbox", "name", "rtl-layout", "id", "rtl-layout", 1, "custom-control-input", 3, "change"], ["for", "rtl-layout", 1, "custom-control-label"], ["class", "p-15 border-bottom", 4, "ngIf"], [1, "theme-color"], [1, "theme-item"], ["href", "javascript:void(0)", "data-navbarbg", "skin1", 1, "theme-link", 3, "click"], ["href", "javascript:void(0)", "data-navbarbg", "skin2", 1, "theme-link", 3, "click"], ["href", "javascript:void(0)", "data-navbarbg", "skin3", 1, "theme-link", 3, "click"], ["href", "javascript:void(0)", "data-navbarbg", "skin4", 1, "theme-link", 3, "click"], ["href", "javascript:void(0)", "data-navbarbg", "skin5", 1, "theme-link", 3, "click"], ["href", "javascript:void(0)", "data-navbarbg", "skin6", 1, "theme-link", 3, "click"], ["href", "javascript:void(0)", "data-sidebarbg", "skin1", 1, "theme-link", 3, "click"], ["href", "javascript:void(0)", "data-sidebarbg", "skin2", 1, "theme-link", 3, "click"], ["href", "javascript:void(0)", "data-sidebarbg", "skin3", 1, "theme-link", 3, "click"], ["href", "javascript:void(0)", "data-sidebarbg", "skin4", 1, "theme-link", 3, "click"], ["href", "javascript:void(0)", "data-sidebarbg", "skin5", 1, "theme-link", 3, "click"], ["href", "javascript:void(0)", "data-sidebarbg", "skin6", 1, "theme-link", 3, "click"], [1, "custom-control", "custom-radio", "m-t-10"], ["type", "radio", "name", "sidebar", "value", "mini-sidebar", "id", "minisidebar", 1, "custom-control-input", 3, "ngModel", "ngModelChange", "change"], ["for", "minisidebar", 1, "custom-control-label"], ["type", "radio", "name", "sidebar", "value", "iconbar", "id", "iconsidebar", 1, "custom-control-input", 3, "ngModel", "ngModelChange", "change"], ["for", "iconsidebar", 1, "custom-control-label"], ["type", "radio", "name", "sidebar", "value", "overlay", "id", "overlaysidebar", 1, "custom-control-input", 3, "ngModel", "ngModelChange", "change"], ["for", "overlaysidebar", 1, "custom-control-label"], ["type", "radio", "name", "sidebar", "value", "full", "id", "fullsidebar", 1, "custom-control-input", 3, "ngModel", "ngModelChange", "change"], ["for", "fullsidebar", 1, "custom-control-label"], ["href", "javascript:void(0)", "data-logobg", "skin1", 1, "theme-link", 3, "click"], ["href", "javascript:void(0)", "data-logobg", "skin2", 1, "theme-link", 3, "click"], ["href", "javascript:void(0)", "data-logobg", "skin3", 1, "theme-link", 3, "click"], ["href", "javascript:void(0)", "data-logobg", "skin4", 1, "theme-link", 3, "click"], ["href", "javascript:void(0)", "data-logobg", "skin5", 1, "theme-link", 3, "click"], ["href", "javascript:void(0)", "data-logobg", "skin6", 1, "theme-link", 3, "click"], [1, "mdi", "mdi-message-reply", "font-20"], [1, "mailbox", "list-style-none", "m-t-20"], [1, "message-center", "chat-scroll", 3, "perfectScrollbar"], ["href", "#", "id", "chat_user_1", "data-user-id", "1", 1, "message-item"], [1, "user-img"], ["src", "assets/images/users/1.jpg", "alt", "user", 1, "rounded-circle"], ["data-status", "online", 1, "profile-status", "online", "pull-right"], [1, "mail-contnet"], [1, "mail-desc"], [1, "time"], ["href", "#", "id", "chat_user_2", "data-user-id", "2", 1, "message-item"], ["src", "assets/images/users/2.jpg", "alt", "user", 1, "rounded-circle"], ["data-status", "busy", 1, "profile-status", "busy", "pull-right"], ["href", "#", "id", "chat_user_3", "data-user-id", "3", 1, "message-item"], ["src", "assets/images/users/3.jpg", "alt", "user", 1, "rounded-circle"], ["data-status", "away", 1, "profile-status", "away", "pull-right"], ["href", "#", "id", "chat_user_4", "data-user-id", "4", 1, "message-item"], ["src", "assets/images/users/4.jpg", "alt", "user", 1, "rounded-circle"], ["data-status", "offline", 1, "profile-status", "offline", "pull-right"], ["href", "#", "id", "chat_user_5", "data-user-id", "5", 1, "message-item"], ["href", "#", "id", "chat_user_6", "data-user-id", "6", 1, "message-item"], ["href", "#", "id", "chat_user_7", "data-user-id", "7", 1, "message-item"], ["href", "#", "id", "chat_user_8", "data-user-id", "8", 1, "message-item"], ["href", "#", "id", "chat_user_9", "data-user-id", "9", 1, "message-item"], ["href", "#", "id", "chat_user_10", "data-user-id", "10", 1, "message-item"], ["href", "#", "id", "chat_user_11", "data-user-id", "11", 1, "message-item"], ["href", "#", "id", "chat_user_12", "data-user-id", "12", 1, "message-item"], [1, "mdi", "mdi-star-circle", "font-20"], [1, "p-15"], [1, "m-t-20", "m-b-20"], [1, "steamline"], [1, "sl-item"], [1, "sl-left", "bg-success"], [1, "ti-user"], [1, "sl-right"], [1, "font-medium"], [1, "sl-date"], [1, "desc"], [1, "sl-left", "bg-info"], [1, "fas", "fa-image"], [1, "sl-left"], ["alt", "user", "src", "assets/images/users/2.jpg", 1, "rounded-circle"], ["alt", "user", "src", "assets/images/users/1.jpg", 1, "rounded-circle"], ["href", "javascript:void(0)"], [1, "sl-left", "bg-primary"], ["alt", "user", "src", "assets/images/users/4.jpg", 1, "rounded-circle"], ["alt", "user", "src", "assets/images/users/6.jpg", 1, "rounded-circle"]],
        template: function FullComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FullComponent_Template_a_click_4_listener() {
              return ctx.showMobileMenu = !ctx.showMobileMenu;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "b", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FullComponent_Template_a_click_13_listener() {
              return ctx.isCollapsed = !ctx.isCollapsed;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, FullComponent_div_16_Template, 2, 0, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, FullComponent_div_17_Template, 2, 0, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "aside", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function FullComponent_Template_aside_mouseover_18_listener() {
              return ctx.Logo();
            })("mouseout", function FullComponent_Template_aside_mouseout_18_listener() {
              return ctx.Logo();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, FullComponent_div_19_Template, 3, 0, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, FullComponent_div_20_Template, 3, 1, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "app-breadcrumb");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "footer", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " All Rights Reserved by Xtreme Admin. Designed and Developed by ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "WrapPixel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, ". ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "aside", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FullComponent_Template_a_click_31_listener() {
              return ctx.showSettings = !ctx.showSettings;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "ngb-tabset", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "ngb-tab");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, FullComponent_ng_template_36_Template, 1, 0, "ng-template", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, FullComponent_ng_template_37_Template, 61, 8, "ng-template", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "ngb-tab");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, FullComponent_ng_template_39_Template, 1, 0, "ng-template", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, FullComponent_ng_template_40_Template, 135, 1, "ng-template", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "ngb-tab");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, FullComponent_ng_template_42_Template, 1, 0, "ng-template", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, FullComponent_ng_template_43_Template, 82, 0, "ng-template", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](24, _c0, ctx.showMobileMenu))("dir", ctx.options.dir);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-theme", ctx.options.theme)("data-layout", ctx.options.layout)("data-sidebartype", ctx.options.sidebartype)("data-sidebar-position", ctx.options.sidebarpos)("data-header-position", ctx.options.headerpos)("data-boxed-layout", ctx.options.boxed);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-navbarbg", ctx.options.navbarbg);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.options.navbarbg == "skin6" ? "navbar-light" : "navbar-dark");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.expandLogo ? "expand-logo" : "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-logobg", ctx.options.logobg);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.showMobileMenu ? "ti-close" : "ti-menu");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsed);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbCollapse", !ctx.isCollapsed);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-navbarbg", ctx.options.navbarbg);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.options.layout === "horizontal");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.options.layout === "vertical");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-sidebarbg", ctx.options.sidebarbg);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.options.layout === "horizontal");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.options.layout === "vertical");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](26, _c1, ctx.showSettings));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("perfectScrollbar", ctx.config);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("justify", ctx.tabStatus);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbCollapse"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _shared_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_4__["BreadcrumbComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__["PerfectScrollbarDirective"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbTabset"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbTab"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbTabTitle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbTabContent"], _shared_horizontal_header_horizontal_navigation_component__WEBPACK_IMPORTED_MODULE_6__["HorizontalNavigationComponent"], _shared_vertical_header_vertical_navigation_component__WEBPACK_IMPORTED_MODULE_7__["VerticalNavigationComponent"], _shared_horizontal_sidebar_horizontal_sidebar_component__WEBPACK_IMPORTED_MODULE_8__["HorizontalSidebarComponent"], _shared_vertical_sidebar_vertical_sidebar_component__WEBPACK_IMPORTED_MODULE_9__["VerticalSidebarComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmdWxsLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FullComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-full-layout',
            templateUrl: './full.component.html',
            styleUrls: ['./full.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }];
        }, {
          onResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:resize', ['$event']]
          }]
        });
      })();
      /***/

    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _shared_spinner_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./shared/spinner.component */
      "oj/z");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'app';
      };

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 2,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-spinner");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _shared_spinner_component__WEBPACK_IMPORTED_MODULE_2__["SpinnerComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "XHaz":
    /*!****************************************************************!*\
      !*** ./src/app/shared/vertical-sidebar/vertical-menu-items.ts ***!
      \****************************************************************/

    /*! exports provided: ROUTES */

    /***/
    function XHaz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ROUTES", function () {
        return ROUTES;
      });

      var ROUTES = [{
        path: '',
        title: 'Personal',
        icon: 'mdi mdi-dots-horizontal',
        "class": 'nav-small-cap',
        extralink: true,
        label: '',
        labelClass: '',
        submenu: []
      }, {
        path: '/starter',
        title: 'Starter Page',
        icon: 'Home',
        "class": '',
        extralink: false,
        label: '',
        labelClass: '',
        submenu: []
      }, {
        path: '',
        title: 'UI Components',
        icon: 'mdi mdi-dots-horizontal',
        "class": 'nav-small-cap',
        extralink: true,
        label: '',
        labelClass: '',
        submenu: []
      }, {
        path: '',
        title: 'Component',
        icon: 'Cpu',
        "class": 'has-arrow',
        extralink: false,
        label: '',
        labelClass: '',
        submenu: [{
          path: '/component/accordion',
          title: 'Accordion',
          icon: 'mdi mdi-adjust',
          "class": '',
          extralink: false,
          label: '',
          labelClass: '',
          submenu: []
        }, {
          path: '/component/alert',
          title: 'Alert',
          icon: 'mdi mdi-adjust',
          "class": '',
          extralink: false,
          label: '',
          labelClass: '',
          submenu: []
        }, {
          path: '/component/carousel',
          title: 'Carousel',
          icon: 'mdi mdi-adjust',
          "class": '',
          extralink: false,
          label: '',
          labelClass: '',
          submenu: []
        }, {
          path: '/component/dropdown',
          title: 'Dropdown',
          icon: 'mdi mdi-adjust',
          "class": '',
          extralink: false,
          label: '',
          labelClass: '',
          submenu: []
        }, {
          path: '/component/modal',
          title: 'Modal',
          icon: 'mdi mdi-adjust',
          "class": '',
          extralink: false,
          label: '',
          labelClass: '',
          submenu: []
        }, {
          path: '/component/pagination',
          title: 'Pagination',
          icon: 'mdi mdi-adjust',
          "class": '',
          extralink: false,
          label: '',
          labelClass: '',
          submenu: []
        }, {
          path: '/component/poptool',
          title: 'Popover & Tooltip',
          icon: 'mdi mdi-adjust',
          "class": '',
          extralink: false,
          label: '',
          labelClass: '',
          submenu: []
        }, {
          path: '/component/progressbar',
          title: 'Progressbar',
          icon: 'mdi mdi-adjust',
          "class": '',
          extralink: false,
          label: '',
          labelClass: '',
          submenu: []
        }, {
          path: '/component/rating',
          title: 'Ratings',
          icon: 'mdi mdi-adjust',
          "class": '',
          extralink: false,
          label: '',
          labelClass: '',
          submenu: []
        }, {
          path: '/component/tabs',
          title: 'Tabs',
          icon: 'mdi mdi-adjust',
          "class": '',
          extralink: false,
          label: '',
          labelClass: '',
          submenu: []
        }, {
          path: '/component/timepicker',
          title: 'Timepicker',
          icon: 'mdi mdi-adjust',
          "class": '',
          extralink: false,
          label: '',
          labelClass: '',
          submenu: []
        }, {
          path: '/component/buttons',
          title: 'Button',
          icon: 'mdi mdi-adjust',
          "class": '',
          extralink: false,
          label: '',
          labelClass: '',
          submenu: []
        }, {
          path: '/component/cards',
          title: 'Card',
          icon: 'mdi mdi-adjust',
          "class": '',
          extralink: false,
          label: '',
          labelClass: '',
          submenu: []
        }, {
          path: '/component/notifier',
          title: 'Notifier',
          icon: 'mdi mdi-adjust',
          "class": '',
          extralink: false,
          label: '',
          labelClass: '',
          submenu: []
        }]
      }];
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: HttpLoaderFactory, AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function () {
        return HttpLoaderFactory;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "cUpR");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "omvX");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "G0yt");
      /* harmony import */


      var _agm_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @agm/core */
      "LSHg");
      /* harmony import */


      var angular_datatables__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! angular-datatables */
      "oTcB");
      /* harmony import */


      var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ng-multiselect-dropdown */
      "UPO+");
      /* harmony import */


      var ng2_search_filter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ng2-search-filter */
      "KeVr");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ngx-toastr */
      "EApP");
      /* harmony import */


      var _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./layouts/full/full.component */
      "RxpE");
      /* harmony import */


      var _layouts_blank_blank_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./layouts/blank/blank.component */
      "MOmx");
      /* harmony import */


      var angular_feather__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! angular-feather */
      "1tbR");
      /* harmony import */


      var angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! angular-feather/icons */
      "HX06");
      /* harmony import */


      var _shared_vertical_header_vertical_navigation_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./shared/vertical-header/vertical-navigation.component */
      "o4Kg");
      /* harmony import */


      var _shared_vertical_sidebar_vertical_sidebar_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./shared/vertical-sidebar/vertical-sidebar.component */
      "aQxE");
      /* harmony import */


      var _shared_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./shared/breadcrumb/breadcrumb.component */
      "APW9");
      /* harmony import */


      var _shared_horizontal_header_horizontal_navigation_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./shared/horizontal-header/horizontal-navigation.component */
      "hi56");
      /* harmony import */


      var _shared_horizontal_sidebar_horizontal_sidebar_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./shared/horizontal-sidebar/horizontal-sidebar.component */
      "Gtm6");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _shared_spinner_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./shared/spinner.component */
      "oj/z");
      /* harmony import */


      var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ngx-perfect-scrollbar */
      "aLe/");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! @ngx-translate/core */
      "TSSN");
      /* harmony import */


      var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! @ngx-translate/http-loader */
      "k5Gf");
      /* harmony import */


      var _mycomponents_loginpage_loginpage_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ./mycomponents/loginpage/loginpage.component */
      "9nUm");
      /* harmony import */


      var _angular_fire__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! @angular/fire */
      "jmUF");
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! @angular/fire/auth */
      "VRCc");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! ../environments/environment */
      "AytR");

      function HttpLoaderFactory(http) {
        return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_27__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
      }

      var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
        suppressScrollX: true,
        wheelSpeed: 1,
        wheelPropagation: true,
        minScrollbarLength: 20
      }; // Select some icons (use an object, not an array)

      var icons = {
        Camera: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["Camera"],
        Heart: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["Heart"],
        Github: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["Github"],
        Activity: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["Activity"],
        Airplay: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["Airplay"],
        AlertCircle: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["AlertCircle"],
        AlertOctagon: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["AlertOctagon"],
        AlertTriangle: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["AlertTriangle"],
        AlignCenter: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["AlignCenter"],
        AlignJustify: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["AlignJustify"],
        AlignLeft: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["AlignLeft"],
        AlignRight: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["AlignRight"],
        Anchor: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["Anchor"],
        Aperture: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["Aperture"],
        Archive: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["Archive"],
        ArrowDown: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["ArrowDown"],
        ArrowDownCircle: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["ArrowDownCircle"],
        ArrowDownLeft: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["ArrowDownLeft"],
        ArrowDownRight: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["ArrowDownRight"],
        ArrowLeftCircle: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["ArrowLeftCircle"],
        ArrowLeft: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["ArrowLeft"],
        ArrowRight: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["ArrowRight"],
        ArrowRightCircle: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["ArrowRightCircle"],
        ArrowUp: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["ArrowUp"],
        ArrowUpCircle: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["ArrowUpCircle"],
        ArrowUpLeft: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["ArrowUpLeft"],
        ArrowUpRight: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["ArrowUpRight"],
        AtSign: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["AtSign"],
        Award: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["Award"],
        BarChart2: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["BarChart2"],
        BarChart: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["BarChart"],
        BatteryCharging: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["BatteryCharging"],
        Battery: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["Battery"],
        BellOff: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["BellOff"],
        Bell: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["Bell"],
        Bluetooth: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["Bluetooth"],
        Bold: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["Bold"],
        BookOpen: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["BookOpen"],
        Book: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["Book"],
        Bookmark: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["Bookmark"],
        Box: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["Box"],
        Briefcase: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["Briefcase"],
        Calendar: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["Calendar"],
        CameraOff: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["CameraOff"],
        Cast: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["Cast"],
        CheckCircle: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["CheckCircle"],
        CheckSquare: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["CheckSquare"],
        Check: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["Check"],
        ChevronDown: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["ChevronDown"],
        ChevronLeft: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["ChevronLeft"],
        ChevronRight: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["ChevronRight"],
        ChevronUp: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["ChevronUp"],
        ChevronsDown: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["ChevronsDown"],
        ChevronsLeft: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["ChevronsLeft"],
        ChevronsRight: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["ChevronsRight"],
        ChevronsUp: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["ChevronsUp"],
        Chrome: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["Chrome"],
        Circle: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["Circle"],
        Clipboard: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["Clipboard"],
        Clock: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["Clock"],
        CloudDrizzle: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["CloudDrizzle"],
        CloudLightning: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["CloudLightning"],
        CloudOff: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["CloudOff"],
        CloudRain: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["CloudRain"],
        Cloud: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["Cloud"],
        CloudSnow: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["CloudSnow"],
        Code: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["Code"],
        Codepen: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["Codepen"],
        Codesandbox: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["Codesandbox"],
        Coffee: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["Coffee"],
        Columns: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["Columns"],
        Command: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["Command"],
        Compass: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["Compass"],
        Copy: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["Copy"],
        CornerDownLeft: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["CornerDownLeft"],
        CornerDownRight: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["CornerDownRight"],
        CornerLeftDown: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["CornerLeftDown"],
        CornerLeftUp: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["CornerLeftUp"],
        CornerRightDown: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["CornerRightDown"],
        CornerRightUp: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["CornerRightUp"],
        CornerUpLeft: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["CornerUpLeft"],
        CornerUpRight: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["CornerUpRight"],
        Cpu: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["Cpu"],
        CreditCard: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["CreditCard"],
        Crop: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["Crop"],
        Crosshair: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["Crosshair"],
        Database: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["Database"],
        Delete: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["Delete"],
        Disc: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["Disc"],
        DollarSign: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["DollarSign"],
        DownloadCloud: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["DownloadCloud"],
        Download: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["Download"],
        Droplet: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["Droplet"],
        Edit: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["Edit"],
        Edit2: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["Edit2"],
        Edit3: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["Edit3"],
        ExternalLink: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["ExternalLink"],
        EyeOff: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["EyeOff"],
        Eye: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["Eye"],
        Facebook: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["Facebook"],
        FastForward: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["FastForward"],
        Feather: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["Feather"],
        Figma: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["Figma"],
        FileMinus: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["FileMinus"],
        FilePlus: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["FilePlus"],
        FileText: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["FileText"],
        File: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["File"],
        Film: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["Film"],
        Filter: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["Filter"],
        Flag: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["Flag"],
        Folder: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["Folder"],
        FolderMinus: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["FolderMinus"],
        FolderPlus: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["FolderPlus"],
        Framer: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["Framer"],
        Frown: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["Frown"],
        Gift: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["Gift"],
        GitBranch: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["GitBranch"],
        GitCommit: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["GitCommit"],
        GitMerge: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["GitMerge"],
        GitPullRequest: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["GitPullRequest"],
        Gitlab: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["Gitlab"],
        Globe: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["Globe"],
        Grid: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["Grid"],
        HardDrive: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["HardDrive"],
        Hash: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["Hash"],
        Headphones: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["Headphones"],
        HelpCircle: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["HelpCircle"],
        Hexagon: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["Hexagon"],
        Home: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["Home"],
        MoreHorizontal: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["MoreHorizontal"],
        Image: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["Image"],
        Inbox: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["Inbox"],
        Info: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["Info"],
        Instagram: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["Instagram"],
        Italic: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["Italic"],
        Key: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["Key"],
        Layers: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["Layers"],
        Layout: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["Layout"],
        LifeBuoy: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["LifeBuoy"],
        Link: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["Link"],
        Link2: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["Link2"],
        Linkedin: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["Linkedin"],
        List: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["List"],
        Loader: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["Loader"],
        Lock: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["Lock"],
        LogIn: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["LogIn"],
        LogOut: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["LogOut"],
        Mail: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["Mail"],
        MapPin: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["MapPin"],
        Map: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["Map"],
        Maximize: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["Maximize"],
        Maximize2: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["Maximize2"],
        Meh: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["Meh"],
        Menu: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["Menu"],
        MessageCircle: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["MessageCircle"],
        MessageSquare: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["MessageSquare"],
        Mic: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["Mic"],
        MicOff: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["MicOff"],
        Minimize: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["Minimize"],
        Minimize2: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["Minimize2"],
        MinusCircle: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["MinusCircle"],
        MinusSquare: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["MinusSquare"],
        Minus: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["Minus"],
        Monitor: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["Monitor"],
        Moon: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["Moon"],
        MoreVertical: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["MoreVertical"],
        MousePointer: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["MousePointer"],
        Move: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["Move"],
        Music: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["Music"],
        Navigation: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["Navigation"],
        Navigation2: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["Navigation2"],
        Octagon: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["Octagon"],
        Package: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["Package"],
        Paperclip: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["Paperclip"],
        PauseCircle: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["PauseCircle"],
        Pause: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["Pause"],
        PenTool: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["PenTool"],
        Percent: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["Percent"],
        PhoneCall: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["PhoneCall"],
        PhoneForwarded: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["PhoneForwarded"],
        PhoneIncoming: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["PhoneIncoming"],
        PhoneMissed: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["PhoneMissed"],
        Phone: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["Phone"],
        PhoneOff: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["PhoneOff"],
        PhoneOutgoing: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["PhoneOutgoing"],
        PieChart: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["PieChart"],
        Play: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["Play"],
        PlayCircle: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["PlayCircle"],
        Plus: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["Plus"],
        PlusCircle: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["PlusCircle"],
        PlusSquare: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["PlusSquare"],
        Pocket: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["Pocket"],
        Power: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["Power"],
        Printer: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["Printer"],
        Radio: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["Radio"],
        RefreshCcw: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["RefreshCcw"],
        RefreshCw: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["RefreshCw"],
        Repeat: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["Repeat"],
        Rewind: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["Rewind"],
        RotateCcw: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["RotateCcw"],
        RotateCw: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["RotateCw"],
        Rss: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["Rss"],
        Save: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["Save"],
        Scissors: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["Scissors"],
        Search: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["Search"],
        Send: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["Send"],
        Server: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["Server"],
        Settings: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["Settings"],
        Share: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["Share"],
        Share2: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["Share2"],
        Shield: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["Shield"],
        ShieldOff: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["ShieldOff"],
        ShoppingBag: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["ShoppingBag"],
        ShoppingCart: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["ShoppingCart"],
        Shuffle: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["Shuffle"],
        Sidebar: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["Sidebar"],
        SkipBack: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["SkipBack"],
        SkipForward: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["SkipForward"],
        Slack: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["Slack"],
        Slash: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["Slash"],
        Sliders: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["Sliders"],
        Smartphone: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["Smartphone"],
        Smile: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["Smile"],
        Speaker: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["Speaker"],
        Square: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["Square"],
        Star: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["Star"],
        StopCircle: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["StopCircle"],
        Sun: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["Sun"],
        Sunrise: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["Sunrise"],
        Sunset: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["Sunset"],
        Tablet: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["Tablet"],
        Tag: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["Tag"],
        Target: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["Target"],
        Terminal: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["Terminal"],
        Thermometer: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["Thermometer"],
        ThumbsDown: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["ThumbsDown"],
        ThumbsUp: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["ThumbsUp"],
        ToggleLeft: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["ToggleLeft"],
        ToggleRight: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["ToggleRight"],
        Tool: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["Tool"],
        Trash: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["Trash"],
        Trash2: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["Trash2"],
        Trello: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["Trello"],
        TrendingDown: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["TrendingDown"],
        TrendingUp: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["TrendingUp"],
        Triangle: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["Triangle"],
        Truck: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["Truck"],
        Tv: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["Tv"],
        Twitch: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["Twitch"],
        Twitter: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["Twitter"],
        Type: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["Type"],
        Umbrella: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["Umbrella"],
        Underline: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["Underline"],
        Unlock: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["Unlock"],
        Upload: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["Upload"],
        UploadCloud: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["UploadCloud"],
        User: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["User"],
        UserCheck: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["UserCheck"],
        UserMinus: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["UserMinus"],
        UserPlus: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["UserPlus"],
        UserX: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["UserX"],
        Users: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["Users"],
        Video: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["Video"],
        VideoOff: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["VideoOff"],
        Voicemail: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["Voicemail"],
        Volume: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["Volume"],
        Volume1: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["Volume1"],
        Volume2: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["Volume2"],
        VolumeX: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["VolumeX"],
        Watch: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["Watch"],
        Wifi: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["Wifi"],
        WifiOff: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["WifiOff"],
        Wind: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["Wind"],
        XCircle: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["XCircle"],
        XOctagon: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["XOctagon"],
        XSquare: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["XSquare"],
        X: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["X"],
        Youtube: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["Youtube"],
        Zap: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["Zap"],
        ZapOff: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["ZapOff"],
        ZoomIn: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["ZoomIn"],
        ZoomOut: angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__["ZoomOut"]
      };

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_23__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [{
          provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_25__["PERFECT_SCROLLBAR_CONFIG"],
          useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
        }],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_12__["ToastrModule"].forRoot(), angular_feather__WEBPACK_IMPORTED_MODULE_15__["FeatherModule"].pick(icons), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], angular_datatables__WEBPACK_IMPORTED_MODULE_9__["DataTablesModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"], angular_feather__WEBPACK_IMPORTED_MODULE_15__["FeatherModule"], ng2_search_filter__WEBPACK_IMPORTED_MODULE_11__["Ng2SearchPipeModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(_app_routing_module__WEBPACK_IMPORTED_MODULE_22__["Approutes"]), ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_25__["PerfectScrollbarModule"], ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_10__["NgMultiSelectDropDownModule"].forRoot(), _agm_core__WEBPACK_IMPORTED_MODULE_8__["AgmCoreModule"].forRoot({
          apiKey: 'AIzaSyDoliAneRffQDyA7Ul9cDk3tLe7vaU4yP8'
        }), _angular_fire__WEBPACK_IMPORTED_MODULE_29__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_31__["environment"].firebaseConfig), _angular_fire_auth__WEBPACK_IMPORTED_MODULE_30__["AngularFireAuthModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_26__["TranslateModule"].forRoot({
          loader: {
            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_26__["TranslateLoader"],
            useFactory: HttpLoaderFactory,
            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]]
          }
        })]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_23__["AppComponent"], _shared_spinner_component__WEBPACK_IMPORTED_MODULE_24__["SpinnerComponent"], _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_13__["FullComponent"], _layouts_blank_blank_component__WEBPACK_IMPORTED_MODULE_14__["BlankComponent"], _shared_vertical_header_vertical_navigation_component__WEBPACK_IMPORTED_MODULE_17__["VerticalNavigationComponent"], _shared_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_19__["BreadcrumbComponent"], _shared_vertical_sidebar_vertical_sidebar_component__WEBPACK_IMPORTED_MODULE_18__["VerticalSidebarComponent"], _shared_horizontal_header_horizontal_navigation_component__WEBPACK_IMPORTED_MODULE_20__["HorizontalNavigationComponent"], _shared_horizontal_sidebar_horizontal_sidebar_component__WEBPACK_IMPORTED_MODULE_21__["HorizontalSidebarComponent"], _mycomponents_loginpage_loginpage_component__WEBPACK_IMPORTED_MODULE_28__["LoginpageComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_12__["ToastrModule"], angular_feather__WEBPACK_IMPORTED_MODULE_15__["FeatherModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], angular_datatables__WEBPACK_IMPORTED_MODULE_9__["DataTablesModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"], angular_feather__WEBPACK_IMPORTED_MODULE_15__["FeatherModule"], ng2_search_filter__WEBPACK_IMPORTED_MODULE_11__["Ng2SearchPipeModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_25__["PerfectScrollbarModule"], ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_10__["NgMultiSelectDropDownModule"], _agm_core__WEBPACK_IMPORTED_MODULE_8__["AgmCoreModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_29__["AngularFireModule"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_30__["AngularFireAuthModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_26__["TranslateModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_23__["AppComponent"], _shared_spinner_component__WEBPACK_IMPORTED_MODULE_24__["SpinnerComponent"], _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_13__["FullComponent"], _layouts_blank_blank_component__WEBPACK_IMPORTED_MODULE_14__["BlankComponent"], _shared_vertical_header_vertical_navigation_component__WEBPACK_IMPORTED_MODULE_17__["VerticalNavigationComponent"], _shared_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_19__["BreadcrumbComponent"], _shared_vertical_sidebar_vertical_sidebar_component__WEBPACK_IMPORTED_MODULE_18__["VerticalSidebarComponent"], _shared_horizontal_header_horizontal_navigation_component__WEBPACK_IMPORTED_MODULE_20__["HorizontalNavigationComponent"], _shared_horizontal_sidebar_horizontal_sidebar_component__WEBPACK_IMPORTED_MODULE_21__["HorizontalSidebarComponent"], _mycomponents_loginpage_loginpage_component__WEBPACK_IMPORTED_MODULE_28__["LoginpageComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_12__["ToastrModule"].forRoot(), angular_feather__WEBPACK_IMPORTED_MODULE_15__["FeatherModule"].pick(icons), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], angular_datatables__WEBPACK_IMPORTED_MODULE_9__["DataTablesModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"], angular_feather__WEBPACK_IMPORTED_MODULE_15__["FeatherModule"], ng2_search_filter__WEBPACK_IMPORTED_MODULE_11__["Ng2SearchPipeModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(_app_routing_module__WEBPACK_IMPORTED_MODULE_22__["Approutes"]), ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_25__["PerfectScrollbarModule"], ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_10__["NgMultiSelectDropDownModule"].forRoot(), _agm_core__WEBPACK_IMPORTED_MODULE_8__["AgmCoreModule"].forRoot({
              apiKey: 'AIzaSyDoliAneRffQDyA7Ul9cDk3tLe7vaU4yP8'
            }), _angular_fire__WEBPACK_IMPORTED_MODULE_29__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_31__["environment"].firebaseConfig), _angular_fire_auth__WEBPACK_IMPORTED_MODULE_30__["AngularFireAuthModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_26__["TranslateModule"].forRoot({
              loader: {
                provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_26__["TranslateLoader"],
                useFactory: HttpLoaderFactory,
                deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]]
              }
            })],
            providers: [{
              provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_25__["PERFECT_SCROLLBAR_CONFIG"],
              useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
            }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_23__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "aQxE":
    /*!***********************************************************************!*\
      !*** ./src/app/shared/vertical-sidebar/vertical-sidebar.component.ts ***!
      \***********************************************************************/

    /*! exports provided: VerticalSidebarComponent */

    /***/
    function aQxE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VerticalSidebarComponent", function () {
        return VerticalSidebarComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _vertical_sidebar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./vertical-sidebar.service */
      "fn3T");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "G0yt");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var angular_feather__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! angular-feather */
      "1tbR");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ngx-translate/core */
      "TSSN");

      var _c0 = function _c0(a0) {
        return [a0];
      };

      function VerticalSidebarComponent_li_36_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var sidebarnavItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, sidebarnavItem_r1.icon));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 2, sidebarnavItem_r1.title));
        }
      }

      function VerticalSidebarComponent_li_36_a_2_span_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var sidebarnavItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, sidebarnavItem_r1.labelClass));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, sidebarnavItem_r1.label));
        }
      }

      function VerticalSidebarComponent_li_36_a_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VerticalSidebarComponent_li_36_a_2_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

            var sidebarnavItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r8.addExpandClass(sidebarnavItem_r1.title);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i-feather", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, VerticalSidebarComponent_li_36_a_2_span_5_Template, 3, 6, "span", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var sidebarnavItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", sidebarnavItem_r1["class"] === "" ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, sidebarnavItem_r1.path) : null)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c0, sidebarnavItem_r1["class"]))("routerLinkActive", sidebarnavItem_r1.submenu.length != 0 ? "" : "active");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", sidebarnavItem_r1.icon)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c0, sidebarnavItem_r1.icon));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 7, sidebarnavItem_r1.title), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sidebarnavItem_r1.label != "");
        }
      }

      function VerticalSidebarComponent_li_36_ul_3_li_1_a_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VerticalSidebarComponent_li_36_ul_3_li_1_a_1_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

            var sidebarnavSubItem_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            return ctx_r16.addActiveClass(sidebarnavSubItem_r13.title);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var sidebarnavSubItem_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", sidebarnavSubItem_r13.submenu.length > 0 ? null : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, sidebarnavSubItem_r13.path))("routerLinkActive", sidebarnavSubItem_r13.submenu.length > 0 ? "" : "router-link-active")("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, sidebarnavSubItem_r13["class"]));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c0, sidebarnavSubItem_r13.icon));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 5, sidebarnavSubItem_r13.title));
        }
      }

      function VerticalSidebarComponent_li_36_ul_3_li_1_ul_2_li_1_a_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var sidebarnavSubsubItem_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, sidebarnavSubsubItem_r21.path))("routerLinkActive", sidebarnavSubsubItem_r21.submenu.length > 0 ? "" : "router-link-active");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, sidebarnavSubsubItem_r21.icon));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 4, sidebarnavSubsubItem_r21.title));
        }
      }

      function VerticalSidebarComponent_li_36_ul_3_li_1_ul_2_li_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, VerticalSidebarComponent_li_36_ul_3_li_1_ul_2_li_1_a_1_Template, 5, 10, "a", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var sidebarnavSubsubItem_r21 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, sidebarnavSubsubItem_r21["class"]));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !sidebarnavSubsubItem_r21.extralink);
        }
      }

      var _c1 = function _c1(a0) {
        return {
          "in": a0
        };
      };

      function VerticalSidebarComponent_li_36_ul_3_li_1_ul_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, VerticalSidebarComponent_li_36_ul_3_li_1_ul_2_li_1_Template, 2, 4, "li", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var sidebarnavSubItem_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, ctx_r15.showSubMenu === sidebarnavSubItem_r13.title));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", sidebarnavSubItem_r13.submenu);
        }
      }

      function VerticalSidebarComponent_li_36_ul_3_li_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, VerticalSidebarComponent_li_36_ul_3_li_1_a_1_Template, 5, 13, "a", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, VerticalSidebarComponent_li_36_ul_3_li_1_ul_2_Template, 2, 4, "ul", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var sidebarnavSubItem_r13 = ctx.$implicit;

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx_r12.showSubMenu === sidebarnavSubItem_r13.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", sidebarnavSubItem_r13.submenu.length > 0 ? "" : "active");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !sidebarnavSubItem_r13.extralink);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sidebarnavSubItem_r13.submenu.length > 0);
        }
      }

      function VerticalSidebarComponent_li_36_ul_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, VerticalSidebarComponent_li_36_ul_3_li_1_Template, 3, 5, "li", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var sidebarnavItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, ctx_r4.showMenu === sidebarnavItem_r1.title));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", sidebarnavItem_r1.submenu);
        }
      }

      function VerticalSidebarComponent_li_36_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, VerticalSidebarComponent_li_36_div_1_Template, 5, 6, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, VerticalSidebarComponent_li_36_a_2_Template, 6, 15, "a", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, VerticalSidebarComponent_li_36_ul_3_Template, 2, 4, "ul", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var sidebarnavItem_r1 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx_r0.showMenu === sidebarnavItem_r1.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", sidebarnavItem_r1.submenu.length != 0 ? "" : "active");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sidebarnavItem_r1.extralink === true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !sidebarnavItem_r1.extralink);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sidebarnavItem_r1.submenu.length > 0);
        }
      }

      var VerticalSidebarComponent = /*#__PURE__*/function () {
        function VerticalSidebarComponent(menuServise, router) {
          var _this3 = this;

          _classCallCheck(this, VerticalSidebarComponent);

          this.menuServise = menuServise;
          this.router = router;
          this.showMenu = '';
          this.showSubMenu = '';
          this.sidebarnavItems = [];
          this.path = '';
          this.menuServise.items.subscribe(function (menuItems) {
            _this3.sidebarnavItems = menuItems; // Active menu 

            _this3.sidebarnavItems.filter(function (m) {
              return m.submenu.filter(function (s) {
                if (s.path === _this3.router.url) {
                  _this3.path = m.title;
                }
              });
            });

            _this3.addExpandClass(_this3.path);
          });
        }

        _createClass(VerticalSidebarComponent, [{
          key: "addExpandClass",
          value: function addExpandClass(element) {
            if (element === this.showMenu) {
              this.showMenu = '0';
            } else {
              this.showMenu = element;
            }
          }
        }, {
          key: "addActiveClass",
          value: function addActiveClass(element) {
            if (element === this.showSubMenu) {
              this.showSubMenu = '0';
            } else {
              this.showSubMenu = element;
            }

            window.scroll({
              top: 0,
              left: 0,
              behavior: 'smooth'
            });
          }
        }]);

        return VerticalSidebarComponent;
      }();

      VerticalSidebarComponent.ɵfac = function VerticalSidebarComponent_Factory(t) {
        return new (t || VerticalSidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_vertical_sidebar_service__WEBPACK_IMPORTED_MODULE_2__["VerticalSidebarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
      };

      VerticalSidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: VerticalSidebarComponent,
        selectors: [["app-vertical-sidebar"]],
        decls: 37,
        vars: 1,
        consts: [[1, "sidebar-nav"], ["id", "sidebarnav"], [1, "user-profile", "d-flex", "no-block", "m-t-20"], [1, "user-pic"], ["src", "assets/images/users/1.jpg", "alt", "users", "width", "40", 1, "rounded-circle"], ["ngbDropdown", "", "placement", "bottom-right", 1, "dropdown", "user-content", "hide-menu", "m-l-10", "overflow-inherit"], ["ngbDropdownToggle", "", "href", "javascript:void(0)", "id", "Userdd", "role", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "dropdown-toggle"], [1, "m-b-0", "user-name", "font-medium"], [1, "fa", "fa-angle-down"], [1, "op-5", "user-email"], ["aria-labelledby", "Userdd", "ngbDropdownMenu", "", 1, "dropdown-menu", "dropdown-menu-right"], ["href", "javascript:void(0)", 1, "dropdown-item"], [1, "ti-user", "m-r-5", "m-l-5"], [1, "ti-wallet", "m-r-5", "m-l-5"], [1, "ti-email", "m-r-5", "m-l-5"], [1, "dropdown-divider"], [1, "ti-settings", "m-r-5", "m-l-5"], [1, "fa", "fa-power-off", "m-r-5", "m-l-5"], [1, "p-15", "m-t-10"], ["href", "javascript:void(0)", 1, "btn", "btn-block", "create-btn", "text-white", "no-block", "d-flex", "align-items-center"], [1, "fa", "fa-plus-square"], [1, "hide-menu", "m-l-5"], ["class", "sidebar-item", 3, "active", "routerLinkActive", 4, "ngFor", "ngForOf"], [1, "sidebar-item", 3, "routerLinkActive"], ["class", "nav-small-cap", 4, "ngIf"], ["class", "sidebar-link waves-effect waves-dark", 3, "routerLink", "ngClass", "routerLinkActive", "click", 4, "ngIf"], ["aria-expanded", "false", "class", "collapse first-level", 3, "ngClass", 4, "ngIf"], [1, "nav-small-cap"], [3, "ngClass"], [1, "hide-menu"], [1, "sidebar-link", "waves-effect", "waves-dark", 3, "routerLink", "ngClass", "routerLinkActive", "click"], [3, "name", "ngClass"], [3, "ngClass", 4, "ngIf"], ["aria-expanded", "false", 1, "collapse", "first-level", 3, "ngClass"], ["class", "sidebar-link", 3, "routerLink", "routerLinkActive", "ngClass", "click", 4, "ngIf"], ["aria-expanded", "false", "class", "collapse Second-level", 3, "ngClass", 4, "ngIf"], [1, "sidebar-link", 3, "routerLink", "routerLinkActive", "ngClass", "click"], ["aria-expanded", "false", 1, "collapse", "Second-level", 3, "ngClass"], ["class", "sidebar-item", "routerLinkActive", "active", 3, "ngClass", 4, "ngFor", "ngForOf"], ["routerLinkActive", "active", 1, "sidebar-item", 3, "ngClass"], ["class", "sidebar-link", 3, "routerLink", "routerLinkActive", 4, "ngIf"], [1, "sidebar-link", 3, "routerLink", "routerLinkActive"]],
        template: function VerticalSidebarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h5", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Steave Jobs ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "steve@gmail.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " My Profile");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " My Balance");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Inbox");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Account Setting");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Logout");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Create New");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, VerticalSidebarComponent_li_36_Template, 4, 6, "li", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.sidebarnavItems);
          }
        },
        directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdownMenu"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], angular_feather__WEBPACK_IMPORTED_MODULE_5__["FeatherComponent"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VerticalSidebarComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-vertical-sidebar',
            templateUrl: './vertical-sidebar.component.html'
          }]
        }], function () {
          return [{
            type: _vertical_sidebar_service__WEBPACK_IMPORTED_MODULE_2__["VerticalSidebarService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "aVhJ":
    /*!********************************************************************!*\
      !*** ./src/app/shared/horizontal-sidebar/horizontal-menu-items.ts ***!
      \********************************************************************/

    /*! exports provided: ROUTES */

    /***/
    function aVhJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ROUTES", function () {
        return ROUTES;
      });

      var ROUTES = [{
        path: '',
        title: 'Starter Page',
        icon: 'home',
        "class": 'has-arrow',
        ddclass: '',
        extralink: false,
        submenu: []
      }, {
        path: '',
        title: 'Components',
        icon: 'grid',
        "class": 'has-arrow',
        ddclass: 'mega-dropdown',
        extralink: false,
        submenu: [{
          path: '/component/accordion',
          title: 'Accordion',
          icon: 'mdi mdi-equal',
          "class": '',
          ddclass: '',
          extralink: false,
          submenu: []
        }, {
          path: '/component/alert',
          title: 'Alert',
          icon: 'mdi mdi-message-bulleted',
          "class": '',
          ddclass: '',
          extralink: false,
          submenu: []
        }, {
          path: '/component/carousel',
          title: 'Carousel',
          icon: 'mdi mdi-view-carousel',
          "class": '',
          ddclass: '',
          extralink: false,
          submenu: []
        }, {
          path: '/component/dropdown',
          title: 'Dropdown',
          icon: 'mdi mdi-arrange-bring-to-front',
          "class": '',
          ddclass: '',
          extralink: false,
          submenu: []
        }, {
          path: '/component/modal',
          title: 'Modal',
          icon: 'mdi mdi-tablet',
          "class": '',
          ddclass: '',
          extralink: false,
          submenu: []
        }, {
          path: '/component/pagination',
          title: 'Pagination',
          icon: 'mdi mdi-backburger',
          "class": '',
          ddclass: '',
          extralink: false,
          submenu: []
        }, {
          path: '/component/poptool',
          title: 'Popover & Tooltip',
          icon: 'mdi mdi-image-filter-vintage',
          "class": '',
          ddclass: '',
          extralink: false,
          submenu: []
        }, {
          path: '/component/progressbar',
          title: 'Progressbar',
          icon: 'mdi mdi-poll',
          "class": '',
          ddclass: '',
          extralink: false,
          submenu: []
        }, {
          path: '/component/rating',
          title: 'Ratings',
          icon: 'mdi mdi-bandcamp',
          "class": '',
          ddclass: '',
          extralink: false,
          submenu: []
        }, {
          path: '/component/tabs',
          title: 'Tabs',
          icon: 'mdi mdi-sort-variant',
          "class": '',
          ddclass: '',
          extralink: false,
          submenu: []
        }, {
          path: '/component/timepicker',
          title: 'Timepicker',
          icon: 'mdi mdi-calendar-clock',
          "class": '',
          ddclass: '',
          extralink: false,
          submenu: []
        }, {
          path: '/component/buttons',
          title: 'Button',
          icon: 'mdi mdi-toggle-switch',
          "class": '',
          ddclass: '',
          extralink: false,
          submenu: []
        }, {
          path: '/component/notifier',
          title: 'Notifier',
          icon: 'mdi mdi-bandcamp',
          "class": '',
          ddclass: '',
          extralink: false,
          submenu: []
        }, {
          path: '/cards/basiccards',
          title: 'Basic Cards',
          icon: 'mdi mdi-layers',
          "class": '',
          ddclass: '',
          extralink: false,
          submenu: []
        }, {
          path: '/cards/customcards',
          title: 'Custom Cards',
          icon: 'mdi mdi-credit-card-scan',
          "class": '',
          ddclass: '',
          extralink: false,
          submenu: []
        }, {
          path: '/cards/weathercards',
          title: 'Weather Cards',
          icon: 'mdi mdi-weather-fog',
          "class": '',
          ddclass: '',
          extralink: false,
          submenu: []
        }, {
          path: '/extra-component/toastr',
          title: 'Toastr',
          icon: 'mdi mdi-poll',
          "class": '',
          ddclass: '',
          extralink: false,
          submenu: []
        }, {
          path: '/extra-component/editor',
          title: 'Editor',
          icon: 'mdi mdi-dns',
          "class": '',
          ddclass: '',
          extralink: false,
          submenu: []
        }, {
          path: '/extra-component/dragndrop',
          title: 'Drag n Drop',
          icon: 'mdi mdi-arrow-expand-all',
          "class": '',
          ddclass: '',
          extralink: false,
          submenu: []
        }, {
          path: '/widgets/apps',
          title: 'Widget Apps',
          icon: 'mdi mdi-comment-processing-outline',
          "class": '',
          ddclass: '',
          extralink: false,
          submenu: []
        }, {
          path: '/widgets/data',
          title: 'Widget Data',
          icon: 'mdi mdi-calendar',
          "class": '',
          ddclass: '',
          extralink: false,
          submenu: []
        }]
      }];
      /***/
    },

    /***/
    "fn3T":
    /*!*********************************************************************!*\
      !*** ./src/app/shared/vertical-sidebar/vertical-sidebar.service.ts ***!
      \*********************************************************************/

    /*! exports provided: VerticalSidebarService */

    /***/
    function fn3T(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VerticalSidebarService", function () {
        return VerticalSidebarService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _vertical_menu_items__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./vertical-menu-items */
      "XHaz");

      var VerticalSidebarService = function VerticalSidebarService() {
        _classCallCheck(this, VerticalSidebarService);

        this.collapseSidebar = false;
        this.fullScreen = false;
        this.MENUITEMS = _vertical_menu_items__WEBPACK_IMPORTED_MODULE_2__["ROUTES"];
        this.items = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.MENUITEMS);
      };

      VerticalSidebarService.ɵfac = function VerticalSidebarService_Factory(t) {
        return new (t || VerticalSidebarService)();
      };

      VerticalSidebarService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: VerticalSidebarService,
        factory: VerticalSidebarService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VerticalSidebarService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "hi56":
    /*!*****************************************************************************!*\
      !*** ./src/app/shared/horizontal-header/horizontal-navigation.component.ts ***!
      \*****************************************************************************/

    /*! exports provided: HorizontalNavigationComponent */

    /***/
    function hi56(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HorizontalNavigationComponent", function () {
        return HorizontalNavigationComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "G0yt");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ngx-translate/core */
      "TSSN");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-perfect-scrollbar */
      "aLe/");

      function HorizontalNavigationComponent_ng_template_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "First slide label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function HorizontalNavigationComponent_ng_template_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Second slide label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function HorizontalNavigationComponent_ng_template_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 99);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Third slide label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function HorizontalNavigationComponent_ng_template_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. ");
        }
      }

      function HorizontalNavigationComponent_ng_template_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u2605 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Fancy");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " title \u2605");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function HorizontalNavigationComponent_ng_template_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. ");
        }
      }

      function HorizontalNavigationComponent_ng_template_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. ");
        }
      }

      function HorizontalNavigationComponent_span_106_span_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var lang_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", lang_r10.type, ")");
        }
      }

      function HorizontalNavigationComponent_span_106_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HorizontalNavigationComponent_span_106_Template_span_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

            var lang_r10 = ctx.$implicit;

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r13.changeLanguage(lang_r10);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HorizontalNavigationComponent_span_106_span_4_Template, 2, 1, "span", 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var lang_r10 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("flag-icon flag-icon-", lang_r10.icon, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", lang_r10.language, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", lang_r10.type);
        }
      }

      function HorizontalNavigationComponent_a_122_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 103);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var notification_r15 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("btn btn-circle ", notification_r15.btn, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](notification_r15.icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](notification_r15.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](notification_r15.subject);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](notification_r15.time);
        }
      }

      function HorizontalNavigationComponent_a_143_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 108);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 103);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var mymessage_r16 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", mymessage_r16.useravatar, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("profile-status ", mymessage_r16.status, " pull-right");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](mymessage_r16.from);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](mymessage_r16.subject);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](mymessage_r16.time);
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "show-search": a0
        };
      };

      var HorizontalNavigationComponent = /*#__PURE__*/function () {
        function HorizontalNavigationComponent(modalService, translate) {
          _classCallCheck(this, HorizontalNavigationComponent);

          this.modalService = modalService;
          this.translate = translate;
          this.toggleSidebar = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.config = {};
          this.showSearch = false;
          this.isCollapsed = false;
          this.showMobileMenu = false;
          this.notifications = [{
            btn: 'btn-danger',
            icon: 'ti-link',
            title: 'Luanch Admin',
            subject: 'Just see the my new admin!',
            time: '9:30 AM'
          }, {
            btn: 'btn-success',
            icon: 'ti-calendar',
            title: 'Event today',
            subject: 'Just a reminder that you have event',
            time: '9:10 AM'
          }, {
            btn: 'btn-info',
            icon: 'ti-settings',
            title: 'Settings',
            subject: 'You can customize this template as you want',
            time: '9:08 AM'
          }, {
            btn: 'btn-primary',
            icon: 'ti-user',
            title: 'Pavan kumar',
            subject: 'Just see the my admin!',
            time: '9:00 AM'
          }]; // This is for Mymessages

          this.mymessages = [{
            useravatar: 'assets/images/users/1.jpg',
            status: 'online',
            from: 'Pavan kumar',
            subject: 'Just see the my admin!',
            time: '9:30 AM'
          }, {
            useravatar: 'assets/images/users/2.jpg',
            status: 'busy',
            from: 'Sonu Nigam',
            subject: 'I have sung a song! See you at',
            time: '9:10 AM'
          }, {
            useravatar: 'assets/images/users/2.jpg',
            status: 'away',
            from: 'Arijit Sinh',
            subject: 'I am a singer!',
            time: '9:08 AM'
          }, {
            useravatar: 'assets/images/users/4.jpg',
            status: 'offline',
            from: 'Pavan kumar',
            subject: 'Just see the my admin!',
            time: '9:00 AM'
          }];
          this.selectedLanguage = {
            language: 'English',
            code: 'en',
            type: 'US',
            icon: 'us'
          };
          this.languages = [{
            language: 'English',
            code: 'en',
            type: 'US',
            icon: 'us'
          }, {
            language: 'French',
            code: 'fr',
            icon: 'fr'
          }, {
            language: 'Spanish',
            code: 'es',
            icon: 'es'
          }, {
            language: 'German',
            code: 'de',
            icon: 'de'
          }];
          translate.setDefaultLang('en');
        }

        _createClass(HorizontalNavigationComponent, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {}
        }, {
          key: "changeLanguage",
          value: function changeLanguage(lang) {
            this.translate.use(lang.code);
            this.selectedLanguage = lang;
          }
        }]);

        return HorizontalNavigationComponent;
      }();

      HorizontalNavigationComponent.ɵfac = function HorizontalNavigationComponent_Factory(t) {
        return new (t || HorizontalNavigationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]));
      };

      HorizontalNavigationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HorizontalNavigationComponent,
        selectors: [["app-horizontal-navigation"]],
        outputs: {
          toggleSidebar: "toggleSidebar"
        },
        decls: 184,
        vars: 16,
        consts: [[1, "navbar-nav", "float-left"], [1, "nav-item", "d-none"], ["href", "javascript:void(0)", 1, "nav-link", "sidebartoggler", "waves-effect", "waves-light", 3, "click"], [1, "mdi", "mdi-menu", "font-24"], ["ngbDropdown", "", 1, "nav-item", "mega-dropdown", 3, "autoClose"], ["ngbDropdownToggle", "", "href", "javascript:void(0)", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "waves-effect", "waves-dark"], [1, "d-none", "d-md-block"], [1, "fa", "fa-angle-down"], [1, "d-block", "d-md-none"], [1, "mdi", "mdi-dialpad", "font-24"], ["ngbDropdownMenu", "", 1, "dropdown-menu"], [1, "mega-dropdown-menu", "row"], [1, "col-lg-3", "col-xlg-2", "m-b-30"], [1, "m-b-20"], ["ngbSlide", ""], [1, "col-lg-3", "m-b-30"], ["activeIds", "static-1", 1, "accordion", "nav-accordion", 3, "closeOthers"], ["id", "static-1", "title", "Simple"], ["ngbPanelContent", ""], ["id", "static-2"], ["ngbPanelTitle", ""], ["id", "static-3", "title", "Disabled", 3, "disabled"], [1, "form-group"], ["type", "text", "id", "exampleInputname1", "placeholder", "Enter Name", 1, "form-control"], ["type", "email", "placeholder", "Enter email", 1, "form-control"], ["id", "exampleTextarea", "rows", "3", "placeholder", "Message", 1, "form-control"], ["type", "submit", 1, "btn", "btn-info"], [1, "col-lg-3", "col-xlg-4", "m-b-30"], [1, "list-style-none"], ["href", "javascript:void(0)"], [1, "fa", "fa-check", "text-success"], ["ngbDropdown", "", 1, "nav-item", "dropdown"], ["ngbDropdownToggle", "", "href", "javascript:void(0)", "id", "navbarDropdown", "role", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle"], [1, "fa", "fa-plus"], ["aria-labelledby", "navbarDropdown", "ngbDropdownMenu", "", 1, "dropdown-menu"], ["href", "#", 1, "dropdown-item"], [1, "dropdown-divider"], [1, "nav-item", "search-box"], ["href", "javascript:void(0)", 1, "nav-link", "waves-effect", "waves-dark", 3, "click"], [1, "ti-search"], [1, "app-search", "position-absolute", 3, "ngClass"], ["type", "text", "placeholder", "Search & enter", 1, "form-control"], [1, "srh-btn", 3, "click"], [1, "ti-close"], [1, "navbar-header", "d-none", "d-lg-block"], ["href", "javascript:void(0)", 1, "nav-toggler", "waves-effect", "waves-light", "d-block", "d-lg-none", 3, "click"], [3, "ngClass"], ["href", "/", 1, "navbar-brand"], [1, "logo-icon"], ["src", "assets/images/logo-icon.png", "alt", "homepage", 1, "dark-logo"], ["src", "assets/images/logo-light-icon.png", "alt", "homepage", 1, "light-logo"], [1, "logo-text"], ["src", "assets/images/logo-text.png", "alt", "homepage", 1, "dark-logo"], ["src", "assets/images/logo-light-text.png", "alt", "homepage", 1, "light-logo"], ["href", "javascript:void(0)", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", 1, "topbartoggler", "d-block", "d-lg-none", "waves-effect", "waves-light", 3, "click"], [1, "ti-more"], [1, "navbar-nav", "float-md-right"], ["ngbDropdown", "", "placement", "bottom-right", 1, "nav-item", "dropdown"], ["aria-labelledby", "navbarDropdown", "ngbDropdownMenu", "", 1, "dropdown-menu", "dropdown-menu-right"], ["class", "dropdown-item", "href", "#", 3, "click", 4, "ngFor", "ngForOf"], ["ngbDropdownToggle", "", "href", "javascript:void(0)", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle", "waves-effect", "waves-dark"], [1, "mdi", "mdi-bell", "font-24"], ["ngbDropdownMenu", "", 1, "dropdown-menu", "dropdown-menu-right", "mailbox"], [1, "with-arrow"], [1, "bg-primary"], [1, "drop-title", "bg-primary", "text-white"], [1, "m-b-0", "m-t-5"], [1, "font-light"], [1, "message-center", "notifications", 3, "perfectScrollbar"], ["href", "javascript:void(0)", "class", "message-item", 4, "ngFor", "ngForOf"], ["href", "javascript:void(0);", 1, "nav-link", "text-center", "m-b-5"], [1, "fa", "fa-angle-right"], ["ngbDropdownToggle", "", "href", "javascript:void(0)", "id", "2", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle", "waves-effect", "waves-dark"], [1, "font-24", "mdi", "mdi-comment-processing"], ["aria-labelledby", "2", "ngbDropdownMenu", "", 1, "dropdown-menu", "dropdown-menu-right", "mailbox"], [1, "bg-danger"], [1, "drop-title", "text-white", "bg-danger"], [1, "message-center", "message-body", 3, "perfectScrollbar"], ["href", "javascript:void(0);", 1, "nav-link", "text-center", "link"], ["ngbDropdownToggle", "", "href", "javascript:void(0)", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle", "text-muted", "waves-effect", "waves-dark", "pro-pic"], ["src", "assets/images/users/1.jpg", "alt", "minto", "width", "31", 1, "rounded-circle"], ["ngbDropdownMenu", "", 1, "dropdown-menu", "dropdown-menu-right", "user-dd"], [1, "d-flex", "no-block", "align-items-center", "p-15", "bg-primary", "text-white", "m-b-10"], [1, ""], ["src", "assets/images/users/1.jpg", "alt", "user", "width", "60", 1, "img-circle"], [1, "m-l-10"], [1, "m-b-0"], ["href", "javascript:void(0)", 1, "dropdown-item"], [1, "ti-user", "m-r-5", "m-l-5"], [1, "ti-wallet", "m-r-5", "m-l-5"], [1, "ti-email", "m-r-5", "m-l-5"], [1, "ti-settings", "m-r-5", "m-l-5"], [1, "fa", "fa-power-off", "m-r-5", "m-l-5"], [1, "p-l-30", "p-10"], ["href", "javascript:void(0)", 1, "btn", "btn-sm", "btn-success", "btn-rounded"], ["src", "assets/images/big/img1.jpg", "alt", "Random first slide", 1, "img-fluid"], [1, "carousel-caption"], [1, "text-white", "font-bold"], ["src", "assets/images/big/img2.jpg", "alt", "Random second slide", 1, "img-fluid"], ["src", "assets/images/big/img3.jpg", "alt", "Random third slide", 1, "img-fluid"], ["href", "#", 1, "dropdown-item", 3, "click"], [4, "ngIf"], ["href", "javascript:void(0)", 1, "message-item"], [1, "mail-contnet"], [1, "message-title"], [1, "mail-desc"], [1, "time"], [1, "user-img"], ["alt", "user", 1, "rounded-circle", 3, "src"]],
        template: function HorizontalNavigationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HorizontalNavigationComponent_Template_a_click_2_listener() {
              return ctx.toggleSidebar.emit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Mega ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h4", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "CAROUSEL");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ngb-carousel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, HorizontalNavigationComponent_ng_template_17_Template, 4, 0, "ng-template", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, HorizontalNavigationComponent_ng_template_18_Template, 4, 0, "ng-template", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, HorizontalNavigationComponent_ng_template_19_Template, 4, 0, "ng-template", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h4", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "ACCORDION");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "ngb-accordion", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "ngb-panel", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, HorizontalNavigationComponent_ng_template_25_Template, 1, 0, "ng-template", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "ngb-panel", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, HorizontalNavigationComponent_ng_template_27_Template, 5, 0, "ng-template", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, HorizontalNavigationComponent_ng_template_28_Template, 1, 0, "ng-template", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "ngb-panel", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, HorizontalNavigationComponent_ng_template_30_Template, 1, 0, "ng-template", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h4", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "CONTACT US");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "form");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "input", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "textarea", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Submit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h4", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "List style");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "ul", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "i", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " You can give link");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "i", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " Give link");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "a", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "i", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " Another Give link");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "a", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "i", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " Forth link");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "a", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "i", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " Another fifth link");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "li", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "a", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Create New ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "i", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "i", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "a", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "a", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Another action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "a", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Something else here");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "li", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "a", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HorizontalNavigationComponent_Template_a_click_83_listener() {
              return ctx.showSearch = !ctx.showSearch;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "i", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "form", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "input", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "a", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HorizontalNavigationComponent_Template_a_click_87_listener() {
              return ctx.showSearch = !ctx.showSearch;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "i", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "a", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HorizontalNavigationComponent_Template_a_click_90_listener() {
              return ctx.showMobileMenu = !ctx.showMobileMenu;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "i", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "a", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "b", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "img", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "img", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "span", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "img", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "img", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "a", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HorizontalNavigationComponent_Template_a_click_99_listener() {
              return ctx.isCollapsed = !ctx.isCollapsed;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "i", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "ul", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "li", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "a", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "i");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](106, HorizontalNavigationComponent_span_106_Template, 5, 5, "span", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "li", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "a", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "i", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "span", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "span", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "ul", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "h4", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "4 New");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "span", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "Notifications");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](122, HorizontalNavigationComponent_a_122_Template, 10, 9, "a", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "a", 70);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "Check all notifications");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "i", 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "li", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "a", 72);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "i", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 74);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "span", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](133, "span", 75);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "ul", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 76);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "h4", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "5 New");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "span", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "Messages");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 77);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](143, HorizontalNavigationComponent_a_143_Template, 11, 7, "a", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "a", 78);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "See all e-Mails");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](148, "i", 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "li", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "a", 79);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](151, "img", 80);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "div", 81);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "span", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](154, "span", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "div", 82);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "div", 83);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](157, "img", 84);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 85);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "h4", 86);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "Steave Jobs");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "p", 86);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "varun@gmail.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "a", 87);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](164, "i", 88);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, " My Profile");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "a", 87);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](167, "i", 89);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, " My Balance");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "a", 87);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](170, "i", 90);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, " Inbox");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](172, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "a", 87);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](174, "i", 91);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, " Account Setting");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](176, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "a", 87);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](178, "i", 92);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, " Logout");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](180, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "div", 93);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "a", 94);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, "View Profile");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("autoClose", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("closeOthers", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c0, ctx.showSearch));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.showMobileMenu ? "ti-close" : "ti-menu");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsed);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("flag-icon flag-icon-", ctx.selectedLanguage.icon, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.languages);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("perfectScrollbar", ctx.config);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.notifications);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("perfectScrollbar", ctx.config);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.mymessages);
          }
        },
        directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownMenu"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCarousel"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbSlide"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbAccordion"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbPanel"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbPanelContent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbPanelTitle"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__["PerfectScrollbarDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HorizontalNavigationComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-horizontal-navigation',
            templateUrl: './horizontal-navigation.component.html'
          }]
        }], function () {
          return [{
            type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]
          }, {
            type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]
          }];
        }, {
          toggleSidebar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }]
        });
      })();
      /***/

    },

    /***/
    "o4Kg":
    /*!*************************************************************************!*\
      !*** ./src/app/shared/vertical-header/vertical-navigation.component.ts ***!
      \*************************************************************************/

    /*! exports provided: VerticalNavigationComponent */

    /***/
    function o4Kg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VerticalNavigationComponent", function () {
        return VerticalNavigationComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "G0yt");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ngx-translate/core */
      "TSSN");
      /* harmony import */


      var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../user.service */
      "xdv0");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-perfect-scrollbar */
      "aLe/");

      function VerticalNavigationComponent_ng_template_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "First slide label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function VerticalNavigationComponent_ng_template_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Second slide label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function VerticalNavigationComponent_ng_template_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Third slide label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function VerticalNavigationComponent_ng_template_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. ");
        }
      }

      function VerticalNavigationComponent_ng_template_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u2605 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Fancy");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " title \u2605");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function VerticalNavigationComponent_ng_template_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. ");
        }
      }

      function VerticalNavigationComponent_ng_template_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. ");
        }
      }

      function VerticalNavigationComponent_span_93_span_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var lang_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", lang_r10.type, ")");
        }
      }

      function VerticalNavigationComponent_span_93_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VerticalNavigationComponent_span_93_Template_span_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

            var lang_r10 = ctx.$implicit;

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r13.changeLanguage(lang_r10);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, VerticalNavigationComponent_span_93_span_4_Template, 2, 1, "span", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var lang_r10 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("flag-icon flag-icon-", lang_r10.icon, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", lang_r10.language, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", lang_r10.type);
        }
      }

      function VerticalNavigationComponent_a_109_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var notification_r15 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("btn btn-circle ", notification_r15.btn, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](notification_r15.icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](notification_r15.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](notification_r15.subject);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](notification_r15.time);
        }
      }

      function VerticalNavigationComponent_a_130_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var mymessage_r16 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", mymessage_r16.useravatar, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("profile-status ", mymessage_r16.status, " pull-right");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](mymessage_r16.from);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](mymessage_r16.subject);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](mymessage_r16.time);
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "show-search": a0
        };
      };

      var VerticalNavigationComponent = /*#__PURE__*/function () {
        function VerticalNavigationComponent(modalService, translate, user) {
          _classCallCheck(this, VerticalNavigationComponent);

          this.modalService = modalService;
          this.translate = translate;
          this.user = user;
          this.toggleSidebar = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.config = {};
          this.showSearch = false; // This is for Notifications

          this.notifications = [{
            btn: 'btn-danger',
            icon: 'ti-link',
            title: 'Luanch Admin',
            subject: 'Just see the my new admin!',
            time: '9:30 AM'
          }, {
            btn: 'btn-success',
            icon: 'ti-calendar',
            title: 'Event today',
            subject: 'Just a reminder that you have event',
            time: '9:10 AM'
          }, {
            btn: 'btn-info',
            icon: 'ti-settings',
            title: 'Settings',
            subject: 'You can customize this template as you want',
            time: '9:08 AM'
          }, {
            btn: 'btn-primary',
            icon: 'ti-user',
            title: 'Pavan kumar',
            subject: 'Just see the my admin!',
            time: '9:00 AM'
          }]; // This is for Mymessages

          this.mymessages = [{
            useravatar: 'assets/images/users/1.jpg',
            status: 'online',
            from: 'Pavan kumar',
            subject: 'Just see the my admin!',
            time: '9:30 AM'
          }, {
            useravatar: 'assets/images/users/2.jpg',
            status: 'busy',
            from: 'Sonu Nigam',
            subject: 'I have sung a song! See you at',
            time: '9:10 AM'
          }, {
            useravatar: 'assets/images/users/2.jpg',
            status: 'away',
            from: 'Arijit Sinh',
            subject: 'I am a singer!',
            time: '9:08 AM'
          }, {
            useravatar: 'assets/images/users/4.jpg',
            status: 'offline',
            from: 'Pavan kumar',
            subject: 'Just see the my admin!',
            time: '9:00 AM'
          }];
          this.selectedLanguage = {
            language: 'English',
            code: 'en',
            type: 'US',
            icon: 'us'
          };
          this.languages = [{
            language: 'English',
            code: 'en',
            type: 'US',
            icon: 'us'
          }, {
            language: 'Español',
            code: 'es',
            icon: 'es'
          }, {
            language: 'Français',
            code: 'fr',
            icon: 'fr'
          }, {
            language: 'German',
            code: 'de',
            icon: 'de'
          }];
          translate.setDefaultLang('en');
        }

        _createClass(VerticalNavigationComponent, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {}
        }, {
          key: "changeLanguage",
          value: function changeLanguage(lang) {
            this.translate.use(lang.code);
            this.selectedLanguage = lang;
          }
        }, {
          key: "getPhoto",
          value: function getPhoto() {
            return this.user.getLoggedInUser()[1];
          }
        }, {
          key: "getDisplayname",
          value: function getDisplayname() {
            return this.user.getLoggedInUser()[0];
          }
        }]);

        return VerticalNavigationComponent;
      }();

      VerticalNavigationComponent.ɵfac = function VerticalNavigationComponent_Factory(t) {
        return new (t || VerticalNavigationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]));
      };

      VerticalNavigationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: VerticalNavigationComponent,
        selectors: [["app-vertical-navigation"]],
        outputs: {
          toggleSidebar: "toggleSidebar"
        },
        decls: 171,
        vars: 15,
        consts: [[1, "navbar-nav", "float-left", "mr-auto"], [1, "nav-item", "d-none", "d-lg-block"], ["href", "javascript:void(0)", 1, "nav-link", "sidebartoggler", "waves-effect", "waves-light", 3, "click"], [1, "mdi", "mdi-menu", "font-24"], ["ngbDropdown", "", 1, "nav-item", "mega-dropdown", 3, "autoClose"], ["ngbDropdownToggle", "", "href", "javascript:void(0)", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "waves-effect", "waves-dark"], [1, "d-none", "d-md-block"], [1, "fa", "fa-angle-down"], [1, "d-block", "d-md-none"], [1, "mdi", "mdi-dialpad", "font-24"], ["ngbDropdownMenu", "", 1, "dropdown-menu"], [1, "mega-dropdown-menu", "row"], [1, "col-lg-3", "col-xlg-2", "m-b-30"], [1, "m-b-20"], ["ngbSlide", ""], [1, "col-lg-3", "m-b-30"], ["activeIds", "static-1", 1, "accordion", "nav-accordion", 3, "closeOthers"], ["id", "static-1", "title", "Simple"], ["ngbPanelContent", ""], ["id", "static-2"], ["ngbPanelTitle", ""], ["id", "static-3", "title", "Disabled", 3, "disabled"], [1, "form-group"], ["type", "text", "id", "exampleInputname1", "placeholder", "Enter Name", 1, "form-control"], ["type", "email", "placeholder", "Enter email", 1, "form-control"], ["id", "exampleTextarea", "rows", "3", "placeholder", "Message", 1, "form-control"], ["type", "submit", 1, "btn", "btn-info"], [1, "col-lg-3", "col-xlg-4", "m-b-30"], [1, "list-style-none"], ["href", "javascript:void(0)"], [1, "fa", "fa-check", "text-success"], ["ngbDropdown", "", 1, "nav-item", "dropdown"], ["ngbDropdownToggle", "", "href", "javascript:void(0)", "id", "navbarDropdown", "role", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle"], [1, "fa", "fa-plus"], ["aria-labelledby", "navbarDropdown", "ngbDropdownMenu", "", 1, "dropdown-menu"], ["href", "#", 1, "dropdown-item"], [1, "dropdown-divider"], [1, "nav-item", "search-box"], ["href", "javascript:void(0)", 1, "nav-link", "waves-effect", "waves-dark", 3, "click"], [1, "ti-search"], [1, "app-search", "position-absolute", 3, "ngClass"], ["type", "text", "placeholder", "Search & enter", 1, "form-control"], [1, "srh-btn", 3, "click"], [1, "ti-close"], [1, "navbar-nav", "float-right"], ["ngbDropdown", "", "placement", "bottom-right", 1, "nav-item", "dropdown"], ["aria-labelledby", "navbarDropdown", "ngbDropdownMenu", "", 1, "dropdown-menu", "dropdown-menu-right"], ["class", "dropdown-item", "href", "#", 3, "click", 4, "ngFor", "ngForOf"], ["ngbDropdownToggle", "", "href", "javascript:void(0)", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle", "waves-effect", "waves-dark"], [1, "mdi", "mdi-bell", "font-24"], ["ngbDropdownMenu", "", 1, "dropdown-menu", "dropdown-menu-right", "mailbox"], [1, "with-arrow"], [1, "bg-primary"], [1, "drop-title", "bg-primary", "text-white"], [1, "m-b-0", "m-t-5"], [1, "font-light"], [1, "message-center", "notifications", 3, "perfectScrollbar"], ["href", "javascript:void(0)", "class", "message-item", 4, "ngFor", "ngForOf"], ["href", "javascript:void(0);", 1, "nav-link", "text-center", "m-b-5"], [1, "fa", "fa-angle-right"], ["ngbDropdownToggle", "", "href", "javascript:void(0)", "id", "2", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle", "waves-effect", "waves-dark"], [1, "font-24", "mdi", "mdi-comment-processing"], ["aria-labelledby", "2", "ngbDropdownMenu", "", 1, "dropdown-menu", "dropdown-menu-right", "mailbox"], [1, "bg-danger"], [1, "drop-title", "text-white", "bg-danger"], [1, "message-center", "message-body", 3, "perfectScrollbar"], ["href", "javascript:void(0);", 1, "nav-link", "text-center", "link"], ["ngbDropdown", "", "placement", "bottom-right", 1, "nav-item"], ["ngbDropdownToggle", "", "href", "javascript:void(0)", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "text-muted", "waves-effect", "waves-dark", "pro-pic"], ["alt", "mintfff", "width", "31", 1, "rounded-circle", 3, "src"], ["ngbDropdownMenu", "", 1, "dropdown-menu-right", "user-dd"], [1, "d-flex", "no-block", "align-items-center", "p-15", "bg-primary", "text-white", "m-b-10"], [1, ""], ["src", "assets/images/users/1.jpg", "alt", "user", "width", "60", 1, "img-circle"], [1, "m-l-10"], [1, "m-b-0"], ["href", "javascript:void(0)", 1, "dropdown-item"], [1, "ti-user", "m-r-5", "m-l-5"], [1, "ti-wallet", "m-r-5", "m-l-5"], [1, "ti-email", "m-r-5", "m-l-5"], [1, "ti-settings", "m-r-5", "m-l-5"], [1, "fa", "fa-power-off", "m-r-5", "m-l-5"], [1, "p-l-30", "p-10"], ["href", "javascript:void(0)", 1, "btn", "btn-sm", "btn-success", "btn-rounded"], ["src", "assets/images/big/img1.jpg", "alt", "Random first slide", 1, "img-fluid"], [1, "carousel-caption"], [1, "text-white", "font-bold"], ["src", "assets/images/big/img2.jpg", "alt", "Random second slide", 1, "img-fluid"], ["src", "assets/images/big/img3.jpg", "alt", "Random third slide", 1, "img-fluid"], ["href", "#", 1, "dropdown-item", 3, "click"], [4, "ngIf"], ["href", "javascript:void(0)", 1, "message-item"], [1, "mail-contnet"], [1, "message-title"], [1, "mail-desc"], [1, "time"], [1, "user-img"], ["alt", "user", 1, "rounded-circle", 3, "src"]],
        template: function VerticalNavigationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VerticalNavigationComponent_Template_a_click_2_listener() {
              return ctx.toggleSidebar.emit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Mega ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "h4", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ngb-carousel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, VerticalNavigationComponent_ng_template_16_Template, 4, 0, "ng-template", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, VerticalNavigationComponent_ng_template_17_Template, 4, 0, "ng-template", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, VerticalNavigationComponent_ng_template_18_Template, 4, 0, "ng-template", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h4", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "ACCORDION");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "ngb-accordion", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "ngb-panel", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, VerticalNavigationComponent_ng_template_24_Template, 1, 0, "ng-template", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "ngb-panel", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, VerticalNavigationComponent_ng_template_26_Template, 5, 0, "ng-template", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, VerticalNavigationComponent_ng_template_27_Template, 1, 0, "ng-template", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "ngb-panel", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, VerticalNavigationComponent_ng_template_29_Template, 1, 0, "ng-template", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h4", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "CONTACT US");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "form");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "input", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "input", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "textarea", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Submit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h4", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "List style");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "ul", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "i", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " You can give link");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "i", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " Give link");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "i", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " Another Give link");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "a", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "i", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, " Forth link");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "a", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "i", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " Another fifth link");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "li", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "a", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Create New ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "i", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "i", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "a", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "a", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Another action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "a", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Something else here");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "li", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "a", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VerticalNavigationComponent_Template_a_click_82_listener() {
              return ctx.showSearch = !ctx.showSearch;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "i", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "form", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "input", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "a", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VerticalNavigationComponent_Template_a_click_86_listener() {
              return ctx.showSearch = !ctx.showSearch;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "i", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "ul", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "li", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "a", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "i");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](93, VerticalNavigationComponent_span_93_Template, 5, 5, "span", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "li", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "a", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "i", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "span", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "span", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "ul", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "h4", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "4 New");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "span", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Notifications");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](109, VerticalNavigationComponent_a_109_Template, 10, 9, "a", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "a", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "Check all notifications");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "i", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "li", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "a", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "i", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "span", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "span", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "ul", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "h4", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "5 New");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "span", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "Messages");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](130, VerticalNavigationComponent_a_130_Template, 11, 7, "a", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "a", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "See all e-Mails");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](135, "i", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "li", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "a", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](138, "img", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 70);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "span", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](141, "span", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 72);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](144, "img", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 74);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "h4", 75);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "Steave Jobs");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "p", 75);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "varun@gmail.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "a", 76);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](151, "i", 77);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, " My Profile");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "a", 76);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](154, "i", 78);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, " My Balance");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "a", 76);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](157, "i", 79);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, " Inbox");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](159, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "a", 76);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](161, "i", 80);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, " Account Setting");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](163, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "a", 76);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](165, "i", 81);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, " Logout");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](167, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 82);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "a", 83);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, "View Profile");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("autoClose", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("closeOthers", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c0, ctx.showSearch));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("flag-icon flag-icon-", ctx.selectedLanguage.icon, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.languages);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("perfectScrollbar", ctx.config);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.notifications);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("perfectScrollbar", ctx.config);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.mymessages);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.getPhoto(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
          }
        },
        directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownMenu"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCarousel"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbSlide"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbAccordion"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbPanel"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbPanelContent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbPanelTitle"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PerfectScrollbarDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VerticalNavigationComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-vertical-navigation',
            templateUrl: './vertical-navigation.component.html'
          }]
        }], function () {
          return [{
            type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]
          }, {
            type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]
          }, {
            type: _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
          }];
        }, {
          toggleSidebar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }]
        });
      })();
      /***/

    },

    /***/
    "oj/z":
    /*!*********************************************!*\
      !*** ./src/app/shared/spinner.component.ts ***!
      \*********************************************/

    /*! exports provided: SpinnerComponent */

    /***/
    function ojZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function () {
        return SpinnerComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "SVse");

      function SpinnerComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var SpinnerComponent = /*#__PURE__*/function () {
        function SpinnerComponent(router, document) {
          var _this4 = this;

          _classCallCheck(this, SpinnerComponent);

          this.router = router;
          this.document = document;
          this.isSpinnerVisible = true;
          this.backgroundColor = 'rgba(0, 115, 170, 0.69)';
          this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
              _this4.isSpinnerVisible = true;
            } else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"] || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationCancel"] || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationError"]) {
              _this4.isSpinnerVisible = false;
            }
          }, function () {
            _this4.isSpinnerVisible = false;
          });
        }

        _createClass(SpinnerComponent, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.isSpinnerVisible = false;
          }
        }]);

        return SpinnerComponent;
      }();

      SpinnerComponent.ɵfac = function SpinnerComponent_Factory(t) {
        return new (t || SpinnerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]));
      };

      SpinnerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SpinnerComponent,
        selectors: [["app-spinner"]],
        inputs: {
          backgroundColor: "backgroundColor"
        },
        decls: 1,
        vars: 1,
        consts: [["class", "preloader", 4, "ngIf"], [1, "preloader"], [1, "spinner"], [1, "double-bounce1"], [1, "double-bounce2"]],
        template: function SpinnerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SpinnerComponent_div_0_Template, 4, 0, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSpinnerVisible);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SpinnerComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-spinner',
            template: "<div class=\"preloader\" *ngIf=\"isSpinnerVisible\">\n        <div class=\"spinner\">\n          <div class=\"double-bounce1\"></div>\n          <div class=\"double-bounce2\"></div>\n        </div>\n    </div>",
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }, {
            type: Document,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
            }]
          }];
        }, {
          backgroundColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "ucw6":
    /*!*************************************************************************!*\
      !*** ./src/app/shared/horizontal-sidebar/horizontal-sidebar.service.ts ***!
      \*************************************************************************/

    /*! exports provided: HorizontalSidebarService */

    /***/
    function ucw6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HorizontalSidebarService", function () {
        return HorizontalSidebarService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _horizontal_menu_items__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./horizontal-menu-items */
      "aVhJ");

      var HorizontalSidebarService = function HorizontalSidebarService() {
        _classCallCheck(this, HorizontalSidebarService);

        this.collapseSidebar = false;
        this.fullScreen = false;
        this.MENUITEMS = _horizontal_menu_items__WEBPACK_IMPORTED_MODULE_2__["ROUTES"];
        this.items = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.MENUITEMS);
      };

      HorizontalSidebarService.ɵfac = function HorizontalSidebarService_Factory(t) {
        return new (t || HorizontalSidebarService)();
      };

      HorizontalSidebarService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: HorizontalSidebarService,
        factory: HorizontalSidebarService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HorizontalSidebarService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: Approutes */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Approutes", function () {
        return Approutes;
      });
      /* harmony import */


      var _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./layouts/full/full.component */
      "RxpE");
      /* harmony import */


      var _mycomponents_loginpage_loginpage_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./mycomponents/loginpage/loginpage.component */
      "9nUm");

      var Approutes = [{
        path: '',
        component: _mycomponents_loginpage_loginpage_component__WEBPACK_IMPORTED_MODULE_1__["LoginpageComponent"]
      }, {
        path: 'starter',
        component: _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_0__["FullComponent"]
      }];
      /***/
    },

    /***/
    "xdv0":
    /*!*********************************!*\
      !*** ./src/app/user.service.ts ***!
      \*********************************/

    /*! exports provided: UserService */

    /***/
    function xdv0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserService", function () {
        return UserService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/fire/auth */
      "VRCc");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! firebase/app */
      "Jgta");
      /* harmony import */


      var _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/fire/database */
      "bSaC");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "iInd");

      var UserService = /*#__PURE__*/function () {
        function UserService(auth, db, router) {
          _classCallCheck(this, UserService);

          this.auth = auth;
          this.db = db;
          this.router = router;
          this.uid = this.auth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (authState) {
            if (!authState) {
              return null;
            } else {
              return authState.uid;
            }
          })); // test to see if already logged in
          //   isLoggedIn: Observable<boolean> = this.uid.pipe(
          //     tap((uid) => console.log('this.uid is of type:', typeof(this.uid))),
          //     switchMap((uid) => {
          //       if (!uid) {
          //         return observableOf(false);
          //       } else {
          //         return this.db.object<boolean>('/admin/' + uid).valueChanges();
          //       }
          //     })
          //   );
          // test to see if user has specific permissions

          this.name = '';
          this.img = '';
        }

        _createClass(UserService, [{
          key: "login",
          value: function login() {
            var _this5 = this;

            this.auth.signInWithPopup(new firebase_app__WEBPACK_IMPORTED_MODULE_3__["default"].auth.GoogleAuthProvider()).then(function (_) {
              console.log(_);

              _this5.router.navigate(['starter']);

              _this5.setLoggedInUser();
            });
          }
        }, {
          key: "logout",
          value: function logout() {
            this.auth.signOut();
          }
        }, {
          key: "setLoggedInUser",
          value: function setLoggedInUser() {
            var _this6 = this;

            this.auth.currentUser.then(function (_) {
              _this6.name = _ === null || _ === void 0 ? void 0 : _.displayName;
              _this6.img = _ === null || _ === void 0 ? void 0 : _.photoURL;
            });
          }
        }, {
          key: "getLoggedInUser",
          value: function getLoggedInUser() {
            return [this.name, this.img];
          }
        }]);

        return UserService;
      }();

      UserService.ɵfac = function UserService_Factory(t) {
        return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_database__WEBPACK_IMPORTED_MODULE_4__["AngularFireDatabase"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]));
      };

      UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: UserService,
        factory: UserService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"]
          }, {
            type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__["AngularFireDatabase"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "cUpR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.log(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
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
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map