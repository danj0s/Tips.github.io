/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/consts/index.js":
/*!*****************************!*\
  !*** ./src/consts/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FETCHURL: () => (/* binding */ FETCHURL),
/* harmony export */   GETRESOURCE: () => (/* binding */ GETRESOURCE)
/* harmony export */ });
const FETCHURL = {
  jar: "https://api.monobank.ua/bank/jar/5SCmE79vAMH8eYSgTLn4QQXvsHyRiEbh",
  jarInfo:
    "https://api.monobank.ua/personal/statement/j1j080oczHfu1RkWx880zSfmP4_irnc",
};

const GETRESOURCE = async (url, options) => {
  const result = await fetch(url, options);

  if (!result.ok) {
    throw new Error(`Pizdec, ${url}, status: ${result.status}`);
  }
  return await result.json();
};


/***/ }),

/***/ "./src/helpers/getJarInfo.js":
/*!***********************************!*\
  !*** ./src/helpers/getJarInfo.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../consts */ "./src/consts/index.js");


async function getJarInfo() {
  let jarInfo;
  const to = Date.now();
  const from = to - 100000000;
  await (0,_consts__WEBPACK_IMPORTED_MODULE_0__.GETRESOURCE)(`${_consts__WEBPACK_IMPORTED_MODULE_0__.FETCHURL.jarInfo}/${from}/${to}`, {
    method: "GET",
    headers: { "X-Token": "uyJhOlB9yDbyqbzhKq27AV2mmXcDzyEGLXF18GCJb76U" },
    mode: "cors",
  }).then((data) => {
    jarInfo = data[0];
  });
  console.log(jarInfo, "jar");
  return jarInfo;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getJarInfo);


/***/ }),

/***/ "./src/helpers/showAlert.js":
/*!**********************************!*\
  !*** ./src/helpers/showAlert.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function ShowAlert(amount, subtitle) {
  const mainblock = document.querySelector(".main");
  const alertContainer = document.createElement("div");
  alertContainer.classList.add("alertContainer");

  alertContainer.innerHTML = `<div class="interactiveContainer"><video muted="" class ="video" playsinline="" preload="auto" autoplay src="https://send.monobank.ua/widget/../widget/assets/media/1afa.webm"></video>
      <audio preload="auto" autoplay src="https://send.monobank.ua/widget/../widget/assets/media/730f.mp3"></audio></div>
      <div class="text text-scheme-black"><div class="title">${amount} ₴</div><div class="subtitle">Дякую, ${subtitle}, за підтримку!</div></div>`;
  alertContainer.classList.toggle("show");
  mainblock.append(alertContainer);

  setTimeout(() => {
    alertContainer.innerHTML = ``;
    alertContainer.classList.toggle("show");
  }, 5000);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShowAlert);


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./consts */ "./src/consts/index.js");
/* harmony import */ var _helpers_getJarInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/getJarInfo */ "./src/helpers/getJarInfo.js");
/* harmony import */ var _helpers_showAlert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers/showAlert */ "./src/helpers/showAlert.js");






window.addEventListener("DOMContentLoaded", () => {
  let jarAmount = 0;
  const textBalance = document.querySelector(".text-name");
  setInterval(() => {
    (0,_consts__WEBPACK_IMPORTED_MODULE_0__.GETRESOURCE)(_consts__WEBPACK_IMPORTED_MODULE_0__.FETCHURL.jar).then((data) => {
      const precent = Math.round((100 * data.amount) / data.goal);

      const amount = new Intl.NumberFormat().format(data.amount / 100);
      textBalance.textContent = `${amount} $   ${precent}%`;

      if (data.amount > jarAmount) {
        jarAmount = data.amount;

        (0,_helpers_getJarInfo__WEBPACK_IMPORTED_MODULE_1__["default"])().then((data) => {
          const subtitle = data.description.replace(/від:/gi, "");
          const transformAmount = data.amount / 100;
          (0,_helpers_showAlert__WEBPACK_IMPORTED_MODULE_2__["default"])(transformAmount, subtitle);
        });
      }
    });
  }, 2000);
});

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map