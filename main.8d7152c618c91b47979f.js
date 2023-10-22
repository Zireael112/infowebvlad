/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ (() => {

document.querySelector(".about").addEventListener("click", () => {
  document.querySelector(".none").scrollIntoView({
    behavior: "smooth"
  });
});
document.querySelector(".proj").addEventListener("click", () => {
  document.querySelector(".projects__title").scrollIntoView({
    behavior: "smooth"
  });
});
document.querySelector(".module__arrow").addEventListener("click", () => {
  document.querySelector(".projects__cards").scrollIntoView({
    behavior: "smooth"
  });
});
document.querySelector(".upper").addEventListener("click", () => {
  document.querySelector(".none").scrollIntoView({
    behavior: "smooth"
  });
});
document.querySelector(".services").addEventListener("click", () => {
  document.querySelector(".noop").scrollIntoView({
    behavior: "smooth"
  });
});
document.querySelector(".contacts").addEventListener("click", () => {
  document.querySelector(".footer__contact-title").scrollIntoView({
    behavior: "smooth"
  });
});
let int = setInterval(() => {
  if (window.screen.width <= 1450) {
    let elem = document.querySelector(".slider__layer");
    elem.parentNode.removeChild(elem);
    window.clearInterval(int);
  }
}, 1000);
Array.from(document.querySelectorAll(".services__card-btn")).map(el => {
  el.addEventListener("click", () => {
    document.querySelector(".footer__contact-title").scrollIntoView({
      behavior: "smooth"
    });
  });
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/font.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/font.css ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Montserrat-Medium.woff */ "./src/fonts/Montserrat-Medium.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Montserrat-Medium.woff2 */ "./src/fonts/Montserrat-Medium.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Montserrat-Regular.woff */ "./src/fonts/Montserrat-Regular.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Montserrat-Regular.woff2 */ "./src/fonts/Montserrat-Regular.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Montserrat-Thin.woff */ "./src/fonts/Montserrat-Thin.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Montserrat-Thin.woff2 */ "./src/fonts/Montserrat-Thin.woff2"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
    font-family: "Montserrat";
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format('woff'), 
        url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format('woff2');
}

@font-face {
    font-family: "Montserrat";
    font-weight: 300;
    src: url(${___CSS_LOADER_URL_REPLACEMENT_2___}) format('wof2'), 
        url(${___CSS_LOADER_URL_REPLACEMENT_3___}) format('woff2');
}

@font-face {
    font-family: "Montserrat";
    font-weight: 100;
    src: url(${___CSS_LOADER_URL_REPLACEMENT_4___}) format('woff'), 
        url(${___CSS_LOADER_URL_REPLACEMENT_5___}) format('woff2');
}`, "",{"version":3,"sources":["webpack://./src/css/font.css"],"names":[],"mappings":"AAAA;IACI,yBAAyB;IACzB;+DAC2D;AAC/D;;AAEA;IACI,yBAAyB;IACzB,gBAAgB;IAChB;+DAC4D;AAChE;;AAEA;IACI,yBAAyB;IACzB,gBAAgB;IAChB;+DACyD;AAC7D","sourcesContent":["@font-face {\r\n    font-family: \"Montserrat\";\r\n    src: url('../fonts/Montserrat-Medium.woff') format('woff'), \r\n        url('../fonts/Montserrat-Medium.woff2') format('woff2');\r\n}\r\n\r\n@font-face {\r\n    font-family: \"Montserrat\";\r\n    font-weight: 300;\r\n    src: url('../fonts/Montserrat-Regular.woff') format('wof2'), \r\n        url('../fonts/Montserrat-Regular.woff2') format('woff2');\r\n}\r\n\r\n@font-face {\r\n    font-family: \"Montserrat\";\r\n    font-weight: 100;\r\n    src: url('../fonts/Montserrat-Thin.woff') format('woff'), \r\n        url('../fonts/Montserrat-Thin.woff2') format('woff2');\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../img/magnifier.png */ "./src/img/magnifier.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
    font-family: "Montserrat";
    background-color: rgba(38, 36, 36, 1);
}

li {
    list-style: none;
    -webkit-transition: font-size .5s;
    -o-transition: font-size .5s;
    transition: font-size .5s;
}

.about {
    -webkit-transition: all .5s;
    -o-transition: all .5s;
    transition: all .5s;
    border-color: black;
}

.proj {
    -webkit-transition: all .5s;
    -o-transition: all .5s;
    transition: all .5s;
    border-color: black;
}

.contacts {
    -webkit-transition: all .5s;
    -o-transition: all .5s;
    transition: all .5s;
    border-color: black;
}

.services {
    -webkit-transition: all .5s;
    -o-transition: all .5s;
    border-color: black;
    transition: all .5s;
    border-color: black;
}

.about:hover {
    cursor: pointer;
    border-bottom: 0.125rem solid white;
    padding-bottom: 0.3125rem;
}

.services:hover {
    cursor: pointer;
    border-bottom: 0.125rem solid white;
    padding-bottom: 0.3125rem;
}

.proj:hover {
    cursor: pointer;
    border-bottom: 0.125rem solid white;
    padding-bottom: 0.3125rem;
}

.contacts:hover {
    cursor: pointer;
    border-bottom: 0.125rem solid white;
    padding-bottom: 0.3125rem;
}

.nav__ul {
    display: flex;
    gap: 3.125rem;
    justify-content: center;
    padding: 0;
}

.nav {
    z-index: 0;
}


.blur__header {
    position: absolute;
    width: 35.625rem;
    height: 5.125rem;
    flex-shrink: 0;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    top: 0;
    border-radius: 0 0 10.875rem 10.875rem;
    z-index: -2;
    background: rgb(10, 10, 10);
    filter: blur(4.4063rem);
}

.blur__scroll {
    position: absolute;
    width: 100%;
    height: 3.4375rem;
    fill: rgba(217, 217, 217, 0.50);
    backdrop-filter: blur(0.125rem);
    z-index: -1;
}

.blur__module {
    position: absolute;
    width: 26.5rem;
    height: 12.125rem;
    flex-shrink: 0;
    border-radius: 0.9375rem;
    background: rgba(0, 0, 0, 0.79);
    filter: blur(4.4063rem);
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    top: 15.625rem;
    z-index: -1;
    text-align: center;

}

.module {
    width: 26.5rem;
    height: 12.125rem;
    flex-shrink: 0;
    margin-top: 16.875rem;
    margin-left: auto;
    margin-right: auto;
    top: 15.625rem;
    text-align: center;
    color: white;
}

.module:hover {
    cursor: default;
}

.nav:hover {
    cursor: default;
}

.module:hover {
    cursor: default;
}

.projects__title {
    cursor: default;
    -webkit-transition: font-size .5s;
    -o-transition: font-size .5s;
    transition: font-size .5s;
}

.module__title {
    text-align: center;
    font-size: 1.875rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    background: linear-gradient(180deg, #ffffff 0%, rgba(255, 255, 255, 0.85) 14.58%, rgba(247, 245, 245, 1) 44.79%, rgba(246, 243, 243, 0) 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-transition: font-size .5s;
    -o-transition: font-size .5s;
    transition: font-size .5s;
}

.module__title:hover {
    font-size: 2.1875rem;
}

.module__text:hover {
    font-size: 1.125rem;
}

.projects__title:hover {
    font-size: 1.5rem;
}

li:hover {
    font-size: 1.125rem;
}

.module__text {
    text-align: center;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 130%; /* 20.8px */
    margin-top: 0.8125rem;
    -webkit-transition: font-size .5s;
    -o-transition: font-size .5s;
    transition: font-size .5s;
}

.module__arrow {
    display: inline-flex;
    margin-top: 1.25rem;
    width: 1.5625rem;
    height: 1.5625rem;
    border-top: 0.125rem solid;
    border-left: 0.125rem solid;
    border-color: white;
    transform: rotate(-135deg);
    -webkit-transition: all .5s;
    -o-transition: all .5s;
    transition: all .5s;
}

.module__arrow:hover {
    cursor: pointer;
    margin-top: 30px;
}

.upper {
    cursor: pointer;
    position: fixed;
    right: 2%;
    top: 2%;
    z-index: 310230120;
}

.upper__arrow {
    display: inline-flex;
    width: 1.125rem;
    height: 1.125rem;
    border-top: 2px solid;
    border-left: 2px solid;
    border-color: white;
    transform: rotate(45deg);
    top: 0.75rem;
    bottom: 0;
    margin: auto;
    position: absolute;
    left: 0;
    right: 0;
    -webkit-transition: all .5s;
    -o-transition: all .5s;
    transition: all .5s;
}

.upper__back {
    position: relative;
    border-radius: 3.125rem;
    width: 1.875rem;
    height: 1.875rem;
    flex-shrink: 0;
    background: rgba(5, 5, 5, 0.5);
    backdrop-filter: blur(0.125rem);
    z-index: -3;
    filter: blur(0.9375rem);

}

.projects {
    margin-top: 18.75rem;
    color: white;
}

.navigation {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100000000;
    color: white;
}

.none {
    top: 0;
}

.projects__cards {
    display: flex;
    gap: 1.875rem;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 2.5rem;
}

.projects__title {
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-align: center;
}



.card___blur {
    width: 35.625rem;
    height: 18.75rem;
    flex-shrink: 0;
    border-radius: 2.1875rem;
    border: 0.0625rem solid #FFF;
    background: #D9D9D9;
    filter: blur(0.5rem);
    top: 0;
    bottom: 0;
    margin: auto;
    position: absolute;
    left: 0;
    right: 0;
    z-index: -2;
    animation: none;
}

.blur__cards {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    position: absolute;
    justify-content: center;
    z-index: -1;
    gap: 1.875rem;
}

.site {
    width: 35.625rem;
    height: 18.75rem;
    border-radius: 2.1875rem;
    object-fit: cover;
    object-position: 50% 50%;
    -webkit-transition: all .5s;
    -o-transition: all .5s;
    transition: all .5s;
}

.img__div {
    position: relative;
}

.img__blur {
    width: 3.125rem;
    height: 3.125rem;
    flex-shrink: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    position: absolute;
    left: 0;
    right: 0;
    border-radius: 3.125rem;
    border: 0.0625rem solid black;
    background-repeat: no-repeat;
    background-size: auto;
    background-position: center center;
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    z-index: -5;
    fill: rgba(217, 217, 217, 0.50);
    backdrop-filter: blur(0.125rem);
}

.card1:hover .img__blur1 {
    z-index: 2;
}

.card1:hover {
    opacity: .6;
}

.card1:hover {
    cursor: pointer;
}

.card1:hover .site {
    width: 36.875rem;
    height: 20rem;
    cursor: pointer;
}

.card1:hover .br1 {
    width: 36.875rem;
    height: 20rem;
}

.card2:hover .img__blur2 {
    z-index: 2;
}

.card2:hover {
    cursor: pointer;
}

.card2:hover {
    opacity: .6;
}

.card2:hover .site {
    width: 36.875rem;
    height: 20rem;
    cursor: pointer;
}

.card2:hover .br2 {
    width: 36.875rem;
    height: 20rem;
}

.card3:hover .img__blur3 {
    z-index: 2;
}

.card3:hover {
    cursor: pointer;
}

.card3:hover {
    opacity: .6;
}

.card3:hover .site {
    width: 36.875rem;
    height: 20rem;
    cursor: pointer;
}

.card3:hover .br3 {
    width: 36.875rem;
    height: 20rem;
}

.card4:hover .img__blur4 {
    z-index: 2;
}

.card4:hover {
    opacity: .6;
}

.card4:hover {
    cursor: pointer;
}

.card4:hover .site {
    width: 36.875rem;
    height: 20rem;
    cursor: pointer;
}

.card4:hover .br4 {
    width: 36.875rem;
    height: 20rem;
}

.services__title {
    text-align: center;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-align: center;
    -webkit-transition: all .5s;
    -o-transition: all .5s;
    transition: all .5s;
}

.services__block {
    margin-top: 7.5rem;
    color: white;
    position: relative;
}

.services__cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1.875rem;
    margin-top: 2.5rem;
}

.services__card-back {
    position: absolute;
    width: 23.125rem;
    height: 20rem;
    flex-shrink: 0;
    border-radius: 35px;
    border: 0.0625rem solid #FFF;
    background: #262424;
}

.s1 {
    -webkit-transition: all .5s;
    -o-transition: all .5s;
    transition: all .5s;
}

.sbl1 {
    z-index: -2;
    -webkit-transition: all .5s;
    -o-transition: all .5s;
    transition: all .5s;
}

.s1:hover {
    width: 24.375rem;
    height: 21.25rem;
}

.s1:hover .sbl1 {
    width: 24.375rem;
    height: 21.25rem;
}

.s2 {
    -webkit-transition: all .5s;
    -o-transition: all .5s;
    transition: all .5s;
}

.sbl2 {
    z-index: -2;
    -webkit-transition: all .5s;
    -o-transition: all .5s;
    transition: all .5s;
}

.s2:hover {
    width: 24.375rem;
    height: 21.25rem;
}

.s2:hover .sbl2 {
    width: 24.375rem;
    height: 21.25rem;
}

.s3 {
    -webkit-transition: all .5s;
    -o-transition: all .5s;
    transition: all .5s;
}

.sbl3 {
    z-index: -2;
    -webkit-transition: all .5s;
    -o-transition: all .5s;
    transition: all .5s;
}

.s3:hover {
    width: 24.375rem;
    height: 21.25rem;
}

.s3:hover .sbl3 {
    width: 24.375rem;
    height: 21.25rem;
}

.services__cards-back {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 1.875rem;
    z-index: -1;
    top: 0;
    bottom: 0;
    margin: auto;
    position: absolute;
    left: 0;
    right: 0;
    margin-top: 4.0625rem;
}

.services__card {
    width: 23.125rem;
    height: 20rem;
    flex-shrink: 0;
    border-radius: 2.1875rem 2.1875rem 12.5rem 2.1875rem;
    border: 0.0625rem solid #FFF;
    background: #262424;
    box-shadow: 0rem 0.25rem 1.875rem 0rem rgba(173, 173, 173, 0.25);
}

.service__box {
    margin: 1.875rem;
}

.services__card-text {
    margin-top: 1.875rem;
    color: #FFF;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
}

.noop {
    position: absolute;
    bottom: 28.125rem;
}

.services__card-btn {
    width: 9.5rem;
    height: 2.75rem;
    flex-shrink: 0;
    border-radius: 8.1875rem;
    border: 0.0625rem solid #FFF;
    background: rgba(255, 255, 255, 0.00);
    color: white;
    color: #FFF;
    font-family: Montserrat;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-top: 3.8125rem;
    -webkit-transition: all .5s;
    -o-transition: all .5s;
    transition: all .5s;
}

.services__title:hover {
    font-size: 1.5rem;
}

.services__block:hover {
    cursor: default;
}

.services__card-btn:hover {
    cursor: pointer;
    background-color: white;
    color: black;
    border: 0.0625rem solid #000;
}

.s1:hover .services__card-btn1 {
    margin-top: 5.0625rem;
}

.s2:hover .services__card-btn2 {
    margin-top: 5.0625rem;
}

.s3:hover .services__card-btn3 {
    margin-top: 3.625rem;
}

.services__card-btn3 {
    margin-top: 2.3125rem;
}

.services__card-title {
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}

.footer__contact {
    color: white;
    margin-top: 21.5625rem;
    position: relative;
}

.footer__contact:hover {
    cursor: default;
}

.footer__contact-title {
    text-align: center;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    -webkit-transition: all .5s;
    -o-transition: all .5s;
    transition: all .5s;
}

.footer__contact-title:hover {
    font-size: 1.5rem;
}

.footer__contact-links {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: Montserrat;
    font-size: 1rem;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    padding: 1.875rem;
}

.footer__contact-blur {
    bottom: 1.5625rem;
    margin: auto;
    position: absolute;
    left: 0;
    right: 0;
    width: 60%;
    height: 3.75rem;
    flex-shrink: 0;
    z-index: -1;
    border-radius: 2.1875rem 2.1875rem 0 0;
    border: 0.0625rem solid #FFF;
    background: #D9D9D9;
    filter: blur(0.5rem);
    
}

.footer__contact-content {
    margin: 0;
    width: 60%;
    height: 5.625rem;
    flex-shrink: 0;
    border-radius: 2.1875rem 2.1875rem 0 0;
    background: #262424;
    margin-left: auto;
    margin-right: auto;
    margin-top: 2.5rem;
}

.link {
    display: inline-block;
}

.link:nth-child(1n + 2) {
    margin-left: 10rem;
}

.link__tg {
    text-decoration: none;
    color: white;
}


.telegram {
    -webkit-transition: all .5s;
    -o-transition: all .5s;
    transition: all .5s;
}

.vks {
    -webkit-transition: all .5s;
    -o-transition: all .5s;
    transition: all .5s;
}

.github {
    -webkit-transition: all .5s;
    -o-transition: all .5s;
    transition: all .5s;
}

.whatsapp {
    -webkit-transition: all .5s;
    -o-transition: all .5s;
    transition: all .5s;
}

.link__tg:hover .telegram {
    border-bottom: 0.0625rem solid white;
    padding-bottom: 0.3125rem;
    font-size: 1.125rem
}

.link__tg:hover .vks {
    border-bottom: 0.0625rem solid white;
    padding-bottom: 0.3125rem;
    font-size: 1.125rem
}

.link__tg:hover .github {
    border-bottom: 0.0625rem solid white;
    padding-bottom: 0.3125rem;
    font-size: 1.125rem
}

.link__tg:hover .whatsapp {
    border-bottom: 0.0625rem solid white;
    padding-bottom: 0.3125rem;
    font-size: 1.125rem
}

.svg__img {
    display: inline-block;
    text-align: center;
    vertical-align: middle;
}

.vk {
    margin-left: 0.5rem;
}

.gh {
    margin-left: 0.5rem;
}

.wa {
    margin-left: 0.375rem;
}

@media (max-width: 767px){
    .link {
        display: none;
    }
}

@media (max-width: 992px){
    canvas {
        width: 992px;
    }
}

@media (max-width: 767px){
    canvas {
        width: 767px;
    }
}

.slider__layer {
    position: absolute;
	inset: 0;
	background-size: cover;
	background-position: center;
	will-change: transform;
    z-index: -10000;
}

.for-projects {
    top: 740px;
}
/* 
@media (max-width: 575px){
    .nav__ul {
        font-size: 0.75rem;
    }

    .upper {
        display: none;
    }

    .module {
        width: 15rem;
        height: 12.125rem;
        margin-top: 16.875rem;
        margin-left: auto;
        margin-right: auto;
    }

    .module__title {
        font-size: 1.55rem;
    }

    .module__text {
        font-size: 0.85rem;
    }

    .module__arrow {
        width: 1.3625rem;
        height: 1.3625rem;
    }
} */`, "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"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","sourcesContent":["body {\r\n    font-family: \"Montserrat\";\r\n    background-color: rgba(38, 36, 36, 1);\r\n}\r\n\r\nli {\r\n    list-style: none;\r\n    -webkit-transition: font-size .5s;\r\n    -o-transition: font-size .5s;\r\n    transition: font-size .5s;\r\n}\r\n\r\n.about {\r\n    -webkit-transition: all .5s;\r\n    -o-transition: all .5s;\r\n    transition: all .5s;\r\n    border-color: black;\r\n}\r\n\r\n.proj {\r\n    -webkit-transition: all .5s;\r\n    -o-transition: all .5s;\r\n    transition: all .5s;\r\n    border-color: black;\r\n}\r\n\r\n.contacts {\r\n    -webkit-transition: all .5s;\r\n    -o-transition: all .5s;\r\n    transition: all .5s;\r\n    border-color: black;\r\n}\r\n\r\n.services {\r\n    -webkit-transition: all .5s;\r\n    -o-transition: all .5s;\r\n    border-color: black;\r\n    transition: all .5s;\r\n    border-color: black;\r\n}\r\n\r\n.about:hover {\r\n    cursor: pointer;\r\n    border-bottom: 0.125rem solid white;\r\n    padding-bottom: 0.3125rem;\r\n}\r\n\r\n.services:hover {\r\n    cursor: pointer;\r\n    border-bottom: 0.125rem solid white;\r\n    padding-bottom: 0.3125rem;\r\n}\r\n\r\n.proj:hover {\r\n    cursor: pointer;\r\n    border-bottom: 0.125rem solid white;\r\n    padding-bottom: 0.3125rem;\r\n}\r\n\r\n.contacts:hover {\r\n    cursor: pointer;\r\n    border-bottom: 0.125rem solid white;\r\n    padding-bottom: 0.3125rem;\r\n}\r\n\r\n.nav__ul {\r\n    display: flex;\r\n    gap: 3.125rem;\r\n    justify-content: center;\r\n    padding: 0;\r\n}\r\n\r\n.nav {\r\n    z-index: 0;\r\n}\r\n\r\n\r\n.blur__header {\r\n    position: absolute;\r\n    width: 35.625rem;\r\n    height: 5.125rem;\r\n    flex-shrink: 0;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    left: 0;\r\n    right: 0;\r\n    top: 0;\r\n    border-radius: 0 0 10.875rem 10.875rem;\r\n    z-index: -2;\r\n    background: rgb(10, 10, 10);\r\n    filter: blur(4.4063rem);\r\n}\r\n\r\n.blur__scroll {\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 3.4375rem;\r\n    fill: rgba(217, 217, 217, 0.50);\r\n    backdrop-filter: blur(0.125rem);\r\n    z-index: -1;\r\n}\r\n\r\n.blur__module {\r\n    position: absolute;\r\n    width: 26.5rem;\r\n    height: 12.125rem;\r\n    flex-shrink: 0;\r\n    border-radius: 0.9375rem;\r\n    background: rgba(0, 0, 0, 0.79);\r\n    filter: blur(4.4063rem);\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    left: 0;\r\n    right: 0;\r\n    top: 15.625rem;\r\n    z-index: -1;\r\n    text-align: center;\r\n\r\n}\r\n\r\n.module {\r\n    width: 26.5rem;\r\n    height: 12.125rem;\r\n    flex-shrink: 0;\r\n    margin-top: 16.875rem;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    top: 15.625rem;\r\n    text-align: center;\r\n    color: white;\r\n}\r\n\r\n.module:hover {\r\n    cursor: default;\r\n}\r\n\r\n.nav:hover {\r\n    cursor: default;\r\n}\r\n\r\n.module:hover {\r\n    cursor: default;\r\n}\r\n\r\n.projects__title {\r\n    cursor: default;\r\n    -webkit-transition: font-size .5s;\r\n    -o-transition: font-size .5s;\r\n    transition: font-size .5s;\r\n}\r\n\r\n.module__title {\r\n    text-align: center;\r\n    font-size: 1.875rem;\r\n    font-style: normal;\r\n    font-weight: 600;\r\n    line-height: normal;\r\n    background: linear-gradient(180deg, #ffffff 0%, rgba(255, 255, 255, 0.85) 14.58%, rgba(247, 245, 245, 1) 44.79%, rgba(246, 243, 243, 0) 100%);\r\n    background-clip: text;\r\n    -webkit-background-clip: text;\r\n    -webkit-text-fill-color: transparent;\r\n    -webkit-transition: font-size .5s;\r\n    -o-transition: font-size .5s;\r\n    transition: font-size .5s;\r\n}\r\n\r\n.module__title:hover {\r\n    font-size: 2.1875rem;\r\n}\r\n\r\n.module__text:hover {\r\n    font-size: 1.125rem;\r\n}\r\n\r\n.projects__title:hover {\r\n    font-size: 1.5rem;\r\n}\r\n\r\nli:hover {\r\n    font-size: 1.125rem;\r\n}\r\n\r\n.module__text {\r\n    text-align: center;\r\n    font-size: 1rem;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    line-height: 130%; /* 20.8px */\r\n    margin-top: 0.8125rem;\r\n    -webkit-transition: font-size .5s;\r\n    -o-transition: font-size .5s;\r\n    transition: font-size .5s;\r\n}\r\n\r\n.module__arrow {\r\n    display: inline-flex;\r\n    margin-top: 1.25rem;\r\n    width: 1.5625rem;\r\n    height: 1.5625rem;\r\n    border-top: 0.125rem solid;\r\n    border-left: 0.125rem solid;\r\n    border-color: white;\r\n    transform: rotate(-135deg);\r\n    -webkit-transition: all .5s;\r\n    -o-transition: all .5s;\r\n    transition: all .5s;\r\n}\r\n\r\n.module__arrow:hover {\r\n    cursor: pointer;\r\n    margin-top: 30px;\r\n}\r\n\r\n.upper {\r\n    cursor: pointer;\r\n    position: fixed;\r\n    right: 2%;\r\n    top: 2%;\r\n    z-index: 310230120;\r\n}\r\n\r\n.upper__arrow {\r\n    display: inline-flex;\r\n    width: 1.125rem;\r\n    height: 1.125rem;\r\n    border-top: 2px solid;\r\n    border-left: 2px solid;\r\n    border-color: white;\r\n    transform: rotate(45deg);\r\n    top: 0.75rem;\r\n    bottom: 0;\r\n    margin: auto;\r\n    position: absolute;\r\n    left: 0;\r\n    right: 0;\r\n    -webkit-transition: all .5s;\r\n    -o-transition: all .5s;\r\n    transition: all .5s;\r\n}\r\n\r\n.upper__back {\r\n    position: relative;\r\n    border-radius: 3.125rem;\r\n    width: 1.875rem;\r\n    height: 1.875rem;\r\n    flex-shrink: 0;\r\n    background: rgba(5, 5, 5, 0.5);\r\n    backdrop-filter: blur(0.125rem);\r\n    z-index: -3;\r\n    filter: blur(0.9375rem);\r\n\r\n}\r\n\r\n.projects {\r\n    margin-top: 18.75rem;\r\n    color: white;\r\n}\r\n\r\n.navigation {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    z-index: 100000000;\r\n    color: white;\r\n}\r\n\r\n.none {\r\n    top: 0;\r\n}\r\n\r\n.projects__cards {\r\n    display: flex;\r\n    gap: 1.875rem;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n    margin-top: 2.5rem;\r\n}\r\n\r\n.projects__title {\r\n    font-size: 1.25rem;\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    line-height: normal;\r\n    text-align: center;\r\n}\r\n\r\n\r\n\r\n.card___blur {\r\n    width: 35.625rem;\r\n    height: 18.75rem;\r\n    flex-shrink: 0;\r\n    border-radius: 2.1875rem;\r\n    border: 0.0625rem solid #FFF;\r\n    background: #D9D9D9;\r\n    filter: blur(0.5rem);\r\n    top: 0;\r\n    bottom: 0;\r\n    margin: auto;\r\n    position: absolute;\r\n    left: 0;\r\n    right: 0;\r\n    z-index: -2;\r\n    animation: none;\r\n}\r\n\r\n.blur__cards {\r\n    display: flex;\r\n    flex-direction: row;\r\n    flex-wrap: wrap;\r\n    position: absolute;\r\n    justify-content: center;\r\n    z-index: -1;\r\n    gap: 1.875rem;\r\n}\r\n\r\n.site {\r\n    width: 35.625rem;\r\n    height: 18.75rem;\r\n    border-radius: 2.1875rem;\r\n    object-fit: cover;\r\n    object-position: 50% 50%;\r\n    -webkit-transition: all .5s;\r\n    -o-transition: all .5s;\r\n    transition: all .5s;\r\n}\r\n\r\n.img__div {\r\n    position: relative;\r\n}\r\n\r\n.img__blur {\r\n    width: 3.125rem;\r\n    height: 3.125rem;\r\n    flex-shrink: 0;\r\n    top: 0;\r\n    bottom: 0;\r\n    margin: auto;\r\n    position: absolute;\r\n    left: 0;\r\n    right: 0;\r\n    border-radius: 3.125rem;\r\n    border: 0.0625rem solid black;\r\n    background-repeat: no-repeat;\r\n    background-size: auto;\r\n    background-position: center center;\r\n    background-image: url('../img/magnifier.png');\r\n    z-index: -5;\r\n    fill: rgba(217, 217, 217, 0.50);\r\n    backdrop-filter: blur(0.125rem);\r\n}\r\n\r\n.card1:hover .img__blur1 {\r\n    z-index: 2;\r\n}\r\n\r\n.card1:hover {\r\n    opacity: .6;\r\n}\r\n\r\n.card1:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n.card1:hover .site {\r\n    width: 36.875rem;\r\n    height: 20rem;\r\n    cursor: pointer;\r\n}\r\n\r\n.card1:hover .br1 {\r\n    width: 36.875rem;\r\n    height: 20rem;\r\n}\r\n\r\n.card2:hover .img__blur2 {\r\n    z-index: 2;\r\n}\r\n\r\n.card2:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n.card2:hover {\r\n    opacity: .6;\r\n}\r\n\r\n.card2:hover .site {\r\n    width: 36.875rem;\r\n    height: 20rem;\r\n    cursor: pointer;\r\n}\r\n\r\n.card2:hover .br2 {\r\n    width: 36.875rem;\r\n    height: 20rem;\r\n}\r\n\r\n.card3:hover .img__blur3 {\r\n    z-index: 2;\r\n}\r\n\r\n.card3:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n.card3:hover {\r\n    opacity: .6;\r\n}\r\n\r\n.card3:hover .site {\r\n    width: 36.875rem;\r\n    height: 20rem;\r\n    cursor: pointer;\r\n}\r\n\r\n.card3:hover .br3 {\r\n    width: 36.875rem;\r\n    height: 20rem;\r\n}\r\n\r\n.card4:hover .img__blur4 {\r\n    z-index: 2;\r\n}\r\n\r\n.card4:hover {\r\n    opacity: .6;\r\n}\r\n\r\n.card4:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n.card4:hover .site {\r\n    width: 36.875rem;\r\n    height: 20rem;\r\n    cursor: pointer;\r\n}\r\n\r\n.card4:hover .br4 {\r\n    width: 36.875rem;\r\n    height: 20rem;\r\n}\r\n\r\n.services__title {\r\n    text-align: center;\r\n    font-size: 1.25rem;\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    line-height: normal;\r\n    text-align: center;\r\n    -webkit-transition: all .5s;\r\n    -o-transition: all .5s;\r\n    transition: all .5s;\r\n}\r\n\r\n.services__block {\r\n    margin-top: 7.5rem;\r\n    color: white;\r\n    position: relative;\r\n}\r\n\r\n.services__cards {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n    gap: 1.875rem;\r\n    margin-top: 2.5rem;\r\n}\r\n\r\n.services__card-back {\r\n    position: absolute;\r\n    width: 23.125rem;\r\n    height: 20rem;\r\n    flex-shrink: 0;\r\n    border-radius: 35px;\r\n    border: 0.0625rem solid #FFF;\r\n    background: #262424;\r\n}\r\n\r\n.s1 {\r\n    -webkit-transition: all .5s;\r\n    -o-transition: all .5s;\r\n    transition: all .5s;\r\n}\r\n\r\n.sbl1 {\r\n    z-index: -2;\r\n    -webkit-transition: all .5s;\r\n    -o-transition: all .5s;\r\n    transition: all .5s;\r\n}\r\n\r\n.s1:hover {\r\n    width: 24.375rem;\r\n    height: 21.25rem;\r\n}\r\n\r\n.s1:hover .sbl1 {\r\n    width: 24.375rem;\r\n    height: 21.25rem;\r\n}\r\n\r\n.s2 {\r\n    -webkit-transition: all .5s;\r\n    -o-transition: all .5s;\r\n    transition: all .5s;\r\n}\r\n\r\n.sbl2 {\r\n    z-index: -2;\r\n    -webkit-transition: all .5s;\r\n    -o-transition: all .5s;\r\n    transition: all .5s;\r\n}\r\n\r\n.s2:hover {\r\n    width: 24.375rem;\r\n    height: 21.25rem;\r\n}\r\n\r\n.s2:hover .sbl2 {\r\n    width: 24.375rem;\r\n    height: 21.25rem;\r\n}\r\n\r\n.s3 {\r\n    -webkit-transition: all .5s;\r\n    -o-transition: all .5s;\r\n    transition: all .5s;\r\n}\r\n\r\n.sbl3 {\r\n    z-index: -2;\r\n    -webkit-transition: all .5s;\r\n    -o-transition: all .5s;\r\n    transition: all .5s;\r\n}\r\n\r\n.s3:hover {\r\n    width: 24.375rem;\r\n    height: 21.25rem;\r\n}\r\n\r\n.s3:hover .sbl3 {\r\n    width: 24.375rem;\r\n    height: 21.25rem;\r\n}\r\n\r\n.services__cards-back {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 1.875rem;\r\n    z-index: -1;\r\n    top: 0;\r\n    bottom: 0;\r\n    margin: auto;\r\n    position: absolute;\r\n    left: 0;\r\n    right: 0;\r\n    margin-top: 4.0625rem;\r\n}\r\n\r\n.services__card {\r\n    width: 23.125rem;\r\n    height: 20rem;\r\n    flex-shrink: 0;\r\n    border-radius: 2.1875rem 2.1875rem 12.5rem 2.1875rem;\r\n    border: 0.0625rem solid #FFF;\r\n    background: #262424;\r\n    box-shadow: 0rem 0.25rem 1.875rem 0rem rgba(173, 173, 173, 0.25);\r\n}\r\n\r\n.service__box {\r\n    margin: 1.875rem;\r\n}\r\n\r\n.services__card-text {\r\n    margin-top: 1.875rem;\r\n    color: #FFF;\r\n    font-size: 1.25rem;\r\n    font-style: normal;\r\n    font-weight: 300;\r\n    line-height: normal;\r\n}\r\n\r\n.noop {\r\n    position: absolute;\r\n    bottom: 28.125rem;\r\n}\r\n\r\n.services__card-btn {\r\n    width: 9.5rem;\r\n    height: 2.75rem;\r\n    flex-shrink: 0;\r\n    border-radius: 8.1875rem;\r\n    border: 0.0625rem solid #FFF;\r\n    background: rgba(255, 255, 255, 0.00);\r\n    color: white;\r\n    color: #FFF;\r\n    font-family: Montserrat;\r\n    font-size: 1.25rem;\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    line-height: normal;\r\n    margin-top: 3.8125rem;\r\n    -webkit-transition: all .5s;\r\n    -o-transition: all .5s;\r\n    transition: all .5s;\r\n}\r\n\r\n.services__title:hover {\r\n    font-size: 1.5rem;\r\n}\r\n\r\n.services__block:hover {\r\n    cursor: default;\r\n}\r\n\r\n.services__card-btn:hover {\r\n    cursor: pointer;\r\n    background-color: white;\r\n    color: black;\r\n    border: 0.0625rem solid #000;\r\n}\r\n\r\n.s1:hover .services__card-btn1 {\r\n    margin-top: 5.0625rem;\r\n}\r\n\r\n.s2:hover .services__card-btn2 {\r\n    margin-top: 5.0625rem;\r\n}\r\n\r\n.s3:hover .services__card-btn3 {\r\n    margin-top: 3.625rem;\r\n}\r\n\r\n.services__card-btn3 {\r\n    margin-top: 2.3125rem;\r\n}\r\n\r\n.services__card-title {\r\n    font-size: 1.5rem;\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    line-height: normal;\r\n}\r\n\r\n.footer__contact {\r\n    color: white;\r\n    margin-top: 21.5625rem;\r\n    position: relative;\r\n}\r\n\r\n.footer__contact:hover {\r\n    cursor: default;\r\n}\r\n\r\n.footer__contact-title {\r\n    text-align: center;\r\n    font-size: 1.25rem;\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    line-height: normal;\r\n    -webkit-transition: all .5s;\r\n    -o-transition: all .5s;\r\n    transition: all .5s;\r\n}\r\n\r\n.footer__contact-title:hover {\r\n    font-size: 1.5rem;\r\n}\r\n\r\n.footer__contact-links {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    font-family: Montserrat;\r\n    font-size: 1rem;\r\n    font-style: normal;\r\n    font-weight: 300;\r\n    line-height: normal;\r\n    padding: 1.875rem;\r\n}\r\n\r\n.footer__contact-blur {\r\n    bottom: 1.5625rem;\r\n    margin: auto;\r\n    position: absolute;\r\n    left: 0;\r\n    right: 0;\r\n    width: 60%;\r\n    height: 3.75rem;\r\n    flex-shrink: 0;\r\n    z-index: -1;\r\n    border-radius: 2.1875rem 2.1875rem 0 0;\r\n    border: 0.0625rem solid #FFF;\r\n    background: #D9D9D9;\r\n    filter: blur(0.5rem);\r\n    \r\n}\r\n\r\n.footer__contact-content {\r\n    margin: 0;\r\n    width: 60%;\r\n    height: 5.625rem;\r\n    flex-shrink: 0;\r\n    border-radius: 2.1875rem 2.1875rem 0 0;\r\n    background: #262424;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    margin-top: 2.5rem;\r\n}\r\n\r\n.link {\r\n    display: inline-block;\r\n}\r\n\r\n.link:nth-child(1n + 2) {\r\n    margin-left: 10rem;\r\n}\r\n\r\n.link__tg {\r\n    text-decoration: none;\r\n    color: white;\r\n}\r\n\r\n\r\n.telegram {\r\n    -webkit-transition: all .5s;\r\n    -o-transition: all .5s;\r\n    transition: all .5s;\r\n}\r\n\r\n.vks {\r\n    -webkit-transition: all .5s;\r\n    -o-transition: all .5s;\r\n    transition: all .5s;\r\n}\r\n\r\n.github {\r\n    -webkit-transition: all .5s;\r\n    -o-transition: all .5s;\r\n    transition: all .5s;\r\n}\r\n\r\n.whatsapp {\r\n    -webkit-transition: all .5s;\r\n    -o-transition: all .5s;\r\n    transition: all .5s;\r\n}\r\n\r\n.link__tg:hover .telegram {\r\n    border-bottom: 0.0625rem solid white;\r\n    padding-bottom: 0.3125rem;\r\n    font-size: 1.125rem\r\n}\r\n\r\n.link__tg:hover .vks {\r\n    border-bottom: 0.0625rem solid white;\r\n    padding-bottom: 0.3125rem;\r\n    font-size: 1.125rem\r\n}\r\n\r\n.link__tg:hover .github {\r\n    border-bottom: 0.0625rem solid white;\r\n    padding-bottom: 0.3125rem;\r\n    font-size: 1.125rem\r\n}\r\n\r\n.link__tg:hover .whatsapp {\r\n    border-bottom: 0.0625rem solid white;\r\n    padding-bottom: 0.3125rem;\r\n    font-size: 1.125rem\r\n}\r\n\r\n.svg__img {\r\n    display: inline-block;\r\n    text-align: center;\r\n    vertical-align: middle;\r\n}\r\n\r\n.vk {\r\n    margin-left: 0.5rem;\r\n}\r\n\r\n.gh {\r\n    margin-left: 0.5rem;\r\n}\r\n\r\n.wa {\r\n    margin-left: 0.375rem;\r\n}\r\n\r\n@media (max-width: 767px){\r\n    .link {\r\n        display: none;\r\n    }\r\n}\r\n\r\n@media (max-width: 992px){\r\n    canvas {\r\n        width: 992px;\r\n    }\r\n}\r\n\r\n@media (max-width: 767px){\r\n    canvas {\r\n        width: 767px;\r\n    }\r\n}\r\n\r\n.slider__layer {\r\n    position: absolute;\r\n\tinset: 0;\r\n\tbackground-size: cover;\r\n\tbackground-position: center;\r\n\twill-change: transform;\r\n    z-index: -10000;\r\n}\r\n\r\n.for-projects {\r\n    top: 740px;\r\n}\r\n/* \r\n@media (max-width: 575px){\r\n    .nav__ul {\r\n        font-size: 0.75rem;\r\n    }\r\n\r\n    .upper {\r\n        display: none;\r\n    }\r\n\r\n    .module {\r\n        width: 15rem;\r\n        height: 12.125rem;\r\n        margin-top: 16.875rem;\r\n        margin-left: auto;\r\n        margin-right: auto;\r\n    }\r\n\r\n    .module__title {\r\n        font-size: 1.55rem;\r\n    }\r\n\r\n    .module__text {\r\n        font-size: 0.85rem;\r\n    }\r\n\r\n    .module__arrow {\r\n        width: 1.3625rem;\r\n        height: 1.3625rem;\r\n    }\r\n} */"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "./node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./img/apple-icon-57x57.png */ "./src/img/apple-icon-57x57.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./img/apple-icon-60x60.png */ "./src/img/apple-icon-60x60.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./img/apple-icon-72x72.png */ "./src/img/apple-icon-72x72.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./img/apple-icon-76x76.png */ "./src/img/apple-icon-76x76.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./img/apple-icon-114x114.png */ "./src/img/apple-icon-114x114.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./img/apple-icon-120x120.png */ "./src/img/apple-icon-120x120.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ./img/apple-icon-144x144.png */ "./src/img/apple-icon-144x144.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ./img/apple-icon-152x152.png */ "./src/img/apple-icon-152x152.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ./img/apple-icon-180x180.png */ "./src/img/apple-icon-180x180.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ./img/android-icon-192x192.png */ "./src/img/android-icon-192x192.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ./img/favicon-32x32.png */ "./src/img/favicon-32x32.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(/*! ./img/favicon-96x96.png */ "./src/img/favicon-96x96.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_12___ = new URL(/* asset import */ __webpack_require__(/*! ./img/favicon-16x16.png */ "./src/img/favicon-16x16.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_13___ = new URL(/* asset import */ __webpack_require__(/*! ./img/manifest.json */ "./src/img/manifest.json"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_14___ = new URL(/* asset import */ __webpack_require__(/*! ./img/ms-icon-144x144.png */ "./src/img/ms-icon-144x144.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_15___ = new URL(/* asset import */ __webpack_require__(/*! ./libs/particles/particles.js */ "./src/libs/particles/particles.js"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_16___ = new URL(/* asset import */ __webpack_require__(/*! ./img/first_screen.png */ "./src/img/first_screen.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_17___ = new URL(/* asset import */ __webpack_require__(/*! ./img/second_screen.png */ "./src/img/second_screen.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_18___ = new URL(/* asset import */ __webpack_require__(/*! ./img/third_screen.png */ "./src/img/third_screen.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_19___ = new URL(/* asset import */ __webpack_require__(/*! ./img/fourth_screen.png */ "./src/img/fourth_screen.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_20___ = new URL(/* asset import */ __webpack_require__(/*! ./img/fifth_screen.png */ "./src/img/fifth_screen.png"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);
var ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);
var ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);
var ___HTML_LOADER_REPLACEMENT_6___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_6___);
var ___HTML_LOADER_REPLACEMENT_7___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_7___);
var ___HTML_LOADER_REPLACEMENT_8___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_8___);
var ___HTML_LOADER_REPLACEMENT_9___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_9___);
var ___HTML_LOADER_REPLACEMENT_10___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_10___);
var ___HTML_LOADER_REPLACEMENT_11___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_11___);
var ___HTML_LOADER_REPLACEMENT_12___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_12___);
var ___HTML_LOADER_REPLACEMENT_13___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_13___);
var ___HTML_LOADER_REPLACEMENT_14___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_14___);
var ___HTML_LOADER_REPLACEMENT_15___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_15___);
var ___HTML_LOADER_REPLACEMENT_16___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_16___);
var ___HTML_LOADER_REPLACEMENT_17___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_17___);
var ___HTML_LOADER_REPLACEMENT_18___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_18___);
var ___HTML_LOADER_REPLACEMENT_19___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_19___);
var ___HTML_LOADER_REPLACEMENT_20___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_20___);
var code = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n<head>\r\n    <meta charset=\"UTF-8\">\r\n    <link rel=\"apple-touch-icon\" sizes=\"57x57\" href=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\">\r\n    <link rel=\"apple-touch-icon\" sizes=\"60x60\" href=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\">\r\n    <link rel=\"apple-touch-icon\" sizes=\"72x72\" href=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\">\r\n    <link rel=\"apple-touch-icon\" sizes=\"76x76\" href=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\">\r\n    <link rel=\"apple-touch-icon\" sizes=\"114x114\" href=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\">\r\n    <link rel=\"apple-touch-icon\" sizes=\"120x120\" href=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\">\r\n    <link rel=\"apple-touch-icon\" sizes=\"144x144\" href=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\">\r\n    <link rel=\"apple-touch-icon\" sizes=\"152x152\" href=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\">\r\n    <link rel=\"apple-touch-icon\" sizes=\"180x180\" href=\"" + ___HTML_LOADER_REPLACEMENT_8___ + "\">\r\n    <link rel=\"icon\" type=\"image/png\" sizes=\"192x192\"  href=\"" + ___HTML_LOADER_REPLACEMENT_9___ + "\">\r\n    <link rel=\"icon\" type=\"image/png\" sizes=\"32x32\" href=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\">\r\n    <link rel=\"icon\" type=\"image/png\" sizes=\"96x96\" href=\"" + ___HTML_LOADER_REPLACEMENT_11___ + "\">\r\n    <link rel=\"icon\" type=\"image/png\" sizes=\"16x16\" href=\"" + ___HTML_LOADER_REPLACEMENT_12___ + "\">\r\n    <link rel=\"manifest\" href=\"" + ___HTML_LOADER_REPLACEMENT_13___ + "\">\r\n    <!-- <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"> -->\r\n    <meta name=\"msapplication-TileColor\" content=\"#ffffff\">\r\n    <meta name=\"msapplication-TileImage\" content=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\">\r\n    <meta name=\"theme-color\" content=\"#ffffff\">\r\n    <" + "script src=\"" + ___HTML_LOADER_REPLACEMENT_15___ + "\" defer><" + "/script>\r\n    <title>WebVlad</title>\r\n</head>\r\n<body>\r\n    <div class=\"wrapper\">\r\n        \r\n        <div class=\"header\">\r\n            <canvas class=\"particles slider__layer\" data-color=\"#fafafa\"></canvas>\r\n            <div class=\"upper\">\r\n                <div class=\"upper__arrow\"></div>\r\n                <div class=\"upper__back\"></div>\r\n            </div>\r\n            <div style=\"position: absolute;\" class=\"none\"></div>\r\n            <div class=\"navigation\">\r\n    \r\n                <div class=\"blur__header\"></div>\r\n                <div class=\"blur__scroll\"></div>\r\n                <div class=\"nav\">\r\n                    <ul class=\"nav__ul\">\r\n                        <li class=\"about\">Обо мне</li>\r\n                        <li class=\"proj\">Портфолио</li>\r\n                        <li class=\"services\">Услуги</li>\r\n                        <li class=\"contacts\">Контакты</li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n            <div class=\"blur__module\"></div>\r\n            \r\n            <div class=\"module\">\r\n                <div class=\"module__title\">Привет, я разработчик</div>\r\n                <div class=\"module__text\">Я занимаюсь Web-разработкой и UI/UX дизайном. Ниже вы можете ознакомиться с моими услугами, проектами и узнать как со мной связаться</div>\r\n                <div class=\"module__arrow\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"projects\">\r\n            <div class=\"projects__title\">Проекты</div>\r\n            <div class=\"projects__cards\">\r\n                <div class=\"projects__cards-card card1\">\r\n                    <div class=\"img__div\">\r\n                        <a href=\"https://postimg.cc/GB78210D\" target=\"_blank\">\r\n                            <img class=\"site\" src=\"" + ___HTML_LOADER_REPLACEMENT_16___ + "\" alt=\"img1\">\r\n                            <div class=\"card___blur br1\"></div>\r\n                            <div class=\"img__blur img__blur1\"></div>\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n                <div class=\"projects__cards-card card2\">\r\n                    <div class=\"img__div\">\r\n                        <a href=\"https://postimg.cc/bZmjXVPd\" target=\"_blank\">\r\n                            <img class=\"site\" src=\"" + ___HTML_LOADER_REPLACEMENT_17___ + "\" alt=\"img1\">\r\n                            <div class=\"card___blur br2\"></div>\r\n                            <div class=\"img__blur img__blur2\"></div>\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n                <div class=\"projects__cards-card card3\">\r\n                    <div class=\"img__div\">\r\n                        <a href=\"https://postimg.cc/JGC6pN9g\" target=\"_blank\">\r\n                            <img class=\"site\" src=\"" + ___HTML_LOADER_REPLACEMENT_18___ + "\" alt=\"img1\">\r\n                            <div class=\"card___blur br3\"></div>\r\n                            <div class=\"img__blur img__blur3\"></div>\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n                <div class=\"projects__cards-card card4\">\r\n                    <div class=\"img__div\">\r\n                        <a href=\"https://postimg.cc/DWVw0y0R\" target=\"_blank\">\r\n                            <img class=\"site\" src=\"" + ___HTML_LOADER_REPLACEMENT_19___ + "\" alt=\"img1\">\r\n                            <div class=\"card___blur br4\"></div>\r\n                            <div class=\"img__blur img__blur4\"></div>\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n                <div class=\"projects__cards-card card4\">\r\n                    <div class=\"img__div\">\r\n                        <a href=\"http://geektop26.ru\" target=\"_blank\">\r\n                            <img class=\"site\" src=\"" + ___HTML_LOADER_REPLACEMENT_20___ + "\" alt=\"img1\">\r\n                            <div class=\"card___blur br4\"></div>\r\n                            <div class=\"img__blur img__blur4\"></div>\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"services__block\">\r\n            <div class=\"noop\"></div>\r\n            <div class=\"services__title\">Услуги</div>\r\n            <div class=\"services__cards\">\r\n                <div class=\"services__card s1\">\r\n                    <div class=\"services__card-back sbl1\"></div>\r\n                    <div class=\"service__box\">\r\n                        <div class=\"services__card-title\">Одностраничный сайт</div>\r\n                        <div class=\"services__card-text\">Сайт несколько страниц. Отлично подходит для презентации ваших продуктов и услуг</div>\r\n                        <button class=\"services__card-btn services__card-btn1\">Интересует</button>\r\n                    </div>\r\n                </div>\r\n                <div class=\"services__card s2\">\r\n                    <div class=\"services__card-back sbl2\"></div>\r\n                    <div class=\"service__box\">\r\n                        <div class=\"services__card-title\">Многостраничный сайт</div>\r\n                        <div class=\"services__card-text\">Сайт несколько страниц. Отлично подходит для презентации ваших продуктов и услуг</div>\r\n                        <button class=\"services__card-btn services__card-btn2\">Интересует</button>\r\n                    </div>\r\n                </div>\r\n                <div class=\"services__card s3\">\r\n                    <div class=\"services__card-back sbl3\"></div>\r\n                    <div class=\"service__box\">\r\n                        <div class=\"services__card-title\">Интернет-магазин</div>\r\n                        <div class=\"services__card-text\">Полноценный интернет магазин с подключением всех необходимых услуг. Таких как оплата, корзина, заявка, подписка и т.д.</div>\r\n                        <button class=\"services__card-btn services__card-btn3\">Интересует</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"footer__contact\">\r\n            <div class=\"footer__contact-title\">Связаться со мной</div>\r\n            <div class=\"footer__contact-blur\"></div>\r\n            <div class=\"footer__contact-content\">\r\n                <div class=\"footer__contact-links\">\r\n                    <a class=\"link__tg\" target=\"_blank\" href=\"https://t.me/Zireael112\">\r\n                        <div class=\"tg__block\">\r\n                            <div class=\"link telegram\">Telegram</div>\r\n                        <div class=\"tg svg__img\"><?xml version=\"1.0\" encoding=\"utf-8\"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->\r\n                            <svg width=\"32px\" height=\"32px\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                            <path d=\"M12 4C10.4178 4 8.87103 4.46919 7.55544 5.34824C6.23985 6.22729 5.21447 7.47672 4.60897 8.93853C4.00347 10.4003 3.84504 12.0089 4.15372 13.5607C4.4624 15.1126 5.22433 16.538 6.34315 17.6569C7.46197 18.7757 8.88743 19.5376 10.4393 19.8463C11.9911 20.155 13.5997 19.9965 15.0615 19.391C16.5233 18.7855 17.7727 17.7602 18.6518 16.4446C19.5308 15.129 20 13.5823 20 12C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4ZM15.93 9.48L14.62 15.67C14.52 16.11 14.26 16.21 13.89 16.01L11.89 14.53L10.89 15.46C10.8429 15.5215 10.7824 15.5715 10.7131 15.6062C10.6438 15.6408 10.5675 15.6592 10.49 15.66L10.63 13.66L14.33 10.31C14.5 10.17 14.33 10.09 14.09 10.23L9.55 13.08L7.55 12.46C7.12 12.33 7.11 12.03 7.64 11.83L15.35 8.83C15.73 8.72 16.05 8.94 15.93 9.48Z\" fill=\"#fff\"/>\r\n                            </svg></div>\r\n                        </div>\r\n                    </a>\r\n                    <a class=\"link__tg\" target=\"_blank\" href=\"https://vk.com/id229997013\">\r\n                        <div class=\"vk__block\">\r\n                            <div class=\"link vks\">VK</div>\r\n                        <div class=\"vk svg__img\">\r\n                            <svg fill=\"#fff\" width=\"24px\" height=\"24px\" viewBox=\"0 0 32 32\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                                <title>vk</title>\r\n                                <path d=\"M25.217 22.402h-2.179c-0.825 0-1.080-0.656-2.562-2.158-1.291-1.25-1.862-1.418-2.179-1.418-0.445 0-0.572 0.127-0.572 0.741v1.968c0 0.53-0.169 0.847-1.566 0.847-2.818-0.189-5.24-1.726-6.646-3.966l-0.021-0.035c-1.632-2.027-2.835-4.47-3.43-7.142l-0.022-0.117c0-0.317 0.127-0.614 0.741-0.614h2.179c0.55 0 0.762 0.254 0.975 0.846 1.078 3.112 2.878 5.842 3.619 5.842 0.275 0 0.402-0.127 0.402-0.825v-3.219c-0.085-1.482-0.868-1.608-0.868-2.137 0.009-0.283 0.241-0.509 0.525-0.509 0.009 0 0.017 0 0.026 0.001l-0.001-0h3.429c0.466 0 0.635 0.254 0.635 0.804v4.34c0 0.465 0.212 0.635 0.339 0.635 0.275 0 0.509-0.17 1.016-0.677 1.054-1.287 1.955-2.759 2.642-4.346l0.046-0.12c0.145-0.363 0.493-0.615 0.9-0.615 0.019 0 0.037 0.001 0.056 0.002l-0.003-0h2.179c0.656 0 0.805 0.337 0.656 0.804-0.874 1.925-1.856 3.579-2.994 5.111l0.052-0.074c-0.232 0.381-0.317 0.55 0 0.975 0.232 0.317 0.995 0.973 1.503 1.566 0.735 0.727 1.351 1.573 1.816 2.507l0.025 0.055c0.212 0.612-0.106 0.93-0.72 0.93zM20.604 1.004h-9.207c-8.403 0-10.392 1.989-10.392 10.392v9.207c0 8.403 1.989 10.392 10.392 10.392h9.207c8.403 0 10.392-1.989 10.392-10.392v-9.207c0-8.403-2.011-10.392-10.392-10.392z\"></path>\r\n                                </svg>\r\n                            </div>\r\n                        </div>\r\n                    </a>\r\n                    <a class=\"link__tg\" target=\"_blank\" href=\"https://github.com/Zireael112\">\r\n                                            \r\n                    <div class=\"gh__block\">\r\n                        <div class=\"link github\">GitHub</div>\r\n                        <div class=\"gh svg__img\">\r\n                            <?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?>\r\n    <!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->\r\n    <svg width=\"24px\" height=\"24px\" viewBox=\"0 0 20 20\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n        \r\n        <title>github [#142]</title>\r\n        <desc>Created with Sketch.</desc>\r\n        <defs>\r\n    \r\n    </defs>\r\n        <g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\r\n            <g id=\"Dribbble-Light-Preview\" transform=\"translate(-140.000000, -7559.000000)\" fill=\"#fff\">\r\n                <g id=\"icons\" transform=\"translate(56.000000, 160.000000)\">\r\n                    <path d=\"M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399\" id=\"github-[#142]\">\r\n    \r\n    </path>\r\n                </g>\r\n            </g>\r\n        </g>\r\n    </svg>\r\n                        </div>\r\n                    </div>\r\n                    </a>\r\n                    <a class=\"link__tg\" target=\"_blank\" href=\"https://wa.me/79097547805\">\r\n                        <div class=\"wa__block\">\r\n                            <div class=\"link whatsapp\">WhatsApp</div>\r\n                            <div class=\"wa svg__img\">\r\n                                <?xml version=\"1.0\" encoding=\"utf-8\"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->\r\n        <svg width=\"24px\" height=\"24px\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n        <path d=\"M6.014 8.00613C6.12827 7.1024 7.30277 5.87414 8.23488 6.01043L8.23339 6.00894C9.14051 6.18132 9.85859 7.74261 10.2635 8.44465C10.5504 8.95402 10.3641 9.4701 10.0965 9.68787C9.7355 9.97883 9.17099 10.3803 9.28943 10.7834C9.5 11.5 12 14 13.2296 14.7107C13.695 14.9797 14.0325 14.2702 14.3207 13.9067C14.5301 13.6271 15.0466 13.46 15.5548 13.736C16.3138 14.178 17.0288 14.6917 17.69 15.27C18.0202 15.546 18.0977 15.9539 17.8689 16.385C17.4659 17.1443 16.3003 18.1456 15.4542 17.9421C13.9764 17.5868 8 15.27 6.08033 8.55801C5.97237 8.24048 5.99955 8.12044 6.014 8.00613Z\" fill=\"#fff\"/>\r\n        <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12 23C10.7764 23 10.0994 22.8687 9 22.5L6.89443 23.5528C5.56462 24.2177 4 23.2507 4 21.7639V19.5C1.84655 17.492 1 15.1767 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23ZM6 18.6303L5.36395 18.0372C3.69087 16.4772 3 14.7331 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C11.0143 21 10.552 20.911 9.63595 20.6038L8.84847 20.3397L6 21.7639V18.6303Z\" fill=\"#fff\"/>\r\n        </svg>\r\n                            </div>  \r\n                        </div>\r\n                    </a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</body>\r\n</html>\r\n";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url.default : url);

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }

  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }

  return url;
};

