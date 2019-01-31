(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _mainview_mainview_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mainview/mainview.component */ "./src/app/mainview/mainview.component.ts");
/* harmony import */ var _messages_messages_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./messages/messages.component */ "./src/app/messages/messages.component.ts");
/* harmony import */ var _welcomeview_welcomeview_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./welcomeview/welcomeview.component */ "./src/app/welcomeview/welcomeview.component.ts");
/* harmony import */ var _messagesthread_messagesthread_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./messagesthread/messagesthread.component */ "./src/app/messagesthread/messagesthread.component.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _mypost_view_mypost_view_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./mypost-view/mypost-view.component */ "./src/app/mypost-view/mypost-view.component.ts");
/* harmony import */ var _searchuser_searchuser_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./searchuser/searchuser.component */ "./src/app/searchuser/searchuser.component.ts");
/* harmony import */ var _registered_registered_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./registered/registered.component */ "./src/app/registered/registered.component.ts");











var routes = [
    { path: "", redirectTo: "/welcomeview", pathMatch: "full" },
    { path: "welcomeview", component: _welcomeview_welcomeview_component__WEBPACK_IMPORTED_MODULE_5__["WelcomeviewComponent"] },
    { path: "registered", component: _registered_registered_component__WEBPACK_IMPORTED_MODULE_10__["RegisteredComponent"] },
    { path: "mypost", component: _mypost_view_mypost_view_component__WEBPACK_IMPORTED_MODULE_8__["MypostViewComponent"] },
    { path: "messages", component: _messages_messages_component__WEBPACK_IMPORTED_MODULE_4__["MessagesComponent"] },
    { path: "mainview", component: _mainview_mainview_component__WEBPACK_IMPORTED_MODULE_3__["MainviewComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
    { path: 'messagesthread', component: _messagesthread_messagesthread_component__WEBPACK_IMPORTED_MODULE_6__["MessagesthreadComponent"] },
    { path: 'searchuser', component: _searchuser_searchuser_component__WEBPACK_IMPORTED_MODULE_9__["SearchuserComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes /*, {onSameUrlNavigation: "reload"}*/)]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'YellowSnowCone';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _mainpagejumbotron_mainpagejumbotron_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./mainpagejumbotron/mainpagejumbotron.component */ "./src/app/mainpagejumbotron/mainpagejumbotron.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _sidemenu_sidemenu_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sidemenu/sidemenu.component */ "./src/app/sidemenu/sidemenu.component.ts");
/* harmony import */ var _profilepicture_profilepicture_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./profilepicture/profilepicture.component */ "./src/app/profilepicture/profilepicture.component.ts");
/* harmony import */ var _createpost_createpost_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./createpost/createpost.component */ "./src/app/createpost/createpost.component.ts");
/* harmony import */ var _snowcone_snowcone_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./snowcone/snowcone.component */ "./src/app/snowcone/snowcone.component.ts");
/* harmony import */ var _snowconelike_snowconelike_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./snowconelike/snowconelike.component */ "./src/app/snowconelike/snowconelike.component.ts");
/* harmony import */ var _snowconedislike_snowconedislike_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./snowconedislike/snowconedislike.component */ "./src/app/snowconedislike/snowconedislike.component.ts");
/* harmony import */ var _post_post_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./post/post.component */ "./src/app/post/post.component.ts");
/* harmony import */ var _mainview_mainview_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./mainview/mainview.component */ "./src/app/mainview/mainview.component.ts");
/* harmony import */ var _welcomeview_welcomeview_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./welcomeview/welcomeview.component */ "./src/app/welcomeview/welcomeview.component.ts");
/* harmony import */ var _updateprofile_updateprofile_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./updateprofile/updateprofile.component */ "./src/app/updateprofile/updateprofile.component.ts");
/* harmony import */ var _icon_icon_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./icon/icon.component */ "./src/app/icon/icon.component.ts");
/* harmony import */ var _messages_messages_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./messages/messages.component */ "./src/app/messages/messages.component.ts");
/* harmony import */ var _messagesthread_messagesthread_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./messagesthread/messagesthread.component */ "./src/app/messagesthread/messagesthread.component.ts");
/* harmony import */ var _repost_repost_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./repost/repost.component */ "./src/app/repost/repost.component.ts");
/* harmony import */ var _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./user-list/user-list.component */ "./src/app/user-list/user-list.component.ts");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./message.service */ "./src/app/message.service.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./user.service */ "./src/app/user.service.ts");
/* harmony import */ var _searchuser_searchuser_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./searchuser/searchuser.component */ "./src/app/searchuser/searchuser.component.ts");
/* harmony import */ var _validation_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./validation.service */ "./src/app/validation.service.ts");
/* harmony import */ var _mypost_view_mypost_view_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./mypost-view/mypost-view.component */ "./src/app/mypost-view/mypost-view.component.ts");
/* harmony import */ var _userpost_userpost_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./userpost/userpost.component */ "./src/app/userpost/userpost.component.ts");
/* harmony import */ var _registered_registered_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./registered/registered.component */ "./src/app/registered/registered.component.ts");
/* harmony import */ var _toverux_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @toverux/ngx-sweetalert2 */ "./node_modules/@toverux/ngx-sweetalert2/esm5/toverux-ngx-sweetalert2.js");



































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                _mainpagejumbotron_mainpagejumbotron_component__WEBPACK_IMPORTED_MODULE_9__["MainpagejumbotronComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_10__["RegisterComponent"],
                _sidemenu_sidemenu_component__WEBPACK_IMPORTED_MODULE_11__["SidemenuComponent"],
                _profilepicture_profilepicture_component__WEBPACK_IMPORTED_MODULE_12__["ProfilepictureComponent"],
                _createpost_createpost_component__WEBPACK_IMPORTED_MODULE_13__["CreatepostComponent"],
                _snowcone_snowcone_component__WEBPACK_IMPORTED_MODULE_14__["SnowconeComponent"],
                _snowconelike_snowconelike_component__WEBPACK_IMPORTED_MODULE_15__["SnowconelikeComponent"],
                _snowconedislike_snowconedislike_component__WEBPACK_IMPORTED_MODULE_16__["SnowconedislikeComponent"],
                _post_post_component__WEBPACK_IMPORTED_MODULE_17__["PostComponent"],
                _mainview_mainview_component__WEBPACK_IMPORTED_MODULE_18__["MainviewComponent"],
                _welcomeview_welcomeview_component__WEBPACK_IMPORTED_MODULE_19__["WelcomeviewComponent"],
                _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_25__["UserListComponent"],
                _messages_messages_component__WEBPACK_IMPORTED_MODULE_22__["MessagesComponent"],
                _messagesthread_messagesthread_component__WEBPACK_IMPORTED_MODULE_23__["MessagesthreadComponent"],
                _icon_icon_component__WEBPACK_IMPORTED_MODULE_21__["IconComponent"],
                _updateprofile_updateprofile_component__WEBPACK_IMPORTED_MODULE_20__["UpdateprofileComponent"],
                _repost_repost_component__WEBPACK_IMPORTED_MODULE_24__["RepostComponent"],
                _searchuser_searchuser_component__WEBPACK_IMPORTED_MODULE_29__["SearchuserComponent"],
                _mypost_view_mypost_view_component__WEBPACK_IMPORTED_MODULE_31__["MypostViewComponent"],
                _userpost_userpost_component__WEBPACK_IMPORTED_MODULE_32__["UserpostComponent"],
                _registered_registered_component__WEBPACK_IMPORTED_MODULE_33__["RegisteredComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _toverux_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_34__["SweetAlert2Module"].forRoot({
                    buttonsStyling: false,
                    customClass: 'modal-content',
                    confirmButtonClass: 'btn btn-primary',
                    cancelButtonClass: 'btn'
                })
            ],
            providers: [_user_service__WEBPACK_IMPORTED_MODULE_28__["UserService"], _message_service__WEBPACK_IMPORTED_MODULE_26__["MessageService"], _auth_guard__WEBPACK_IMPORTED_MODULE_27__["AuthGuard"], _validation_service__WEBPACK_IMPORTED_MODULE_30__["ValidationService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.guard.ts":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var url = state.url;
        return this.verifyLogin(url);
    };
    AuthGuard.prototype.verifyLogin = function (url) {
        if (!this.isLoggedIn()) {
            this.router.navigate(['/welcomeview']);
            return false;
        }
        else if (this.isLoggedIn()) {
            return true;
        }
    };
    AuthGuard.prototype.isLoggedIn = function () {
        var status = false;
        if (localStorage.getItem('isLoggedIn') == "true") {
            status = true;
        }
        else {
            status = false;
        }
        return status;
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AuthService = /** @class */ (function () {
    function AuthService() {
    }
    AuthService.prototype.logout = function () {
        localStorage.setItem('isLoggedIn', "false");
        localStorage.removeItem('token');
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/createpost/createpost.component.css":
/*!*****************************************************!*\
  !*** ./src/app/createpost/createpost.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card{\r\n    min-width: 100vh;\r\n    \r\n}\r\n.btn{\r\n    background:  #aad4e5;\r\n    font-weight: bold;\r\n    color: white;\r\n    box-shadow: 5px 5px #888888;\r\n    font-size: 15px;\r\n}\r\n.btn:active{\r\n    -webkit-transform: translateY(2px);\r\n            transform: translateY(2px);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3JlYXRlcG9zdC9jcmVhdGVwb3N0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7O0FBRXBCO0FBQ0E7SUFDSSxvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWiwyQkFBMkI7SUFDM0IsZUFBZTtBQUNuQjtBQUVBO0lBQ0ksa0NBQTBCO1lBQTFCLDBCQUEwQjtBQUM5QiIsImZpbGUiOiJzcmMvYXBwL2NyZWF0ZXBvc3QvY3JlYXRlcG9zdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmR7XHJcbiAgICBtaW4td2lkdGg6IDEwMHZoO1xyXG4gICAgXHJcbn1cclxuLmJ0bntcclxuICAgIGJhY2tncm91bmQ6ICAjYWFkNGU1O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3gtc2hhZG93OiA1cHggNXB4ICM4ODg4ODg7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuXHJcbi5idG46YWN0aXZle1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDJweCk7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/createpost/createpost.component.html":
/*!******************************************************!*\
  !*** ./src/app/createpost/createpost.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"card\">\r\n    <div class=\"card-header\">\r\n        Create Post\r\n    </div>\r\n    <div class=\"card-body\">\r\n     \r\n        <form>\r\n            <div class=\"form-group\">\r\n                <textarea Required class=\"form-control\" #newPost name=\"post\" id=\"post\" rows=\"5\" placeholder=\"Roar it out!!!\"></textarea>     \r\n            \r\n              <button type=\"button\" (click)=\"createPost(newPost)\" class=\"btn\" routerLink='/mainpage'>Post</button>\r\n               </div>\r\n        </form>\r\n     \r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/createpost/createpost.component.ts":
/*!****************************************************!*\
  !*** ./src/app/createpost/createpost.component.ts ***!
  \****************************************************/
/*! exports provided: CreatepostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatepostComponent", function() { return CreatepostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _newpost_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../newpost.service */ "./src/app/newpost.service.ts");



var CreatepostComponent = /** @class */ (function () {
    function CreatepostComponent(newPost) {
        this.newPost = newPost;
    }
    CreatepostComponent.prototype.ngOnInit = function () {
        // this.newPost.createPost
    };
    CreatepostComponent.prototype.createPost = function (data) {
        var user = {
            userid: 1,
            email: 'test@revature.com',
            password: 'PLOK1plok1',
            firstname: 'John',
            lastname: 'Smith',
            profilePicturePath: null,
            enabled: true
        };
        var post = {
            postid: null,
            userid: 1,
            textcontents: data.value,
            imagelocation: null,
            repostid: -1,
            user: user
        };
        this.newPost.createPost(post);
        // $("#post").empty();
        window.location.reload();
    };
    CreatepostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-createpost',
            template: __webpack_require__(/*! ./createpost.component.html */ "./src/app/createpost/createpost.component.html"),
            styles: [__webpack_require__(/*! ./createpost.component.css */ "./src/app/createpost/createpost.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_newpost_service__WEBPACK_IMPORTED_MODULE_2__["NewpostService"]])
    ], CreatepostComponent);
    return CreatepostComponent;
}());



/***/ }),

/***/ "./src/app/friend.service.ts":
/*!***********************************!*\
  !*** ./src/app/friend.service.ts ***!
  \***********************************/
/*! exports provided: FriendService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FriendService", function() { return FriendService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storage.service */ "./src/app/storage.service.ts");




var FriendService = /** @class */ (function () {
    function FriendService(http, storage) {
        this.http = http;
        this.storage = storage;
        this.friendsByIdUrl = "http://localhost:8080/relationsById";
        this.addFriendUrl = "http://localhost:8080/addFriend";
        this.userId = 1;
    }
    FriendService.prototype.getFriendsById = function () {
        return this.http.post(this.friendsByIdUrl, this.userId);
    };
    FriendService.prototype.addFriend = function (friend) {
        this.http.post(this.addFriendUrl, friend).subscribe();
    };
    FriendService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"]])
    ], FriendService);
    return FriendService;
}());



