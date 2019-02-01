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
/* harmony import */ var _mypost_view_mypost_view_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mypost-view/mypost-view.component */ "./src/app/mypost-view/mypost-view.component.ts");
/* harmony import */ var _searchuser_searchuser_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./searchuser/searchuser.component */ "./src/app/searchuser/searchuser.component.ts");
/* harmony import */ var _newmessage_newmessage_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./newmessage/newmessage.component */ "./src/app/newmessage/newmessage.component.ts");
/* harmony import */ var _friendslist_friendslist_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./friendslist/friendslist.component */ "./src/app/friendslist/friendslist.component.ts");











var routes = [
    { path: "", redirectTo: "/welcomeview", pathMatch: "full" },
    { path: "welcomeview", component: _welcomeview_welcomeview_component__WEBPACK_IMPORTED_MODULE_5__["WelcomeviewComponent"] },
    { path: "mypost", component: _mypost_view_mypost_view_component__WEBPACK_IMPORTED_MODULE_7__["MypostViewComponent"] },
    { path: "messages", component: _messages_messages_component__WEBPACK_IMPORTED_MODULE_4__["MessagesComponent"] },
    // { path: "mainview", component: MainviewComponent, canActivate: [AuthGuard] },
    { path: "mainview", component: _mainview_mainview_component__WEBPACK_IMPORTED_MODULE_3__["MainviewComponent"] },
    { path: 'messagesthread', component: _messagesthread_messagesthread_component__WEBPACK_IMPORTED_MODULE_6__["MessagesthreadComponent"] },
    { path: 'searchuser', component: _searchuser_searchuser_component__WEBPACK_IMPORTED_MODULE_8__["SearchuserComponent"] },
    { path: 'newmessage', component: _newmessage_newmessage_component__WEBPACK_IMPORTED_MODULE_9__["NewmessageComponent"] },
    { path: 'friendslist', component: _friendslist_friendslist_component__WEBPACK_IMPORTED_MODULE_10__["FriendslistComponent"] }
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

module.exports = "<router-outlet></router-outlet>"

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
/* harmony import */ var _post_post_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./post/post.component */ "./src/app/post/post.component.ts");
/* harmony import */ var _mainview_mainview_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./mainview/mainview.component */ "./src/app/mainview/mainview.component.ts");
/* harmony import */ var _welcomeview_welcomeview_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./welcomeview/welcomeview.component */ "./src/app/welcomeview/welcomeview.component.ts");
/* harmony import */ var _updateprofile_updateprofile_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./updateprofile/updateprofile.component */ "./src/app/updateprofile/updateprofile.component.ts");
/* harmony import */ var _icon_icon_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./icon/icon.component */ "./src/app/icon/icon.component.ts");
/* harmony import */ var _messages_messages_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./messages/messages.component */ "./src/app/messages/messages.component.ts");
/* harmony import */ var _messagesthread_messagesthread_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./messagesthread/messagesthread.component */ "./src/app/messagesthread/messagesthread.component.ts");
/* harmony import */ var _repost_repost_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./repost/repost.component */ "./src/app/repost/repost.component.ts");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./message.service */ "./src/app/message.service.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./user.service */ "./src/app/user.service.ts");
/* harmony import */ var _searchuser_searchuser_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./searchuser/searchuser.component */ "./src/app/searchuser/searchuser.component.ts");
/* harmony import */ var _validation_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./validation.service */ "./src/app/validation.service.ts");
/* harmony import */ var _mypost_view_mypost_view_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./mypost-view/mypost-view.component */ "./src/app/mypost-view/mypost-view.component.ts");
/* harmony import */ var _userpost_userpost_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./userpost/userpost.component */ "./src/app/userpost/userpost.component.ts");
/* harmony import */ var _newmessage_newmessage_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./newmessage/newmessage.component */ "./src/app/newmessage/newmessage.component.ts");
/* harmony import */ var _friendslist_friendslist_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./friendslist/friendslist.component */ "./src/app/friendslist/friendslist.component.ts");
/* harmony import */ var _otheruserprofile_otheruserprofile_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./otheruserprofile/otheruserprofile.component */ "./src/app/otheruserprofile/otheruserprofile.component.ts");


































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
                _post_post_component__WEBPACK_IMPORTED_MODULE_15__["PostComponent"],
                _mainview_mainview_component__WEBPACK_IMPORTED_MODULE_16__["MainviewComponent"],
                _welcomeview_welcomeview_component__WEBPACK_IMPORTED_MODULE_17__["WelcomeviewComponent"],
                _messages_messages_component__WEBPACK_IMPORTED_MODULE_20__["MessagesComponent"],
                _messagesthread_messagesthread_component__WEBPACK_IMPORTED_MODULE_21__["MessagesthreadComponent"],
                _icon_icon_component__WEBPACK_IMPORTED_MODULE_19__["IconComponent"],
                _updateprofile_updateprofile_component__WEBPACK_IMPORTED_MODULE_18__["UpdateprofileComponent"],
                _repost_repost_component__WEBPACK_IMPORTED_MODULE_22__["RepostComponent"],
                _searchuser_searchuser_component__WEBPACK_IMPORTED_MODULE_27__["SearchuserComponent"],
                _mypost_view_mypost_view_component__WEBPACK_IMPORTED_MODULE_29__["MypostViewComponent"],
                _userpost_userpost_component__WEBPACK_IMPORTED_MODULE_30__["UserpostComponent"],
                _newmessage_newmessage_component__WEBPACK_IMPORTED_MODULE_31__["NewmessageComponent"],
                _friendslist_friendslist_component__WEBPACK_IMPORTED_MODULE_32__["FriendslistComponent"],
                _otheruserprofile_otheruserprofile_component__WEBPACK_IMPORTED_MODULE_33__["OtheruserprofileComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            providers: [_user_service__WEBPACK_IMPORTED_MODULE_26__["UserService"], _message_service__WEBPACK_IMPORTED_MODULE_23__["MessageService"], _auth_guard__WEBPACK_IMPORTED_MODULE_24__["AuthGuard"], _validation_service__WEBPACK_IMPORTED_MODULE_28__["ValidationService"], _auth_service__WEBPACK_IMPORTED_MODULE_25__["AuthService"]],
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

module.exports = ".card {\r\n    min-width: 100vh;\r\n}\r\n\r\n.btn {\r\n    background: #aad4e5;\r\n    font-weight: bold;\r\n    color: white;\r\n    box-shadow: 5px 5px #888888;\r\n    font-size: 15px;\r\n    margin-top: 15px;\r\n}\r\n\r\n.btn:active {\r\n    -webkit-transform: translateY(2px);\r\n            transform: translateY(2px);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3JlYXRlcG9zdC9jcmVhdGVwb3N0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWiwyQkFBMkI7SUFDM0IsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtDQUEwQjtZQUExQiwwQkFBMEI7QUFDOUIiLCJmaWxlIjoic3JjL2FwcC9jcmVhdGVwb3N0L2NyZWF0ZXBvc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcclxuICAgIG1pbi13aWR0aDogMTAwdmg7XHJcbn1cclxuXHJcbi5idG4ge1xyXG4gICAgYmFja2dyb3VuZDogI2FhZDRlNTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm94LXNoYWRvdzogNXB4IDVweCAjODg4ODg4O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxufVxyXG5cclxuLmJ0bjphY3RpdmUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDJweCk7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/createpost/createpost.component.html":
/*!******************************************************!*\
  !*** ./src/app/createpost/createpost.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n    <div class=\"card-header\">\r\n        Create Post\r\n    </div>\r\n    <div class=\"card-body\">\r\n        <form>\r\n            <div class=\"form-group\">\r\n                <textarea Required class=\"form-control\" #newPost name=\"post\" id=\"post\" rows=\"5\" placeholder=\"Roar it out!!!\"></textarea>\r\n\r\n                <button type=\"button\" (click)=\"createPost(newPost)\" class=\"btn\" routerLink='/mainpage'>Post</button>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>"

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
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");




var CreatepostComponent = /** @class */ (function () {
    function CreatepostComponent(newPost, userService) {
        this.newPost = newPost;
        this.userService = userService;
    }
    CreatepostComponent.prototype.ngOnInit = function () {
        this.user = this.userService.getLoggedInUsers();
    };
    CreatepostComponent.prototype.createPost = function (data) {
        var post = {
            postid: null,
            userid: this.user[0].userid,
            textcontents: data.value,
            imagelocation: null,
            repostid: -1,
            user: this.user[0],
            postinteractions: null
        };
        this.newPost.createPost(post);
        window.location.reload();
    };
    CreatepostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-createpost',
            template: __webpack_require__(/*! ./createpost.component.html */ "./src/app/createpost/createpost.component.html"),
            styles: [__webpack_require__(/*! ./createpost.component.css */ "./src/app/createpost/createpost.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_newpost_service__WEBPACK_IMPORTED_MODULE_2__["NewpostService"],
            _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
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
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user.service */ "./src/app/user.service.ts");





var FriendService = /** @class */ (function () {
    function FriendService(http, storage, userService) {
        this.http = http;
        this.storage = storage;
        this.userService = userService;
        this.friendsByIdUrl = this.storage.getBaseUrl() + "relationsById";
        this.addFriendUrl = this.storage.getBaseUrl() + "addFriend";
        this.userId = this.userService.getLoggedInUsers()[0].userid;
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
            _storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"],
            _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
    ], FriendService);
    return FriendService;
}());



/***/ }),

/***/ "./src/app/friendslist/friendslist.component.css":
/*!*******************************************************!*\
  !*** ./src/app/friendslist/friendslist.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul {\r\n    list-style-type: none;\r\n}\r\n.wrapper {\r\n    display: flex;\r\n    align-items: stretch;\r\n}\r\n.btn {\r\n    background: #aad4e5;\r\n    font-weight: bold;\r\n    color: white;\r\n    box-shadow: 5px 5px #888888;\r\n    font-size: 15px;\r\n    margin-top: 15px;\r\n}\r\n.btn:active {\r\n    -webkit-transform: translateY(2px);\r\n            transform: translateY(2px);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZnJpZW5kc2xpc3QvZnJpZW5kc2xpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLG9CQUFvQjtBQUN4QjtBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osMkJBQTJCO0lBQzNCLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLGtDQUEwQjtZQUExQiwwQkFBMEI7QUFDOUIiLCJmaWxlIjoic3JjL2FwcC9mcmllbmRzbGlzdC9mcmllbmRzbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidWwge1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG59XHJcbi53cmFwcGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjYWFkNGU1O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3gtc2hhZG93OiA1cHggNXB4ICM4ODg4ODg7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG59XHJcblxyXG4uYnRuOmFjdGl2ZSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMnB4KTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/friendslist/friendslist.component.html":
/*!********************************************************!*\
  !*** ./src/app/friendslist/friendslist.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <app-navbar> </app-navbar>\r\n    <div class=\"wrapper\">\r\n        <app-sidemenu></app-sidemenu>\r\n        <div id=\"content\">\r\n            <div class=\"container\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-lg-12\">\r\n                        <div class=\"card text-center\">\r\n                            <h2>Friend's List:</h2>\r\n                            <div class=\"card-body\">\r\n                                <div class=\"container-fluid\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-lg-12\">\r\n                                            <ul *ngFor=\"let user of users\">\r\n                                                <li>\r\n                                                    <div class=\"container-fluid\">\r\n                                                        <div class=\"row\">\r\n                                                            <div class=\"col-lg-4\">\r\n                                                                <a>\r\n                                                                    <strong>\r\n                                                                        {{user.firstname}} {{user.lastname}}\r\n                                                                    </strong>\r\n                                                                </a>\r\n                                                            </div>\r\n                                                            \r\n                                                            <div class=\"col-lg-5\">\r\n                                                                <button class=\"btn\">View Profile</button>\r\n                                                            </div>\r\n                                                            <div class=\"col-lg-3\">\r\n                                                                <button class=\"btn\" (click)=\"populateMessageThread(user.firstname + ' ' + user.lastname)\"\r\n                                                                    routerLink=\"/messagesthread\">Messages</button>\r\n                                                            </div>\r\n                                                            \r\n                                                        </div>\r\n                                                    </div>\r\n                                                </li>\r\n                                            </ul>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/friendslist/friendslist.component.ts":
/*!******************************************************!*\
  !*** ./src/app/friendslist/friendslist.component.ts ***!
  \******************************************************/
/*! exports provided: FriendslistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FriendslistComponent", function() { return FriendslistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _friend_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../friend.service */ "./src/app/friend.service.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../storage.service */ "./src/app/storage.service.ts");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../message.service */ "./src/app/message.service.ts");






var FriendslistComponent = /** @class */ (function () {
    function FriendslistComponent(friendService, userService, storage, messageService) {
        this.friendService = friendService;
        this.userService = userService;
        this.storage = storage;
        this.messageService = messageService;
        this.friends = [];
        this.userid = 0;
        this.users = [];
        this.specificMessages = [];
    }
    FriendslistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.friendService.getFriendsById().subscribe(function (data) { return _this.friends = data; }, function (error) { return console.log(error); }, function () { return _this.loadFriends(); });
        this.userid = this.userService.getLoggedInUsers()[0].userid;
        this.messageService.getMessagesById()
            .subscribe(function (data) { return _this.messages = data; });
    };
    FriendslistComponent.prototype.loadFriends = function () {
        if (this.friends) {
            for (var _i = 0, _a = this.friends; _i < _a.length; _i++) {
                var i = _a[_i];
                if (this.userid === i.userid1) {
                    this.users.push(i.user2);
                }
                else if (this.userid === i.userid2) {
                    this.users.push(i.user1);
                }
            }
        }
        this.users.reverse();
    };
    FriendslistComponent.prototype.populateMessageThread = function (user) {
        this.storage.setMessageThreadUser(user);
        for (var _i = 0, _a = this.friends; _i < _a.length; _i++) {
            var i = _a[_i];
            if (i.userid1 === this.userid) {
                if (user === (i.user2.firstname + ' ' + i.user2.lastname)) {
                    this.storage.setUserId2(i.user2.userid);
                    this.storage.setUser1(i.user1);
                    this.storage.setUser2(i.user2);
                }
            }
            else {
                if (user === (i.user1.firstname + ' ' + i.user1.lastname)) {
                    this.storage.setUserId2(i.user1.userid);
                    this.storage.setUser1(i.user2);
                    this.storage.setUser2(i.user1);
                }
            }
        }
        this.storage.setUserId1(this.userid);
    };
    FriendslistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-friendslist',
            template: __webpack_require__(/*! ./friendslist.component.html */ "./src/app/friendslist/friendslist.component.html"),
            styles: [__webpack_require__(/*! ./friendslist.component.css */ "./src/app/friendslist/friendslist.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_friend_service__WEBPACK_IMPORTED_MODULE_2__["FriendService"], _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"], _message_service__WEBPACK_IMPORTED_MODULE_5__["MessageService"]])
    ], FriendslistComponent);
    return FriendslistComponent;
}());



