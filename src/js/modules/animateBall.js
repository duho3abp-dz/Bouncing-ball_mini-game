'use strict';

import ballPhysics from './ballPhysics';

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
    ballHeight,
    element, 
    speed, 
    maxHeight
}) => {
    speedReduction({maxHeight});
    
    heightBounce = heightBounce - speed + reduction;
    element.style.bottom = `${heightBounce}px`;
    
    if (heightBounce > 0) {
        requestAnimationFrame(() => animateBallDown({ballHeight, element, speed, maxHeight}));    
    }
    if (heightBounce <= 0) {
        element.style.bottom = '-2px';
        ballPhysics(element, ballHeight);
    }
};

const animateBallUp = ({
    ballHeight,
    element, 
    speed, 
    maxHeight
}) => {
    speedReduction({maxHeight, up: true});
    
    heightBounce = heightBounce + speed - reduction;
    element.style.bottom = `${heightBounce}px`;
    element.style.bottom = `${heightBounce}px`;
    element.style.height = `${ballHeight + 10}px`;

    if (heightBounce < maxHeight) {
        requestAnimationFrame(() => animateBallUp({ballHeight, element, speed, maxHeight}));
    }
    if (heightBounce >= maxHeight) {
        requestAnimationFrame(() => animateBallDown({ballHeight, element, speed, maxHeight}));
    }
};

const testAnimate = (element, ballHeight, speed, maxHeight, descent) => {
    const bottom = element.style.bottom.replace(/px/, '');
    if (element.style.bottom === '0px' || element.style.bottom === '' || +bottom <= 0) {

        element.classList.add('stop-animation');
        element.classList.remove('start-animation');
        
        requestAnimationFrame(() => animateBallUp({
            ballHeight,
            element,
            speed, 
            maxHeight,
            descent
        }));     
    }
};

const startAnimateBall = ({
    ballHeight,
    event, 
    keyCode, 
    element, 
    speed = 10, 
    maxHeight, 
    descent = 5,
    id
}) => {
    if (event.keyCode && keyCode) {
        if (event.keyCode === keyCode) {
            testAnimate(element, ballHeight, speed, maxHeight, descent)
        }
    }
    
    if (event.target.id && id || event.target.alt && id) {
        if (event.target.alt === id || event.target.id === id) {
            testAnimate(element, ballHeight, speed, maxHeight, descent)
        }
    }
};

export default startAnimateBall;