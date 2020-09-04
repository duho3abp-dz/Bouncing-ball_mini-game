'use strict';

const background = (bg) => {

    const decorOne = document.createElement('div'),
          decorTwo = document.createElement('div'),
          decorThree = document.createElement('div'),
          decorFour = document.createElement('div'),
          decorFive = document.createElement('div'),
          decorSix = document.createElement('div'),
          decorSeven = document.createElement('div'),
          decorEight = document.createElement('div'),
          decorNine = document.createElement('div'),
          decorTen = document.createElement('div');

    decorOne.classList.add('decor_one');
    decorTwo.classList.add('decor_two');
    decorThree.classList.add('decor_three');
    decorFour.classList.add('decor_four');
    decorFive.classList.add('decor_five');
    decorSix.classList.add('decor_six');
    decorSeven.classList.add('decor_seven');
    decorNine.classList.add('decor_nine');
    decorTen.classList.add('decor_ten');

    bg.append(decorOne);
    bg.append(decorTwo);
    bg.append(decorThree);
    bg.append(decorFour);
    bg.append(decorFive);
    bg.append(decorSix);
    bg.append(decorEight);
    bg.append(decorNine);
    bg.append(decorTen);

};

export default background;