"use strict";
(self["webpackChunkodin_restaurant"] = self["webpackChunkodin_restaurant"] || []).push([["main"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _load_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./load.js */ "./src/load.js");


//const content = document.getElementById("content");
document.body.appendChild((0,_load_js__WEBPACK_IMPORTED_MODULE_0__["default"])());

/***/ }),

/***/ "./src/load.js":
/*!*********************!*\
  !*** ./src/load.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ pageLoad)
/* harmony export */ });
function pageLoad() {
    const headerEl = document.createElement("h1");
    headerEl.classList.add("title");
    headerEl.textContent = "GG Restaurant";

    const textEl = document.createElement("p");
    textEl.classList.add("text");
    textEl.textContent = "This restaurant is very good";

    const imageEl = new Image();
    imageEl.src = "./restaurantImage.jpg";
    imageEl.setAttribute("alt", "restaurant image")

    const div = document.createElement("div");

    div.appendChild(headerEl);
    div.appendChild(textEl);
    div.appendChild(imageEl);

    return div;
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFnQzs7QUFFaEM7QUFDQSwwQkFBMEIsb0RBQVE7Ozs7Ozs7Ozs7Ozs7O0FDSG5CO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vc3JjL2xvYWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHBhZ2VMb2FkIGZyb20gXCIuL2xvYWQuanNcIlxuXG4vL2NvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHBhZ2VMb2FkKCkpOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBhZ2VMb2FkKCkge1xuICAgIGNvbnN0IGhlYWRlckVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIGhlYWRlckVsLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZVwiKTtcbiAgICBoZWFkZXJFbC50ZXh0Q29udGVudCA9IFwiR0cgUmVzdGF1cmFudFwiO1xuXG4gICAgY29uc3QgdGV4dEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgdGV4dEVsLmNsYXNzTGlzdC5hZGQoXCJ0ZXh0XCIpO1xuICAgIHRleHRFbC50ZXh0Q29udGVudCA9IFwiVGhpcyByZXN0YXVyYW50IGlzIHZlcnkgZ29vZFwiO1xuXG4gICAgY29uc3QgaW1hZ2VFbCA9IG5ldyBJbWFnZSgpO1xuICAgIGltYWdlRWwuc3JjID0gXCIuL3Jlc3RhdXJhbnRJbWFnZS5qcGdcIjtcbiAgICBpbWFnZUVsLnNldEF0dHJpYnV0ZShcImFsdFwiLCBcInJlc3RhdXJhbnQgaW1hZ2VcIilcblxuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICBkaXYuYXBwZW5kQ2hpbGQoaGVhZGVyRWwpO1xuICAgIGRpdi5hcHBlbmRDaGlsZCh0ZXh0RWwpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChpbWFnZUVsKTtcblxuICAgIHJldHVybiBkaXY7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=