/***/ }),

/***/ "./src/app/icon/icon.component.css":
/*!*****************************************!*\
  !*** ./src/app/icon/icon.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\r\n    margin: auto;\r\n    height: 50%;\r\n    width: 50%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaWNvbi9pY29uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLFVBQVU7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2ljb24vaWNvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1nIHtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGhlaWdodDogNTAlO1xyXG4gICAgd2lkdGg6IDUwJTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/icon/icon.component.html":
/*!******************************************!*\
  !*** ./src/app/icon/icon.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img src=\"../../assets/Logo.png\" alt=\"\">"

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

module.exports = ".navbar {\r\n    background-color: white;\r\n    box-shadow: 0px 5px #888888;\r\n}\r\n\r\n#login_Email {\r\n    margin: 5px;\r\n    box-shadow: inset 0 0 15px #888888;\r\n    -moz-box-shadow: inset 0 0 15px #888888;\r\n}\r\n\r\n#login_Password {\r\n    margin: 5px;\r\n    box-shadow: inset 0 0 15px #888888;\r\n    -moz-box-shadow: inset 0 0 15px #888888;\r\n}\r\n\r\n.btn {\r\n    background: #aad4e5;\r\n    font-weight: bold;\r\n    color: white;\r\n    box-shadow: 5px 5px #888888;\r\n    font-size: 25px\r\n}\r\n\r\n.btn:active {\r\n    -webkit-transform: translateY(2px);\r\n            transform: translateY(2px);\r\n}\r\n\r\n.invalid-feedback {\r\n    margin: 30px 0 0 10px;\r\n    position: absolute;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHVCQUF1QjtJQUN2QiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxXQUFXO0lBRVgsa0NBQWtDO0lBQ2xDLHVDQUF1QztBQUMzQzs7QUFFQTtJQUNJLFdBQVc7SUFFWCxrQ0FBa0M7SUFDbEMsdUNBQXVDO0FBQzNDOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osMkJBQTJCO0lBQzNCO0FBQ0o7O0FBRUE7SUFDSSxrQ0FBMEI7WUFBMUIsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDVweCAjODg4ODg4O1xyXG59XHJcblxyXG4jbG9naW5fRW1haWwge1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCAxNXB4ICM4ODg4ODg7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMTVweCAjODg4ODg4O1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiBpbnNldCAwIDAgMTVweCAjODg4ODg4O1xyXG59XHJcblxyXG4jbG9naW5fUGFzc3dvcmQge1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCAxNXB4ICM4ODg4ODg7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMTVweCAjODg4ODg4O1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiBpbnNldCAwIDAgMTVweCAjODg4ODg4O1xyXG59XHJcblxyXG4uYnRuIHtcclxuICAgIGJhY2tncm91bmQ6ICNhYWQ0ZTU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJveC1zaGFkb3c6IDVweCA1cHggIzg4ODg4ODtcclxuICAgIGZvbnQtc2l6ZTogMjVweFxyXG59XHJcblxyXG4uYnRuOmFjdGl2ZSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMnB4KTtcclxufVxyXG5cclxuLmludmFsaWQtZmVlZGJhY2sge1xyXG4gICAgbWFyZ2luOiAzMHB4IDAgMCAxMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light \">\r\n  <a class=\"navbar-brand\" href=\"#\">\r\n    <h1> <strong>Yellow Snowcone</strong></h1>\r\n  </a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\r\n    aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n    <ul class=\"navbar-nav ml-auto\">\r\n      <!--\r\n      <form class=\"form-inline\" [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\r\n\r\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': submitted && f.email.errors }\">\r\n          <input type=\"email\" formControlName=\"email\" class=\"form-control clearfix\" id=\"login_Email\" aria-describedby=\"emailHelp\"\r\n            placeholder=\"Email\">\r\n          \r\n        </div>\r\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': submitted && f.password.errors }\">\r\n          <input type=\"password\" formControlName=\"password\" class=\"form-control clearfix\" id=\"login_Password\">\r\n        </div>\r\n        <button type=\"submit\" class=\"btn\" [disabled]=\"!loginForm.valid\">Log In</button>\r\n      </form>\r\n      -->\r\n      <form class=\"form-inline\" [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\r\n        <div class=\"form-group\">\r\n          <input type=\"email\" name=\"email\" formControlName=\"email\" class=\"form-control\" id=\"login_Email\"\r\n            aria-describedby=\"emailHelp\" placeholder=\"Enter Email\" [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\">\r\n          <!-- ngModel [(ngModel)]=\"newUserModel.email\" -->\r\n          <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\r\n            <div *ngIf=\"f.email.errors.required\">Email Is Required</div>\r\n            <div *ngIf=\"f.email.errors.email\">Email Must Be A Valid Email Address</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <input type=\"password\" name=\"password\" formControlName=\"password\" class=\"form-control\" id=\"login_Password\"\r\n            placeholder=\"Password\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\">\r\n          <!-- ngModel [(ngModel)]=\"newUserModel.password\"-->\r\n          <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\r\n            <div *ngIf=\"f.password.errors.required\">Password Is Required</div>\r\n            <div *ngIf=\"f.password.errors.minlength\">Password Must Be At Least 4 characters</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"loading\">Log In</button>\r\n        </div>\r\n      </form>\r\n    </ul>\r\n  </div>\r\n</nav>"

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
        this.newUserModel = new _users__WEBPACK_IMPORTED_MODULE_2__["Users"](null, null, null, null, null, null);
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
        var _this = this;
        this._userService.authenticate(user).subscribe(function (data) {
            _this.loggedInUser = data;
            if (_this.loggedInUser.userid === null || _this.loggedInUser.userid != -1) {
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

module.exports = "img {\r\n    margin-top: 35%;\r\n    height: 350px;\r\n    width: 350px\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbnBhZ2VqdW1ib3Ryb24vbWFpbnBhZ2VqdW1ib3Ryb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixhQUFhO0lBQ2I7QUFDSiIsImZpbGUiOiJzcmMvYXBwL21haW5wYWdlanVtYm90cm9uL21haW5wYWdlanVtYm90cm9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWcge1xyXG4gICAgbWFyZ2luLXRvcDogMzUlO1xyXG4gICAgaGVpZ2h0OiAzNTBweDtcclxuICAgIHdpZHRoOiAzNTBweFxyXG59Il19 */"