/***/ }),

/***/ "./src/app/icon/icon.component.css":
/*!*****************************************!*\
  !*** ./src/app/icon/icon.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img{\r\n    margin: auto;\r\n    height: 50%;\r\n    width: 50%;\r\n  \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaWNvbi9pY29uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLFVBQVU7O0FBRWQiLCJmaWxlIjoic3JjL2FwcC9pY29uL2ljb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImltZ3tcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGhlaWdodDogNTAlO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICBcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/icon/icon.component.html":
/*!******************************************!*\
  !*** ./src/app/icon/icon.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n      <img src=\"../../assets/Logo.png\" alt=\"\">\r\n  "

/***/ }),

/***/ "./src/app/icon/icon.component.ts":
/*!****************************************!*\
  !*** ./src/app/icon/icon.component.ts ***!
  \****************************************/
/*! exports provided: IconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconComponent", function() { return IconComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var IconComponent = /** @class */ (function () {
    function IconComponent() {
    }
    IconComponent.prototype.ngOnInit = function () {
    };
    IconComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-icon',
            template: __webpack_require__(/*! ./icon.component.html */ "./src/app/icon/icon.component.html"),
            styles: [__webpack_require__(/*! ./icon.component.css */ "./src/app/icon/icon.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], IconComponent);
    return IconComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar{\r\n    background-color: white;\r\n    box-shadow: 0px 5px #888888;\r\n}\r\n#login_Email{\r\nmargin: 5px;\r\nbox-shadow:         inset 0 0 15px #888888;\r\n    -moz-box-shadow:    inset 0 0 15px #888888;\r\n}\r\n#login_Password{\r\nmargin: 5px;\r\nbox-shadow:         inset 0 0 15px #888888;\r\n    -moz-box-shadow:    inset 0 0 15px #888888;\r\n}\r\n.btn{\r\n    background:  #aad4e5;\r\n  \r\n    font-weight: bold;\r\n    color: white;\r\n    box-shadow: 5px 5px #888888;\r\n    font-size: 25px\r\n}\r\n.btn:active{\r\n    -webkit-transform: translateY(2px);\r\n            transform: translateY(2px);\r\n}\r\n.invalid-feedback {\r\n    margin: 30px 0 0 10px;\r\n    position: absolute;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHVCQUF1QjtJQUN2QiwyQkFBMkI7QUFDL0I7QUFDQTtBQUNBLFdBQVc7QUFFUCwwQ0FBMEM7SUFDMUMsMENBQTBDO0FBQzlDO0FBQ0E7QUFDQSxXQUFXO0FBRVAsMENBQTBDO0lBQzFDLDBDQUEwQztBQUM5QztBQUVBO0lBQ0ksb0JBQW9COztJQUVwQixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLDJCQUEyQjtJQUMzQjtBQUNKO0FBQ0E7SUFDSSxrQ0FBMEI7WUFBMUIsMEJBQTBCO0FBQzlCO0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJveC1zaGFkb3c6IDBweCA1cHggIzg4ODg4ODtcclxufVxyXG4jbG9naW5fRW1haWx7XHJcbm1hcmdpbjogNXB4O1xyXG4td2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCAxNXB4ICM4ODg4ODg7XHJcbiAgICBib3gtc2hhZG93OiAgICAgICAgIGluc2V0IDAgMCAxNXB4ICM4ODg4ODg7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6ICAgIGluc2V0IDAgMCAxNXB4ICM4ODg4ODg7XHJcbn1cclxuI2xvZ2luX1Bhc3N3b3Jke1xyXG5tYXJnaW46IDVweDtcclxuLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgMTVweCAjODg4ODg4O1xyXG4gICAgYm94LXNoYWRvdzogICAgICAgICBpbnNldCAwIDAgMTVweCAjODg4ODg4O1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAgICBpbnNldCAwIDAgMTVweCAjODg4ODg4O1xyXG59XHJcblxyXG4uYnRue1xyXG4gICAgYmFja2dyb3VuZDogICNhYWQ0ZTU7XHJcbiAgXHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJveC1zaGFkb3c6IDVweCA1cHggIzg4ODg4ODtcclxuICAgIGZvbnQtc2l6ZTogMjVweFxyXG59XHJcbi5idG46YWN0aXZle1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDJweCk7XHJcbn1cclxuXHJcbi5pbnZhbGlkLWZlZWRiYWNrIHtcclxuICAgIG1hcmdpbjogMzBweCAwIDAgMTBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light \">\r\n\r\n\r\n  <a class=\"navbar-brand\" href=\"#\">\r\n    <h1> <strong> Yellow Snow Cone</strong></h1>\r\n  </a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\r\n    aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n    <ul class=\"navbar-nav ml-auto\">\r\n      <!--\r\n      <form class=\"form-inline\" [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\r\n\r\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': submitted && f.email.errors }\">\r\n          <input type=\"email\" formControlName=\"email\" class=\"form-control clearfix\" id=\"login_Email\" aria-describedby=\"emailHelp\"\r\n            placeholder=\"Email\">\r\n          \r\n        </div>\r\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': submitted && f.password.errors }\">\r\n          <input type=\"password\" formControlName=\"password\" class=\"form-control clearfix\" id=\"login_Password\">\r\n        </div>\r\n        <button type=\"submit\" class=\"btn\" [disabled]=\"!loginForm.valid\">Log In</button>\r\n      </form>\r\n      -->\r\n      <form class=\"form-inline\" [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\r\n        <div class=\"form-group\">\r\n          <input type=\"email\" name=\"email\" formControlName=\"email\" class=\"form-control\" id=\"login_Email\"\r\n            aria-describedby=\"emailHelp\" placeholder=\"Enter Email\" [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\">\r\n          <!-- ngModel [(ngModel)]=\"newUserModel.email\" -->\r\n          <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\r\n            <div *ngIf=\"f.email.errors.required\">Email Is Required</div>\r\n            <div *ngIf=\"f.email.errors.email\">Email Must Be A Valid Email Address</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <input type=\"password\" name=\"password\" formControlName=\"password\" class=\"form-control\" id=\"login_Password\"\r\n            placeholder=\"Password\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\">\r\n          <!-- ngModel [(ngModel)]=\"newUserModel.password\"-->\r\n          <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\r\n            <div *ngIf=\"f.password.errors.required\">Password Is Required</div>\r\n            <div *ngIf=\"f.password.errors.minlength\">Password Must Be At Least 4 characters</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"loading\">Log In</button>\r\n        </div>\r\n      </form>\r\n    </ul>\r\n  </div>\r\n</nav>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _users__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../users */ "./src/app/users.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");








var LoginComponent = /** @class */ (function () {
    function LoginComponent(_userService, location, router, formBuilder, _authService) {
        this._userService = _userService;
        this.location = location;
        this.router = router;
        this.formBuilder = formBuilder;
        this._authService = _authService;
        this.submitted = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this._authService.logout();
        this.mainviewUrl = "mainview";
        this.newUserModel = new _users__WEBPACK_IMPORTED_MODULE_2__["Users"](null, null, null, null, null, null, false);
        this.loginForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].minLength(4)]]
        });
    };
    Object.defineProperty(LoginComponent.prototype, "f", {
        get: function () { return this.loginForm.controls; },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.login = function (user) {
        //this.loggedInUser = user;
        var _this = this;
        this._userService.authenticate(user).subscribe(function (data) {
            _this.loggedInUser = data;
            if (_this.loggedInUser.userid !== null || _this.loggedInUser.userid != -1) {
                console.log("Login successful");
                console.log('loggedInUser: ' + JSON.stringify(_this.loggedInUser));
                _this._userService.addLoggedInUser(_this.loggedInUser);
                localStorage.setItem('isLoggedIn', "true");
                localStorage.setItem('token', _this.loggedInUser.userid.toString());
                _this.router.navigate([_this.mainviewUrl]);
                return true;
            }
            else {
                console.log('userid Is Null.');
                console.log('User Info: ' + JSON.stringify(_this.loggedInUser));
            }
            return false;
        });
    };
    LoginComponent.prototype.onSubmit = function () {
        this.submitted = true;
        if (this.loginForm.invalid) {
            this.f.email.setValue("");
            this.f.password.setValue("");
            this.newUserModel.email = null;
            this.newUserModel.password = null;
            return;
        }
        else {
            this.newUserModel.email = this.f.email.value;
            this.newUserModel.password = this.f.password.value;
            if (this.newUserModel.email.length >= 4 && this.newUserModel.password.length >= 4) {
                console.log("valid credentials");
                this.login(this.newUserModel);
                if (this.newUserModel.userid == -1 || this.newUserModel == null) {
                    alert("Invalid Username Or Password");
                    this.router.navigate(["welcomeview"]);
                }
            }
            else {
                alert("Invalid Username Or Password");
                this.router.navigate(["welcomeview"]);
            }
        }
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"],
            _auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/mainpagejumbotron/mainpagejumbotron.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/mainpagejumbotron/mainpagejumbotron.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img{\r\n    margin-top:35%;\r\n    height: 350px;\r\n    width: 350px\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbnBhZ2VqdW1ib3Ryb24vbWFpbnBhZ2VqdW1ib3Ryb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxhQUFhO0lBQ2I7QUFDSiIsImZpbGUiOiJzcmMvYXBwL21haW5wYWdlanVtYm90cm9uL21haW5wYWdlanVtYm90cm9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWd7XHJcbiAgICBtYXJnaW4tdG9wOjM1JTtcclxuICAgIGhlaWdodDogMzUwcHg7XHJcbiAgICB3aWR0aDogMzUwcHhcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/mainpagejumbotron/mainpagejumbotron.component.html":
/*!********************************************************************!*\
  !*** ./src/app/mainpagejumbotron/mainpagejumbotron.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img src=\"../../assets/Logo.png\" alt=\"\">   \r\n \r\n"

/***/ }),

/***/ "./src/app/mainpagejumbotron/mainpagejumbotron.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/mainpagejumbotron/mainpagejumbotron.component.ts ***!
  \******************************************************************/
/*! exports provided: MainpagejumbotronComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainpagejumbotronComponent", function() { return MainpagejumbotronComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MainpagejumbotronComponent = /** @class */ (function () {
    function MainpagejumbotronComponent() {
    }
    MainpagejumbotronComponent.prototype.ngOnInit = function () {
    };
    MainpagejumbotronComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mainpagejumbotron',
            template: __webpack_require__(/*! ./mainpagejumbotron.component.html */ "./src/app/mainpagejumbotron/mainpagejumbotron.component.html"),
            styles: [__webpack_require__(/*! ./mainpagejumbotron.component.css */ "./src/app/mainpagejumbotron/mainpagejumbotron.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MainpagejumbotronComponent);
    return MainpagejumbotronComponent;
}());



/***/ }),

/***/ "./src/app/mainview/mainview.component.css":
/*!*************************************************!*\
  !*** ./src/app/mainview/mainview.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\r\n    display: flex;\r\n    align-items: stretch;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbnZpZXcvbWFpbnZpZXcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixvQkFBb0I7QUFDeEIiLCJmaWxlIjoic3JjL2FwcC9tYWludmlldy9tYWludmlldy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/mainview/mainview.component.html":
/*!**************************************************!*\
  !*** ./src/app/mainview/mainview.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <app-navbar> </app-navbar>\r\n       <div class=\"wrapper\">\r\n           <app-sidemenu></app-sidemenu>\r\n\r\n            <div id=\"content\">\r\n                <div class=\"container\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-lg-12\">\r\n      \r\n                            <app-createpost></app-createpost>\r\n                        </div>\r\n                    </div>\r\n                    <hr>\r\n                    <div class=\"row\">\r\n                            <div class=\"col-lg-12\">\r\n                                <app-post></app-post>\r\n                            </div>\r\n                        </div>\r\n                </div>\r\n            </div>\r\n        \r\n        </div>  \r\n</div>"

/***/ }),

/***/ "./src/app/mainview/mainview.component.ts":
/*!************************************************!*\
  !*** ./src/app/mainview/mainview.component.ts ***!
  \************************************************/
/*! exports provided: MainviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainviewComponent", function() { return MainviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var MainviewComponent = /** @class */ (function () {
    function MainviewComponent(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    MainviewComponent.prototype.ngOnInit = function () {
        this.id = localStorage.getItem('token');
    };
    MainviewComponent.prototype.logout = function () {
        console.log("Logout");
        this.authService.logout();
        this.router.navigate(['/welcomeview']);
    };
    MainviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mainview',
            template: __webpack_require__(/*! ./mainview.component.html */ "./src/app/mainview/mainview.component.html"),
            styles: [__webpack_require__(/*! ./mainview.component.css */ "./src/app/mainview/mainview.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], MainviewComponent);
    return MainviewComponent;
}());



/***/ }),

/***/ "./src/app/message.service.ts":
/*!************************************!*\
  !*** ./src/app/message.service.ts ***!
  \************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storage.service */ "./src/app/storage.service.ts");




var MessageService = /** @class */ (function () {
    function MessageService(http, storage) {
        this.http = http;
        this.storage = storage;
        this.userId = 1;
        this.messages = [];
        this.messagesByIdUrl = 'http://localhost:8080/messagesById';
        this.addMessagesUrl = 'http://localhost:8080/addMessage';
    }
    // getMessages (): Observable<Message[]> {
    //   return this.http.get<Message[]>(this.messagesUrl);
    // }
    MessageService.prototype.getMessagesById = function () {
        return this.http.post(this.messagesByIdUrl, this.userId);
    };
    // addMessage (userId1, userId2, textContents) {
    //   this.http.post<addMessageStatus>(this.addMessagesUrl, userId1 + ";" + userId2 + ";" + textContents).subscribe();
    // }
    MessageService.prototype.addMessage = function (message) {
        this.http.post(this.addMessagesUrl, message).subscribe();
    };
    MessageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"]])
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "./src/app/messages/messages.component.css":
/*!*************************************************!*\
  !*** ./src/app/messages/messages.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\r\n    display: flex;\r\n    align-items: stretch;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVzc2FnZXMvbWVzc2FnZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixvQkFBb0I7QUFDeEIiLCJmaWxlIjoic3JjL2FwcC9tZXNzYWdlcy9tZXNzYWdlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/messages/messages.component.html":
/*!**************************************************!*\
  !*** ./src/app/messages/messages.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <app-navbar> </app-navbar>\r\n       <div class=\"wrapper\">\r\n           <app-sidemenu></app-sidemenu>\r\n\r\n            <div id=\"content\">\r\n                <div class=\"container\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-lg-12\">\r\n                            <h2>Messages</h2><button id=\"newMessage\" (click)=\"newMessage()\">New Message</button>\r\n                              <ul *ngFor=\"let user of users\">\r\n                                <li>\r\n                                 <a (click)=\"populateMessageThread(user)\" routerLink=\"/messagesthread\">{{user}}</a> \r\n                                </li>\r\n                              </ul>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        \r\n        </div> \r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/messages/messages.component.ts":
/*!************************************************!*\
  !*** ./src/app/messages/messages.component.ts ***!
  \************************************************/
/*! exports provided: MessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesComponent", function() { return MessagesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../message.service */ "./src/app/message.service.ts");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../storage.service */ "./src/app/storage.service.ts");




var MessagesComponent = /** @class */ (function () {
    function MessagesComponent(messageService, storage) {
        this.messageService = messageService;
        this.storage = storage;
        this.userid = 1;
        this.specificMessages = [];
        this.users = [];
    }
    MessagesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.messageService.getMessagesById()
            .subscribe(function (data) { return _this.messages = data; }, function (err) { return console.log(err); }, function () { return _this.loadMessages(); });
    };
    MessagesComponent.prototype.loadMessages = function () {
        for (var _i = 0, _a = this.messages; _i < _a.length; _i++) {
            var i = _a[_i];
            if (i.userid1 === this.userid) {
                this.users.push(i.user2.firstname + ' ' + i.user2.lastname);
            }
            else {
                this.users.push(i.user1.firstname + ' ' + i.user1.lastname);
            }
        }
        this.users = this.users.filter(function (elem, index, self) {
            return index === self.indexOf(elem);
        });
    };
    MessagesComponent.prototype.populateMessageThread = function (user) {
        this.storage.setUserId1(this.userid);
        for (var _i = 0, _a = this.messages; _i < _a.length; _i++) {
            var i = _a[_i];
            if (i.userid1 === this.userid) {
                if (user === (i.user2.firstname + ' ' + i.user2.lastname)) {
                    this.specificMessage = "Me: " + i.textcontents;
                    this.specificMessages.push(this.specificMessage);
                    this.storage.setUserId2(i.user2.userid);
                    this.storage.setUser1(i.user1);
                    this.storage.setUser2(i.user2);
                }
            }
            else {
                if (user === (i.user1.firstname + ' ' + i.user1.lastname)) {
                    this.specificMessage = i.user1.firstname + " " + i.user1.lastname + ": " + i.textcontents;
                    this.specificMessages.push(this.specificMessage);
                    this.storage.setUserId2(i.user1.userid);
                    this.storage.setUser1(i.user2);
                    this.storage.setUser2(i.user1);
                }
            }
        }
        this.storage.setScope(this.specificMessages);
    };
    MessagesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-messages',
            template: __webpack_require__(/*! ./messages.component.html */ "./src/app/messages/messages.component.html"),
            styles: [__webpack_require__(/*! ./messages.component.css */ "./src/app/messages/messages.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_message_service__WEBPACK_IMPORTED_MODULE_2__["MessageService"], _storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"]])
    ], MessagesComponent);
    return MessagesComponent;
}());



