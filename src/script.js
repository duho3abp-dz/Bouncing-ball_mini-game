import './scss/main.scss';
import './scss/animate.scss';

import game from './js/main';

window.addEventListener('DOMContentLoaded', () => {

    game({
        numberObstaclesFinish: [10, 20, 30, 40, 50],
        obstacleRefreshRate: 2000,
        jumpSetting: [
            {keyCode: 81, maxHeight: 200},
            {keyCode: 87, maxHeight: 300},
            {keyCode: 69, maxHeight: 450}
        ],
        message: {
            greeting: 'Bouncing ball',
            victory: 'You won!',
            defeat: 'Oops, try again'
        },
        btnActive: 'btn--active',
        quantityActive: 'btn-quantity--active'
    });

});
