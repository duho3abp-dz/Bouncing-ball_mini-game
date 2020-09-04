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
/******/ 	__webpack_require__.p = "/dist";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/animate.scss":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/animate.scss ***!
  \******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/main.scss":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/main.scss ***!
  \***************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_animateBall__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/animateBall */ "./src/js/modules/animateBall.js");
/* harmony import */ var _modules_crashTest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/crashTest */ "./src/js/modules/crashTest.js");
/* harmony import */ var _modules_backgroundAnimate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/backgroundAnimate */ "./src/js/modules/backgroundAnimate.js");






const game = ({
    numberObstaclesFinish,
    obstacleRefreshRate,
    message
}) => {

    // --------------------------------------------------------
    // -------------------------STATE-------------------------

    let intervalStart,
        passed = 0,
        stop = false,
        counter = 0,
        finish = numberObstaclesFinish[0];

    // --------------------------------------------------------
    // -------------------------LOGIC-------------------------

    const winningOrLosingAction = (position, mess, count) => {
        document.querySelector('.popup-content').innerHTML = `
            <h1>${message[mess]}</h1>
            <H2>Очков набрано: ${counter}</H2>
        `;

        counter = 0;
        clearInterval(intervalStart);
        position = position;
        stop = true;
        gameWindow.style.display = 'none';
        popup.style.display = 'flex';
    };

    const animateObstacle = (elem, position, widthObs, heightObs) => {
        if (!stop) {
            const obj = Object(_modules_crashTest__WEBPACK_IMPORTED_MODULE_1__["default"])(elem, widthObs, heightObs, gameBall);
            if (obj) {
                const {finish, defeat, count} = obj;
                if (count) {
                    document.querySelector('.counter').innerHTML = `
                        ОЧКИ:
                        <p>${counter++}</p>
                    `;
                }
                if (defeat) {
                    winningOrLosingAction(position, 'defeat', count);
                    return;
                }
                if (finish) {
                    winningOrLosingAction(position, 'victory');
                    return;
                }
            }
        
            position = position + 5;
            elem.style.left = `${position}px`;
            requestAnimationFrame(() => animateObstacle(elem, position, widthObs, heightObs));
        }
    };

    const createObstacleAndStartAnimate = () => {
        const obstacle = document.createElement('div'),
              randomHeight = Math.floor(Math.random() * 300 + 50),
              randomWidth = Math.floor(Math.random() * 80 + 5);
        let position = -80;

        passed++;
        if (passed === finish) {
            obstacle.style.background = 'rgb(88, 7, 7)';
            obstacle.style.border = 'black 3px solid';
        }

        obstacle.classList.add('game__obstacle');
        obstacle.style.height = `${randomHeight}px`;
        obstacle.style.width = `${randomWidth}px`;

        gameWindow.append(obstacle);

        requestAnimationFrame(() => animateObstacle(obstacle, position, randomWidth, randomHeight));
    };

    const startGame = () => {
        document.querySelectorAll('.game__obstacle').forEach(elem => elem.remove());

        passed = 0;
        stop = false;
        gameWindow.style.display = 'block';

        intervalStart = setInterval(createObstacleAndStartAnimate, obstacleRefreshRate);
    };

    const testCheck = (elems, block) => {
        let test = [];

        elems.forEach((elem, i) => {
            if (elem.style.background === 'rgb(255, 255, 255)') { test[i] = elem; }
        });

        if (test.length) {
            block.style.display = 'none';
            startGame();
        }
    };

    // --------------------------------------------------------
    // -------------------------CREATE-------------------------

    const gameWindow = document.createElement('div'),
          gameBall = document.createElement('div'),
          popup = document.createElement('div'),
          options = document.createElement('div');

    // --------------------------------------------------------
    // -------------------------RENDER-------------------------

    popup.classList.add('game__popup');
    options.classList.add('game__options');
    gameWindow.classList.add('game__window');
    gameBall.classList.add('game__ball');

    popup.innerHTML = `
        <div class="popup-content"> 
            <h1>${message.greeting}</h1><hr>
            <h3>Q - маленький прыжок</h3>
            <h3>W - средний прыжок</h3>
            <h3>E - высокий прыжок</h3><hr>
        </div>
        <div class="btn-options">НАСТРОЙКИ</div>
    `;
    options.innerHTML = `
        <div class="options__content"> 
            <h1>Настройки</h1><hr>
            <h3>Количество ограждений до финиша:</h3>
            <div class="options__wrap">
                <div class="btn-quantity">${numberObstaclesFinish[0]}</div>
                <div class="btn-quantity">${numberObstaclesFinish[1]}</div>
                <div class="btn-quantity">${numberObstaclesFinish[2]}</div>
                <div class="btn-quantity">${numberObstaclesFinish[3]}</div>
                <div class="btn-quantity">${numberObstaclesFinish[4]}</div>
            </div>
            <hr>
        </div>
        <div class="btn">НАЧАТЬ</div>
    `;
    gameWindow.innerHTML = `
        <div class="counter">
            ОЧКИ:
            <p>${counter}</p>
        </div>
    `;
    gameBall.innerHTML = `
        <div class="flare"></div>
        <div class="shadow"></div>
    `;

    document.body.append(popup);
    document.body.append(options);
    document.body.append(gameWindow);
    gameWindow.append(gameBall);
    
    Object(_modules_backgroundAnimate__WEBPACK_IMPORTED_MODULE_2__["default"])(gameWindow);

    // --------------------------------------------------------
    // -------------------------EVENT-------------------------

    const btnOtion = document.querySelector('.btn-options'),
          btnStart = document.querySelector('.btn'),
          quantities = document.querySelectorAll('.btn-quantity');

    quantities.forEach((quantity, i) => quantity.addEventListener('click', () => {
        quantities.forEach(quantity => {
            quantity.style.color = '#fff';
            quantity.style.background = '#000';
        });
        quantity.style.color = '#000';
        quantity.style.background = '#fff';

        finish = numberObstaclesFinish[i];
    }));
    
    btnOtion.addEventListener('click', e => {
        popup.style.display = 'none';
        options.style.display = 'flex';
    });
    
    btnStart.addEventListener('click', () => testCheck(quantities, options));

    document.addEventListener('keydown', event => {
        Object(_modules_animateBall__WEBPACK_IMPORTED_MODULE_0__["default"])({event, 
            keyCode: 81, 
            element: gameBall,
            maxHeight: 200
        });
        Object(_modules_animateBall__WEBPACK_IMPORTED_MODULE_0__["default"])({event, 
            keyCode: 87, 
            element: gameBall,
            maxHeight: 300
        });
        Object(_modules_animateBall__WEBPACK_IMPORTED_MODULE_0__["default"])({event, 
            keyCode: 69, 
            element: gameBall,
            maxHeight: 450
        });

        if (event.keyCode === 13) {
            if (window.getComputedStyle(options).display === 'flex') {
                testCheck(quantities, options);
            }
            if (window.getComputedStyle(popup).display === 'flex') {
                popup.style.display = 'none';
                options.style.display = 'flex';
            }
        }
    });

};

