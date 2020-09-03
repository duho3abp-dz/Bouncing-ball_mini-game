import './scss/main.scss';

import game from './js/main';

window.addEventListener('DOMContentLoaded', () => {

    game({
        numberObstaclesFinish: 15,
        obstacleRefreshRate: 2000,
        message: {
            greeting: 'Мини-игра "Прыгающий мяч"',
            victory: 'Победа!',
            defeat: 'К сожалению не получилось, попробуйте еще раз'
        }
    });

});