/***/ }),

/***/ "./src/app/messagesthread/messagesthread.component.css":
/*!*************************************************************!*\
  !*** ./src/app/messagesthread/messagesthread.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul {\r\n    list-style-type: none;\r\n    \r\n  }\r\n.card{\r\n    background: none;\r\n}\r\n.messages{\r\n    margin-top: auto;\r\n\t\tmargin-bottom: auto;\r\n\t\tmargin-left: 10px;\r\n\t\tborder-radius: 25px;\r\n\t\tbackground-color: white;\r\n\t\tpadding: 10px;\r\n        position: relative;\r\n       \r\n        \r\n}\r\n.wrapper {\r\n    display: flex;\r\n    align-items: stretch;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVzc2FnZXN0aHJlYWQvbWVzc2FnZXN0aHJlYWQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHFCQUFxQjs7RUFFdkI7QUFDRjtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksZ0JBQWdCO0VBQ2xCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixhQUFhO1FBQ1Asa0JBQWtCOzs7QUFHMUI7QUFDQTtJQUNJLGFBQWE7SUFDYixvQkFBb0I7QUFDeEIiLCJmaWxlIjoic3JjL2FwcC9tZXNzYWdlc3RocmVhZC9tZXNzYWdlc3RocmVhZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidWwge1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgXHJcbiAgfVxyXG4uY2FyZHtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbn1cclxuLm1lc3NhZ2Vze1xyXG4gICAgbWFyZ2luLXRvcDogYXV0bztcclxuXHRcdG1hcmdpbi1ib3R0b206IGF1dG87XHJcblx0XHRtYXJnaW4tbGVmdDogMTBweDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuXHRcdHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgXHJcbiAgICAgICAgXHJcbn1cclxuLndyYXBwZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/messagesthread/messagesthread.component.html":
/*!**************************************************************!*\
  !*** ./src/app/messagesthread/messagesthread.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n<div>\r\n  <app-navbar> </app-navbar>\r\n     <div class=\"wrapper\">\r\n         <app-sidemenu></app-sidemenu>\r\n\r\n          <div id=\"content\">\r\n              <div class=\"container\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col-lg-3\">\r\n                    <div class=\"col-lg-9\">\r\n    \r\n                          <div>\r\n                            \r\n                            <div class=\"\">\r\n                              <h4 class=\"card-title\">Messages</h4>\r\n                              <div class=\"messages\">\r\n                                <ul *ngFor=\"let specificMessage of specificMessages\">\r\n                                  <li class=\"panel\">\r\n                                    {{specificMessage}}\r\n                                  </li>\r\n                                </ul>\r\n                                <input id=\"messageContent\" type=\"text\"><button id=\"send\">Send</button>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                      </div>\r\n                  </div>\r\n                 \r\n              </div>\r\n          </div>\r\n      \r\n      </div>  \r\n</div>\r\n"

/***/ }),