/***/ }),

/***/ "./src/css/font.css":
/*!**************************!*\
  !*** ./src/css/font.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_font_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./font.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/font.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_font_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_font_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_font_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_font_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/libs/particles/particles.js":
/*!*****************************************!*\
  !*** ./src/libs/particles/particles.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/particles.js";

/***/ }),

/***/ "./src/img/android-icon-192x192.png":
/*!******************************************!*\
  !*** ./src/img/android-icon-192x192.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/android-icon-192x192.png";

/***/ }),

/***/ "./src/img/apple-icon-114x114.png":
/*!****************************************!*\
  !*** ./src/img/apple-icon-114x114.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/apple-icon-114x114.png";

/***/ }),

/***/ "./src/img/apple-icon-120x120.png":
/*!****************************************!*\
  !*** ./src/img/apple-icon-120x120.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/apple-icon-120x120.png";

/***/ }),

/***/ "./src/img/apple-icon-144x144.png":
/*!****************************************!*\
  !*** ./src/img/apple-icon-144x144.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/apple-icon-144x144.png";

/***/ }),

/***/ "./src/img/apple-icon-152x152.png":
/*!****************************************!*\
  !*** ./src/img/apple-icon-152x152.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/apple-icon-152x152.png";

/***/ }),

/***/ "./src/img/apple-icon-180x180.png":
/*!****************************************!*\
  !*** ./src/img/apple-icon-180x180.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/apple-icon-180x180.png";

/***/ }),

