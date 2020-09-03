'use strict';

import startAnimateBall from './modules/animateBall';
import crashTest from './modules/crashTest';

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
        counter = 0;

    // --------------------------------------------------------
    // -------------------------LOGIC-------------------------

    const winningOrLosingAction = (position, mess) => {
        document.querySelector('.popup-content').innerHTML = `<h1>${message[mess]}</h1>`;
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
        if (passed === numberObstaclesFinish) {
            obstacle.style.background = 'gray';
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
        popup.style.display = 'none';
        gameWindow.style.display = 'block';

        intervalStart = setInterval(createObstacleAndStartAnimate, obstacleRefreshRate);   
    };

    // --------------------------------------------------------
    // -------------------------CREATE-------------------------

    const gameWindow = document.createElement('div'),
          gameBall = document.createElement('div'),
          popup = document.createElement('div');

    // --------------------------------------------------------
    // -------------------------RENDER-------------------------

    popup.classList.add('game__popup');
    popup.innerHTML = `
        <div class="popup-content"> 
            <h1>${message.greeting}</h1><hr>
            <h3>Q - маленький прыжок</h3>
            <h3>W - средний прыжок</h3>
            <h3>E - высокий прыжок</h3><hr>
            <h2>Ваша задача преодолеть ${numberObstaclesFinish} препятствий</h2>
        </div>
        <div class="btn">НАЧАТЬ</div>
    `;
    document.body.append(popup);

    gameWindow.classList.add('game__window');
    gameWindow.innerHTML = `
        <div class="counter">
            ОЧКИ:
            <p>${counter}</p>
        </div>
    `;
    document.body.append(gameWindow);

    gameBall.classList.add('game__ball');
    gameBall.innerHTML = `
        <div class="flare"></div>
        <div class="shadow"></div>
    `;
    gameWindow.append(gameBall);

    // --------------------------------------------------------
    // -------------------------EVENT-------------------------

    document.querySelector('.btn').addEventListener('click', () => startGame());

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
            if (window.getComputedStyle(popup).display === 'flex') {
                startGame();
            }
        }
    });

};

export default game;