/***/ }),

/***/ "./src/app/mainpagejumbotron/mainpagejumbotron.component.html":
/*!********************************************************************!*\
  !*** ./src/app/mainpagejumbotron/mainpagejumbotron.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img src=\"../../assets/Logo.png\" alt=\"\">"

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

module.exports = ".wrapper {\r\n    display: flex;\r\n    align-items: stretch;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbnZpZXcvbWFpbnZpZXcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixvQkFBb0I7QUFDeEIiLCJmaWxlIjoic3JjL2FwcC9tYWludmlldy9tYWludmlldy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/mainview/mainview.component.html":
/*!**************************************************!*\
  !*** ./src/app/mainview/mainview.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <app-navbar> </app-navbar>\r\n    <div class=\"wrapper\">\r\n        <app-sidemenu></app-sidemenu>\r\n        <div id=\"content\">\r\n            <div class=\"container\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-lg-12\">\r\n                        <app-createpost></app-createpost>\r\n                    </div>\r\n                </div>\r\n                <hr>\r\n                <div class=\"row\">\r\n                    <div class=\"col-lg-12\">\r\n                        <app-post></app-post>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

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
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user.service */ "./src/app/user.service.ts");





var MessageService = /** @class */ (function () {
    function MessageService(http, storage, userService) {
        this.http = http;
        this.storage = storage;
        this.userService = userService;
        this.userId = this.userService.getLoggedInUsers()[0].userid;
        this.messages = [];
        this.messagesByIdUrl = this.storage.getBaseUrl() + "messagesById";
        this.addMessagesUrl = this.storage.getBaseUrl() + "addMessage";
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
            _storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"],
            _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
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

module.exports = ".wrapper {\r\n    display: flex;\r\n    align-items: stretch;\r\n}\r\n\r\nul {\r\n    list-style-type: none;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVzc2FnZXMvbWVzc2FnZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC9tZXNzYWdlcy9tZXNzYWdlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG59XHJcblxyXG51bCB7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/messages/messages.component.html":
/*!**************************************************!*\
  !*** ./src/app/messages/messages.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <app-navbar> </app-navbar>\r\n       <div class=\"wrapper\">\r\n           <app-sidemenu></app-sidemenu>\r\n\r\n            <div id=\"content\">\r\n                <div class=\"container\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-lg-12\">\r\n                            <h2>Messages</h2><button id=\"newMessage\" routerLink=\"/newmessage\">New Message</button>\r\n                              <ul *ngFor=\"let user of users\">\r\n                                <li>\r\n                                 <a (click)=\"populateMessageThread(user)\" routerLink=\"/messagesthread\">{{user}}</a> \r\n                                </li>\r\n                              </ul>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>"

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
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");





var MessagesComponent = /** @class */ (function () {
    function MessagesComponent(messageService, storage, userService) {
        this.messageService = messageService;
        this.storage = storage;
        this.userService = userService;
        this.userid = 0;
        this.specificMessages = [];
        this.users = [];
    }
    MessagesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.messageService.getMessagesById()
            .subscribe(function (data) { return _this.messages = data; }, function (err) { return console.log(err); }, function () { return _this.loadMessages(); });
        this.userid = this.userService.getLoggedInUsers()[0].userid;
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
        this.users.reverse();
    };
    MessagesComponent.prototype.populateMessageThread = function (user) {
        this.storage.setMessageThreadUser(user);
        for (var _i = 0, _a = this.messages; _i < _a.length; _i++) {
            var i = _a[_i];
            if (i.userid1 === this.userid) {
                if (user === (i.user2.firstname + ' ' + i.user2.lastname)) {
                    this.storage.setUserId2(i.user2.userid);
                    this.storage.setUser1(i.user1);
                    this.storage.setUser2(i.user2);
                }
            }
            else {
                if (user === (i.user1.firstname + ' ' + i.user1.lastname)) {
                    this.storage.setUserId2(i.user1.userid);
                    this.storage.setUser1(i.user2);
                    this.storage.setUser2(i.user1);
                }
            }
        }
        this.storage.setUserId1(this.userid);
    };
    MessagesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-messages',
            template: __webpack_require__(/*! ./messages.component.html */ "./src/app/messages/messages.component.html"),
            styles: [__webpack_require__(/*! ./messages.component.css */ "./src/app/messages/messages.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_message_service__WEBPACK_IMPORTED_MODULE_2__["MessageService"], _storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"], _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
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

module.exports = "ul {\r\n    list-style-type: none;\r\n}\r\ninput{\r\n    box-shadow: inset 0 0 15px #888888;\r\n    -moz-box-shadow: inset 0 0 15px #888888;\r\n    margin-top: 10px\r\n}\r\n.btn {\r\n    background: #aad4e5;\r\n    font-weight: bold;\r\n    color: white;\r\n    box-shadow: 5px 5px #888888;\r\n    font-size: 15px;\r\n    margin-top: 15px;\r\n}\r\n.btn:active {\r\n    -webkit-transform: translateY(2px);\r\n            transform: translateY(2px);\r\n}\r\n.card{\r\n    margin-top: auto;\r\n    margin-bottom: auto;\r\n    margin-left: 10px;\r\n    border-radius: 25px;\r\n    background-color: white;\r\n    padding: 10px;\r\n    position: relative;\r\n}\r\n.messages {\r\n    margin-top: auto;\r\n    margin-bottom: auto;\r\n    margin-left: 10px;\r\n    border-radius: 25px;\r\n    background-color: white;\r\n    padding: 10px;\r\n    position: relative;\r\n    overflow: auto;\r\n    height: 400px;\r\n}\r\n.wrapper {\r\n    display: flex;\r\n    align-items: stretch;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVzc2FnZXN0aHJlYWQvbWVzc2FnZXN0aHJlYWQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHFCQUFxQjtBQUN6QjtBQUNBO0lBRUksa0NBQWtDO0lBQ2xDLHVDQUF1QztJQUN2QztBQUNKO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWiwyQkFBMkI7SUFDM0IsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksa0NBQTBCO1lBQTFCLDBCQUEwQjtBQUM5QjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGFBQWE7QUFDakI7QUFFQTtJQUNJLGFBQWE7SUFDYixvQkFBb0I7QUFDeEIiLCJmaWxlIjoic3JjL2FwcC9tZXNzYWdlc3RocmVhZC9tZXNzYWdlc3RocmVhZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidWwge1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG59XHJcbmlucHV0e1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgMTVweCAjODg4ODg4O1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDE1cHggIzg4ODg4ODtcclxuICAgIC1tb3otYm94LXNoYWRvdzogaW5zZXQgMCAwIDE1cHggIzg4ODg4ODtcclxuICAgIG1hcmdpbi10b3A6IDEwcHhcclxufVxyXG4uYnRuIHtcclxuICAgIGJhY2tncm91bmQ6ICNhYWQ0ZTU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJveC1zaGFkb3c6IDVweCA1cHggIzg4ODg4ODtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbn1cclxuXHJcbi5idG46YWN0aXZlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgycHgpO1xyXG59XHJcbi5jYXJke1xyXG4gICAgbWFyZ2luLXRvcDogYXV0bztcclxuICAgIG1hcmdpbi1ib3R0b206IGF1dG87XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLm1lc3NhZ2VzIHtcclxuICAgIG1hcmdpbi10b3A6IGF1dG87XHJcbiAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICBoZWlnaHQ6IDQwMHB4O1xyXG59XHJcblxyXG4ud3JhcHBlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/messagesthread/messagesthread.component.html":
/*!**************************************************************!*\
  !*** ./src/app/messagesthread/messagesthread.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <app-navbar> </app-navbar>\r\n  <div class=\"wrapper\">\r\n    <app-sidemenu></app-sidemenu>\r\n\r\n    <div id=\"content\">\r\n      <div class=\"container\">\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-3\"></div>\r\n          <div class=\"col-lg-9\">\r\n            <div class=\"card\">\r\n              <h4 class=\"card-title\">Messages</h4>\r\n              <div class=\"messages\">\r\n                <ul *ngFor=\"let specificMessage of specificMessages\">\r\n                  <li>\r\n                    {{specificMessage}}\r\n                  </li>\r\n                </ul>\r\n              </div>\r\n              <input id=\"messageContent\" type=\"text\" autofocus=\"autofocus\" #messageContent (keyup.enter)=\"send(messageContent)\" (keyup.enter)=\"messageContent.value=''\">\r\n              <button class= \"btn\"id=\"send\" (click)=\"send(messageContent)\"\r\n                (click)=\"messageContent.value=''\">Send</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>"

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
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");





var MessagesthreadComponent = /** @class */ (function () {
    function MessagesthreadComponent(messageService, storage, userService) {
        this.messageService = messageService;
        this.storage = storage;
        this.userService = userService;
        this.userid = 0;
        this.specificMessages = [];
        this.messages = [];
        this.users = [];
        this.newSpecificMessages = [];
        this.specificMessagesLengthOriginal = 0;
        this.specificMessagesLengthNew = 0;
    }
    MessagesthreadComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.specificMessages = this.storage.getScope();
        this.userId1 = this.storage.getUserId1();
        this.userId2 = this.storage.getUserId2();
        this.user1 = this.storage.getUser1();
        this.user2 = this.storage.getUser2();
        this.userid = this.userService.getLoggedInUsers()[0].userid;
        this.messageService.getMessagesById()
            .subscribe(function (data) { return _this.messages = data; }, function (err) { return console.log(err); }, function () { return _this.loadMessages(); });
        this.messageTimerId = setInterval(function () {
            _this.refreshMessages();
        }, 1000);
        this.storage.setMessageTimerId(this.messageTimerId);
    };
    MessagesthreadComponent.prototype.send = function (messageContent) {
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
    };
    MessagesthreadComponent.prototype.refreshMessages = function () {
        var _this = this;
        this.newSpecificMessages = [];
        this.messageService.getMessagesById()
            .subscribe(function (data) { return _this.messages = data; }, function (err) { return console.log(err); }, function () { return _this.loadMessages(); });
    };
    MessagesthreadComponent.prototype.loadMessages = function () {
        this.storage.setUserId1(this.userid);
        for (var _i = 0, _a = this.messages; _i < _a.length; _i++) {
            var i = _a[_i];
            if (i.userid1 === this.userid) {
                if (this.storage.getMessageThreadUser() === (i.user2.firstname + ' ' + i.user2.lastname)) {
                    this.newSpecificMessage = "Me: " + i.textcontents;
                    this.newSpecificMessages.push(this.newSpecificMessage);
                    this.storage.setUserId2(i.user2.userid);
                    this.storage.setUser1(i.user1);
                    this.storage.setUser2(i.user2);
                }
            }
            else {
                if (this.storage.getMessageThreadUser() === (i.user1.firstname + ' ' + i.user1.lastname)) {
                    this.newSpecificMessage = i.user1.firstname + " " + i.user1.lastname + ": " + i.textcontents;
                    this.newSpecificMessages.push(this.newSpecificMessage);
                    this.storage.setUserId2(i.user1.userid);
                    this.storage.setUser1(i.user2);
                    this.storage.setUser2(i.user1);
                }
            }
        }
        this.specificMessagesLengthOriginal = this.specificMessages.length;
        this.specificMessagesLengthNew = this.newSpecificMessages.length;
        if (this.specificMessagesLengthNew > this.specificMessagesLengthOriginal) {
            this.specificMessages = this.newSpecificMessages;
        }
    };
    MessagesthreadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-messagesthread',
            template: __webpack_require__(/*! ./messagesthread.component.html */ "./src/app/messagesthread/messagesthread.component.html"),
            styles: [__webpack_require__(/*! ./messagesthread.component.css */ "./src/app/messagesthread/messagesthread.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_message_service__WEBPACK_IMPORTED_MODULE_3__["MessageService"], _storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"], _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
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

module.exports = ".wrapper {\r\n    display: flex;\r\n    align-items: stretch;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXlwb3N0LXZpZXcvbXlwb3N0LXZpZXcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixvQkFBb0I7QUFDeEIiLCJmaWxlIjoic3JjL2FwcC9teXBvc3Qtdmlldy9teXBvc3Qtdmlldy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/mypost-view/mypost-view.component.html":
/*!********************************************************!*\
  !*** ./src/app/mypost-view/mypost-view.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <app-navbar> </app-navbar>\r\n    <div class=\"wrapper\">\r\n        <app-sidemenu></app-sidemenu>\r\n        <div id=\"content\">\r\n            <div class=\"container\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-lg-12\">\r\n\r\n                        <app-userpost></app-userpost>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

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

module.exports = ".navbar {\r\n    background: transparent;\r\n    margin-left: 0px;\r\n}\r\n\r\nul {\r\n    margin-left: 0px;\r\n    padding-left: 0px;\r\n}\r\n\r\n.form-control {\r\n    box-shadow: inset 0 0 15px #888888;\r\n    -moz-box-shadow: inset 0 0 15px #888888;\r\n}\r\n\r\n.btn {\r\n    background: #aad4e5;\r\n    color: white;\r\n    box-shadow: 5px 5px #888888;\r\n    margin-left: 10px\r\n}\r\n\r\n.btn:active {\r\n    -webkit-transform: translateY(2px);\r\n            transform: translateY(2px);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUE7SUFFSSxrQ0FBa0M7SUFDbEMsdUNBQXVDO0FBQzNDOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFlBQVk7SUFDWiwyQkFBMkI7SUFDM0I7QUFDSjs7QUFFQTtJQUNJLGtDQUEwQjtZQUExQiwwQkFBMEI7QUFDOUIiLCJmaWxlIjoic3JjL2FwcC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyIHtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcclxufVxyXG5cclxudWwge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgIHBhZGRpbmctbGVmdDogMHB4O1xyXG59XHJcblxyXG4uZm9ybS1jb250cm9sIHtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDE1cHggIzg4ODg4ODtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAxNXB4ICM4ODg4ODg7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IGluc2V0IDAgMCAxNXB4ICM4ODg4ODg7XHJcbn1cclxuXHJcbi5idG4ge1xyXG4gICAgYmFja2dyb3VuZDogI2FhZDRlNTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJveC1zaGFkb3c6IDVweCA1cHggIzg4ODg4ODtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4XHJcbn1cclxuXHJcbi5idG46YWN0aXZlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgycHgpO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar\">\r\n  <ul class=\"\">\r\n    <div class=\"input-group\">\r\n      <input type=\"text\" class=\"form-control\" placeholder=\"Search\" #searchContents (keyup.enter)=\"search(searchContents)\" (keyup.enter)=\"clearMessageRefresh()\" (keyup.enter)=\"searchContents.value=''\">\r\n      <div class=\"input-group-append\">\r\n        <button class=\"btn btn-secondary\" type=\"button\" (click)=\"search(searchContents)\" (click)=\"clearMessageRefresh()\">\r\n          <i class=\"fa fa-search\"></i>\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </ul>\r\n</div>"

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
    NavbarComponent.prototype.clearMessageRefresh = function () {
        clearInterval(this.storageService.getMessageTimerId());
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

/***/ "./src/app/newmessage/newmessage.component.css":
/*!*****************************************************!*\
  !*** ./src/app/newmessage/newmessage.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul {\r\n    list-style-type: none;\r\n}\r\n\r\n.wrapper {\r\n    display: flex;\r\n    align-items: stretch;\r\n}\r\n\r\n.btn {\r\n    background: #aad4e5;\r\n    font-weight: bold;\r\n    color: white;\r\n    box-shadow: 5px 5px #888888;\r\n    font-size: 15px;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3bWVzc2FnZS9uZXdtZXNzYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isb0JBQW9CO0FBQ3hCOztBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osMkJBQTJCO0lBQzNCLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9uZXdtZXNzYWdlL25ld21lc3NhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInVsIHtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxufVxyXG5cclxuLndyYXBwZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG59XHJcbi5idG4ge1xyXG4gICAgYmFja2dyb3VuZDogI2FhZDRlNTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm94LXNoYWRvdzogNXB4IDVweCAjODg4ODg4O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/newmessage/newmessage.component.html":
/*!******************************************************!*\
  !*** ./src/app/newmessage/newmessage.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <app-navbar> </app-navbar>\r\n    <div class=\"wrapper\">\r\n        <app-sidemenu></app-sidemenu>\r\n        <div id=\"content\">\r\n            <div class=\"container\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-lg-12\">\r\n                        <div class=\"card\">\r\n                            <div class=\"card-body\">\r\n                                <h2 class=\"card-title\">Choose a Recipient:</h2>\r\n                                <ul *ngFor=\"let user of users\">\r\n                                    <li>\r\n                                        <a class=\"btn\" (click)=\"populateMessageThread(user.firstname + ' ' + user.lastname)\"\r\n                                            routerLink=\"/messagesthread\">{{user.firstname}} {{user.lastname}}</a>\r\n                                    </li>\r\n                                </ul>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/newmessage/newmessage.component.ts":
/*!****************************************************!*\
  !*** ./src/app/newmessage/newmessage.component.ts ***!
  \****************************************************/
/*! exports provided: NewmessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewmessageComponent", function() { return NewmessageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _friend_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../friend.service */ "./src/app/friend.service.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../storage.service */ "./src/app/storage.service.ts");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../message.service */ "./src/app/message.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var NewmessageComponent = /** @class */ (function () {
    function NewmessageComponent(routerService, friendService, userService, storage, messageService) {
        this.routerService = routerService;
        this.friendService = friendService;
        this.userService = userService;
        this.storage = storage;
        this.messageService = messageService;
        this.friends = [];
        this.users = [];
        this.userid = 0;
        this.specificMessages = [];
    }
    NewmessageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.friendService.getFriendsById().subscribe(function (data) { return _this.friends = data; }, function (error) { return console.log(error); }, function () { return _this.loadFriends(); });
        this.messageService.getMessagesById()
            .subscribe(function (data) { return _this.messages = data; });
        this.userid = this.userService.getLoggedInUsers()[0].userid;
    };
    NewmessageComponent.prototype.loadFriends = function () {
        if (this.friends) {
            for (var _i = 0, _a = this.friends; _i < _a.length; _i++) {
                var i = _a[_i];
                if (this.userid === i.userid1) {
                    this.users.push(i.user2);
                }
                else if (this.userid === i.userid2) {
                    this.users.push(i.user1);
                }
            }
        }
        this.users.reverse();
    };
    NewmessageComponent.prototype.populateMessageThread = function (user) {
        this.storage.setMessageThreadUser(user);
        for (var _i = 0, _a = this.friends; _i < _a.length; _i++) {
            var i = _a[_i];
            if (i.userid1 === this.userid) {
                if (user === (i.user2.firstname + ' ' + i.user2.lastname)) {
                    this.storage.setUserId2(i.user2.userid);
                    this.storage.setUser1(i.user1);
                    this.storage.setUser2(i.user2);
                }
            }
            else {
                if (user === (i.user1.firstname + ' ' + i.user1.lastname)) {
                    this.storage.setUserId2(i.user1.userid);
                    this.storage.setUser1(i.user2);
                    this.storage.setUser2(i.user1);
                }
            }
        }
        this.storage.setUserId1(this.userid);
    };
    NewmessageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-newmessage',
            template: __webpack_require__(/*! ./newmessage.component.html */ "./src/app/newmessage/newmessage.component.html"),
            styles: [__webpack_require__(/*! ./newmessage.component.css */ "./src/app/newmessage/newmessage.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _friend_service__WEBPACK_IMPORTED_MODULE_2__["FriendService"], _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"], _message_service__WEBPACK_IMPORTED_MODULE_5__["MessageService"]])
    ], NewmessageComponent);
    return NewmessageComponent;
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
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storage.service */ "./src/app/storage.service.ts");




var NewpostService = /** @class */ (function () {
    function NewpostService(http, storage) {
        this.http = http;
        this.storage = storage;
        this.newPostUrl = this.storage.getBaseUrl() + 'userposts/add';
    }
    NewpostService.prototype.createPost = function (data) {
        this.http.post(this.newPostUrl, data).subscribe();
    };
    NewpostService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"]])
    ], NewpostService);
    return NewpostService;
}());



/***/ }),