/***/ "./src/img/apple-icon-57x57.png":
/*!**************************************!*\
  !*** ./src/img/apple-icon-57x57.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/apple-icon-57x57.png";

/***/ }),

/***/ "./src/img/apple-icon-60x60.png":
/*!**************************************!*\
  !*** ./src/img/apple-icon-60x60.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/apple-icon-60x60.png";

/***/ }),

/***/ "./src/img/apple-icon-72x72.png":
/*!**************************************!*\
  !*** ./src/img/apple-icon-72x72.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/apple-icon-72x72.png";

/***/ }),

/***/ "./src/img/apple-icon-76x76.png":
/*!**************************************!*\
  !*** ./src/img/apple-icon-76x76.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/apple-icon-76x76.png";

/***/ }),

/***/ "./src/img/favicon-16x16.png":
/*!***********************************!*\
  !*** ./src/img/favicon-16x16.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/favicon-16x16.png";

/***/ }),

/***/ "./src/img/favicon-32x32.png":
/*!***********************************!*\
  !*** ./src/img/favicon-32x32.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/favicon-32x32.png";

/***/ }),

/***/ "./src/img/favicon-96x96.png":
/*!***********************************!*\
  !*** ./src/img/favicon-96x96.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/favicon-96x96.png";

/***/ }),