/***/ "./src/app/messagesthread/messagesthread.component.ts":
/*!************************************************************!*\
  !*** ./src/app/messagesthread/messagesthread.component.ts ***!
  \************************************************************/
/*! exports provided: MessagesthreadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesthreadComponent", function() { return MessagesthreadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../storage.service */ "./src/app/storage.service.ts");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../message.service */ "./src/app/message.service.ts");




var MessagesthreadComponent = /** @class */ (function () {
    function MessagesthreadComponent(messageService, storage) {
        this.messageService = messageService;
        this.storage = storage;
    }
    MessagesthreadComponent.prototype.ngOnInit = function () {
        this.specificMessages = this.storage.getScope();
        this.userId1 = this.storage.getUserId1();
        this.userId2 = this.storage.getUserId2();
        this.user1 = this.storage.getUser1();
        this.user2 = this.storage.getUser2();
    };
    MessagesthreadComponent.prototype.send = function (messageContent) {
        if (messageContent.value.includes(";")) {
            alert("Invalid message. Message must not contain the symbol: ';'");
        }
        else {
            // this.messageService.addMessage(this.userId1, this.userId2, messageContent.value);
            this.message = {
                messageid: null,
                textcontents: messageContent.value,
                userid1: this.userId1,
                userid2: this.userId2,
                status: 0,
                user1: this.user1,
                user2: this.user2
            };
            this.messageService.addMessage(this.message);
            this.specificMessages.push("Me: " + messageContent.value);
        }
    };
    MessagesthreadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-messagesthread',
            template: __webpack_require__(/*! ./messagesthread.component.html */ "./src/app/messagesthread/messagesthread.component.html"),
            styles: [__webpack_require__(/*! ./messagesthread.component.css */ "./src/app/messagesthread/messagesthread.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_message_service__WEBPACK_IMPORTED_MODULE_3__["MessageService"], _storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"]])
    ], MessagesthreadComponent);
    return MessagesthreadComponent;
}());



/***/ }),

/***/ "./src/app/mypost-view/mypost-view.component.css":
/*!*******************************************************!*\
  !*** ./src/app/mypost-view/mypost-view.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\r\n    display: flex;\r\n    align-items: stretch;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXlwb3N0LXZpZXcvbXlwb3N0LXZpZXcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixvQkFBb0I7QUFDeEIiLCJmaWxlIjoic3JjL2FwcC9teXBvc3Qtdmlldy9teXBvc3Qtdmlldy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/mypost-view/mypost-view.component.html":
/*!********************************************************!*\
  !*** ./src/app/mypost-view/mypost-view.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <app-navbar> </app-navbar>\r\n    <div class=\"wrapper\">\r\n        <app-sidemenu></app-sidemenu>\r\n\r\n        <div id=\"content\">\r\n            <div class=\"container\">\r\n                <div class=\"row\">\r\n                    <app-userpost></app-userpost>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/mypost-view/mypost-view.component.ts":
/*!******************************************************!*\
  !*** ./src/app/mypost-view/mypost-view.component.ts ***!
  \******************************************************/
/*! exports provided: MypostViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MypostViewComponent", function() { return MypostViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MypostViewComponent = /** @class */ (function () {
    function MypostViewComponent() {
    }
    MypostViewComponent.prototype.ngOnInit = function () {
    };
    MypostViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mypost-view',
            template: __webpack_require__(/*! ./mypost-view.component.html */ "./src/app/mypost-view/mypost-view.component.html"),
            styles: [__webpack_require__(/*! ./mypost-view.component.css */ "./src/app/mypost-view/mypost-view.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MypostViewComponent);
    return MypostViewComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar{\r\n    background:transparent;\r\n    margin-left: 0px;\r\n    \r\n}\r\n\r\nul{\r\n    margin-left: 0px;\r\n    padding-left:0px ;\r\n}\r\n\r\n.form-control{\r\n    box-shadow:         inset 0 0 15px #888888;\r\n    -moz-box-shadow:    inset 0 0 15px #888888;\r\n}\r\n\r\n.btn{\r\n    background:  #aad4e5;\r\n    color: white;\r\n    box-shadow: 5px 5px #888888;\r\n    margin-left: 10px\r\n}\r\n\r\n.btn:active{\r\n    -webkit-transform: translateY(2px);\r\n            transform: translateY(2px);\r\n    \r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0JBQXNCO0lBQ3RCLGdCQUFnQjs7QUFFcEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUNBO0lBRUksMENBQTBDO0lBQzFDLDBDQUEwQztBQUM5Qzs7QUFDQTtJQUNJLG9CQUFvQjtJQUNwQixZQUFZO0lBQ1osMkJBQTJCO0lBQzNCO0FBQ0o7O0FBQ0E7SUFDSSxrQ0FBMEI7WUFBMUIsMEJBQTBCOzs7QUFHOUIiLCJmaWxlIjoic3JjL2FwcC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFye1xyXG4gICAgYmFja2dyb3VuZDp0cmFuc3BhcmVudDtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgICBcclxufVxyXG5cclxudWx7XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OjBweCA7XHJcbn1cclxuLmZvcm0tY29udHJvbHtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDE1cHggIzg4ODg4ODtcclxuICAgIGJveC1zaGFkb3c6ICAgICAgICAgaW5zZXQgMCAwIDE1cHggIzg4ODg4ODtcclxuICAgIC1tb3otYm94LXNoYWRvdzogICAgaW5zZXQgMCAwIDE1cHggIzg4ODg4ODtcclxufVxyXG4uYnRue1xyXG4gICAgYmFja2dyb3VuZDogICNhYWQ0ZTU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3gtc2hhZG93OiA1cHggNXB4ICM4ODg4ODg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweFxyXG59XHJcbi5idG46YWN0aXZle1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDJweCk7XHJcbiAgICBcclxuXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  <div class=\"navbar\">\r\n    <ul class=\"\">\r\n        <div class=\"input-group\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Search\" #searchContents>\r\n            <div class=\"input-group-append\">\r\n              <button class=\"btn btn-secondary\" type=\"button\" (click)=\"search(searchContents)\">\r\n                <i class=\"fa fa-search\"></i>\r\n              </button>\r\n            </div>\r\n          </div>\r\n     </ul>\r\n  </div>\r\n  \r\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../storage.service */ "./src/app/storage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(userService, storageService, router) {
        this.userService = userService;
        this.storageService = storageService;
        this.router = router;
        this.matchingUsers = [];
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getUsers().subscribe(function (data) { return _this.user = data; }, function (error) { return console.log(error); }, function () { return _this.storageService.setUser(_this.user); });
    };
    NavbarComponent.prototype.search = function (searchContents) {
        var properSearchContents = searchContents.value.toLowerCase();
        properSearchContents = properSearchContents.split(' ');
        for (var i = 0; i < properSearchContents.length; i++) {
            properSearchContents[i] = properSearchContents[i].charAt(0).toUpperCase() + properSearchContents[i].slice(1);
        }
        properSearchContents = properSearchContents.join(' ');
        if (searchContents.value === "") {
            alert("Please enter the name of someone you would like to lookup!");
        }
        else {
            for (var _i = 0, _a = this.user; _i < _a.length; _i++) {
                var i = _a[_i];
                if (i.firstname === properSearchContents || i.lastname === properSearchContents || (i.firstname + " " + i.lastname) === properSearchContents) {
                    this.matchingUsers.push(i);
                }
            }
        }
        if (this.matchingUsers.length === 0) {
            alert("There are no users with the name you specified. Try again!");
        }
        else {
            this.storageService.setSearchResults(this.matchingUsers);
            this.router.navigate(["searchuser"]);
        }
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/newpost.service.ts":
/*!************************************!*\
  !*** ./src/app/newpost.service.ts ***!
  \************************************/
/*! exports provided: NewpostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewpostService", function() { return NewpostService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var NewpostService = /** @class */ (function () {
    function NewpostService(http) {
        this.http = http;
        this.newPostUrl = 'http://localhost:8080/userposts/add';
    }
    NewpostService.prototype.createPost = function (data) {
        this.http.post(this.newPostUrl, data).subscribe();
    };
    NewpostService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], NewpostService);
    return NewpostService;
}());



/***/ }),

/***/ "./src/app/post/post.component.css":
/*!*****************************************!*\
  !*** ./src/app/post/post.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "small{\r\n    text-align: center\r\n}\r\n.card{\r\n    margin-bottom: 15px\r\n}\r\n.btn{\r\n    background:  #aad4e5;\r\n    font-weight: bold;\r\n    color: white;\r\n    box-shadow: 5px 5px #888888;\r\n    font-size: 15px;\r\n}\r\n.btn:active{\r\n    -webkit-transform: translateY(2px);\r\n            transform: translateY(2px);\r\n}\r\nimg{\r\n    height: 16px;\r\n    width:16px;\r\n}\r\ninput {\r\n    outline: none;\r\n}\r\ninput:active {\r\n    -webkit-transform: translateY(2px);\r\n            transform: translateY(2px);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdC9wb3N0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTtBQUNKO0FBQ0E7SUFDSTtBQUNKO0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWiwyQkFBMkI7SUFDM0IsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksa0NBQTBCO1lBQTFCLDBCQUEwQjtBQUM5QjtBQUVBO0lBQ0ksWUFBWTtJQUNaLFVBQVU7QUFDZDtBQUVBO0lBQ0ksYUFBYTtBQUNqQjtBQUVBO0lBQ0ksa0NBQTBCO1lBQTFCLDBCQUEwQjtBQUM5QiIsImZpbGUiOiJzcmMvYXBwL3Bvc3QvcG9zdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsic21hbGx7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXJcclxufVxyXG4uY2FyZHtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHhcclxufVxyXG5cclxuLmJ0bntcclxuICAgIGJhY2tncm91bmQ6ICAjYWFkNGU1O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3gtc2hhZG93OiA1cHggNXB4ICM4ODg4ODg7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuLmJ0bjphY3RpdmV7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMnB4KTtcclxufVxyXG5cclxuaW1ne1xyXG4gICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgd2lkdGg6MTZweDtcclxufVxyXG5cclxuaW5wdXQge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuaW5wdXQ6YWN0aXZlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgycHgpO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/post/post.component.html":
/*!******************************************!*\
  !*** ./src/app/post/post.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" *ngFor=\"let post of postContent\">\r\n  <div class=\"card-header\">\r\n    User\r\n  </div>\r\n  <div class=\"card-body\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-1\">\r\n        </div>\r\n        <div class=\"col-lg-10\">\r\n          <p>{{post.content}}</p>\r\n        </div>\r\n        <div class=\"col-lg-1\">\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-1\">\r\n        </div>\r\n        <div class=\"col-lg-1\">\r\n          <input id=\"{{post.id1}}\" (click)=\"like(post.id1)\" type=\"image\" src=\"../../assets/snowconeshadow.png\" width=\"48\"\r\n            height=\"48\">\r\n          <small id=\"liked\" class=\"form-text text-muted\">Like</small>\r\n        </div>\r\n        <div class=\"col-lg-1\">\r\n          <input id=\"{{post.id2}}\" (click)=\"dislike(post.id2)\" type=\"image\" src=\"../../assets/snowconeshadowupsidedown.png\"\r\n            width=\"48\" height=\"48\">\r\n          <small id=\"disliked\" class=\"form-text text-muted\">Hate</small>\r\n        </div>\r\n        <div class=\"col-lg-5\"></div>\r\n        <div class=\"col-lg-3\">\r\n          <app-repost></app-repost>\r\n        </div>\r\n        <div class=\"col-lg-1\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/post/post.component.ts":
/*!****************************************!*\
  !*** ./src/app/post/post.component.ts ***!
  \****************************************/
/*! exports provided: PostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostComponent", function() { return PostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _posts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../posts.service */ "./src/app/posts.service.ts");
/* harmony import */ var _postinteractions_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../postinteractions.service */ "./src/app/postinteractions.service.ts");




