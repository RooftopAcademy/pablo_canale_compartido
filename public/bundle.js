/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/CocktailService.ts":
/*!********************************!*\
  !*** ./src/CocktailService.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ CocktailService)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\n\r\nclass CocktailService {\r\n    constructor() {\r\n        this._urlApi = 'https://6148b332035b3600175b9fd8.mockapi.io/Bar/1/';\r\n    }\r\n    postCocktailApi(cocktail) {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            try {\r\n                let res = yield fetch(`${this._urlApi}Cocktail`, {\r\n                    \"method\": \"POST\",\r\n                    \"headers\": { \"Content-type\": \"application/json\" },\r\n                    \"body\": JSON.stringify(cocktail)\r\n                });\r\n                if (res.ok)\r\n                    _index__WEBPACK_IMPORTED_MODULE_0__.bar.cocktails = yield this.getCocktailsApi();\r\n            }\r\n            catch (e) {\r\n                alert(\"ERROR CATCH POST USER\");\r\n            }\r\n        });\r\n    }\r\n    getCocktailsApi() {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            let cocktails = [];\r\n            try {\r\n                let res = yield fetch(`${this._urlApi}Cocktail`);\r\n                if (res.ok)\r\n                    cocktails = yield res.json();\r\n            }\r\n            catch (e) {\r\n                alert(\"ERROR CATCH GET COCKTAILS\");\r\n            }\r\n            return cocktails;\r\n        });\r\n    }\r\n    deleteCocktailApi(id) {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            try {\r\n                let res = yield fetch(`${this._urlApi}Cocktail/${id}`, {\r\n                    \"method\": \"DELETE\"\r\n                });\r\n                if (res.ok)\r\n                    _index__WEBPACK_IMPORTED_MODULE_0__.bar.cocktails = yield this.getCocktailsApi();\r\n            }\r\n            catch (e) {\r\n                alert(\"ERROR CATH DELETE COCKTAIL\");\r\n            }\r\n        });\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://pablo_canale_compartido/./src/CocktailService.ts?");

/***/ }),

/***/ "./src/EnumUserState.ts":
/*!******************************!*\
  !*** ./src/EnumUserState.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UserState\": () => (/* binding */ UserState)\n/* harmony export */ });\nvar UserState;\r\n(function (UserState) {\r\n    UserState[\"LOG_IN\"] = \"on\";\r\n    UserState[\"LOG_OUT\"] = \"off\";\r\n    UserState[\"ADMIN\"] = \"admin\";\r\n})(UserState || (UserState = {}));\r\n\n\n//# sourceURL=webpack://pablo_canale_compartido/./src/EnumUserState.ts?");

/***/ }),

