'use strict';

const ballPhysics = (element, ballHeight) => {
    let heightBallLand = ballHeight - 10,
        radiusBallLand = 40;

    const setChangesStyle = (h, r) => {
        element.style.height = `${h}px`;
        element.style.borderBottomLeftRadius = `${r}%`;
        element.style.borderBottomRightRadius = `${r}%`;    
    };

    const returnToNormal = () => {
        heightBallLand++;
        radiusBallLand++;

        if (heightBallLand < ballHeight && radiusBallLand < 50) {
            setChangesStyle(heightBallLand, radiusBallLand);        
            requestAnimationFrame(returnToNormal)
        } else {
            setChangesStyle(heightBallLand, radiusBallLand);
            element.classList.add('start-animation');
            element.classList.remove('stop-animation');
        }
    };

    setChangesStyle(heightBallLand, radiusBallLand);

    requestAnimationFrame(returnToNormal);
};

export default ballPhysics;