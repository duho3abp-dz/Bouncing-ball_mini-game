import './scss/main.scss';
import './scss/animate.scss';

import game from './js/main';

window.addEventListener('DOMContentLoaded', () => {

    game({
        numberObstaclesFinish: [10, 20, 30, 40, 50],
        obstacleRefreshRate: 2000,
        message: {
            greeting: 'Мини-игра "Прыгающий мяч"',
            victory: 'Победа!',
            defeat: 'К сожалению не получилось, попробуйте еще раз'
        }
    });

});
