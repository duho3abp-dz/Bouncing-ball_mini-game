'use strict';

import startAnimateBall from './modules/animateBall';
import crashTest from './modules/crashTest';
import background from './modules/backgroundAnimate';
import hideShowModal from './modules/hideShowModal';
import {getScoreRecord, setScoreRecord} from './modules/scoreRecord';
import {clearBtnsStyle, selectButton} from './modules/animationButtons';

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
            <h2>РЕКОРД ПО ОЧКАМ: ${getScoreRecord()}</h2><hr>
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
    
    background(gameWindow);

    // --------------------------------------------------------
    // -------------------------EVENT-------------------------

    const btnBarriers = document.querySelector('.barriers'),
          btnPoint = document.querySelector('.point'),
          btnStart = document.querySelector('.start'),
          btnBack = document.querySelector('.back'),
          quantities = document.querySelectorAll('.btn-quantity');

    quantities.forEach((quantity, i) => quantity.addEventListener('click', () => {
        clearBtnsStyle({btns: quantities});
        selectButton({btn: quantity});

        finish = numberObstaclesFinish[i];
    }));

    btnStart.addEventListener('click', () => testCheck(quantities, barriers));
    btnPoint.addEventListener('click', () => {
        clearBtnsStyle({btns: quantities});
        finish = '';
        popup.style.display = 'none';
        startGame();
    });

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
            if (window.getComputedStyle(barriers).display === 'flex') {
                testCheck(quantities, barriers);
            }
            if (window.getComputedStyle(popup).display === 'flex') { 
                hideShowModal({
                    popapShow: barriers, 
                    popapHide: popup,
                });
            }
        }
    });

    btnBarriers.addEventListener('click', () => hideShowModal({
        popapShow: barriers, 
        popapHide: popup,
    }));
    btnBack.addEventListener('click', () => hideShowModal({
        popapShow: popup, 
        popapHide: barriers,
    }));

};

export default game;