/* harmony default export */ __webpack_exports__["default"] = (game);

/***/ }),

/***/ "./src/js/modules/animateBall.js":
/*!***************************************!*\
  !*** ./src/js/modules/animateBall.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


let heightBounce = 0;

const animateBallDown = (ball, speed, maxHeight, deceleration) => {
    if (deceleration) {
        heightBounce = heightBounce - deceleration;
        ball.style.bottom = `${heightBounce}px`;
    } else {
        heightBounce = heightBounce - speed;
        ball.style.bottom = `${heightBounce}px`;
    }

    if (heightBounce >= maxHeight - 150 && heightBounce < maxHeight - 30) {
        const deceleration = 5;
        requestAnimationFrame(() => animateBallDown(ball, speed, maxHeight, deceleration));
    }
    if (heightBounce >= maxHeight - 30 && heightBounce < maxHeight) {
        const deceleration = 2;
        requestAnimationFrame(() => animateBallDown(ball, speed, maxHeight, deceleration));
    }
    if (heightBounce > 0) {
        requestAnimationFrame(() => animateBallDown(ball, speed, maxHeight));
    }
    if (heightBounce <= 0) {
        heightBounce = 0;
    }
};

const animateBallUp = ({
    element, 
    startSpeed, 
    deceleration, 
    maxHeight, 
    descent
}) => {
    if (deceleration) {
        heightBounce = heightBounce + deceleration;
        element.style.bottom = `${heightBounce}px`;    
    } else {
        heightBounce = heightBounce + startSpeed;
        element.style.bottom = `${heightBounce}px`;
    }

    if (heightBounce < maxHeight - 150) {
        requestAnimationFrame(() => animateBallUp({element, startSpeed, descent, maxHeight}));
    }
    if (heightBounce >= maxHeight - 150 && heightBounce < maxHeight - 30) {
        requestAnimationFrame(() => animateBallUp({element, startSpeed, descent, maxHeight,
            deceleration: 5
        }));
    }
    if (heightBounce >= maxHeight - 30 && heightBounce < maxHeight) {
        requestAnimationFrame(() => animateBallUp({element, startSpeed, descent, maxHeight,
            deceleration: 2
        }));
    }
    if (heightBounce >= maxHeight) {
        requestAnimationFrame(() => animateBallDown(element, startSpeed));
    }
};

const startAnimateBall = ({
    event, 
    keyCode, 
    element, 
    startSpeed = 10, 
    maxHeight, 
    descent = 5
}) => {
    if (event.keyCode === keyCode) {
        if (element.style.bottom === '0px' || element.style.bottom === '') {
            requestAnimationFrame(() => animateBallUp({
                element,
                startSpeed, 
                maxHeight,
                descent
            }));     
        }
    }
};

/* harmony default export */ __webpack_exports__["default"] = (startAnimateBall);