/***/ "./src/OwnCocktail.ts":
/*!****************************!*\
  !*** ./src/OwnCocktail.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ OwnCocktail)\n/* harmony export */ });\n/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./User */ \"./src/User.ts\");\n/* harmony import */ var _EnumUserState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EnumUserState */ \"./src/EnumUserState.ts\");\n/* harmony import */ var _View__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./View */ \"./src/View.ts\");\n/* harmony import */ var _CocktailService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CocktailService */ \"./src/CocktailService.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\n\r\n\r\n\r\n\r\nclass OwnCocktail {\r\n    constructor() {\r\n        this._users = [];\r\n        this._view = new _View__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\r\n        this._actualUser = new _User__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\r\n        this._cocktails = [];\r\n        this._cocktailService = new _CocktailService__WEBPACK_IMPORTED_MODULE_3__[\"default\"];\r\n    }\r\n    ////////////////////GETTERS AND SETTERS ////////////////////////////\r\n    set cocktails(cocktails) {\r\n        this.cocktails = cocktails;\r\n    }\r\n    get cocktails() {\r\n        return this._cocktails;\r\n    }\r\n    get users() {\r\n        return this._users;\r\n    }\r\n    get actualUser() {\r\n        return this._actualUser;\r\n    }\r\n    ;\r\n    set actualUser(user) {\r\n        this._actualUser = user;\r\n    }\r\n    ////////////////////////// METHODS /////////////////////////////////\r\n    //////// COCKTAILS METHODS ////////////\r\n    showCocktails() {\r\n        this._view.showCocktails(this._cocktails);\r\n    }\r\n    addCocktail(cocktail) {\r\n        this._cocktailService.postCocktailApi(cocktail);\r\n        this.showCocktails();\r\n    }\r\n    deleteCocktail(id) {\r\n        let newId = '';\r\n        for (let i = 1; i < id.length; i++) // le saco la \"/\".... Hay alguna forma mejor de hacer esto?\r\n            newId += id[i];\r\n        this._cocktailService.deleteCocktailApi(newId);\r\n        this._view.showCocktails(this._cocktails);\r\n    }\r\n    cocktailFromId(id) {\r\n        let cocktail = 0;\r\n        while (this._cocktails[cocktail].id != id)\r\n            cocktail++;\r\n        return this._cocktails[cocktail];\r\n    }\r\n    /////////// USER METHODS /////////////\r\n    addUser(user) {\r\n        this._users.push(user);\r\n    }\r\n    corroborateUser(name, pass) {\r\n        let result = false;\r\n        for (let i = 0; i < this.users.length; i++) {\r\n            let user = this.users[i];\r\n            if (user.name == name)\r\n                if (user.pass == pass) {\r\n                    result = true;\r\n                    this.actualUser = user;\r\n                    this.actualUser.state = _EnumUserState__WEBPACK_IMPORTED_MODULE_1__.UserState.LOG_IN;\r\n                }\r\n        }\r\n        return result;\r\n    }\r\n    filterFavorites() {\r\n        this._view.showCocktails(this._actualUser.favorites);\r\n    }\r\n    showMessage(message) {\r\n        this._view.showMessage(message);\r\n    }\r\n    /////////////////////////////// SPA ////////////////////////////////////\r\n    loadContent(route) {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            let routeN = '';\r\n            for (let i = 2; i < route.length; i++) // le saco el \"#/.... esto esta bien? Mejor forma de hacer esto?\"\r\n                routeN += route[i];\r\n            try {\r\n                let response = yield fetch(`./views/${routeN}.html`);\r\n                if (response.ok) {\r\n                    let newContent = yield response.text();\r\n                    this._view.showContent(newContent);\r\n                }\r\n            }\r\n            catch (e) {\r\n            }\r\n        });\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://pablo_canale_compartido/./src/OwnCocktail.ts?");

/***/ }),

/***/ "./src/User.ts":
/*!*********************!*\
  !*** ./src/User.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ User)\n/* harmony export */ });\n/* harmony import */ var _EnumUserState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EnumUserState */ \"./src/EnumUserState.ts\");\n// Registered user can add favorites to bar//\r\n\r\nclass User {\r\n    constructor() {\r\n        this._name = '';\r\n        this._state = _EnumUserState__WEBPACK_IMPORTED_MODULE_0__.UserState.LOG_OUT;\r\n        this._favorites = [];\r\n        this._pass = '';\r\n        this._email = '';\r\n    }\r\n    set email(email) {\r\n        this._email = email;\r\n    }\r\n    set state(uState) {\r\n        this._state = uState;\r\n    }\r\n    get state() {\r\n        return this._state;\r\n    }\r\n    set name(name) {\r\n        this._name = name;\r\n    }\r\n    get name() {\r\n        return this._name;\r\n    }\r\n    set pass(pass) {\r\n        this._pass = pass;\r\n    }\r\n    get pass() {\r\n        return this._pass;\r\n    }\r\n    get favorites() {\r\n        return this._favorites;\r\n    }\r\n    addFavorite(cocktail) {\r\n        this._favorites.push(cocktail);\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://pablo_canale_compartido/./src/User.ts?");

/***/ }),

