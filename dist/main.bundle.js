/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

window.addEventListener('load', function () {
    var elements = document.querySelectorAll('button');
    var display = document.getElementById('inp');
    var initvalue = 0;
    display.value = initvalue.toString();
    var total = 0;
    var operator = '';
    var number = '';
    elements.forEach(function (el) { return el.addEventListener('click', function (e) {
        if (isNaN(+e.target.innerText)) {
            var value = e.target.innerText;
            if (value === 'AC') {
                display.value = initvalue.toString();
                total = 0;
                number = '';
                operator = '';
            }
            if (value === "+/-") {
                total = +total < 0 ? total : total;
            }
            if (value === "%") {
                display.value = "%";
                total = +total * 0.01;
            }
            if (value === '.') {
                number += '.';
            }
            if (value === "/") {
                display.value = "/";
                operator = '/';
                if (total === 0) {
                    total += +number;
                }
                number = '';
            }
            if (value === "*") {
                display.value = "*";
                operator = '*';
                if (total === 0) {
                    total += +number;
                }
                number = '';
            }
            if (value === "-") {
                display.value = "-";
                operator = '-';
                if (total === 0) {
                    total += +number;
                }
                number = '';
            }
            if (value === "+") {
                display.value = "+";
                operator = '+';
                total += +number;
                number = '';
            }
            if (value === "=") {
                if (operator === '/') {
                    total /= +number;
                    number = '';
                }
                if (operator === '*') {
                    total *= +number;
                    number = '';
                }
                if (operator === '-') {
                    total -= +number;
                    number = '';
                }
                if (operator === '+') {
                    total += +number;
                    number = '';
                }
                display.value = total.toString();
            }
        }
        else {
            number += e.target.innerText;
            display.value = number.toString();
        }
    }); });
});


/***/ }),