/***/ "./src/app/otheruserprofile/otheruserprofile.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/otheruserprofile/otheruserprofile.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\r\n    display: flex;\r\n    align-items: stretch;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3RoZXJ1c2VycHJvZmlsZS9vdGhlcnVzZXJwcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2Isb0JBQW9CO0FBQ3hCIiwiZmlsZSI6InNyYy9hcHAvb3RoZXJ1c2VycHJvZmlsZS9vdGhlcnVzZXJwcm9maWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/otheruserprofile/otheruserprofile.component.html":
/*!******************************************************************!*\
  !*** ./src/app/otheruserprofile/otheruserprofile.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <app-navbar> </app-navbar>\r\n     <div class=\"wrapper\">\r\n         <app-sidemenu></app-sidemenu>\r\n\r\n          <div id=\"content\">\r\n              <div class=\"container\">\r\n                  <div class=\"row\">\r\n                      <div class=\"col-lg-12\">\r\n                          <h2>'s Profile</h2>\r\n                          <h1>Posts:</h1>\r\n                            <ul *ngFor=\"let post of posts\">\r\n                              <li>\r\n                               <a (click)=\"populateMessageThread(user)\" routerLink=\"/messagesthread\">{{user}}</a> \r\n                              </li>\r\n                            </ul>\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n      </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/otheruserprofile/otheruserprofile.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/otheruserprofile/otheruserprofile.component.ts ***!
  \****************************************************************/
