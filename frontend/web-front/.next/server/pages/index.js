/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/home/app/frontend/src/pages/index.tsx\";\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (() => {\n  const {\n    0: todos,\n    1: setTodo\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n\n  const getAPIData = async () => {\n    let instance;\n    instance = axios__WEBPACK_IMPORTED_MODULE_2___default().create({\n      baseURL: 'http://localhost:8080'\n    });\n\n    try {\n      const response = await instance.get('/api/');\n      console.log(response === null || response === void 0 ? void 0 : response.data);\n      const tododata = response === null || response === void 0 ? void 0 : response.data;\n      setTodo(tododata);\n    } catch (error) {\n      console.log(error);\n    }\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: [\"hello world\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n      onClick: getAPIData,\n      children: \"click\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 13\n    }, undefined), todos.map(item => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        children: item.title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 21\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: item.body\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 21\n      }, undefined)]\n    }, item.id, true, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 17\n    }, undefined))]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 30,\n    columnNumber: 9\n  }, undefined);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9wYWdlcy9pbmRleC50c3g/NDFlMCJdLCJuYW1lcyI6WyJ0b2RvcyIsInNldFRvZG8iLCJ1c2VTdGF0ZSIsImdldEFQSURhdGEiLCJpbnN0YW5jZSIsImF4aW9zIiwiYmFzZVVSTCIsInJlc3BvbnNlIiwiZ2V0IiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJ0b2RvZGF0YSIsImVycm9yIiwibWFwIiwiaXRlbSIsInRpdGxlIiwiYm9keSIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBUUEsK0RBQWdCLE1BQU07QUFDbEIsUUFBTTtBQUFBLE9BQUNBLEtBQUQ7QUFBQSxPQUFRQztBQUFSLE1BQW1CQywrQ0FBUSxDQUFTLEVBQVQsQ0FBakM7O0FBRUEsUUFBTUMsVUFBVSxHQUFHLFlBQVk7QUFDM0IsUUFBSUMsUUFBSjtBQUVBQSxZQUFRLEdBQUdDLG1EQUFBLENBQWE7QUFDcEJDLGFBQU8sRUFBRTtBQURXLEtBQWIsQ0FBWDs7QUFJQSxRQUFJO0FBQ0EsWUFBTUMsUUFBUSxHQUFHLE1BQU1ILFFBQVEsQ0FBQ0ksR0FBVCxDQUFhLE9BQWIsQ0FBdkI7QUFDQUMsYUFBTyxDQUFDQyxHQUFSLENBQVlILFFBQVosYUFBWUEsUUFBWix1QkFBWUEsUUFBUSxDQUFFSSxJQUF0QjtBQUNBLFlBQU1DLFFBQVEsR0FBR0wsUUFBSCxhQUFHQSxRQUFILHVCQUFHQSxRQUFRLENBQUVJLElBQTNCO0FBQ0FWLGFBQU8sQ0FBQ1csUUFBRCxDQUFQO0FBQ0gsS0FMRCxDQUtFLE9BQU9DLEtBQVAsRUFBYztBQUNaSixhQUFPLENBQUNDLEdBQVIsQ0FBWUcsS0FBWjtBQUNIO0FBQ0osR0FmRDs7QUFnQkEsc0JBQ0k7QUFBQSwyQ0FFSTtBQUFRLGFBQU8sRUFBRVYsVUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkosRUFHS0gsS0FBSyxDQUFDYyxHQUFOLENBQVdDLElBQUQsaUJBQ1A7QUFBQSw4QkFDSTtBQUFBLGtCQUFLQSxJQUFJLENBQUNDO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixlQUVJO0FBQUEsa0JBQUlELElBQUksQ0FBQ0U7QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZKO0FBQUEsT0FBVUYsSUFBSSxDQUFDRyxFQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREgsQ0FITDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQVlILENBL0JEIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGQywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGF4aW9zLCB7IEF4aW9zSW5zdGFuY2UgfSBmcm9tICdheGlvcydcblxudHlwZSBUb2RvID0ge1xuICAgIGlkOiBzdHJpbmdcbiAgICB0aXRsZTogU3RyaW5nXG4gICAgYm9keTogU3RyaW5nXG59XG5cbmV4cG9ydCBkZWZhdWx0ICgoKSA9PiB7XG4gICAgY29uc3QgW3RvZG9zLCBzZXRUb2RvXSA9IHVzZVN0YXRlPFRvZG9bXT4oW10pXG5cbiAgICBjb25zdCBnZXRBUElEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBsZXQgaW5zdGFuY2U6IEF4aW9zSW5zdGFuY2VcblxuICAgICAgICBpbnN0YW5jZSA9IGF4aW9zLmNyZWF0ZSh7XG4gICAgICAgICAgICBiYXNlVVJMOiAnaHR0cDovL2xvY2FsaG9zdDo4MDgwJyxcbiAgICAgICAgfSlcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBpbnN0YW5jZS5nZXQoJy9hcGkvJylcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlPy5kYXRhKVxuICAgICAgICAgICAgY29uc3QgdG9kb2RhdGEgPSByZXNwb25zZT8uZGF0YSBhcyBUb2RvW11cbiAgICAgICAgICAgIHNldFRvZG8odG9kb2RhdGEpXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgaGVsbG8gd29ybGRcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17Z2V0QVBJRGF0YX0+Y2xpY2s8L2J1dHRvbj5cbiAgICAgICAgICAgIHt0b2Rvcy5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17aXRlbS5pZH0+XG4gICAgICAgICAgICAgICAgICAgIDxoMT57aXRlbS50aXRsZX08L2gxPlxuICAgICAgICAgICAgICAgICAgICA8cD57aXRlbS5ib2R5fTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICApXG59KSBhcyBGQyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./src/pages/index.tsx"));
module.exports = __webpack_exports__;

})();