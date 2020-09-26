'use strict';

import startAnimateBall from './modules/animateBall';
import crashTest from './modules/crashTest';
import background from './modules/backgroundAnimate';
import hideShowModal from './modules/hideShowModal';
import toggleButton from './modules/animationButtons';
import {getScoreRecord, setScoreRecord} from './modules/scoreRecord';

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
                <H2>Очков набрано: ${counter}</H2><hr>
                <h2>УРА!!! НОВЫЙ РЕКОРД: <br> ${getScoreRecord(counter)}</h2><hr>
            `;
        } else {
            document.querySelector('.popup-content').innerHTML = `
                <h1>${message[mess]}</h1>
                <H2>Очков набрано: ${counter}</H2><hr>
                <h2>РЕКОРД ПО ОЧКАМ: ${getScoreRecord(counter)}</h2><hr>
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
            ОЧКИ:
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

    const startGameForPoints = (popup, quantities) => {
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
        quantities.forEach(btn => btn.classList.remove('btn-quantity--active'));
        quantity.classList.add('btn-quantity--active');
        finish = numberObstaclesFinish[i];
    };

    const switchingQuantyties = (quantities, num) => {
        quantities.forEach((quantity, i) => {
            if (quantity.classList.contains('btn-quantity--active')) {
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

    popup.innerHTML = `
        <div class="popup-content"> 
            <h1>${message.greeting}</h1><hr>
            <h3>Q - маленький прыжок</h3>
            <h3>W - средний прыжок</h3>
            <h3>E - высокий прыжок</h3><hr>
            <h2>РЕКОРД ПО ОЧКАМ: ${getScoreRecord()}</h2><hr>
        </div>
        <div class="btn barriers btn--active">БАРЬЕРЫ</div>
        <div class="btn point">НА ОЧКИ</div>
    `;
    barriers.innerHTML = `
        <div class="options__content"> 
            <h1>Настройки</h1><hr>
            <h3>Количество ограждений до финиша:</h3>
            <div class="options__wrap">
                <div class="btn-quantity btn-quantity--active">${numberObstaclesFinish[0]}</div>
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
    
    background(gameWindow);

    // --------------------------------------------------------
    // -------------------------EVENT-------------------------

    const btnBarriers = document.querySelector('.barriers'),
          btnPoint = document.querySelector('.point'),
          btnStart = document.querySelector('.start'),
          btnBack = document.querySelector('.back'),
          quantities = document.querySelectorAll('.btn-quantity');

    quantities.forEach((quantity, i) => quantity.addEventListener('click', () => {
        clearAndAddClassQuantyties(quantities, quantity, i);
    }));

    btnStart.addEventListener('click', () => testCheck(quantities, barriers, 'btn-quantity--active'));
    btnPoint.addEventListener('click', () => startGameForPoints(popup, quantities));

    document.addEventListener('keydown', event => {
        
        jumpSetting.forEach(obj => {
            const {keyCode, maxHeight} = obj;

            startAnimateBall({
                event, 
                keyCode, 
                maxHeight,
                element: gameBall
            }); 
        });

        if (event.keyCode === 13) {
            if (barriers.style.display !== 'none') {
                if (btnStart.classList.contains('btn--active')) {
                    testCheck(quantities, barriers, 'btn-quantity--active');
                }
                if (btnBack.classList.contains('btn--active')) {
                    hideShowModal({
                        popapShow: popup, 
                        popapHide: barriers,
                    });
                    btnBack.classList.remove('btn--active');
                    return;
                }
            }
            if (popup.style.display !== 'none') {
                if (btnBarriers.classList.contains('btn--active')) {
                    hideShowModal({
                        popapShow: barriers, 
                        popapHide: popup,
                    });
                    btnStart.classList.add('btn--active');
                    if (!finish) { finish = numberObstaclesFinish[0]; }
                    return;
                }
                if (btnPoint.classList.contains('btn--active')) {
                    startGameForPoints(popup, quantities)
                }
            }
        }

        if (popup.style.display !== 'none') {
            if (event.keyCode === 40 || event.keyCode === 38) {
                toggleButton('.game__popup .btn', 'btn--active');
            }
        }
        if (barriers.style.display !== 'none') {
            if (event.keyCode === 40 || event.keyCode === 38) {
                toggleButton('.game__menu .btn', 'btn--active');
            }
            if (event.keyCode === 39) {
                switchingQuantyties(quantities, 39);
            }
            if (event.keyCode === 37) {
                switchingQuantyties(quantities, 37);
            }
        }
    });

    btnBarriers.addEventListener('click', () => {
        if (!finish) { finish = numberObstaclesFinish[0]; }
        btnStart.classList.add('btn--active');
        hideShowModal({
            popapShow: barriers, 
            popapHide: popup,
        });
    });

    btnBack.addEventListener('click', () => hideShowModal({
        popapShow: popup, 
        popapHide: barriers,
    }));

};

export default game;