/*! exports provided: OtheruserprofileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtheruserprofileComponent", function() { return OtheruserprofileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../storage.service */ "./src/app/storage.service.ts");



var OtheruserprofileComponent = /** @class */ (function () {
    function OtheruserprofileComponent(storage) {
        this.storage = storage;
    }
    OtheruserprofileComponent.prototype.ngOnInit = function () {
    };
    OtheruserprofileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-otheruserprofile',
            template: __webpack_require__(/*! ./otheruserprofile.component.html */ "./src/app/otheruserprofile/otheruserprofile.component.html"),
            styles: [__webpack_require__(/*! ./otheruserprofile.component.css */ "./src/app/otheruserprofile/otheruserprofile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"]])
    ], OtheruserprofileComponent);
    return OtheruserprofileComponent;
}());



/***/ }),

/***/ "./src/app/post/post.component.css":
/*!*****************************************!*\
  !*** ./src/app/post/post.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "small {\r\n    text-align: center\r\n}\r\n\r\n.card {\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.panel{\r\n    min-height: 30%;\r\n    overflow: auto\r\n}\r\n\r\n.btn {\r\n    background: #aad4e5;\r\n    font-weight: bold;\r\n    color: white;\r\n    box-shadow: 5px 5px #888888;\r\n    font-size: 15px;\r\n}\r\n\r\n.btn:active {\r\n    -webkit-transform: translateY(2px);\r\n            transform: translateY(2px);\r\n}\r\n\r\nimg {\r\n    height: 16px;\r\n    width: 16px;\r\n}\r\n\r\ninput {\r\n    outline: none;\r\n}\r\n\r\ninput:active {\r\n    -webkit-transform: translateY(2px);\r\n            transform: translateY(2px);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdC9wb3N0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUNBO0lBQ0ksZUFBZTtJQUNmO0FBQ0o7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWiwyQkFBMkI7SUFDM0IsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtDQUEwQjtZQUExQiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGtDQUEwQjtZQUExQiwwQkFBMEI7QUFDOUIiLCJmaWxlIjoic3JjL2FwcC9wb3N0L3Bvc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInNtYWxsIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlclxyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcbi5wYW5lbHtcclxuICAgIG1pbi1oZWlnaHQ6IDMwJTtcclxuICAgIG92ZXJmbG93OiBhdXRvXHJcbn1cclxuXHJcbi5idG4ge1xyXG4gICAgYmFja2dyb3VuZDogI2FhZDRlNTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm94LXNoYWRvdzogNXB4IDVweCAjODg4ODg4O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcblxyXG4uYnRuOmFjdGl2ZSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMnB4KTtcclxufVxyXG5cclxuaW1nIHtcclxuICAgIGhlaWdodDogMTZweDtcclxuICAgIHdpZHRoOiAxNnB4O1xyXG59XHJcblxyXG5pbnB1dCB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG5pbnB1dDphY3RpdmUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDJweCk7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/post/post.component.html":
/*!******************************************!*\
  !*** ./src/app/post/post.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" *ngFor=\"let post of postContent\">\r\n  <div class=\"card-header\">\r\n    {{post.name}}\r\n  </div>\r\n  <div class=\"card-body\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-1\">\r\n        </div>\r\n        <div class=\"col-lg-10\">\r\n          <p>{{post.content}}</p>\r\n        </div>\r\n        <div class=\"col-lg-1\">\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-1\">\r\n        </div>\r\n        <div class=\"col-lg-1\">\r\n          <input id=\"{{post.id1}}\" (click)=\"like(post.id1)\" type=\"image\" src={{post.src1}} width=\"48\"\r\n            height=\"48\">\r\n          <small id=\"liked\" class=\"form-text text-muted\">{{post.likecount}}</small>\r\n        </div>\r\n        <div class=\"col-lg-1\">\r\n          <input id=\"{{post.id2}}\" (click)=\"dislike(post.id2)\" type=\"image\" src={{post.src2}}\r\n            width=\"48\" height=\"48\">\r\n          <small id=\"disliked\" class=\"form-text text-muted\">{{post.dislikecount}}</small>\r\n        </div>\r\n        <div class=\"col-lg-5\"></div>\r\n        <div class=\"col-lg-3\">\r\n          <input id=\"repost\" (click)=\"repost(post.id)\" type=\"image\" src=\"../../assets/repost-icon.png\" width=\"48\" height=\"48\">\r\n        </div>\r\n        <div class=\"col-lg-1\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

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
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _newpost_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../newpost.service */ "./src/app/newpost.service.ts");





