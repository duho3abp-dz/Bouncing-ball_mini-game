'use strict';

const roundTheNumber = (num) => Math.floor(+num.replace(/px/, ''));

const crashTest = (elem, widthObs, heightObs, gameBall) => {
    const leftStyleBall = roundTheNumber(window.getComputedStyle(gameBall).left),
          leftStyleObstacle = roundTheNumber(elem.style.left),
          bottomStyleBall = roundTheNumber(gameBall.style.bottom);

    if (elem.style.background === 'gray' &&
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

export default crashTest;