/***/ "./src/View.ts":
/*!*********************!*\
  !*** ./src/View.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ View)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.ts\");\n/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./User */ \"./src/User.ts\");\n/* harmony import */ var _forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forms */ \"./src/forms.ts\");\n// This class makes the wiew in HTML//\r\n\r\n\r\n\r\n\r\n\r\nclass View {\r\n    showContent(content) {\r\n        var _a, _b, _c;\r\n        const nodeMain = document.getElementById('main-container');\r\n        let node = document.createElement(\"div\");\r\n        nodeMain.innerHTML = '';\r\n        node.innerHTML = content;\r\n        nodeMain.append(node);\r\n        (_a = document.getElementById('form-register')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', _forms__WEBPACK_IMPORTED_MODULE_2__.registerUser);\r\n        (_b = document.getElementById('form-login')) === null || _b === void 0 ? void 0 : _b.addEventListener('submit', _forms__WEBPACK_IMPORTED_MODULE_2__.loginUser);\r\n        (_c = document.getElementById('form-cocktails')) === null || _c === void 0 ? void 0 : _c.addEventListener('submit', _forms__WEBPACK_IMPORTED_MODULE_2__.addCocktail);\r\n    }\r\n    createCocktail(cocktail) {\r\n        // This is a example of flip cocktail cards that I'm creating with the nodes//\r\n        /*<div id=\"4\" class=\"card\">\r\n                            <div class=\"card-container\">\r\n                                <div class=\"card-front\">\r\n                                    <div class=\"card-text flex-column center\">\r\n                                        <span class=\"trashcan material-icons-outlined\">delete</span>\r\n                                        <div class=\"text-center\">\r\n                                            <h1>Ingredients</h1>\r\n                                            <p>Cachaca</p>\r\n                                            <p>Sugar </p>\r\n                                            <p>Lime wedges</p>\r\n                                            <p>Crushed Ice</p>\r\n                                            <span class=\"star material-icons-outlined\">star</span>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"card-back text-center\">\r\n                                    <h1>Caipirinha</h1>\r\n                                    <img src=\"./img/cocktail_caipirinha-1.png\" />\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n        */\r\n        let card = document.createElement('div');\r\n        card.classList.add('card');\r\n        let cardContainer = document.createElement('div');\r\n        cardContainer.classList.add('card-container');\r\n        let front = document.createElement('div');\r\n        front.classList.add('card-front');\r\n        let cardText = document.createElement('div');\r\n        cardText.classList.add('card-text', 'flex-column', 'center');\r\n        let textCenter = document.createElement('div');\r\n        textCenter.classList.add('text-center');\r\n        let back = document.createElement('div');\r\n        back.classList.add('card-back', 'text-center');\r\n        // Creating the button trashcan for delete \r\n        let deleteButton = document.createElement('span');\r\n        deleteButton.classList.add('trashcan', 'material-icons-outlined');\r\n        deleteButton.innerHTML += 'delete';\r\n        deleteButton.id = `-${cocktail.id}`;\r\n        deleteButton.addEventListener('click', function () {\r\n            if (_index__WEBPACK_IMPORTED_MODULE_0__.bar.actualUser instanceof _User__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\r\n                _index__WEBPACK_IMPORTED_MODULE_0__.bar.deleteCocktail(this.id);\r\n            else {\r\n                _index__WEBPACK_IMPORTED_MODULE_0__.bar.showMessage(`You Should Be Login For Delete Option`);\r\n            }\r\n        });\r\n        textCenter.appendChild(deleteButton);\r\n        // adding the ingredients to the card        \r\n        let ingredients = cocktail.ingredients;\r\n        let h1 = document.createElement('h1');\r\n        h1.innerText = 'Ingredients';\r\n        textCenter.appendChild(h1);\r\n        for (let i = 0; i < ingredients.length; i++) {\r\n            let p = document.createElement('p');\r\n            p.innerText = `${ingredients[i]}`;\r\n            textCenter.appendChild(p);\r\n        }\r\n        // this is the star for favorites drinks\r\n        let star = document.createElement('span');\r\n        star.classList.add('star', 'material-icons-outlined');\r\n        star.innerText = 'star';\r\n        star.id = cocktail.id;\r\n        star.addEventListener('click', \r\n        // clicked stars in cards add cocktail to favorite if the user its registered//\r\n        function () {\r\n            if (_index__WEBPACK_IMPORTED_MODULE_0__.bar.actualUser instanceof _User__WEBPACK_IMPORTED_MODULE_1__[\"default\"]) {\r\n                const cocktailFavoriteId = this.id;\r\n                const cocktailFavorite = _index__WEBPACK_IMPORTED_MODULE_0__.bar.cocktailFromId(cocktailFavoriteId);\r\n                _index__WEBPACK_IMPORTED_MODULE_0__.bar.actualUser.addFavorite(cocktailFavorite);\r\n                _index__WEBPACK_IMPORTED_MODULE_0__.bar.showMessage(`Cocktail Added To Favorites`);\r\n            }\r\n            else {\r\n                _index__WEBPACK_IMPORTED_MODULE_0__.bar.showMessage(`You Should Be Login For Favorite Option`);\r\n            }\r\n        });\r\n        textCenter.appendChild(star);\r\n        back.innerHTML += `<h1>${cocktail.name}</h1>`;\r\n        //  add images from the input in form-cocktail //\r\n        back.innerHTML += `<img src=\"${cocktail.image}\" />`;\r\n        cardText.appendChild(textCenter);\r\n        front.appendChild(cardText);\r\n        cardContainer.appendChild(front);\r\n        cardContainer.appendChild(back);\r\n        card.appendChild(cardContainer);\r\n        return card;\r\n    }\r\n    showCocktails(cocktails) {\r\n        const cardContainer = document.getElementById('cards-container');\r\n        if (cardContainer != null) {\r\n            cardContainer.innerHTML = '';\r\n            for (let cocktail = 0; cocktail < cocktails.length; cocktail++)\r\n                cardContainer.appendChild(this.createCocktail(cocktails[cocktail]));\r\n        }\r\n    }\r\n    showMessage(message) {\r\n        const boxLocation = document.getElementById('login-container');\r\n        let div = document.createElement('div');\r\n        div.id = 'message';\r\n        div.classList.add('message', 'flex-column');\r\n        let p = document.createElement('p');\r\n        p.innerText = `${message}`;\r\n        div.addEventListener('DOMNodeInsertedIntoDocument', () => {\r\n            window.setTimeout(function () {\r\n                boxLocation === null || boxLocation === void 0 ? void 0 : boxLocation.removeChild(div);\r\n            }, 2200);\r\n        });\r\n        div.appendChild(p);\r\n        boxLocation === null || boxLocation === void 0 ? void 0 : boxLocation.appendChild(div);\r\n        div.scrollIntoView();\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://pablo_canale_compartido/./src/View.ts?");