var PostComponent = /** @class */ (function () {
    function PostComponent(postsService, userService, newpostService) {
        this.postsService = postsService;
        this.userService = userService;
        this.newpostService = newpostService;
        this.interactionIdAndTypeArray = [];
        this.postContent = [];
        this.userId = this.userService.getLoggedInUsers()[0].userid;
    }
    PostComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.postsService.getPostsById(this.userId)
            .subscribe(function (data) { return _this.posts = data; }, function (error) { return console.log(error); }, function () { return _this.loadPosts(); });
    };
    PostComponent.prototype.loadPosts = function () {
        for (var _i = 0, _a = this.posts; _i < _a.length; _i++) {
            var i = _a[_i];
            this.post = {
                content: i.textcontents,
                name: i.user.firstname + " " + i.user.lastname,
                id: i.postid,
                id1: i.postid + ' like',
                id2: i.postid + ' dislike',
                postinteractions: i.postinteractions,
                src1: '../../assets/snowconeshadow.png',
                src2: '../../assets/snowconeshadowupsidedown.png',
                likecount: 0,
                dislikecount: 0
            };
            this.postContent.push(this.post);
        }
        this.postContent = this.postContent.reverse();
        this.loadLikesAndDislikes();
    };
    PostComponent.prototype.loadLikesAndDislikes = function () {
        for (var _i = 0, _a = this.postContent; _i < _a.length; _i++) {
            var i = _a[_i];
            for (var _b = 0, _c = i.postinteractions; _b < _c.length; _b++) {
                var j = _c[_b];
                if (this.userId === j.userid) {
                    if (j.type === 1) {
                        i.src1 = '../../assets/snowconelikeshadow.png';
                    }
                    else if (j.type === 0) {
                        i.src2 = '../../assets/snowconedislikeshadowupsidedown.png';
                    }
                }
                if (j.type === 1) {
                    i.likecount++;
                }
                else if (j.type === 0) {
                    i.dislikecount++;
                }
            }
        }
    };
    PostComponent.prototype.like = function (likeimg) {
        var img = document.getElementById(likeimg);
        var likecount = document.getElementById('liked');
        var dislikecount = document.getElementById('disliked');
        var postId = likeimg.split(" ")[0];
        var dislikeimg = postId + ' dislike';
        postId = +postId;
        var img2 = document.getElementById(dislikeimg);
        if (img.src.split('/').pop() === 'snowconeshadow.png') {
            if (img2.src.split('/').pop() === 'snowconedislikeshadowupsidedown.png') {
                img2.src = '../../assets/snowconeshadowupsidedown.png';
                for (var _i = 0, _a = this.postContent; _i < _a.length; _i++) {
                    var i = _a[_i];
                    if (i.id === postId) {
                        i.dislikecount--;
                        dislikecount.innerHTML = "" + i.dislikecount;
                    }
                }
                this.postsService.deletePostInteraction(postId, this.userId);
            }
            img.src = '../../assets/snowconelikeshadow.png';
            this.postInteraction = {
                interactionid: null,
                postid: postId,
                userid: this.userId,
                type: 1
            };
            for (var _b = 0, _c = this.postContent; _b < _c.length; _b++) {
                var i = _c[_b];
                if (i.id === postId) {
                    i.likecount++;
                    likecount.innerHTML = "" + i.likecount;
                }
            }
            this.postsService.addPostInteraction(this.postInteraction);
        }
        else if (img.src.split('/').pop() === 'snowconelikeshadow.png') {
            img.src = '../../assets/snowconeshadow.png';
            this.postsService.deletePostInteraction(postId, this.userId);
            for (var _d = 0, _e = this.postContent; _d < _e.length; _d++) {
                var i = _e[_d];
                if (i.id === postId) {
                    i.likecount--;
                    likecount.innerHTML = "" + i.likecount;
                }
            }
        }
    };
    PostComponent.prototype.dislike = function (dislikeimg) {
        var img = document.getElementById(dislikeimg);
        var likecount = document.getElementById('liked');
        var dislikecount = document.getElementById('disliked');
        var postId = dislikeimg.split(" ")[0];
        var likeimg = postId + ' like';
        postId = +postId;
        var img2 = document.getElementById(likeimg);
        if (img.src.split('/').pop() === 'snowconeshadowupsidedown.png') {
            if (img2.src.split('/').pop() === 'snowconelikeshadow.png') {
                img2.src = '../../assets/snowconeshadow.png';
                for (var _i = 0, _a = this.postContent; _i < _a.length; _i++) {
                    var i = _a[_i];
                    if (i.id === postId) {
                        i.likecount--;
                        likecount.innerHTML = "" + i.likecount;
                    }
                }
                this.postsService.deletePostInteraction(postId, this.userId);
            }
            img.src = '../../assets/snowconedislikeshadowupsidedown.png';
            this.postInteraction = {
                interactionid: null,
                postid: postId,
                userid: this.userId,
                type: 0
            };
            for (var _b = 0, _c = this.postContent; _b < _c.length; _b++) {
                var i = _c[_b];
                if (i.id === postId) {
                    i.dislikecount++;
                    dislikecount.innerHTML = "" + i.dislikecount;
                }
            }
            this.postsService.addPostInteraction(this.postInteraction);
        }
        else if (img.src.split('/').pop() === 'snowconedislikeshadowupsidedown.png') {
            img.src = '../../assets/snowconeshadowupsidedown.png';
            this.postsService.deletePostInteraction(postId, this.userId);
            for (var _d = 0, _e = this.postContent; _d < _e.length; _d++) {
                var i = _e[_d];
                if (i.id === postId) {
                    i.dislikecount--;
                    dislikecount.innerHTML = "" + i.dislikecount;
                }
            }
        }
    };
    PostComponent.prototype.repost = function (postid) {
        var _this = this;
        new Promise(function (reject) {
            _this.postsService.getPostByPostId(postid).toPromise().then(function (data) {
                _this.reposts = data;
                var post = {
                    postid: null,
                    userid: _this.userId,
                    textcontents: _this.reposts.textcontents,
                    imagelocation: _this.reposts.imagelocation,
                    repostid: _this.reposts.postid,
                    user: _this.userService.getLoggedInUsers()[0],
                    postinteractions: null
                };
                _this.newpostService.createPost(post);
            }, function (msg) {
                reject(msg);
            });
        });
    };
    PostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-post',
            template: __webpack_require__(/*! ./post.component.html */ "./src/app/post/post.component.html"),
            styles: [__webpack_require__(/*! ./post.component.css */ "./src/app/post/post.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_posts_service__WEBPACK_IMPORTED_MODULE_2__["PostsService"], _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _newpost_service__WEBPACK_IMPORTED_MODULE_4__["NewpostService"]])
    ], PostComponent);
    return PostComponent;
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
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storage.service */ "./src/app/storage.service.ts");




