'use strict';

const gameWindow = document.createElement('div'),
      gameBall = document.createElement('div'),
      popup = document.createElement('div'),
      numberObstaclesFinish = 10;
let intervalStart,
    heightBounce = 0,
    passed = 0,
    stop = false;

const message = {
    greeting: 'Мини-игра "Прыгающий мяч"',
    victory: 'Победа!',
    defeat: 'К сожалению не получилось, попробуйте еще раз'
};

popup.classList.add('game__popup');
popup.innerHTML = `
    <div class="popup-content"> 
        <h1>${message.greeting}</h1>
        <p>Ваша задача преодолеть ${numberObstaclesFinish} препятствий</p>
    </div>
    <div class="btn">НАЧАТЬ</div>
`;
document.body.append(popup);

gameWindow.classList.add('game__window');
document.body.append(gameWindow);

gameBall.classList.add('game__ball');
gameWindow.append(gameBall);

const animateBallDown = (ball, speed) => {
    heightBounce = heightBounce - speed;
    ball.style.bottom = `${heightBounce}px`;

    if (heightBounce > 0) {
        requestAnimationFrame(() => animateBallDown(ball, speed));
    }
    if (heightBounce <= 0) {
        heightBounce = 0;
    }
};

const animateBallUp = ({
    elem, 
    startSpeed, 
    deceleration, 
    maxHeight, 
    descent
}) => {
    if (deceleration) {
        heightBounce = heightBounce + deceleration;
        elem.style.bottom = `${heightBounce}px`;    
    } else {
        heightBounce = heightBounce + startSpeed;
        elem.style.bottom = `${heightBounce}px`;
    }

    if (heightBounce < maxHeight-100) {
        requestAnimationFrame(() => animateBallUp({elem, startSpeed, descent, maxHeight}));
    }
    if (heightBounce >= maxHeight - 100 && heightBounce < maxHeight - 30) {
        requestAnimationFrame(() => animateBallUp({elem, startSpeed, descent, maxHeight,
            deceleration: 5
        }));
    }
    if (heightBounce >= maxHeight-30 && heightBounce < maxHeight) {
        requestAnimationFrame(() => animateBallUp({elem, startSpeed, descent, maxHeight,
            deceleration: 1
        }));
    }
    if (heightBounce >= maxHeight) {
        requestAnimationFrame(() => animateBallDown(elem, startSpeed));
    }
};

const roundTheNumber = (num) => Math.floor(+num.replace(/px/, ''));

const crashTest = (elem, widthObs, heightObs) => {
    const leftStyleBall = window.getComputedStyle(gameBall).left,
          leftStyleObstacle = elem.style.left,
          bottomStyleBall = roundTheNumber(gameBall.style.bottom);

    if (elem.style.background === 'gray' &&
        roundTheNumber(leftStyleBall) <= roundTheNumber(leftStyleObstacle) + widthObs &&
        roundTheNumber(leftStyleBall) + 50 >= roundTheNumber(leftStyleObstacle) + widthObs ) {
        return {
            finish: true,
            defeat: false
        };
    }
    if (roundTheNumber(leftStyleBall) <= roundTheNumber(leftStyleObstacle) + widthObs &&
        roundTheNumber(leftStyleBall) + 50 >= roundTheNumber(leftStyleObstacle) + widthObs &&
        bottomStyleBall <= heightObs) {
        return {
            finish: false,
            defeat: true
        };
    }
};

const animateObstacle = (elem, x, widthObs, heightObs) => {
    if (!stop) {
        const obj = crashTest(elem, widthObs, heightObs);
        if (obj) {
            const {finish, defeat} = obj;
            if (defeat) {
                document.querySelector('.popup-content').innerHTML = `<h1>${message.defeat}</h1>`;
                clearInterval(intervalStart);
                x = x;
                stop = true;
                gameWindow.style.display = 'none';
                popup.style.display = 'flex';
                return;
            }
            if (finish) {
                document.querySelector('.popup-content').innerHTML = `<h1>${message.victory}</h1>`;
                clearInterval(intervalStart);
                x = x;
                stop = true;
                gameWindow.style.display = 'none';
                popup.style.display = 'flex';
                return;
            }
        }
    
        x = x + 5;
        elem.style.left = `${x}px`;
        requestAnimationFrame(() => animateObstacle(elem, x, widthObs, heightObs));
    }
};

const createObstacleAndStartAnimate = () => {
    const obstacle = document.createElement('div'),
          randomHeight = Math.floor(Math.random() * 300 + 50),
          randomWidth = Math.floor(Math.random() * 80 + 5);
    let x = -60;

    passed++;
    if (passed === numberObstaclesFinish) {
        obstacle.style.background = 'gray';
    }

    obstacle.classList.add('game__obstacle');
    obstacle.style.height = `${randomHeight}px`;
    obstacle.style.width = `${randomWidth}px`;

    gameWindow.append(obstacle);

    requestAnimationFrame(() => animateObstacle(obstacle, x, randomWidth, randomHeight));
};

const startAnimateBall = (e, keyCode, elem, startSpeed, maxHeight, descent) => {
    if (e.keyCode === keyCode) {
        if (elem.style.bottom === '0px' || elem.style.bottom === '') {
            requestAnimationFrame(() => animateBallUp({
                elem,
                startSpeed, 
                maxHeight,
                descent
            }));     
        }
    }
};

document.querySelector('.btn').addEventListener('click', async () => {
    document.querySelectorAll('.game__obstacle').forEach(elem => elem.remove());
    passed = 0;
    stop = false;

    popup.style.display = 'none';
    gameWindow.style.display = 'block';
    intervalStart = setInterval(createObstacleAndStartAnimate, 2000);    
});

document.addEventListener('keydown', e => {
    startAnimateBall(e, 81, gameBall, 10, 200, 5);
    startAnimateBall(e, 87, gameBall, 10, 300, 5);
    startAnimateBall(e, 69, gameBall, 10, 450, 5);
});