/***/ }),

/***/ "./src/js/modules/backgroundAnimate.js":
/*!*********************************************!*\
  !*** ./src/js/modules/backgroundAnimate.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


const background = (bg) => {

    const decorOne = document.createElement('div'),
          decorTwo = document.createElement('div'),
          decorThree = document.createElement('div'),
          decorFour = document.createElement('div'),
          decorFive = document.createElement('div'),
          decorSix = document.createElement('div'),
          decorSeven = document.createElement('div'),
          decorEight = document.createElement('div'),
          decorNine = document.createElement('div'),
          decorTen = document.createElement('div');

    decorOne.classList.add('decor_one');
    decorTwo.classList.add('decor_two');
    decorThree.classList.add('decor_three');
    decorFour.classList.add('decor_four');
    decorFive.classList.add('decor_five');
    decorSix.classList.add('decor_six');
    decorSeven.classList.add('decor_seven');
    decorNine.classList.add('decor_nine');
    decorTen.classList.add('decor_ten');

    bg.append(decorOne);
    bg.append(decorTwo);
    bg.append(decorThree);
    bg.append(decorFour);
    bg.append(decorFive);
    bg.append(decorSix);
    bg.append(decorEight);
    bg.append(decorNine);
    bg.append(decorTen);

};

/* harmony default export */ __webpack_exports__["default"] = (background);

/***/ }),

/***/ "./src/js/modules/crashTest.js":
/*!*************************************!*\
  !*** ./src/js/modules/crashTest.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


const roundTheNumber = (num) => Math.floor(+num.replace(/px/, ''));

const crashTest = (elem, widthObs, heightObs, gameBall) => {
    const leftStyleBall = roundTheNumber(window.getComputedStyle(gameBall).left),
          leftStyleObstacle = roundTheNumber(elem.style.left),
          bottomStyleBall = roundTheNumber(gameBall.style.bottom);

    if (elem.style.background === 'rgb(88, 7, 7)' &&
        leftStyleBall <= leftStyleObstacle + widthObs &&
        leftStyleBall + 50 >= leftStyleObstacle + widthObs ) {
        return {
            finish: true,
            defeat: false
        };
    }
    if (leftStyleBall <= leftStyleObstacle + widthObs &&
        leftStyleBall + 50 >= leftStyleObstacle + widthObs &&
        bottomStyleBall <= heightObs) {
        return {
            finish: false,
            defeat: true
        };
    } else if (leftStyleBall <= leftStyleObstacle + widthObs &&
               leftStyleBall + 50 >= leftStyleObstacle + widthObs) {
        return {
            finish: false,
            defeat: false,
            count: true
        };
    }
};

/* harmony default export */ __webpack_exports__["default"] = (crashTest);

/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/main.scss */ "./src/scss/main.scss");
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_main_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scss_animate_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scss/animate.scss */ "./src/scss/animate.scss");
/* harmony import */ var _scss_animate_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scss_animate_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _js_main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/main */ "./src/js/main.js");





window.addEventListener('DOMContentLoaded', () => {

    Object(_js_main__WEBPACK_IMPORTED_MODULE_2__["default"])({
        numberObstaclesFinish: [5, 10, 15, 20, 25],
        obstacleRefreshRate: 2000,
        message: {
            greeting: 'Мини-игра "Прыгающий мяч"',
            victory: 'Победа!',
            defeat: 'К сожалению не получилось, попробуйте еще раз'
        }
    });

});


/***/ }),

/***/ "./src/scss/animate.scss":
/*!*******************************!*\
  !*** ./src/scss/animate.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/mini-css-extract-plugin/dist/loader.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./animate.scss */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/animate.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/mini-css-extract-plugin/dist/loader.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/main.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ })

/******/ });
//# sourceMappingURL=app.js.map