var PostsService = /** @class */ (function () {
    function PostsService(http, storage) {
        this.http = http;
        this.storage = storage;
        this.userposts = this.storage.getBaseUrl() + 'userposts';
        this.postbypostid = this.storage.getBaseUrl() + 'postbypostid';
        this.addpostinteraction = this.storage.getBaseUrl() + 'addinteraction';
        this.getpostinteraction = this.storage.getBaseUrl() + 'getinteractionsbyid';
        this.deletepostinteraction = this.storage.getBaseUrl() + 'removeinteractionsbyid/';
    }
    PostsService.prototype.getPostsById = function (userId) {
        return this.http.post(this.userposts, userId);
    };
    PostsService.prototype.getPostByPostId = function (postId) {
        return this.http.post(this.postbypostid, postId);
    };
    PostsService.prototype.addPostInteraction = function (body) {
        this.http.post(this.addpostinteraction, body).subscribe();
    };
    PostsService.prototype.getInteractionsById = function (userId) {
        return this.http.post(this.getpostinteraction, userId);
    };
    PostsService.prototype.deletePostInteraction = function (postid, userid) {
        this.http.delete(this.deletepostinteraction + postid + '/' + userid).subscribe();
    };
    PostsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"]])
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

module.exports = "#profile_Picture {\r\n    height: 100%;\r\n    width: 100%;\r\n    box-shadow: 5px 5px #888888;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZXBpY3R1cmUvcHJvZmlsZXBpY3R1cmUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsMkJBQTJCO0FBQy9CIiwiZmlsZSI6InNyYy9hcHAvcHJvZmlsZXBpY3R1cmUvcHJvZmlsZXBpY3R1cmUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNwcm9maWxlX1BpY3R1cmUge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3gtc2hhZG93OiA1cHggNXB4ICM4ODg4ODg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/profilepicture/profilepicture.component.html":
/*!**************************************************************!*\
  !*** ./src/app/profilepicture/profilepicture.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img class=\"avatar img-circle img-thumbnail\" id=\"profile_Picture\" src=\"../../assets/profile-picture-placeholder.png\"\r\n    alt=\"Upload Photo\">"

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

module.exports = ".form-control {\r\n    box-shadow: inset 0 0 15px #888888;\r\n    -moz-box-shadow: inset 0 0 15px #888888;\r\n}\r\n\r\n.btn {\r\n    background: #aad4e5;\r\n    font-weight: bold;\r\n    color: white;\r\n    box-shadow: 5px 5px #888888;\r\n    font-size: 25px\r\n}\r\n\r\n.btn:active {\r\n    -webkit-transform: translateY(2px);\r\n            transform: translateY(2px);\r\n}\r\n\r\n#Register {\r\n    margin-top: 30%;\r\n    background-color: white;\r\n    padding: 20px;\r\n    font-size: 25px;\r\n    box-shadow: 5px 5px #888888;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUVJLGtDQUFrQztJQUNsQyx1Q0FBdUM7QUFDM0M7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWiwyQkFBMkI7SUFDM0I7QUFDSjs7QUFFQTtJQUNJLGtDQUEwQjtZQUExQiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixlQUFlO0lBQ2YsMkJBQTJCO0FBQy9CIiwiZmlsZSI6InNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWNvbnRyb2wge1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgMTVweCAjODg4ODg4O1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDE1cHggIzg4ODg4ODtcclxuICAgIC1tb3otYm94LXNoYWRvdzogaW5zZXQgMCAwIDE1cHggIzg4ODg4ODtcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjYWFkNGU1O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3gtc2hhZG93OiA1cHggNXB4ICM4ODg4ODg7XHJcbiAgICBmb250LXNpemU6IDI1cHhcclxufVxyXG5cclxuLmJ0bjphY3RpdmUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDJweCk7XHJcbn1cclxuXHJcbiNSZWdpc3RlciB7XHJcbiAgICBtYXJnaW4tdG9wOiAzMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBib3gtc2hhZG93OiA1cHggNXB4ICM4ODg4ODg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" id=\"Register\">\r\n    <div class=\"row\">\r\n        <form class=\"form col-lg-12\">\r\n            <h3><strong>Create a New Account</strong></h3>\r\n            <p>It’s free and always will be!</p>\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-6\">\r\n                    <div class=\"form-group\">\r\n                        <input type=\"text\" class=\"form-control\" id=\"input_First_Name\" placeholder=\"First Name\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-lg-6\">\r\n                    <div class=\"form-group\">\r\n                        <input type=\"text\" class=\"form-control\" id=\"input_Last_Name\" placeholder=\"Last Name\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <input type=\"email\" class=\"form-control\" id=\"input_Email\" placeholder=\"Email\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <input type=\"password\" class=\"form-control\" id=\"inputPassword\" placeholder=\"Password\" title=\"At least 6 characters with letters and numbers\"\r\n                    required=\"\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <button type=\"submit\" class=\"btn btn-default btn-lg float-right\">Register</button>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>"

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
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");



var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(_userService) {
        this._userService = _userService;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.users = this._userService.getLoggedInUsers();
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/repost/repost.component.css":
/*!*********************************************!*\
  !*** ./src/app/repost/repost.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\r\n    height: 16px;\r\n    width: 16px;\r\n}\r\n\r\ninput {\r\n    outline: none;\r\n}\r\n\r\ninput:active {\r\n    -webkit-transform: translateY(2px);\r\n            transform: translateY(2px);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVwb3N0L3JlcG9zdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxrQ0FBMEI7WUFBMUIsMEJBQTBCO0FBQzlCIiwiZmlsZSI6InNyYy9hcHAvcmVwb3N0L3JlcG9zdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1nIHtcclxuICAgIGhlaWdodDogMTZweDtcclxuICAgIHdpZHRoOiAxNnB4O1xyXG59XHJcblxyXG5pbnB1dCB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG5pbnB1dDphY3RpdmUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDJweCk7XHJcbn0iXX0= */"

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
    RepostComponent.prototype.repost = function () {
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

module.exports = ".wrapper {\r\n    display: flex;\r\n    align-items: stretch;\r\n}\r\n\r\n.navbar {\r\n    background: transparent;\r\n    margin-left: 0px;\r\n}\r\n\r\nul {\r\n    margin-left: 0px;\r\n    padding-left: 0px;\r\n}\r\n\r\n.form-control {\r\n    box-shadow: inset 0 0 15px #888888;\r\n    -moz-box-shadow: inset 0 0 15px #888888;\r\n}\r\n\r\n.btn {\r\n    background: #aad4e5;\r\n    color: white;\r\n    box-shadow: 5px 5px #888888;\r\n    margin-left: 10px\r\n}\r\n\r\n.btn:active {\r\n    -webkit-transform: translateY(2px);\r\n            transform: translateY(2px);\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNodXNlci9zZWFyY2h1c2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2Isb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUE7SUFFSSxrQ0FBa0M7SUFDbEMsdUNBQXVDO0FBQzNDOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFlBQVk7SUFDWiwyQkFBMkI7SUFDM0I7QUFDSjs7QUFFQTtJQUNJLGtDQUEwQjtZQUExQiwwQkFBMEI7QUFDOUIiLCJmaWxlIjoic3JjL2FwcC9zZWFyY2h1c2VyL3NlYXJjaHVzZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxufVxyXG5cclxuLm5hdmJhciB7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbn1cclxuXHJcbnVsIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxufVxyXG5cclxuLmZvcm0tY29udHJvbCB7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCAxNXB4ICM4ODg4ODg7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMTVweCAjODg4ODg4O1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiBpbnNldCAwIDAgMTVweCAjODg4ODg4O1xyXG59XHJcblxyXG4uYnRuIHtcclxuICAgIGJhY2tncm91bmQ6ICNhYWQ0ZTU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3gtc2hhZG93OiA1cHggNXB4ICM4ODg4ODg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweFxyXG59XHJcblxyXG4uYnRuOmFjdGl2ZSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMnB4KTtcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/searchuser/searchuser.component.html":
/*!******************************************************!*\
  !*** ./src/app/searchuser/searchuser.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    <div class=\"navbar\">\r\n        <ul class=\"\">\r\n            <div class=\"input-group\">\r\n                <input type=\"text\" autofocus=\"autofocus\" class=\"form-control\" placeholder=\"Search\" #searchContents (keyup.enter)=\"search(searchContents)\" (keyup.enter)=\"clearMessageRefresh()\" (keyup.enter)=\"searchContents.value=''\">\r\n                <div class=\"input-group-append\">\r\n                  <button class=\"btn btn-secondary\" type=\"button\" (click)=\"search(searchContents)\" (click)=\"searchContents.value=''\" (click)=\"clearMessageRefresh()\">\r\n                    <i class=\"fa fa-search\"></i>\r\n                  </button>\r\n                </div>\r\n              </div>\r\n         </ul>\r\n      </div>\r\n\r\n\r\n\r\n\r\n       <div class=\"wrapper\">\r\n           <app-sidemenu></app-sidemenu>\r\n  \r\n            <div id=\"content\">\r\n                <div class=\"container\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-lg-12\">\r\n                        <h2>Search results:</h2>\r\n                          <ul *ngFor=\"let searchResult of searchResults\">\r\n                            <li>\r\n                              {{searchResult.firstname}} {{searchResult.lastname}}\r\n                              <button>View Profile</button><button (click)=\"addFriend(searchResult.userid)\">Add Friend</button>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>"

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
        this.userId = 0;
    }
    SearchuserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.searchResults = this.storageService.getSearchResults();
        this.friendService.getFriendsById().subscribe(function (data) { return _this.friends = data; });
        this.userService.getUsers().subscribe(function (data) { return _this.users = data; });
        this.userId = this.userService.getLoggedInUsers()[0].userid;
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
            for (var _i = 0, _a = this.users; _i < _a.length; _i++) {
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
        this.searchResults.reverse();
    };
    SearchuserComponent.prototype.addFriend = function (userId) {
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
                this.user1 = this.userService.getLoggedInUsers()[0];
                this.friendToAdd = {
                    relationid: null,
                    userid1: this.userId,
                    userid2: userId,
                    status: 1,
                    user1: this.user1,
                    user2: this.user2
                };
                this.friendService.addFriend(this.friendToAdd);
                this.friends.push(this.friendToAdd);
                alert("Friend added!");
            }
        }
    };
    SearchuserComponent.prototype.clearMessageRefresh = function () {
        clearInterval(this.storageService.getMessageTimerId());
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

module.exports = "li {\r\n    margin-bottom: 15%;\r\n}\r\n\r\na {\r\n    color: black\r\n}\r\n\r\n.btn {\r\n    background: #aad4e5;\r\n    font-weight: bold;\r\n    color: white;\r\n    box-shadow: 5px 5px #888888;\r\n    font-size: 25px\r\n}\r\n\r\n#sidebar {\r\n    min-width: 250px;\r\n    max-width: 250px;\r\n    min-height: 100vh;\r\n    background: white;\r\n    padding: 10%;\r\n    text-align: center\r\n}\r\n\r\n.btn:active {\r\n    -webkit-transform: translateY(2px);\r\n            transform: translateY(2px);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZW1lbnUvc2lkZW1lbnUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWiwyQkFBMkI7SUFDM0I7QUFDSjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1o7QUFDSjs7QUFFQTtJQUNJLGtDQUEwQjtZQUExQiwwQkFBMEI7QUFDOUIiLCJmaWxlIjoic3JjL2FwcC9zaWRlbWVudS9zaWRlbWVudS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibGkge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTUlO1xyXG59XHJcblxyXG5hIHtcclxuICAgIGNvbG9yOiBibGFja1xyXG59XHJcblxyXG4uYnRuIHtcclxuICAgIGJhY2tncm91bmQ6ICNhYWQ0ZTU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJveC1zaGFkb3c6IDVweCA1cHggIzg4ODg4ODtcclxuICAgIGZvbnQtc2l6ZTogMjVweFxyXG59XHJcblxyXG4jc2lkZWJhciB7XHJcbiAgICBtaW4td2lkdGg6IDI1MHB4O1xyXG4gICAgbWF4LXdpZHRoOiAyNTBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAxMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXJcclxufVxyXG5cclxuLmJ0bjphY3RpdmUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDJweCk7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/sidemenu/sidemenu.component.html":
/*!**************************************************!*\
  !*** ./src/app/sidemenu/sidemenu.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav id=\"sidebar\">\r\n    <div class=\"sidebar-header\">\r\n        <app-profilepicture></app-profilepicture>\r\n    </div>\r\n    <hr>\r\n    <p>{{name}}</p>\r\n    <hr>\r\n    <ul class=\"list-unstyled components\">\r\n        <li>\r\n        </li>\r\n        <li>\r\n            <a routerLink=\"/mainview\" (click)=\"clearMessageRefresh()\">Home</a>\r\n        </li>\r\n        <li>\r\n            <a href=\"#\" (click)=\"clearMessageRefresh()\">Profile</a>\r\n        </li>\r\n        <li>\r\n            <a routerLink=\"/mypost\">View My Post </a>\r\n        </li>\r\n        <li>\r\n            <a routerLink=\"/friendslist\" (click)=\"clearMessageRefresh()\">Friends List</a>\r\n        </li>\r\n        <li>\r\n            <a routerLink=\"/messages\" (click)=\"clearMessageRefresh()\">Messages</a>\r\n        </li>\r\n    </ul>\r\n    <button type=\"submit\" class=\"btn \" (click)=\"clearMessageRefresh()\">Log Out</button>\r\n</nav>"

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
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../storage.service */ "./src/app/storage.service.ts");




var SidemenuComponent = /** @class */ (function () {
    function SidemenuComponent(userService, storage) {
        this.userService = userService;
        this.storage = storage;
    }
    SidemenuComponent.prototype.ngOnInit = function () {
        this.name = this.userService.getLoggedInUsers()[0].firstname + " " + this.userService.getLoggedInUsers()[0].lastname;
    };
    SidemenuComponent.prototype.clearMessageRefresh = function () {
        clearInterval(this.storage.getMessageTimerId());
    };
    SidemenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidemenu',
            template: __webpack_require__(/*! ./sidemenu.component.html */ "./src/app/sidemenu/sidemenu.component.html"),
            styles: [__webpack_require__(/*! ./sidemenu.component.css */ "./src/app/sidemenu/sidemenu.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"]])
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

module.exports = "button {\r\n    background: transparent\r\n}\r\n\r\nimg {\r\n    height: 16px;\r\n    width: 16px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc25vd2NvbmUvc25vd2NvbmUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvc25vd2NvbmUvc25vd2NvbmUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudFxyXG59XHJcblxyXG5pbWcge1xyXG4gICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgd2lkdGg6IDE2cHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/snowcone/snowcone.component.html":
/*!**************************************************!*\
  !*** ./src/app/snowcone/snowcone.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<input type=\"image\" src=\"../../assets/snowconeshadow.png\" width=\"48\" height=\"48\">"

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
        // baseUrl: string = "http://18.191.217.180:8888/";
        this.baseUrl = "http://localhost:8080/";
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
    StorageService.prototype.getBaseUrl = function () {
        return this.baseUrl;
    };
    StorageService.prototype.getMessageThreadUser = function () {
        return this.messageThreadUser;
    };
    StorageService.prototype.setMessageThreadUser = function (messageThreadUser) {
        this.messageThreadUser = messageThreadUser;
    };
    StorageService.prototype.getMessageTimerId = function () {
        return this.messageTimerId;
    };
    StorageService.prototype.setMessageTimerId = function (messageTimerId) {
        this.messageTimerId = messageTimerId;
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

module.exports = ".form-control {\r\n    box-shadow: inset 0 0 15px #888888;\r\n    -moz-box-shadow: inset 0 0 15px #888888;\r\n}\r\n\r\n.btn {\r\n    background: #aad4e5;\r\n    font-weight: bold;\r\n    color: white;\r\n    box-shadow: 5px 5px #888888;\r\n    font-size: 25px\r\n}\r\n\r\n.btn:active {\r\n    -webkit-transform: translateY(2px);\r\n            transform: translateY(2px);\r\n}\r\n\r\n#update_Profile {\r\n    margin-top: 30%;\r\n    background-color: white;\r\n    padding: 20px;\r\n    font-size: 25px;\r\n    box-shadow: 5px 5px #888888;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXBkYXRlcHJvZmlsZS91cGRhdGVwcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFFSSxrQ0FBa0M7SUFDbEMsdUNBQXVDO0FBQzNDOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osMkJBQTJCO0lBQzNCO0FBQ0o7O0FBRUE7SUFDSSxrQ0FBMEI7WUFBMUIsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsZUFBZTtJQUNmLDJCQUEyQjtBQUMvQiIsImZpbGUiOiJzcmMvYXBwL3VwZGF0ZXByb2ZpbGUvdXBkYXRlcHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tY29udHJvbCB7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCAxNXB4ICM4ODg4ODg7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMTVweCAjODg4ODg4O1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiBpbnNldCAwIDAgMTVweCAjODg4ODg4O1xyXG59XHJcblxyXG4uYnRuIHtcclxuICAgIGJhY2tncm91bmQ6ICNhYWQ0ZTU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJveC1zaGFkb3c6IDVweCA1cHggIzg4ODg4ODtcclxuICAgIGZvbnQtc2l6ZTogMjVweFxyXG59XHJcblxyXG4uYnRuOmFjdGl2ZSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMnB4KTtcclxufVxyXG5cclxuI3VwZGF0ZV9Qcm9maWxlIHtcclxuICAgIG1hcmdpbi10b3A6IDMwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIGJveC1zaGFkb3c6IDVweCA1cHggIzg4ODg4ODtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/updateprofile/updateprofile.component.html":
/*!************************************************************!*\
  !*** ./src/app/updateprofile/updateprofile.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" id=\"update_Profile\">\r\n    <div class=\"row\">\r\n        <form class=\"form col-lg-12\">\r\n            <h3><strong>Update Profile</strong></h3>\r\n            <hr>\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-6\">\r\n                    <div class=\"form-group\">\r\n                        <input type=\"text\" class=\"form-control\" id=\"input_First_Name\" placeholder=\"Update First Name\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-lg-6\">\r\n                    <div class=\"form-group\">\r\n                        <input type=\"text\" class=\"form-control\" id=\"input_Last_Name\" placeholder=\"Update Last Name\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <input type=\"password\" class=\"form-control\" id=\"inputPassword\" placeholder=\"Update Password\" title=\"At least 6 characters with letters and numbers\"\r\n                    required=\"\">\r\n            </div>\r\n            <div>\r\n                <h6>Upload a different photo...</h6>\r\n                <input type=\"file\" class=\"text-center center-block file-upload\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <button type=\"submit\" class=\"btn btn-default btn-lg float-right\">Save</button>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>"

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
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./storage.service */ "./src/app/storage.service.ts");





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
    function UserService(http, router, storage) {
        this.http = http;
        this.router = router;
        this.storage = storage;
        this.users = [];
        this.loggedInUsers = [];
        this._url = this.storage.getBaseUrl();
    }
    UserService.prototype.getUsers = function () {
        return this.http.get(this._url.concat('users'), httpGetOptions);
    };
    UserService.prototype.authenticate = function (user) {
        console.log('authenticating... ' + user.email + ', ' + user.password);
        return this.http.post(this._url.concat('authenticate'), JSON.stringify(user), httpPostOptions);
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
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/userpost.service.ts":
/*!*************************************!*\
  !*** ./src/app/userpost.service.ts ***!
  \*************************************/
/*! exports provided: UserpostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserpostService", function() { return UserpostService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var UserpostService = /** @class */ (function () {
    function UserpostService(http) {
        this.http = http;
        this.userposts = 'http://localhost:8080/userposts';
    }
    UserpostService.prototype.getPostsById = function (userId) {
        return this.http.post(this.userposts, userId);
    };
    UserpostService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserpostService);
    return UserpostService;
}());



/***/ }),

