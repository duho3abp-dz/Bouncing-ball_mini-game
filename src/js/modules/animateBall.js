'use strict';

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

export default startAnimateBall;