var PostComponent = /** @class */ (function () {
    function PostComponent(postsService, postInteractionsService) {
        this.postsService = postsService;
        this.postInteractionsService = postInteractionsService;
        this.postContent = [];
    }
    PostComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.postsService.getPostsById()
            .subscribe(function (data) { return _this.posts = data; }, function (error) { return console.log(error); }, function () { return _this.loadPosts(); });
    };
    PostComponent.prototype.loadPosts = function () {
        for (var _i = 0, _a = this.posts; _i < _a.length; _i++) {
            var i = _a[_i];
            this.post = {
                content: i.textcontents,
                id1: i.postid + 'like',
                id2: i.postid + 'dislike'
            };
            this.postContent.push(this.post);
        }
        this.postContent = this.postContent.reverse();
    };
    PostComponent.prototype.like = function (likeimg) {
        var img = document.getElementById(likeimg);
        if (img.src.split("/").pop() === "snowconeshadow.png") {
            img.src = "../../assets/snowconelikeshadow.png";
        }
        else if (img.src.split("/").pop() === "snowconelikeshadow.png") {
            img.src = "../../assets/snowconeshadow.png";
        }
    };
    PostComponent.prototype.dislike = function (dislikeimg) {
        var img = document.getElementById(dislikeimg);
        if (img.src.split("/").pop() === "snowconeshadowupsidedown.png") {
            img.src = "../../assets/snowconedislikeshadowupsidedown.png";
        }
        else if (img.src.split("/").pop() === "snowconedislikeshadowupsidedown.png") {
            img.src = "../../assets/snowconeshadowupsidedown.png";
        }
    };
    PostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-post',
            template: __webpack_require__(/*! ./post.component.html */ "./src/app/post/post.component.html"),
            styles: [__webpack_require__(/*! ./post.component.css */ "./src/app/post/post.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_posts_service__WEBPACK_IMPORTED_MODULE_2__["PostsService"], _postinteractions_service__WEBPACK_IMPORTED_MODULE_3__["PostinteractionsService"]])
    ], PostComponent);
    return PostComponent;
}());



/***/ }),

/***/ "./src/app/postinteractions.service.ts":
/*!*********************************************!*\
  !*** ./src/app/postinteractions.service.ts ***!
  \*********************************************/
/*! exports provided: PostinteractionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostinteractionsService", function() { return PostinteractionsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var PostinteractionsService = /** @class */ (function () {
    function PostinteractionsService(http) {
        this.http = http;
    }
    PostinteractionsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PostinteractionsService);
    return PostinteractionsService;
}());



/***/ }),

/***/ "./src/app/posts.service.ts":
/*!**********************************!*\
  !*** ./src/app/posts.service.ts ***!
  \**********************************/
/*! exports provided: PostsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsService", function() { return PostsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var PostsService = /** @class */ (function () {
    function PostsService(http) {
        this.http = http;
        this.userId = 1;
        this.postsUrl = 'http://localhost:8080/userposts';
    }
    PostsService.prototype.getPostsById = function () {
        return this.http.post(this.postsUrl, this.userId);
    };
    PostsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PostsService);
    return PostsService;
}());



/***/ }),

/***/ "./src/app/profilepicture/profilepicture.component.css":
/*!*************************************************************!*\
  !*** ./src/app/profilepicture/profilepicture.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#profile_Picture{\r\n    height: 100%;\r\n    width: 100%;\r\n    box-shadow: 5px 5px #888888;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZXBpY3R1cmUvcHJvZmlsZXBpY3R1cmUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsMkJBQTJCO0FBQy9CIiwiZmlsZSI6InNyYy9hcHAvcHJvZmlsZXBpY3R1cmUvcHJvZmlsZXBpY3R1cmUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNwcm9maWxlX1BpY3R1cmV7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJveC1zaGFkb3c6IDVweCA1cHggIzg4ODg4ODtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/profilepicture/profilepicture.component.html":
/*!**************************************************************!*\
  !*** ./src/app/profilepicture/profilepicture.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img class =\"avatar img-circle img-thumbnail\"id=\"profile_Picture\" src=\"../../assets/profile-picture-placeholder.png\" alt=\"Upload Photo\">"

/***/ }),

/***/ "./src/app/profilepicture/profilepicture.component.ts":
/*!************************************************************!*\
  !*** ./src/app/profilepicture/profilepicture.component.ts ***!
  \************************************************************/
/*! exports provided: ProfilepictureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilepictureComponent", function() { return ProfilepictureComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProfilepictureComponent = /** @class */ (function () {
    function ProfilepictureComponent() {
    }
    ProfilepictureComponent.prototype.ngOnInit = function () {
    };
    ProfilepictureComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profilepicture',
            template: __webpack_require__(/*! ./profilepicture.component.html */ "./src/app/profilepicture/profilepicture.component.html"),
            styles: [__webpack_require__(/*! ./profilepicture.component.css */ "./src/app/profilepicture/profilepicture.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProfilepictureComponent);
    return ProfilepictureComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-control{\r\n    box-shadow:         inset 0 0 15px #888888;\r\n    -moz-box-shadow:    inset 0 0 15px #888888;\r\n}\r\n\r\n.btn{\r\n    background:  #aad4e5;\r\n    \r\n    font-weight: bold;\r\n    color: white;\r\n    box-shadow: 5px 5px #888888;\r\n    font-size: 25px\r\n}\r\n\r\n.btn:active{\r\n    -webkit-transform: translateY(2px);\r\n            transform: translateY(2px);\r\n}\r\n\r\n#Register{\r\n    margin-top:30%;\r\n    background-color: white;\r\n    padding: 20px;\r\n    font-size: 25px;\r\n    box-shadow: 5px 5px #888888;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUVJLDBDQUEwQztJQUMxQywwQ0FBMEM7QUFDOUM7O0FBRUE7SUFDSSxvQkFBb0I7O0lBRXBCLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osMkJBQTJCO0lBQzNCO0FBQ0o7O0FBQ0E7SUFDSSxrQ0FBMEI7WUFBMUIsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksY0FBYztJQUNkLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsZUFBZTtJQUNmLDJCQUEyQjtBQUMvQiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1jb250cm9se1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgMTVweCAjODg4ODg4O1xyXG4gICAgYm94LXNoYWRvdzogICAgICAgICBpbnNldCAwIDAgMTVweCAjODg4ODg4O1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAgICBpbnNldCAwIDAgMTVweCAjODg4ODg4O1xyXG59XHJcblxyXG4uYnRue1xyXG4gICAgYmFja2dyb3VuZDogICNhYWQ0ZTU7XHJcbiAgICBcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm94LXNoYWRvdzogNXB4IDVweCAjODg4ODg4O1xyXG4gICAgZm9udC1zaXplOiAyNXB4XHJcbn1cclxuLmJ0bjphY3RpdmV7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMnB4KTtcclxufVxyXG5cclxuI1JlZ2lzdGVye1xyXG4gICAgbWFyZ2luLXRvcDozMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBib3gtc2hhZG93OiA1cHggNXB4ICM4ODg4ODg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" id=\"Register\">\r\n    <div class=\"row\">\r\n        <form [formGroup]=\"registrationForm\" (ngSubmit)=\"onSubmit()\" class=\"form col-lg-12\">\r\n            <h3><strong>Create a New Account</strong></h3>\r\n            <p>It’s free and always will be!</p>\r\n\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-6\">\r\n                    <div class=\"form-group\">\r\n                        <input type=\"text\" class=\"form-control\" id=\"input_First_Name\" placeholder=\"First Name\" name=\"firstname\"\r\n                            formControlName=\"firstname\" [ngClass]=\"{ 'is-invalid': submitted && f.firstname.errors }\">\r\n                        <div *ngIf=\"submitted && f.firstname.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f.firstname.errors.required\">Firstname Is Required</div>\r\n                            <div *ngIf=\"f.firstname.errors.minlength\">Firstname Too Short</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-lg-6\">\r\n                    <div class=\"form-group\">\r\n                        <input type=\"text\" class=\"form-control\" id=\"input_Last_Name\" placeholder=\"Last Name\" name=\"lastname\"\r\n                            formControlName=\"lastname\" [ngClass]=\"{ 'is-invalid': submitted && f.lastname.errors }\">\r\n                        <div *ngIf=\"submitted && f.lastname.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f.lastname.errors.required\">Lastname Is Required</div>\r\n                            <div *ngIf=\"f.lastname.errors.minlength\">Lastname Too Short</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <input type=\"email\" name=\"email\" formControlName=\"email\" class=\"form-control\" id=\"input_Email\"\r\n                    placeholder=\"Email\" [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\">\r\n                <!-- ngModel [(ngModel)]=\"newUserModel.email\" -->\r\n                <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\r\n                    <div *ngIf=\"f.email.errors.required\">Email Is Required</div>\r\n                    <div *ngIf=\"f.email.errors.email\">Email Must Be A Valid Email Address</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <input type=\"password\" name=\"password\" formControlName=\"password\" class=\"form-control\" id=\"InputPassword\"\r\n                    placeholder=\"Password\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\">\r\n                <!-- ngModel [(ngModel)]=\"newUserModel.password\"-->\r\n                <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\r\n                    <div *ngIf=\"f.password.errors.required\">Password Is Required</div>\r\n                    <div *ngIf=\"f.password.errors.minlength\">Password Must Be At Least 4 characters</div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <button type=\"submit\" class=\"btn btn-default btn-lg float-right\" [disabled]=\"loading\">Register</button>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _users__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../users */ "./src/app/users.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_8__);









var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(_userService, location, router, formBuilder, _authService) {
        this._userService = _userService;
        this.location = location;
        this.router = router;
        this.formBuilder = formBuilder;
        this._authService = _authService;
        this.submitted = false;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this._authService.logout();
        this._url = 'http://localhost:8080/';
        this.newUserModel = new _users__WEBPACK_IMPORTED_MODULE_2__["Users"](undefined, null, null, null, null, null, false);
        this.registrationForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].minLength(4)]],
            firstname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].minLength(1)]],
            lastname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].minLength(1)]]
        });
    };
    Object.defineProperty(RegisterComponent.prototype, "f", {
        get: function () { return this.registrationForm.controls; },
        enumerable: true,
        configurable: true
    });
    RegisterComponent.prototype.register = function (user) {
        var _this = this;
        this._userService.addNewUser(user).subscribe(function (data) {
            _this.newUser = data;
            if (_this.newUser.userid === null || _this.newUser.userid != -1) {
                console.log("Registration Successful");
                console.log('newUser: ' + JSON.stringify(_this.newUser));
                //this._userService.addLoggedInUser(this.loggedInUser);
                localStorage.setItem('isLoggedIn', "true");
                localStorage.setItem('token', _this.newUser.userid.toString());
                _this.router.navigate([_this._url.concat("registered")]);
                return true;
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_8___default()({
                    title: "Error",
                    text: "There is already an account associated with that email.",
                    type: "error",
                    timer: 3000
                });
                console.log('userid Is Null.');
                console.log('User Info: ' + JSON.stringify(_this.newUser));
            }
            return false;
        });
    };
    RegisterComponent.prototype.onSubmit = function () {
        this.submitted = true;
        if (this.registrationForm.invalid) {
            this.f.email.setValue("");
            this.f.password.setValue("");
            this.f.firstname.setValue("");
            this.f.lastname.setValue("");
            this.newUserModel.email = null;
            this.newUserModel.password = null;
            this.newUserModel.firstname = null;
            this.newUserModel.lastname = null;
            return;
        }
        else {
            this.newUserModel.email = this.f.email.value;
            this.newUserModel.password = this.f.password.value;
            this.newUserModel.firstname = this.f.firstname.value;
            this.newUserModel.lastname = this.f.lastname.value;
            console.log("newUserModel: " + JSON.stringify(this.newUserModel));
            if (this.newUserModel.email.length >= 4 && this.newUserModel.password.length >= 4) {
                console.log("Valid Credentials");
                this.register(this.newUserModel);
                if (this.newUser == null || this.newUser.userid == undefined) {
                    console.log("newUser is null");
                    sweetalert2__WEBPACK_IMPORTED_MODULE_8___default()({
                        title: "Error",
                        text: "There is already an account associated with that email.",
                        type: "error",
                        timer: 3000
                    });
                }
            }
            else {
                /*
                swal({
                  title:"Error",
                  text:"There is already an account associated with that email.",
                  type:"error"
                });
                setTimeout(function(){
                  this.router.navigate([this._url.concat("welcomeview")]);
                }, 3000);
                */
            }
        }
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"],
            _auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/registered/registered.component.css":
/*!*****************************************************!*\
  !*** ./src/app/registered/registered.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyZWQvcmVnaXN0ZXJlZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/registered/registered.component.html":
/*!******************************************************!*\
  !*** ./src/app/registered/registered.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-welcomeview></app-welcomeview>\n"

/***/ }),

