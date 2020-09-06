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
/* harmony import */ var _modules_hideShowModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/hideShowModal */ "./src/js/modules/hideShowModal.js");
/* harmony import */ var _modules_scoreRecord__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/scoreRecord */ "./src/js/modules/scoreRecord.js");
/* harmony import */ var _modules_animationButtons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/animationButtons */ "./src/js/modules/animationButtons.js");









const game = ({
    numberObstaclesFinish,
    obstacleRefreshRate,
    jumpSetting,
    message
}) => {

    // --------------------------------------------------------
    // -------------------------STATE-------------------------

    let intervalStart,
        finish,
        passed = 0,
        stop = false,
        counter = 0;

    // --------------------------------------------------------
    // -------------------------LOGIC-------------------------

    const winningOrLosingAction = (position, mess) => {
        if (localStorage.getItem('score') < Object(_modules_scoreRecord__WEBPACK_IMPORTED_MODULE_4__["getScoreRecord"])(counter)) {
            document.querySelector('.popup-content').innerHTML = `
                <h1>${message[mess]}</h1>
                <H2>Очков набрано: ${counter}</H2><hr>
                <h2>УРА!!! НОВЫЙ РЕКОРД ПО ОЧКАМ <br> ${Object(_modules_scoreRecord__WEBPACK_IMPORTED_MODULE_4__["getScoreRecord"])(counter)}</h2><hr>
            `;
        } else {
            document.querySelector('.popup-content').innerHTML = `
                <h1>${message[mess]}</h1>
                <H2>Очков набрано: ${counter}</H2><hr>
                <h2>РЕКОРД ПО ОЧКАМ: ${Object(_modules_scoreRecord__WEBPACK_IMPORTED_MODULE_4__["getScoreRecord"])(counter)}</h2><hr>
            `;
        }
        Object(_modules_scoreRecord__WEBPACK_IMPORTED_MODULE_4__["setScoreRecord"])(counter);
        counter = 0;
        clearInterval(intervalStart);
        position = position;
        stop = true;
        gameWindow.style.display = 'none';
        popup.style.display = 'flex';

        document.querySelector('.counter').innerHTML = `
            ОЧКИ:
            <p>${counter}</p>
        `;
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
                    winningOrLosingAction(position, 'defeat');
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
          barriers = document.createElement('div');

    // --------------------------------------------------------
    // -------------------------RENDER-------------------------

    popup.classList.add('game__popup');
    barriers.classList.add('game__menu');
    gameWindow.classList.add('game__window');
    gameBall.classList.add('game__ball');

    popup.innerHTML = `
        <div class="popup-content"> 
            <h1>${message.greeting}</h1><hr>
            <h3>Q - маленький прыжок</h3>
            <h3>W - средний прыжок</h3>
            <h3>E - высокий прыжок</h3><hr>
            <h2>РЕКОРД ПО ОЧКАМ: ${Object(_modules_scoreRecord__WEBPACK_IMPORTED_MODULE_4__["getScoreRecord"])()}</h2><hr>
        </div>
        <div class="btn barriers">БАРЬЕРЫ</div>
        <div class="btn point">НА ОЧКИ</div>
    `;
    barriers.innerHTML = `
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
        <div class="btn start">НАЧАТЬ</div>
        <div class="btn back">НАЗАД</div>
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
    document.body.append(barriers);
    document.body.append(gameWindow);
    gameWindow.append(gameBall);
    
    Object(_modules_backgroundAnimate__WEBPACK_IMPORTED_MODULE_2__["default"])(gameWindow);

    // --------------------------------------------------------
    // -------------------------EVENT-------------------------

    const btnBarriers = document.querySelector('.barriers'),
          btnPoint = document.querySelector('.point'),
          btnStart = document.querySelector('.start'),
          btnBack = document.querySelector('.back'),
          quantities = document.querySelectorAll('.btn-quantity');

    quantities.forEach((quantity, i) => quantity.addEventListener('click', () => {
        Object(_modules_animationButtons__WEBPACK_IMPORTED_MODULE_5__["clearBtnsStyle"])({btns: quantities});
        Object(_modules_animationButtons__WEBPACK_IMPORTED_MODULE_5__["selectButton"])({btn: quantity});

        finish = numberObstaclesFinish[i];
    }));

    btnStart.addEventListener('click', () => testCheck(quantities, barriers));
    btnPoint.addEventListener('click', () => {
        Object(_modules_animationButtons__WEBPACK_IMPORTED_MODULE_5__["clearBtnsStyle"])({btns: quantities});
        finish = '';
        popup.style.display = 'none';
        startGame();
    });

    document.addEventListener('keydown', event => {
        jumpSetting.forEach(obj => {
            const {keyCode, maxHeight} = obj;

            Object(_modules_animateBall__WEBPACK_IMPORTED_MODULE_0__["default"])({
                event, 
                keyCode, 
                maxHeight,
                element: gameBall
            }); 
        });

        if (event.keyCode === 13) {
            if (window.getComputedStyle(barriers).display === 'flex') {
                testCheck(quantities, barriers);
            }
            if (window.getComputedStyle(popup).display === 'flex') { 
                Object(_modules_hideShowModal__WEBPACK_IMPORTED_MODULE_3__["default"])({
                    popapShow: barriers, 
                    popapHide: popup,
                });
            }
        }
    });

    btnBarriers.addEventListener('click', () => Object(_modules_hideShowModal__WEBPACK_IMPORTED_MODULE_3__["default"])({
        popapShow: barriers, 
        popapHide: popup,
    }));
    btnBack.addEventListener('click', () => Object(_modules_hideShowModal__WEBPACK_IMPORTED_MODULE_3__["default"])({
        popapShow: popup, 
        popapHide: barriers,
    }));

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


let heightBounce = 0,
    reduction = 0;

const speedReduction = ({
    maxHeight, 
    up
}) => {
    if (heightBounce >= maxHeight - 100 && heightBounce < maxHeight - 90) {
        reduction = up ? 0 : -1;
    } else if (heightBounce >= maxHeight - 90 && heightBounce < maxHeight - 80) {
        reduction = up ? 1 : 0;
    } else if (heightBounce >= maxHeight - 80 && heightBounce < maxHeight - 70) {
        reduction = up ? 2 : 1;
    } else if (heightBounce >= maxHeight - 70 && heightBounce < maxHeight - 60) {
        reduction = up ? 3 : 2;
    } else if (heightBounce >= maxHeight - 60 && heightBounce < maxHeight - 50) {
        reduction = up ? 4 : 3;
    } else if (heightBounce >= maxHeight - 50 && heightBounce < maxHeight - 40) {
        reduction = up ? 5 : 4;
    } else if (heightBounce >= maxHeight - 40 && heightBounce < maxHeight - 30) {
        reduction = up ? 6 : 5;
    } else if (heightBounce >= maxHeight - 30 && heightBounce < maxHeight - 20) {
        reduction = up ? 7 : 6;
    } else if (heightBounce >= maxHeight - 20) {
        reduction = up ? 8 : 7;
    }
};

const animateBallDown = ({
    element, 
    speed, 
    maxHeight
}) => {
    speedReduction({maxHeight});
    
    heightBounce = heightBounce - speed + reduction;
    element.style.bottom = `${heightBounce}px`;

    if (heightBounce > 0) {
        requestAnimationFrame(() => animateBallDown({element, speed, maxHeight}));    
    }
    if (heightBounce <= 0) {
        element.style.bottom = '0px';
    }
};

const animateBallUp = ({
    element, 
    speed, 
    maxHeight
}) => {
    speedReduction({maxHeight, up: true});
    
    heightBounce = heightBounce + speed - reduction;
    element.style.bottom = `${heightBounce}px`;

    if (heightBounce < maxHeight) {
        requestAnimationFrame(() => animateBallUp({element, speed, maxHeight}));
    }
    if (heightBounce >= maxHeight) {
        requestAnimationFrame(() => animateBallDown({element, speed, maxHeight}));
    }
};

const startAnimateBall = ({
    event, 
    keyCode, 
    element, 
    speed = 10, 
    maxHeight, 
    descent = 5
}) => {
    if (event.keyCode === keyCode) {
        const bottom = element.style.bottom.replace(/px/, '');
        if (element.style.bottom === '0px' || element.style.bottom === '' || +bottom <= 0) {
            requestAnimationFrame(() => animateBallUp({
                element,
                speed, 
                maxHeight,
                descent
            }));     
        }
    }
};

/* harmony default export */ __webpack_exports__["default"] = (startAnimateBall);

/***/ }),

/***/ "./src/js/modules/animationButtons.js":
/*!********************************************!*\
  !*** ./src/js/modules/animationButtons.js ***!
  \********************************************/
/*! exports provided: clearBtnsStyle, selectButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearBtnsStyle", function() { return clearBtnsStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectButton", function() { return selectButton; });


const clearBtnsStyle = ({
    btns, 
    colorBg = '#000', 
    colorText = '#fff'
}) => btns.forEach(btn => {
    btn.style.color = colorText;
    btn.style.background = colorBg;
});

const selectButton = ({
    btn, 
    colorBg = '#fff', 
    colorText = '#000'
}) => {
    btn.style.color = colorText;
    btn.style.background = colorBg;
};

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

    const startDecorOne = document.createElement('div'),
          startDecorTwo = document.createElement('div'),
          startDecorThree = document.createElement('div'),
          decorOne = document.createElement('div'),
          decorTwo = document.createElement('div'),
          decorThree = document.createElement('div'),
          decorFour = document.createElement('div'),
          decorFive = document.createElement('div'),
          decorSix = document.createElement('div'),
          decorSeven = document.createElement('div'),
          decorEight = document.createElement('div'),
          decorNine = document.createElement('div'),
          decorTen = document.createElement('div');

          startDecorOne.classList.add('start-decor_one');
          startDecorTwo.classList.add('start-decor_two');
          startDecorThree.classList.add('start-decor_three');

    decorOne.classList.add('decor_one');
    decorTwo.classList.add('decor_two');
    decorThree.classList.add('decor_three');
    decorFour.classList.add('decor_four');
    decorFive.classList.add('decor_five');
    decorSix.classList.add('decor_six');
    decorSeven.classList.add('decor_seven');
    decorEight.classList.add('decor_eight');
    decorNine.classList.add('decor_nine');
    decorTen.classList.add('decor_ten');

    bg.append(startDecorTwo);
    bg.append(startDecorThree);
    bg.append(startDecorOne);

    bg.append(decorOne);
    bg.append(decorTwo);
    bg.append(decorThree);
    bg.append(decorFour);
    bg.append(decorFive);
    bg.append(decorSix);
    bg.append(decorSeven);
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
    
    if (leftStyleBall <= leftStyleObstacle &&
        leftStyleBall + 50 >= leftStyleObstacle &&
        bottomStyleBall <= heightObs ||
        leftStyleBall <= leftStyleObstacle + widthObs &&
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

/***/ "./src/js/modules/hideShowModal.js":
/*!*****************************************!*\
  !*** ./src/js/modules/hideShowModal.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


const hideShowModal = ({
    popapShow, 
    popapHide,
    showDisplay = 'flex', 
    hideDisplay = 'none'
}) => {
    popapShow.style.display = showDisplay;
    popapHide.style.display = hideDisplay;
};

/* harmony default export */ __webpack_exports__["default"] = (hideShowModal);

/***/ }),

/***/ "./src/js/modules/scoreRecord.js":
/*!***************************************!*\
  !*** ./src/js/modules/scoreRecord.js ***!
  \***************************************/
/*! exports provided: getScoreRecord, setScoreRecord */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScoreRecord", function() { return getScoreRecord; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setScoreRecord", function() { return setScoreRecord; });


const getScoreRecord = (counter) => {
    const getScore = localStorage.getItem('score'),
          score = !getScore ?  0 : getScore ,
          record = counter > score ? counter : score;

    return record;
};

const setScoreRecord = (score) => {
    const oldScore = localStorage.getItem('score');

    if (score > oldScore) {
        localStorage.setItem('score', score);
    }
};

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
        numberObstaclesFinish: [5, 20, 30, 40, 50],
        obstacleRefreshRate: 2000,
        jumpSetting: [
            {keyCode: 81, maxHeight: 200},
            {keyCode: 87, maxHeight: 300},
            {keyCode: 69, maxHeight: 450}
        ],
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