/***/ "./src/app/userpost/userpost.component.css":
/*!*************************************************!*\
  !*** ./src/app/userpost/userpost.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "small{\r\n    text-align: center\r\n}\r\n.card{\r\n    margin-bottom: 15px\r\n}\r\n.btn{\r\n    background:  #aad4e5;\r\n    font-weight: bold;\r\n    color: white;\r\n    box-shadow: 5px 5px #888888;\r\n    font-size: 15px;\r\n}\r\n.btn:active{\r\n    -webkit-transform: translateY(2px);\r\n            transform: translateY(2px);\r\n}\r\nimg{\r\n    height: 16px;\r\n    width:16px;\r\n}\r\ninput {\r\n    outline: none;\r\n}\r\ninput:active {\r\n    -webkit-transform: translateY(2px);\r\n            transform: translateY(2px);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcnBvc3QvdXNlcnBvc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJO0FBQ0o7QUFDQTtJQUNJO0FBQ0o7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLDJCQUEyQjtJQUMzQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxrQ0FBMEI7WUFBMUIsMEJBQTBCO0FBQzlCO0FBRUE7SUFDSSxZQUFZO0lBQ1osVUFBVTtBQUNkO0FBRUE7SUFDSSxhQUFhO0FBQ2pCO0FBRUE7SUFDSSxrQ0FBMEI7WUFBMUIsMEJBQTBCO0FBQzlCIiwiZmlsZSI6InNyYy9hcHAvdXNlcnBvc3QvdXNlcnBvc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInNtYWxse1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyXHJcbn1cclxuLmNhcmR7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4XHJcbn1cclxuXHJcbi5idG57XHJcbiAgICBiYWNrZ3JvdW5kOiAgI2FhZDRlNTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm94LXNoYWRvdzogNXB4IDVweCAjODg4ODg4O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcbi5idG46YWN0aXZle1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDJweCk7XHJcbn1cclxuXHJcbmltZ3tcclxuICAgIGhlaWdodDogMTZweDtcclxuICAgIHdpZHRoOjE2cHg7XHJcbn1cclxuXHJcbmlucHV0IHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbmlucHV0OmFjdGl2ZSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMnB4KTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/userpost/userpost.component.html":
/*!**************************************************!*\
  !*** ./src/app/userpost/userpost.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"card\" *ngFor=\"let post of postContent\">\r\n    <div class=\"card-header\">\r\n      {{post.name}}\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <div class=\"container\">\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-1\">\r\n          </div>\r\n          <div class=\"col-lg-10\">\r\n            <p>{{post.content}}</p>\r\n          </div>\r\n          <div class=\"col-lg-1\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n"

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
/* harmony import */ var _userpost_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../userpost.service */ "./src/app/userpost.service.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");




var UserpostComponent = /** @class */ (function () {
    function UserpostComponent(userpostService, userService) {
        this.userpostService = userpostService;
        this.userService = userService;
        this.postContent = [];
        this.userId = 0;
    }
    UserpostComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userId = this.userService.getLoggedInUsers()[0].userid;
        this.userpostService.getPostsById(this.userId).subscribe(function (data) { return _this.posts = data; }, function (error) { return console.log(error); }, function () { return _this.loadPosts(); });
    };
    UserpostComponent.prototype.loadPosts = function () {
        console.log(this.userId);
        for (var _i = 0, _a = this.posts; _i < _a.length; _i++) {
            var i = _a[_i];
            this.post = {
                content: i.textcontents,
                name: i.user.firstname + " " + i.user.lastname
            };
            this.postContent.push(this.post);
        }
        this.postContent = this.postContent.reverse();
    };
    UserpostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-userpost',
            template: __webpack_require__(/*! ./userpost.component.html */ "./src/app/userpost/userpost.component.html"),
            styles: [__webpack_require__(/*! ./userpost.component.css */ "./src/app/userpost/userpost.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_userpost_service__WEBPACK_IMPORTED_MODULE_2__["UserpostService"],
            _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
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
    function Users(userid, email, password, firstname, lastname, profilePicturePath) {
        if (profilePicturePath === void 0) { profilePicturePath = null; }
        this.userid = userid;
        this.email = email;
        this.password = password;
        this.firstname = firstname;
        this.lastname = lastname;
        this.profilePicturePath = profilePicturePath;
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

module.exports = "<app-login></app-login>\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-1\"></div>\r\n    <div class=\"col-lg-5\">\r\n      <app-mainpagejumbotron></app-mainpagejumbotron>\r\n    </div>\r\n    <div class=\"col-lg-6\">\r\n      <app-register></app-register>\r\n    </div>\r\n  </div>\r\n</div>"

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

module.exports = __webpack_require__(/*! C:\Users\jdeje\OneDrive\Documents\Revature\project-two-knights-of-saradomin\YellowSnowCone\src\main\resources\YellowSnowCone\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map