/***/ "./src/app/registered/registered.component.ts":
/*!****************************************************!*\
  !*** ./src/app/registered/registered.component.ts ***!
  \****************************************************/
/*! exports provided: RegisteredComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisteredComponent", function() { return RegisteredComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var RegisteredComponent = /** @class */ (function () {
    function RegisteredComponent(router) {
        this.router = router;
    }
    RegisteredComponent.prototype.ngOnInit = function () {
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default()({
            title: "Success",
            text: "Check Your Email!",
            type: "success"
        });
        setTimeout(function () {
            this.router.navigate(["http://localhost:8080/welcomeview"]);
        }, 3000);
    };
    RegisteredComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-registered',
            template: __webpack_require__(/*! ./registered.component.html */ "./src/app/registered/registered.component.html"),
            styles: [__webpack_require__(/*! ./registered.component.css */ "./src/app/registered/registered.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], RegisteredComponent);
    return RegisteredComponent;
}());



/***/ }),

/***/ "./src/app/repost/repost.component.css":
/*!*********************************************!*\
  !*** ./src/app/repost/repost.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img{\r\n    height: 16px;\r\n    width:16px;\r\n}\r\n\r\ninput {\r\n    outline: none;\r\n}\r\n\r\ninput:active {\r\n    -webkit-transform: translateY(2px);\r\n            transform: translateY(2px);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVwb3N0L3JlcG9zdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxrQ0FBMEI7WUFBMUIsMEJBQTBCO0FBQzlCIiwiZmlsZSI6InNyYy9hcHAvcmVwb3N0L3JlcG9zdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1ne1xyXG4gICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgd2lkdGg6MTZweDtcclxufVxyXG5cclxuaW5wdXQge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuaW5wdXQ6YWN0aXZlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgycHgpO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/repost/repost.component.html":
/*!**********************************************!*\
  !*** ./src/app/repost/repost.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<input id=\"repost\" (click)=\"repost()\" type=\"image\" src=\"../../assets/repost-icon.png\" width=\"48\" height=\"48\">"

/***/ }),

/***/ "./src/app/repost/repost.component.ts":
/*!********************************************!*\
  !*** ./src/app/repost/repost.component.ts ***!
  \********************************************/
/*! exports provided: RepostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepostComponent", function() { return RepostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RepostComponent = /** @class */ (function () {
    function RepostComponent() {
    }
    RepostComponent.prototype.ngOnInit = function () {
    };
    RepostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-repost',
            template: __webpack_require__(/*! ./repost.component.html */ "./src/app/repost/repost.component.html"),
            styles: [__webpack_require__(/*! ./repost.component.css */ "./src/app/repost/repost.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RepostComponent);
    return RepostComponent;
}());



/***/ }),

/***/ "./src/app/searchuser/searchuser.component.css":
/*!*****************************************************!*\
  !*** ./src/app/searchuser/searchuser.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\r\n    display: flex;\r\n    align-items: stretch;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNodXNlci9zZWFyY2h1c2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2Isb0JBQW9CO0FBQ3hCIiwiZmlsZSI6InNyYy9hcHAvc2VhcmNodXNlci9zZWFyY2h1c2VyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/searchuser/searchuser.component.html":
/*!******************************************************!*\
  !*** ./src/app/searchuser/searchuser.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    \r\n\r\n    <div class=\"navbar\">\r\n        <ul class=\"\">\r\n            <div class=\"input-group\">\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"Search\" #searchContents>\r\n                <div class=\"input-group-append\">\r\n                  <button class=\"btn btn-secondary\" type=\"button\" (click)=\"search(searchContents)\">\r\n                    <i class=\"fa fa-search\"></i>\r\n                  </button>\r\n                </div>\r\n              </div>\r\n         </ul>\r\n      </div>\r\n\r\n\r\n\r\n\r\n       <div class=\"wrapper\">\r\n           <app-sidemenu></app-sidemenu>\r\n  \r\n            <div id=\"content\">\r\n                <div class=\"container\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-lg-12\">\r\n                          <ul *ngFor=\"let searchResult of searchResults\">\r\n                            <li>\r\n                              {{searchResult.firstname}} {{searchResult.lastname}}\r\n                              <button>View Profile</button><button (click)=\"addFriend(searchResult.userId)\">Add Friend</button><button>Send Message</button>\r\n                            </li>\r\n                          </ul>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        \r\n        </div> \r\n  </div>\r\n  \r\n  \r\n  \r\n  \r\n  \r\n  \r\n  \r\n  "

/***/ }),

/***/ "./src/app/searchuser/searchuser.component.ts":
/*!****************************************************!*\
  !*** ./src/app/searchuser/searchuser.component.ts ***!
  \****************************************************/
/*! exports provided: SearchuserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchuserComponent", function() { return SearchuserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../storage.service */ "./src/app/storage.service.ts");
/* harmony import */ var _friend_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../friend.service */ "./src/app/friend.service.ts");





var SearchuserComponent = /** @class */ (function () {
    function SearchuserComponent(userService, storageService, friendService) {
        this.userService = userService;
        this.storageService = storageService;
        this.friendService = friendService;
        this.matchingUsers = [];
        this.userId = 1;
    }
    SearchuserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.searchResults = this.storageService.getSearchResults();
        this.friendService.getFriendsById().subscribe(function (data) { return _this.friends = data; });
        this.userService.getUsers().subscribe(function (data) { return _this.user = data; });
        // this.userService.getUsers().subscribe(data => this.user = data,(error: any) => console.log(error),() => this.storageService.setUser(this.user));
    };
    SearchuserComponent.prototype.search = function (searchContents) {
        this.searchResults = [];
        this.matchingUsers = [];
        var properSearchContents = searchContents.value.toLowerCase();
        properSearchContents = properSearchContents.split(' ');
        for (var i = 0; i < properSearchContents.length; i++) {
            properSearchContents[i] = properSearchContents[i].charAt(0).toUpperCase() + properSearchContents[i].slice(1);
        }
        properSearchContents = properSearchContents.join(' ');
        if (searchContents.value === "") {
            alert("Please enter the name of someone you would like to lookup!");
        }
        else {
            for (var _i = 0, _a = this.user; _i < _a.length; _i++) {
                var i = _a[_i];
                if (i.firstname === properSearchContents || i.lastname === properSearchContents || (i.firstname + " " + i.lastname) === properSearchContents) {
                    this.matchingUsers.push(i);
                }
            }
        }
        if (this.matchingUsers.length === 0) {
            alert("There are no users with the name you specified. Try again!");
        }
        else {
            this.searchResults = this.matchingUsers;
        }
    };
    SearchuserComponent.prototype.addFriend = function (userId) {
        var _this = this;
        if (userId === this.userId) {
            alert("You cannot add yourself!");
        }
        else {
            var alreadyFriends = false;
            if (this.friends) {
                for (var _i = 0, _a = this.friends; _i < _a.length; _i++) {
                    var i = _a[_i];
                    if (this.userId === i.userid1) {
                        if (userId === i.userid2) {
                            alreadyFriends = true;
                        }
                    }
                    else if (this.userId === i.userid2) {
                        if (userId === i.userid1) {
                            alreadyFriends = true;
                        }
                    }
                }
                for (var _b = 0, _c = this.users; _b < _c.length; _b++) {
                    var i = _c[_b];
                    if (userId === i.userid) {
                        this.user2 = i;
                    }
                }
            }
            if (alreadyFriends) {
                alert("You are already friends with this user!");
            }
            else {
                this.user1 = {
                    userid: 1,
                    email: 'test@revature.com',
                    password: 'PLOK1plok1',
                    firstname: 'John',
                    lastname: 'Smith',
                    profilePicturePath: null,
                    enabled: true
                };
                this.friendToAdd = {
                    relationid: null,
                    userid1: this.userId,
                    userid2: userId,
                    status: 1,
                    user1: this.user1,
                    user2: this.user2
                };
                this.friendService.addFriend(this.friendToAdd);
                this.friendService.getFriendsById().subscribe(function (data) { return _this.friends = data; });
                alert("Friend added!");
            }
        }
    };
    SearchuserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-searchuser',
            template: __webpack_require__(/*! ./searchuser.component.html */ "./src/app/searchuser/searchuser.component.html"),
            styles: [__webpack_require__(/*! ./searchuser.component.css */ "./src/app/searchuser/searchuser.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"], _friend_service__WEBPACK_IMPORTED_MODULE_4__["FriendService"]])
    ], SearchuserComponent);
    return SearchuserComponent;
}());



/***/ }),

