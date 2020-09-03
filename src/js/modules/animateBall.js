'use strict';

let heightBounce = 0;

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

    if (heightBounce < maxHeight-100) {
        requestAnimationFrame(() => animateBallUp({element, startSpeed, descent, maxHeight}));
    }
    if (heightBounce >= maxHeight - 100 && heightBounce < maxHeight - 30) {
        requestAnimationFrame(() => animateBallUp({element, startSpeed, descent, maxHeight,
            deceleration: 5
        }));
    }
    if (heightBounce >= maxHeight-30 && heightBounce < maxHeight) {
        requestAnimationFrame(() => animateBallUp({element, startSpeed, descent, maxHeight,
            deceleration: 1
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