/***/ }),

/***/ "./src/forms.ts":
/*!**********************!*\
  !*** ./src/forms.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addCocktail\": () => (/* binding */ addCocktail),\n/* harmony export */   \"registerUser\": () => (/* binding */ registerUser),\n/* harmony export */   \"loginUser\": () => (/* binding */ loginUser)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.ts\");\n/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./User */ \"./src/User.ts\");\n\r\n\r\nfunction addCocktail(event) {\r\n    event.preventDefault();\r\n    let name = document.getElementById('cocktailName').value;\r\n    let ingredients = document.getElementById('ingredients').value;\r\n    let ingredientsArray = ingredients.split(\",\");\r\n    let imageUrl = document.getElementById('image').value;\r\n    let id = (_index__WEBPACK_IMPORTED_MODULE_0__.bar.cocktails.length + 1).toString();\r\n    let cocktail = {\r\n        name: name,\r\n        ingredients: ingredientsArray,\r\n        image: imageUrl,\r\n        id: id\r\n    };\r\n    _index__WEBPACK_IMPORTED_MODULE_0__.bar.addCocktail(cocktail);\r\n}\r\nfunction registerUser(event) {\r\n    var _a, _b;\r\n    event.preventDefault();\r\n    let name = document.getElementById('username-regis').value;\r\n    let pass = document.getElementById('pass-regis').value;\r\n    let email = document.getElementById('email-regis').value;\r\n    if (name && pass && email) {\r\n        let user = new _User__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\r\n        user.name = name;\r\n        user.pass = pass;\r\n        user.email = email;\r\n        _index__WEBPACK_IMPORTED_MODULE_0__.bar.addUser(user);\r\n        _index__WEBPACK_IMPORTED_MODULE_0__.bar.showMessage('You Are Now Registered');\r\n        (_a = document.getElementById('form-register')) === null || _a === void 0 ? void 0 : _a.classList.toggle('hidden-container');\r\n        (_b = document.getElementById('login-form')) === null || _b === void 0 ? void 0 : _b.classList.toggle('hidden-container');\r\n    }\r\n}\r\nfunction loginUser(event) {\r\n    var _a, _b;\r\n    event.preventDefault();\r\n    let name = document.getElementById('username').value;\r\n    let pass = document.getElementById('pass').value;\r\n    if (_index__WEBPACK_IMPORTED_MODULE_0__.bar.corroborateUser(name, pass)) {\r\n        (_a = document.getElementById('form-cocktails')) === null || _a === void 0 ? void 0 : _a.classList.toggle('hidden-container');\r\n        (_b = document.getElementById('login-form')) === null || _b === void 0 ? void 0 : _b.classList.toggle('hidden-container');\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://pablo_canale_compartido/./src/forms.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"bar\": () => (/* binding */ bar)\n/* harmony export */ });\n/* harmony import */ var _OwnCocktail__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OwnCocktail */ \"./src/OwnCocktail.ts\");\n/* harmony import */ var _router_index_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./router/index.router */ \"./src/router/index.router.ts\");\n/* harmony import */ var _EnumUserState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EnumUserState */ \"./src/EnumUserState.ts\");\nvar _a, _b;\r\n\r\n\r\n\r\n//My bar object//\r\nconst bar = new _OwnCocktail__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\nwindow.addEventListener('hashchange', () => {\r\n    (0,_router_index_router__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(window.location.hash);\r\n});\r\n/****************************** DOM ***************************************/\r\ndocument.getElementsByClassName('arrow-down')[0].addEventListener('click', toggleMenu);\r\ndocument.getElementsByClassName('arrow-up')[0].addEventListener('click', toggleMenu);\r\nfunction toggleMenu() {\r\n    var _a;\r\n    (_a = document.getElementById('ul-btns')) === null || _a === void 0 ? void 0 : _a.classList.toggle(\"show\");\r\n}\r\n(_a = document.getElementById('btn-favorites')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {\r\n    var _a, _b;\r\n    if (bar.actualUser.state == _EnumUserState__WEBPACK_IMPORTED_MODULE_2__.UserState.LOG_IN) {\r\n        bar.filterFavorites();\r\n        (_a = document.getElementById('btn-all')) === null || _a === void 0 ? void 0 : _a.classList.toggle('hidden-container');\r\n        (_b = document.getElementById('btn-favorites')) === null || _b === void 0 ? void 0 : _b.classList.toggle('hidden-container');\r\n    }\r\n    else\r\n        bar.showMessage(`You Should Be Login For Favorite Option`);\r\n});\r\n(_b = document.getElementById('btn-all')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function () {\r\n    var _a, _b;\r\n    bar.showCocktails();\r\n    (_a = document.getElementById('btn-all')) === null || _a === void 0 ? void 0 : _a.classList.toggle('hidden-container');\r\n    (_b = document.getElementById('btn-favorites')) === null || _b === void 0 ? void 0 : _b.classList.toggle('hidden-container');\r\n});\r\n//Just for practice// \r\n// https://images.cocktailflow.com/v1/cocktail/w_300,h_540/cocktail_daiquiri-1.png    daikiri\r\n// https://images.cocktailflow.com/v1/cocktail/w_300,h_540/cocktail_pina_colada-1.png   pina colada\r\n// https://images.cocktailflow.com/v1/cocktail/w_300,h_540/cocktail_gin_tonic-1.png\r\n//  https://images.cocktailflow.com/v1/cocktail/w_300,h_540/cocktail_tropical_strawberry-1.png   trop Stawberry\r\n// https://images.cocktailflow.com/v1/cocktail/w_300,h_540/cocktail_caipirinha-1.png  caipi\r\n/* let pinaColada = new Cocktail('Pina Colada', ['White Run', 'Coconut Milk', 'Pineaple Juice', 'Crushed Ice'], 'https://images.cocktailflow.com/v1/cocktail/w_300,h_540/cocktail_pina_colada-1.png');\r\nbar.addCocktail(pinaColada);\r\nlet daikiri = new Cocktail('Daikiri', ['White Run', 'Sugar Syrup', 'Lime Juice', 'Ice Cubes'], 'https://images.cocktailflow.com/v1/cocktail/w_300,h_540/cocktail_daiquiri-1.png');\r\nbar.addCocktail(daikiri);\r\n*/\r\n/*let ginTonic = new Cocktail('Gin Tonic', ['Gin', 'Lime', 'Tonic', 'Ice Cubes'], 'https://images.cocktailflow.com/v1/cocktail/w_300,h_540/cocktail_gin_tonic-1.png');\r\nbar.addCocktail(ginTonic);\r\n\r\nlet tropStraw = new Cocktail('Trop Strawberry', ['Strawberry', 'Sugar', 'Pineaple', 'Yogurt', 'Milk', 'Ice'], 'https://images.cocktailflow.com/v1/cocktail/w_300,h_540/cocktail_tropical_strawberry-1.png');\r\nbar.addCocktail(tropStraw);\r\n\r\nlet caipi = new Cocktail('Caipirinha', ['Cachaca', 'Sugar', 'Lime Wedges', 'Crushed Ice'], 'https://images.cocktailflow.com/v1/cocktail/w_300,h_540/cocktail_caipirinha-1.png');\r\nbar.addCocktail(caipi);\r\n*/\r\n\n\n//# sourceURL=webpack://pablo_canale_compartido/./src/index.ts?");

/***/ }),

/***/ "./src/router/index.router.ts":
/*!************************************!*\
  !*** ./src/router/index.router.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ router)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ \"./src/index.ts\");\n\r\nfunction router(route) {\r\n    switch (route) {\r\n        case '#/explanations':\r\n            _index__WEBPACK_IMPORTED_MODULE_0__.bar.loadContent(route);\r\n            break;\r\n        case '#/cocktails':\r\n            _index__WEBPACK_IMPORTED_MODULE_0__.bar.loadContent(route);\r\n            break;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://pablo_canale_compartido/./src/router/index.router.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;