/***/ "./src/app/sidemenu/sidemenu.component.css":
/*!*************************************************!*\
  !*** ./src/app/sidemenu/sidemenu.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "li{\r\n    margin-bottom: 15%;\r\n    \r\n}\r\na{\r\n    color:black\r\n}\r\n.btn{\r\n    background:  #aad4e5;\r\n    font-weight: bold;\r\n    color: white;\r\n    box-shadow: 5px 5px #888888;\r\n    font-size: 25px\r\n}\r\n#sidebar {\r\n    min-width: 250px;\r\n    max-width: 250px;\r\n    min-height: 100vh;\r\n    background: white;\r\n    padding: 10%;\r\n    text-align: center\r\n}\r\n.btn:active{\r\n    -webkit-transform: translateY(2px);\r\n            transform: translateY(2px);\r\n    \r\n\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZW1lbnUvc2lkZW1lbnUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjs7QUFFdEI7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLDJCQUEyQjtJQUMzQjtBQUNKO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsWUFBWTtJQUNaO0FBQ0o7QUFFQTtJQUNJLGtDQUEwQjtZQUExQiwwQkFBMEI7OztBQUc5QiIsImZpbGUiOiJzcmMvYXBwL3NpZGVtZW51L3NpZGVtZW51LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJsaXtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1JTtcclxuICAgIFxyXG59XHJcbmF7XHJcbiAgICBjb2xvcjpibGFja1xyXG59XHJcbi5idG57XHJcbiAgICBiYWNrZ3JvdW5kOiAgI2FhZDRlNTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm94LXNoYWRvdzogNXB4IDVweCAjODg4ODg4O1xyXG4gICAgZm9udC1zaXplOiAyNXB4XHJcbn1cclxuI3NpZGViYXIge1xyXG4gICAgbWluLXdpZHRoOiAyNTBweDtcclxuICAgIG1heC13aWR0aDogMjUwcHg7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMTAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyXHJcbn1cclxuXHJcbi5idG46YWN0aXZle1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDJweCk7XHJcbiAgICBcclxuXHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/sidemenu/sidemenu.component.html":
/*!**************************************************!*\
  !*** ./src/app/sidemenu/sidemenu.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav id=\"sidebar\">\r\n    <div class=\"sidebar-header\">\r\n       <app-profilepicture></app-profilepicture>\r\n    </div>\r\n    <hr>\r\n    <p>Name</p>\r\n    <hr>\r\n    <ul class=\"list-unstyled components\">\r\n        <li>\r\n        </li>\r\n        <li>\r\n            <a href=\"#\">Home</a>\r\n        </li>\r\n        <li>\r\n            <a href=\"#\">Profile</a>\r\n        </li>\r\n        <li>\r\n            <a href=\"/mypost\">View My Post </a>\r\n        </li>\r\n        <li>\r\n            <a href=\"#\">Friends List</a>\r\n        </li>\r\n        <li>  \r\n           <a routerLink=\"/messages\">Messages</a>\r\n        </li>\r\n    </ul>\r\n    <button type=\"submit\" class=\"btn \">Log Out</button>\r\n\r\n</nav>"

/***/ }),

/***/ "./src/app/sidemenu/sidemenu.component.ts":
/*!************************************************!*\
  !*** ./src/app/sidemenu/sidemenu.component.ts ***!
  \************************************************/
/*! exports provided: SidemenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidemenuComponent", function() { return SidemenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SidemenuComponent = /** @class */ (function () {
    function SidemenuComponent() {
    }
    SidemenuComponent.prototype.ngOnInit = function () {
    };
    SidemenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidemenu',
            template: __webpack_require__(/*! ./sidemenu.component.html */ "./src/app/sidemenu/sidemenu.component.html"),
            styles: [__webpack_require__(/*! ./sidemenu.component.css */ "./src/app/sidemenu/sidemenu.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SidemenuComponent);
    return SidemenuComponent;
}());



/***/ }),

/***/ "./src/app/snowcone/snowcone.component.css":
/*!*************************************************!*\
  !*** ./src/app/snowcone/snowcone.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button{\r\n    background:transparent\r\n}\r\nimg{\r\n    height: 16px;\r\n    width:16px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc25vd2NvbmUvc25vd2NvbmUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJO0FBQ0o7QUFDQTtJQUNJLFlBQVk7SUFDWixVQUFVO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9zbm93Y29uZS9zbm93Y29uZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9ue1xyXG4gICAgYmFja2dyb3VuZDp0cmFuc3BhcmVudFxyXG59XHJcbmltZ3tcclxuICAgIGhlaWdodDogMTZweDtcclxuICAgIHdpZHRoOjE2cHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/snowcone/snowcone.component.html":
/*!**************************************************!*\
  !*** ./src/app/snowcone/snowcone.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<input type=\"image\" src=\"../../assets/snowconeshadow.png\" width=\"48\" height=\"48\">\r\n\r\n"

/***/ }),

/***/ "./src/app/snowcone/snowcone.component.ts":
/*!************************************************!*\
  !*** ./src/app/snowcone/snowcone.component.ts ***!
  \************************************************/
/*! exports provided: SnowconeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SnowconeComponent", function() { return SnowconeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SnowconeComponent = /** @class */ (function () {
    function SnowconeComponent() {
    }
    SnowconeComponent.prototype.ngOnInit = function () {
    };
    SnowconeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-snowcone',
            template: __webpack_require__(/*! ./snowcone.component.html */ "./src/app/snowcone/snowcone.component.html"),
            styles: [__webpack_require__(/*! ./snowcone.component.css */ "./src/app/snowcone/snowcone.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SnowconeComponent);
    return SnowconeComponent;
}());



/***/ }),

/***/ "./src/app/snowconedislike/snowconedislike.component.css":
/*!***************************************************************!*\
  !*** ./src/app/snowconedislike/snowconedislike.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img{\r\n    height: 16px;\r\n    width:16px;\r\n}\r\n\r\ninput {\r\n    outline: none;\r\n}\r\n\r\ninput:active {\r\n    -webkit-transform: translateY(2px);\r\n            transform: translateY(2px);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc25vd2NvbmVkaXNsaWtlL3Nub3djb25lZGlzbGlrZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxrQ0FBMEI7WUFBMUIsMEJBQTBCO0FBQzlCIiwiZmlsZSI6InNyYy9hcHAvc25vd2NvbmVkaXNsaWtlL3Nub3djb25lZGlzbGlrZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1ne1xyXG4gICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgd2lkdGg6MTZweDtcclxufVxyXG5cclxuaW5wdXQge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuaW5wdXQ6YWN0aXZlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgycHgpO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/snowconedislike/snowconedislike.component.html":
/*!****************************************************************!*\
  !*** ./src/app/snowconedislike/snowconedislike.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<input id=\"dislikeImg\" (click)=\"dislike()\" type=\"image\" src=\"../../assets/snowconeshadowupsidedown.png\" width=\"48\" height=\"48\">\r\n\r\n"

/***/ }),

/***/ "./src/app/snowconedislike/snowconedislike.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/snowconedislike/snowconedislike.component.ts ***!
  \**************************************************************/
/*! exports provided: SnowconedislikeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SnowconedislikeComponent", function() { return SnowconedislikeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SnowconedislikeComponent = /** @class */ (function () {
    function SnowconedislikeComponent() {
    }
    SnowconedislikeComponent.prototype.ngOnInit = function () {
    };
    SnowconedislikeComponent.prototype.dislike = function () {
        var img = document.getElementById("dislikeImg");
        img.src = "../../assets/snowconedislikeshadowupsidedown.png";
    };
    SnowconedislikeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-snowconedislike',
            template: __webpack_require__(/*! ./snowconedislike.component.html */ "./src/app/snowconedislike/snowconedislike.component.html"),
            styles: [__webpack_require__(/*! ./snowconedislike.component.css */ "./src/app/snowconedislike/snowconedislike.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SnowconedislikeComponent);
    return SnowconedislikeComponent;
}());



/***/ }),

/***/ "./src/app/snowconelike/snowconelike.component.css":
/*!*********************************************************!*\
  !*** ./src/app/snowconelike/snowconelike.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img{\r\n    height: 16px;\r\n    width:16px;\r\n}\r\n\r\ninput {\r\n    outline: none;\r\n}\r\n\r\ninput:active {\r\n    -webkit-transform: translateY(2px);\r\n            transform: translateY(2px);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc25vd2NvbmVsaWtlL3Nub3djb25lbGlrZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxrQ0FBMEI7WUFBMUIsMEJBQTBCO0FBQzlCIiwiZmlsZSI6InNyYy9hcHAvc25vd2NvbmVsaWtlL3Nub3djb25lbGlrZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1ne1xyXG4gICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgd2lkdGg6MTZweDtcclxufVxyXG5cclxuaW5wdXQge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuaW5wdXQ6YWN0aXZlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgycHgpO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/snowconelike/snowconelike.component.html":
/*!**********************************************************!*\
  !*** ./src/app/snowconelike/snowconelike.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<input id=\"likeimg\" (click)=\"like()\" type=\"image\" src=\"../../assets/snowconeshadow.png\" width=\"48\" height=\"48\">"

/***/ }),

/***/ "./src/app/snowconelike/snowconelike.component.ts":
/*!********************************************************!*\
  !*** ./src/app/snowconelike/snowconelike.component.ts ***!
  \********************************************************/
/*! exports provided: SnowconelikeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SnowconelikeComponent", function() { return SnowconelikeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SnowconelikeComponent = /** @class */ (function () {
    function SnowconelikeComponent() {
    }
    SnowconelikeComponent.prototype.ngOnInit = function () {
    };
    SnowconelikeComponent.prototype.like = function (likeimg) {
        var img = document.getElementById(likeimg);
        img.src = "../../assets/snowconelikeshadow.png";
    };
    SnowconelikeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-snowconelike',
            template: __webpack_require__(/*! ./snowconelike.component.html */ "./src/app/snowconelike/snowconelike.component.html"),
            styles: [__webpack_require__(/*! ./snowconelike.component.css */ "./src/app/snowconelike/snowconelike.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SnowconelikeComponent);
    return SnowconelikeComponent;
}());



/***/ }),

/***/ "./src/app/storage.service.ts":
/*!************************************!*\
  !*** ./src/app/storage.service.ts ***!
  \************************************/
/*! exports provided: StorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageService", function() { return StorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var StorageService = /** @class */ (function () {
    function StorageService() {
        this.scope = [];
    }
    StorageService.prototype.getScope = function () {
        return this.scope;
    };
    StorageService.prototype.setScope = function (scope) {
        this.scope = scope;
    };
    StorageService.prototype.getTextContents = function () {
        return this.textContents;
    };
    StorageService.prototype.setTextContents = function (textContents) {
        this.textContents = textContents;
    };
    StorageService.prototype.getUserId1 = function () {
        return this.userId1;
    };
    StorageService.prototype.setUserId1 = function (userId1) {
        this.userId1 = userId1;
    };
    StorageService.prototype.getUserId2 = function () {
        return this.userId2;
    };
    StorageService.prototype.setUserId2 = function (userId2) {
        this.userId2 = userId2;
    };
    StorageService.prototype.getUser1 = function () {
        return this.user1;
    };
    StorageService.prototype.setUser1 = function (user1) {
        this.user1 = user1;
    };
    StorageService.prototype.getUser2 = function () {
        return this.user2;
    };
    StorageService.prototype.setUser2 = function (user2) {
        this.user2 = user2;
    };
    StorageService.prototype.getUser = function () {
        return this.users;
    };
    StorageService.prototype.setUser = function (user) {
        this.users = user;
    };
    StorageService.prototype.getSearchResults = function () {
        return this.searchResults;
    };
    StorageService.prototype.setSearchResults = function (user) {
        this.searchResults = user;
    };
    StorageService.prototype.getFirstName = function () {
        return this.firstName;
    };
    StorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], StorageService);
    return StorageService;
}());



