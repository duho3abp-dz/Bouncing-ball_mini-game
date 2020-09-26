import './scss/main.scss';
import './scss/animate.scss';

import game from './js/main';

window.addEventListener('DOMContentLoaded', () => {

    game({
        numberObstaclesFinish: [3, 5, 30, 40, 50],
        obstacleRefreshRate: 2000,
        jumpSetting: [
            {keyCode: 81, maxHeight: 200},
            {keyCode: 87, maxHeight: 300},
            {keyCode: 69, maxHeight: 450}
        ],
        message: {
            greeting: 'Мини-игра "Прыгающий мяч"',
            victory: 'Победа!',
            defeat: 'К сожалению не получилось, попробуйте еще раз'
        }
    });

});
