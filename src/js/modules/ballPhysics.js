'use strict';

const ballPhysics = (element) => {
    let heightBallLand = 40,
        radiusBallLand = 40;

    const setChangesStyle = (h, r) => {
        element.style.height = `${h}px`;
        element.style.borderBottomLeftRadius = `${r}%`;
        element.style.borderBottomRightRadius = `${r}%`;    
    };

    const returnToNormal = () => {
        heightBallLand++;
        radiusBallLand++;

        if (heightBallLand < 50 && radiusBallLand < 50) {
            setChangesStyle(heightBallLand, radiusBallLand);        
            requestAnimationFrame(returnToNormal)
        } else {
            setChangesStyle(heightBallLand, radiusBallLand);
        }
    };

    setChangesStyle(heightBallLand, radiusBallLand);

    requestAnimationFrame(returnToNormal);
};

export default ballPhysics;