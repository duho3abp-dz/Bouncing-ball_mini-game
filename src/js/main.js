'use strict';

import startAnimateBall from './modules/animateBall';
import crashTest from './modules/crashTest';
import background from './modules/backgroundAnimate';
import hideShowModal from './modules/hideShowModal';
import toggleButton from './modules/animationButtons';
import {getScoreRecord, setScoreRecord} from './modules/scoreRecord';

const game = ({
    flipSrc,
    highBtnSrc,
    middleBtnSrc,
    littleBtnSrc,
    ballHeight,
    ballWidth,
    maxHeightObst,
    minHeightObst,
    maxWidthObst,
    minWidthObst,
    numberObstaclesFinish,
    obstacleRefreshRate,
    jumpSetting,
    jumpControl,
    message,
    btnActive,
    quantityActive
}) => {

    // --------------------------------------------------------
    // -------------------------STATE-------------------------

    let intervalStart,
        finish,
        index,
        passed = 0,
        stop = false,
        counter = 0;

    // --------------------------------------------------------
    // -------------------------LOGIC-------------------------

    const winningOrLosingAction = (position, mess) => {
        if (localStorage.getItem('score') < getScoreRecord(counter)) {
            document.querySelector('.popup-content').innerHTML = `
                <h1>${message[mess]}</h1>
                <h2>Points scored: ${counter}</h2>
                <h2 class="popup-content__text--bg">Yes! New record: <br> 
                    ${getScoreRecord(counter)}
                </h2>
            `;
        } else {
            document.querySelector('.popup-content').innerHTML = `
                <h1>${message[mess]}</h1>
                <h2>Points scored: ${counter}</h2>
                <h2 class="popup-content__text--bg">Points record: ${getScoreRecord(counter)}</h2>
            `;
        }
        setScoreRecord(counter);
        counter = 0;
        clearInterval(intervalStart);
        position = position;
        stop = true;
        gameWindow.style.display = 'none';
        popup.style.display = 'flex';

        document.querySelector('.counter').innerHTML = `
            points:
            <p>${counter}</p>
        `;
    };

    const animateObstacle = (elem, position, widthObs, heightObs) => {
        if (!stop) {
            const obj = crashTest(elem, widthObs, heightObs, gameBall);

            if (obj) {
                const {finish, defeat, count} = obj;
                if (count) {
                    document.querySelector('.counter').innerHTML = `
                        points:
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
            if (position < (window.outerWidth + 1000)) {
                elem.style.left = `${position}px`;
                requestAnimationFrame(() => animateObstacle(elem, position, widthObs, heightObs));
            } else {
                elem.remove();
                cancelAnimationFrame(animateObstacle);
            }
        }
    };

    const createObstacleAndStartAnimate = () => {
        const obstacle = document.createElement('div'),
              randomHeight = Math.floor(Math.random() * maxHeightObst + minHeightObst),
              randomWidth = Math.floor(Math.random() * maxWidthObst + minWidthObst);
        let position = -80;

        passed++;
        if (passed === finish) {
            obstacle.style.background = 'rgb(88, 7, 7)';
            obstacle.style.borderTop = 'black 3px solid';
            obstacle.style.borderLeft = 'black 3px solid';
            obstacle.style.borderRight = 'black 3px solid';
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

    const startGameForPoints = (popup) => {
        finish = '';
        popup.style.display = 'none';
        startGame();
    };

    const testCheck = (elems, block, active) => {
        let test = [];

        elems.forEach((elem, i) => {
            if (elem.classList.contains(active)) { test[i] = elem; }
        });

        if (test.length) {
            block.style.display = 'none';
            startGame();
        }
    };
    
    const clearAndAddClassQuantyties = (quantities, quantity, i) => {
        quantities.forEach(btn => btn.classList.remove(quantityActive));
        quantity.classList.add(quantityActive);
        finish = numberObstaclesFinish[i];
    };

    const switchingQuantyties = (quantities, num) => {
        quantities.forEach((quantity, i) => {
            if (quantity.classList.contains(quantityActive)) {
                if (num === 37) {
                    index = i - 1;
                }
                if (num === 39) {
                    index = i + 1;
                }
            }
        });
        quantities.forEach((quantity, i) => {
            if (i === index) { clearAndAddClassQuantyties(quantities, quantity, i); }
        });
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

    popup.style.display = 'flex';
    barriers.style.display = 'none';
    gameBall.style.width = `${ballWidth}px`;
    gameBall.style.height = `${ballHeight}px`;

    popup.innerHTML = `
        <div class="popup-content"> 
            <h1 class="popup-content__text--bg">${message.greeting}</h1>
            <h3 class="media-close">Q - little jump</h3>
            <h3 class="media-close">W - middle jump</h3>
            <h3 class="media-close">E - high jump</h3>
            <h2 class="popup-content__text--bg">
                Points record: ${getScoreRecord()}
            </h2>
        </div>

        <div class="btn barriers ${btnActive}">arcade</div>
        <div class="btn point">infinity</div>

        <div class="flip">
            <img class="img" src=${flipSrc} alt="flip">
        </div>
    `;
    barriers.innerHTML = `
        <div class="options__content"> 
            <h1>Settings</h1>
            <h3>Number of obstacles to finish:</h3>
            <div class="options__wrap">
                <div class="btn-quantity ${quantityActive}">${numberObstaclesFinish[0]}</div>
                <div class="btn-quantity">${numberObstaclesFinish[1]}</div>
                <div class="btn-quantity">${numberObstaclesFinish[2]}</div>
                <div class="btn-quantity">${numberObstaclesFinish[3]}</div>
                <div class="btn-quantity">${numberObstaclesFinish[4]}</div>
            </div>
        </div>
        <div class="btn start">start</div>
        <div class="btn back">back</div>
    `;
    gameWindow.innerHTML = `
        <div class="counter">
            points:
            <p>${counter}</p>
        </div>

        <div class="control-panel">
            <a id="high" class="control-panel__btn control-panel__btn--white">
                <img class="img" data-high src=${highBtnSrc} alt="high">
            </a>
            <a id="middle" class="control-panel__btn">
                <img class="control-panel__btn--middle" data-middle src=${middleBtnSrc} alt="middle">
            </a>
            <a id="little" class="control-panel__btn">
                <img class="control-panel__btn--little" data-little src=${littleBtnSrc} alt="little">
            </a>
        </div>
        
    `;

    document.body.append(popup);
    document.body.append(barriers);
    document.body.append(gameWindow);
    gameWindow.append(gameBall);
    
    if (window.innerWidth > 1025) { background(gameWindow); }
    
    // --------------------------------------------------------
    // -------------------------EVENT-------------------------

    const btnBarriers = document.querySelector('.barriers'),
          btnPoint = document.querySelector('.point'),
          btnStart = document.querySelector('.start'),
          btnBack = document.querySelector('.back'),
          quantities = document.querySelectorAll('.btn-quantity'),
          controlBtns = document.querySelectorAll('.control-panel__btn');

    // ********** Click Event ********** //

    quantities.forEach((quantity, i) => quantity.addEventListener('click', () => {
        clearAndAddClassQuantyties(quantities, quantity, i);
    }));

    controlBtns.forEach(controlBtn => controlBtn.addEventListener('click', event => {
        console.dir(event.target.id);
        jumpControl.forEach(obj => {
            const {id, maxHeight} = obj;

            startAnimateBall({
                ballHeight,
                event, 
                id, 
                maxHeight,
                element: gameBall
            }); 
        });
    }));

    btnStart.addEventListener('click', () => testCheck(quantities, barriers, quantityActive));
    btnPoint.addEventListener('click', () => startGameForPoints(popup, quantities));

    btnBarriers.addEventListener('click', () => {
        if (!finish) { finish = numberObstaclesFinish[0]; }
        btnStart.classList.add(btnActive);
        hideShowModal({
            popapShow: barriers, 
            popapHide: popup,
        });
    });

    btnBack.addEventListener('click', () => {
        hideShowModal({
            popapShow: popup, 
            popapHide: barriers,
        });
    });

    // ********** Keydown Event ********** //

    document.addEventListener('keydown', event => {
        
        jumpSetting.forEach(obj => {
            const {keyCode, maxHeight} = obj;
            
            startAnimateBall({
                ballHeight,
                event, 
                keyCode, 
                maxHeight,
                element: gameBall
            }); 
        });

        if (event.keyCode === 13) {

            if (barriers.style.display !== 'none') {
                
                if (btnStart.classList.contains(btnActive)) {
                    testCheck(quantities, barriers, quantityActive);
                }
                if (btnBack.classList.contains(btnActive)) {
                    hideShowModal({
                        popapShow: popup, 
                        popapHide: barriers,
                    });
                    btnBack.classList.remove(btnActive);
                    return;
                }
            }
            if (popup.style.display !== 'none') {
                if (btnBarriers.classList.contains(btnActive)) {
                    hideShowModal({
                        popapShow: barriers, 
                        popapHide: popup,
                    });
                    btnStart.classList.add(btnActive);
                    if (!finish) { finish = numberObstaclesFinish[0]; }
                    return;
                }
                if (btnPoint.classList.contains(btnActive)) {
                    startGameForPoints(popup);
                }
            }
        }

        if (popup.style.display !== 'none') {
            if (event.keyCode === 40 || event.keyCode === 38) {
                toggleButton('.game__popup .btn', btnActive);
            }
        }
        if (barriers.style.display !== 'none') {
            if (event.keyCode === 40 || event.keyCode === 38) {
                toggleButton('.game__menu .btn', btnActive);
            }
            if (event.keyCode === 39) {
                switchingQuantyties(quantities, 39);
            }
            if (event.keyCode === 37) {
                switchingQuantyties(quantities, 37);
            }
        }
    });

};

export default game;