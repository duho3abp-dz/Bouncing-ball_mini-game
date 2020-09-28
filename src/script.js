import './scss/main.scss';
import './scss/animate.scss';
import './scss/media/laptop.scss';
import './scss/media/tablets.scss';
import './scss/media/phones.scss';

import game from './js/main';

window.addEventListener('DOMContentLoaded', () => {

    const flipSrc = 'icons/flip.svg',
          highBtnSrc = 'icons/high.svg',
          middleBtnSrc = 'icons/middle.svg',
          littleBtnSrc = 'icons/little.svg';

    let ballWidth = 50,
        ballHeight = 50,
        maxHeightObst = 300,
        minHeightObst = 50,
        maxWidthObst = 80,
        minWidthObst = 5,
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

    if (window.innerWidth < 850) { 
        ballWidth = 35;
        ballHeight = 35;
        maxHeightObst = 180;
        minHeightObst = 50;
        maxWidthObst = 30;
        minWidthObst = 5;
        jumpSetting = [
            {keyCode: 81, maxHeight: 150},
            {keyCode: 87, maxHeight: 200},
            {keyCode: 69, maxHeight: 250}
        ];
        jumpControl = [
            {id: 'little', maxHeight: 150},
            {id: 'middle', maxHeight: 200},
            {id: 'high', maxHeight: 250}
        ];
    }

    game({
        flipSrc,
        highBtnSrc,
        middleBtnSrc,
        littleBtnSrc,
        ballHeight,
        ballWidth,
        maxHeightObst,
        minHeightObst,
        maxWidthObst,
        minWidthObst,
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
        quantityActive: 'btn-quantity--active'
    });

});
