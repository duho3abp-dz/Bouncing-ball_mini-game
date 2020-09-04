'use strict';

import startAnimateBall from './modules/animateBall';
import crashTest from './modules/crashTest';
import background from './modules/backgroundAnimate';

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
    
    background(gameWindow);

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
        startAnimateBall({event, 
            keyCode: 81, 
            element: gameBall,
            maxHeight: 200
        });
        startAnimateBall({event, 
            keyCode: 87, 
            element: gameBall,
            maxHeight: 300
        });
        startAnimateBall({event, 
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

export default game;