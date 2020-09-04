'use strict';

const background = (bg) => {

    const startDecorOne = document.createElement('div'),
          startDecorTwo = document.createElement('div'),
          startDecorThree = document.createElement('div'),
          decorOne = document.createElement('div'),
          decorTwo = document.createElement('div'),
          decorThree = document.createElement('div'),
          decorFour = document.createElement('div'),
          decorFive = document.createElement('div'),
          decorSix = document.createElement('div'),
          decorSeven = document.createElement('div'),
          decorEight = document.createElement('div'),
          decorNine = document.createElement('div'),
          decorTen = document.createElement('div');

    startDecorOne.classList.add('start-decor_one');
    startDecorTwo.classList.add('start-decor_two');
    startDecorThree.classList.add('start-decor_three');

    decorOne.classList.add('decor_one');
    decorTwo.classList.add('decor_two');
    decorThree.classList.add('decor_three');
    decorFour.classList.add('decor_four');
    decorFive.classList.add('decor_five');
    decorSix.classList.add('decor_six');
    decorSeven.classList.add('decor_seven');
    decorEight.classList.add('decor_eight');
    decorNine.classList.add('decor_nine');
    decorTen.classList.add('decor_ten');

    bg.append(startDecorOne);
    bg.append(startDecorTwo);
    bg.append(startDecorThree);

    bg.append(decorOne);
    bg.append(decorTwo);
    bg.append(decorThree);
    bg.append(decorFour);
    bg.append(decorFive);
    bg.append(decorSix);
    bg.append(decorSeven);
    bg.append(decorEight);
    bg.append(decorNine);
    bg.append(decorTen);

};

export default background;