/***/ "./src/img/fifth_screen.png":
/*!**********************************!*\
  !*** ./src/img/fifth_screen.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/fifth_screen.png";

/***/ }),

/***/ "./src/img/first_screen.png":
/*!**********************************!*\
  !*** ./src/img/first_screen.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/first_screen.png";

/***/ }),

/***/ "./src/img/fourth_screen.png":
/*!***********************************!*\
  !*** ./src/img/fourth_screen.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/fourth_screen.png";

/***/ }),

/***/ "./src/img/magnifier.png":
/*!*******************************!*\
  !*** ./src/img/magnifier.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/magnifier.png";

/***/ }),

/***/ "./src/img/ms-icon-144x144.png":
/*!*************************************!*\
  !*** ./src/img/ms-icon-144x144.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/ms-icon-144x144.png";

/***/ }),

/***/ "./src/img/second_screen.png":
/*!***********************************!*\
  !*** ./src/img/second_screen.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/second_screen.png";

/***/ }),

/***/ "./src/img/third_screen.png":
/*!**********************************!*\
  !*** ./src/img/third_screen.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/third_screen.png";

/***/ }),

/***/ "./src/fonts/Montserrat-Medium.woff":
/*!******************************************!*\
  !*** ./src/fonts/Montserrat-Medium.woff ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/Montserrat-Medium.woff";

/***/ }),