/***/ 0:
/*!**************************!*\
  !*** multi ./src/app.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/app.ts */"./src/app.ts");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNqRkEsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRTtJQUM1QixJQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFtQyxDQUFDO0lBQ3ZGLElBQUksT0FBTyxHQUFJLFFBQVEsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUF1QjtJQUVuRSxJQUFNLFNBQVMsR0FBRyxDQUFDO0lBRW5CLE9BQU8sQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDLFFBQVEsRUFBRTtJQUVwQyxJQUFJLEtBQUssR0FBVyxDQUFDLENBQUM7SUFDdEIsSUFBSSxRQUFRLEdBQVcsRUFBRSxDQUFDO0lBQzFCLElBQUksTUFBTSxHQUFXLEVB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cEM7SUFDTCxDQUFDLENBQUMsRUEvRXFCLENBK0VyQixDQUFDO0FBQ1AsQ0FBQyxDQUFDIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcbiAgICBjb25zdCBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbicpISBhcyBOb2RlTGlzdE9mPEhUTUxCdXR0b25FbGVtZW50PjtcbiAgICBsZXQgZGlzcGxheSA9IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wJykhIGFzIEhUTUxJbnB1dEVsZW1lbnQpXG5cbiAgICBjb25zdCBpbml0dmFsdWUgPSAwXG5cbiAgICBkaXNwbGF5LnZhbHVlID0gaW5pdHZhbHVlLnRvU3RyaW5nKClcblxuICAgIGxldCB0b3RhbDogbnVtYmVyID0gMDtcbiAgICBsZXQgb3BlcmF0b3I6IHN0cmluZyA9ICcnO1xuICAgIGxldCBudW1iZXI6IHN0cmluZyA9ICcnO1xuXG5cbiAgICBlbGVtZW50cy5mb3JFYWNoKGVsID0+IGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGU6IGFueSkgPT4ge1xuICAgICAgICBpZiAoaXNOYU4oK2UudGFyZ2V0LmlubmVyVGV4dCkpIHtcbiAgICAgICAgICAgIGxldCB2YWx1ZSA9IGUudGFyZ2V0LmlubmVyVGV4dDtcblxuICAgICAgICAgICAgaWYgKHZhbHVlID09PSAnQUMnKSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheS52YWx1ZSA9IGluaXR2YWx1ZS50b1N0cmluZygpXG4gICAgICAgICAgICAgICAgdG90YWwgPSAwXG4gICAgICAgICAgICAgICAgbnVtYmVyID0gJydcbiAgICAgICAgICAgICAgICBvcGVyYXRvciA9ICcnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodmFsdWUgPT09IFwiKy8tXCIpIHtcbiAgICAgICAgICAgICAgICB0b3RhbCA9ICt0b3RhbCA8IDAgPyB0b3RhbCA6IHRvdGFsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodmFsdWUgPT09IFwiJVwiKSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheS52YWx1ZSA9IFwiJVwiXG4gICAgICAgICAgICAgICAgdG90YWwgPSArdG90YWwgKiAwLjAxXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gJy4nKSB7XG4gICAgICAgICAgICAgICAgbnVtYmVyICs9ICcuJ1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodmFsdWUgPT09IFwiL1wiKSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheS52YWx1ZSA9IFwiL1wiXG4gICAgICAgICAgICAgICAgb3BlcmF0b3IgPSAnLydcbiAgICAgICAgICAgICAgICBpZiAodG90YWwgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdG90YWwgKz0gK251bWJlclxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBudW1iZXIgPSAnJ1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodmFsdWUgPT09IFwiKlwiKSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheS52YWx1ZSA9IFwiKlwiXG4gICAgICAgICAgICAgICAgb3BlcmF0b3IgPSAnKidcbiAgICAgICAgICAgICAgICBpZiAodG90YWwgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdG90YWwgKz0gK251bWJlclxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBudW1iZXIgPSAnJ1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodmFsdWUgPT09IFwiLVwiKSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheS52YWx1ZSA9IFwiLVwiXG4gICAgICAgICAgICAgICAgb3BlcmF0b3IgPSAnLSdcbiAgICAgICAgICAgICAgICBpZiAodG90YWwgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdG90YWwgKz0gK251bWJlclxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBudW1iZXIgPSAnJ1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodmFsdWUgPT09IFwiK1wiKSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheS52YWx1ZSA9IFwiK1wiXG4gICAgICAgICAgICAgICAgb3BlcmF0b3IgPSAnKydcbiAgICAgICAgICAgICAgICB0b3RhbCArPSArbnVtYmVyXG4gICAgICAgICAgICAgICAgbnVtYmVyID0gJydcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHZhbHVlID09PSBcIj1cIikge1xuICAgICAgICAgICAgICAgIGlmIChvcGVyYXRvciA9PT0gJy8nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRvdGFsIC89ICtudW1iZXJcbiAgICAgICAgICAgICAgICAgICAgbnVtYmVyID0gJydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG9wZXJhdG9yID09PSAnKicpIHtcbiAgICAgICAgICAgICAgICAgICAgdG90YWwgKj0gK251bWJlclxuICAgICAgICAgICAgICAgICAgICBudW1iZXIgPSAnJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAob3BlcmF0b3IgPT09ICctJykge1xuICAgICAgICAgICAgICAgICAgICB0b3RhbCAtPSArbnVtYmVyXG4gICAgICAgICAgICAgICAgICAgIG51bWJlciA9ICcnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChvcGVyYXRvciA9PT0gJysnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRvdGFsICs9ICtudW1iZXJcbiAgICAgICAgICAgICAgICAgICAgbnVtYmVyID0gJydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZGlzcGxheS52YWx1ZSA9IHRvdGFsLnRvU3RyaW5nKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG51bWJlciArPSBlLnRhcmdldC5pbm5lclRleHRcbiAgICAgICAgICAgIGRpc3BsYXkudmFsdWUgPSBudW1iZXIudG9TdHJpbmcoKVxuICAgICAgICB9XG4gICAgfSkpXG59KVxuXG5cblxuXG5cbiJdLCJzb3VyY2VSb290IjoiIn0=