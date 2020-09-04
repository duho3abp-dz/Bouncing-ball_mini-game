import './scss/main.scss';
import './scss/animate.scss';

import game from './js/main';

window.addEventListener('DOMContentLoaded', () => {

    game({
        numberObstaclesFinish: [5, 10, 15, 20, 25],
        obstacleRefreshRate: 2000,
        message: {
            greeting: 'Мини-игра "Прыгающий мяч"',
            victory: 'Победа!',
            defeat: 'К сожалению не получилось, попробуйте еще раз'
        }
    });

});