/***/ "./src/fonts/Montserrat-Medium.woff2":
/*!*******************************************!*\
  !*** ./src/fonts/Montserrat-Medium.woff2 ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/Montserrat-Medium.woff2";

/***/ }),

/***/ "./src/fonts/Montserrat-Regular.woff":
/*!*******************************************!*\
  !*** ./src/fonts/Montserrat-Regular.woff ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/Montserrat-Regular.woff";

/***/ }),

/***/ "./src/fonts/Montserrat-Regular.woff2":
/*!********************************************!*\
  !*** ./src/fonts/Montserrat-Regular.woff2 ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/Montserrat-Regular.woff2";

/***/ }),

/***/ "./src/fonts/Montserrat-Thin.woff":
/*!****************************************!*\
  !*** ./src/fonts/Montserrat-Thin.woff ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/Montserrat-Thin.woff";

/***/ }),

/***/ "./src/fonts/Montserrat-Thin.woff2":
/*!*****************************************!*\
  !*** ./src/fonts/Montserrat-Thin.woff2 ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/Montserrat-Thin.woff2";

/***/ }),

/***/ "./src/img/manifest.json":
/*!*******************************!*\
  !*** ./src/img/manifest.json ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/manifest.json";

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html */ "./src/index.html");
/* harmony import */ var _js_app_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/app.js */ "./src/js/app.js");
/* harmony import */ var _js_app_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_app_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css/style.css */ "./src/css/style.css");
/* harmony import */ var _css_font_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./css/font.css */ "./src/css/font.css");




})();

/******/ })()
;
//# sourceMappingURL=main.8d7152c618c91b47979f.js.map