/***/ }),

/***/ "./src/app/updateprofile/updateprofile.component.css":
/*!***********************************************************!*\
  !*** ./src/app/updateprofile/updateprofile.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-control{\r\n    box-shadow:         inset 0 0 15px #888888;\r\n    -moz-box-shadow:    inset 0 0 15px #888888;\r\n}\r\n\r\n.btn{\r\n    background:  #aad4e5;\r\n    \r\n    font-weight: bold;\r\n    color: white;\r\n    box-shadow: 5px 5px #888888;\r\n    font-size: 25px\r\n}\r\n\r\n.btn:active{\r\n    -webkit-transform: translateY(2px);\r\n            transform: translateY(2px);\r\n}\r\n\r\n#update_Profile{\r\n    margin-top:30%;\r\n    background-color: white;\r\n    padding: 20px;\r\n    font-size: 25px;\r\n    box-shadow: 5px 5px #888888;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXBkYXRlcHJvZmlsZS91cGRhdGVwcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFFSSwwQ0FBMEM7SUFDMUMsMENBQTBDO0FBQzlDOztBQUVBO0lBQ0ksb0JBQW9COztJQUVwQixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLDJCQUEyQjtJQUMzQjtBQUNKOztBQUNBO0lBQ0ksa0NBQTBCO1lBQTFCLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCx1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLGVBQWU7SUFDZiwyQkFBMkI7QUFDL0IiLCJmaWxlIjoic3JjL2FwcC91cGRhdGVwcm9maWxlL3VwZGF0ZXByb2ZpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWNvbnRyb2x7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCAxNXB4ICM4ODg4ODg7XHJcbiAgICBib3gtc2hhZG93OiAgICAgICAgIGluc2V0IDAgMCAxNXB4ICM4ODg4ODg7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6ICAgIGluc2V0IDAgMCAxNXB4ICM4ODg4ODg7XHJcbn1cclxuXHJcbi5idG57XHJcbiAgICBiYWNrZ3JvdW5kOiAgI2FhZDRlNTtcclxuICAgIFxyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3gtc2hhZG93OiA1cHggNXB4ICM4ODg4ODg7XHJcbiAgICBmb250LXNpemU6IDI1cHhcclxufVxyXG4uYnRuOmFjdGl2ZXtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgycHgpO1xyXG59XHJcblxyXG4jdXBkYXRlX1Byb2ZpbGV7XHJcbiAgICBtYXJnaW4tdG9wOjMwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIGJveC1zaGFkb3c6IDVweCA1cHggIzg4ODg4ODtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/updateprofile/updateprofile.component.html":
/*!************************************************************!*\
  !*** ./src/app/updateprofile/updateprofile.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" id =\"update_Profile\">\r\n  <div class=\"row\">\r\n    <form class=\"form col-lg-12\">\r\n      <h3><strong>Update Profile</strong></h3>\r\n      <hr>\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-6\">\r\n            <div class=\"form-group\">\r\n                <input type=\"text\" class=\"form-control\" id=\"input_First_Name\" placeholder=\"Update First Name\">\r\n            </div>\r\n        </div>\r\n        <div class=\"col-lg-6\">\r\n            <div class=\"form-group\">\r\n                <input type=\"text\" class=\"form-control\" id=\"input_Last_Name\" placeholder=\"Update Last Name\">\r\n            </div>\r\n          </div>\r\n      </div>\r\n     \r\n      <div class=\"form-group\">\r\n         \r\n          <input type=\"password\" class=\"form-control\" id=\"inputPassword\" placeholder=\"Update Password\" title=\"At least 6 characters with letters and numbers\" required=\"\">\r\n      </div>\r\n     <div>\r\n      <h6>Upload a different photo...</h6>\r\n      <input type=\"file\" class=\"text-center center-block file-upload\">\r\n     </div>\r\n      <div class=\"form-group\">\r\n          <button type=\"submit\" class=\"btn btn-default btn-lg float-right\">Save</button>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/updateprofile/updateprofile.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/updateprofile/updateprofile.component.ts ***!
  \**********************************************************/
/*! exports provided: UpdateprofileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateprofileComponent", function() { return UpdateprofileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UpdateprofileComponent = /** @class */ (function () {
    function UpdateprofileComponent() {
    }
    UpdateprofileComponent.prototype.ngOnInit = function () {
    };
    UpdateprofileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-updateprofile',
            template: __webpack_require__(/*! ./updateprofile.component.html */ "./src/app/updateprofile/updateprofile.component.html"),
            styles: [__webpack_require__(/*! ./updateprofile.component.css */ "./src/app/updateprofile/updateprofile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UpdateprofileComponent);
    return UpdateprofileComponent;
}());



/***/ }),

/***/ "./src/app/user-list/user-list.component.ts":
/*!**************************************************!*\
  !*** ./src/app/user-list/user-list.component.ts ***!
  \**************************************************/
/*! exports provided: UserListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListComponent", function() { return UserListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");



var UserListComponent = /** @class */ (function () {
    function UserListComponent(_userService) {
        this._userService = _userService;
    }
    UserListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._userService.getUsers().subscribe(function (data) { return _this.users = data; });
    };
    UserListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-list',
            template: "\n    <h3> user-list </h3>\n    <ul *ngFor=\"let user of users\" style=\"font-size:15px\">\n      <li>ID:{{user.id}} || Email:{{user.email}} || Password:{{user.password}}</li>\n    </ul>\n  "
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], UserListComponent);
    return UserListComponent;
}());



/***/ }),

/***/ "./src/app/user.service.ts":
/*!*********************************!*\
  !*** ./src/app/user.service.ts ***!
  \*********************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var httpPostOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    })
};
var httpGetOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'Access-Control-Allow-Origin': '*'
    })
};
var httpTextOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'Access-Control-Allow-Origin': '*'
    })
};
var UserService = /** @class */ (function () {
    function UserService(http, router) {
        this.http = http;
        this.router = router;
        this.users = [];
        this.loggedInUsers = [];
        this._url = "http://localhost:8080/";
    }
    UserService.prototype.getUsers = function () {
        return this.http.get(this._url.concat('users'), httpGetOptions);
    };
    UserService.prototype.authenticate = function (user) {
        console.log('authenticating... ' + user.email + ', ' + user.password);
        return this.http.post(this._url.concat('authenticate'), JSON.stringify(user), httpPostOptions);
    };
    UserService.prototype.addNewUser = function (user) {
        console.log('adding new user... ' + user.email + ', ' + user.password);
        return this.http.post(this._url.concat('register'), JSON.stringify(user), httpPostOptions);
    };
    UserService.prototype.logInUser = function () {
        this.router.navigate(['mainview']);
    };
    UserService.prototype.getLoggedInUsers = function () {
        return this.loggedInUsers;
    };
    UserService.prototype.addLoggedInUser = function (user) {
        this.loggedInUsers.push(user);
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/userpost/userpost.component.css":
/*!*************************************************!*\
  !*** ./src/app/userpost/userpost.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJwb3N0L3VzZXJwb3N0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/userpost/userpost.component.html":
/*!**************************************************!*\
  !*** ./src/app/userpost/userpost.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n"

/***/ }),

/***/ "./src/app/userpost/userpost.component.ts":
/*!************************************************!*\
  !*** ./src/app/userpost/userpost.component.ts ***!
  \************************************************/
/*! exports provided: UserpostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserpostComponent", function() { return UserpostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UserpostComponent = /** @class */ (function () {
    function UserpostComponent() {
    }
    UserpostComponent.prototype.ngOnInit = function () {
    };
    UserpostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-userpost',
            template: __webpack_require__(/*! ./userpost.component.html */ "./src/app/userpost/userpost.component.html"),
            styles: [__webpack_require__(/*! ./userpost.component.css */ "./src/app/userpost/userpost.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserpostComponent);
    return UserpostComponent;
}());



/***/ }),

/***/ "./src/app/users.ts":
/*!**************************!*\
  !*** ./src/app/users.ts ***!
  \**************************/
/*! exports provided: Users */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Users", function() { return Users; });
var Users = /** @class */ (function () {
    function Users(userid, email, password, firstname, lastname, profilePicturePath, enabled) {
        if (profilePicturePath === void 0) { profilePicturePath = null; }
        this.userid = userid;
        this.email = email;
        this.password = password;
        this.firstname = firstname;
        this.lastname = lastname;
        this.profilePicturePath = profilePicturePath;
        this.enabled = enabled;
    }
    return Users;
}());



/***/ }),

/***/ "./src/app/validation.service.ts":
/*!***************************************!*\
  !*** ./src/app/validation.service.ts ***!
  \***************************************/
/*! exports provided: ValidationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationService", function() { return ValidationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ValidationService = /** @class */ (function () {
    function ValidationService() {
    }
    ValidationService.emailValidator = function (control) {
        // RFC 2822 compliant regex
        if (control.value.match(/^[a-zA-Z0-9_.+-]{1,}@[a-zA-Z0-9-]{1,}\.[a-zA-Z0-9-.]{1,}$/)) {
            return null;
        }
        else {
            return { 'invalidEmailAddress': true };
        }
    };
    ;
    ValidationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ValidationService);
    return ValidationService;
}());



/***/ }),

/***/ "./src/app/welcomeview/welcomeview.component.css":
/*!*******************************************************!*\
  !*** ./src/app/welcomeview/welcomeview.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dlbGNvbWV2aWV3L3dlbGNvbWV2aWV3LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/welcomeview/welcomeview.component.html":
/*!********************************************************!*\
  !*** ./src/app/welcomeview/welcomeview.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-login></app-login>\r\n\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n      <div class=\"col-lg-1\"></div>\r\n    <div class=\"col-lg-5\">\r\n      <app-mainpagejumbotron></app-mainpagejumbotron>\r\n    </div>\r\n    \r\n    <div class=\"col-lg-6\">\r\n      <app-register></app-register>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/welcomeview/welcomeview.component.ts":
/*!******************************************************!*\
  !*** ./src/app/welcomeview/welcomeview.component.ts ***!
  \******************************************************/
/*! exports provided: WelcomeviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeviewComponent", function() { return WelcomeviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var WelcomeviewComponent = /** @class */ (function () {
    function WelcomeviewComponent() {
    }
    WelcomeviewComponent.prototype.ngOnInit = function () {
    };
    WelcomeviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-welcomeview',
            template: __webpack_require__(/*! ./welcomeview.component.html */ "./src/app/welcomeview/welcomeview.component.html"),
            styles: [__webpack_require__(/*! ./welcomeview.component.css */ "./src/app/welcomeview/welcomeview.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WelcomeviewComponent);
    return WelcomeviewComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Associate\java\project-two-knights-of-saradomin\YellowSnowCone\src\main\resources\YellowSnowCone\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map