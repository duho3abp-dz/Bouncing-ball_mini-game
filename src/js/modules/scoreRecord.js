'use strict';

export const getScoreRecord = (counter) => {
    const getScore = localStorage.getItem('score'),
          score = !getScore ?  0 : getScore ,
          record = counter > score ? counter : score;

    return record;
};

export const setScoreRecord = (score) => {
    const oldScore = localStorage.getItem('score');

    if (score > oldScore) {
        localStorage.setItem('score', score);
    }
};