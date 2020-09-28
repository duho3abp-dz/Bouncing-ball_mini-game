import './scss/main.scss';
import './scss/animate.scss';
import './scss/media/laptop.scss';
import './scss/media/tablets.scss';
import './scss/media/phones.scss';

import game from './js/main';

window.addEventListener('DOMContentLoaded', () => {

    let ballWidth = 50,
        ballHeight = 50,
        jumpSetting = [
            {keyCode: 81, maxHeight: 200},
            {keyCode: 87, maxHeight: 300},
            {keyCode: 69, maxHeight: 450}
        ],
        jumpControl = [
            {alt: 'little', maxHeight: 200},
            {alt: 'middle', maxHeight: 300},
            {alt: 'high', maxHeight: 450}
        ];

    if (window.innerWidth < 750) { 
        ballWidth = 35;
        ballHeight = 35;
        jumpSetting = [
            {keyCode: 81, maxHeight: 100},
            {keyCode: 87, maxHeight: 150},
            {keyCode: 69, maxHeight: 250}
        ];
        jumpControl = [
            {alt: 'little', maxHeight: 100},
            {alt: 'middle', maxHeight: 150},
            {alt: 'high', maxHeight: 250}
        ];
    }

    game({
        ballHeight,
        ballWidth,
        numberObstaclesFinish: [10, 20, 30, 40, 50],
        obstacleRefreshRate: 2000,
        jumpSetting,
        jumpControl,
        message: {
            greeting: 'Bouncing ball',
            victory: 'You won!',
            defeat: 'Oops, try again'
        },
        btnActive: 'btn--active',
        quantityActive: 'btn-quantity--active',
    });

});
