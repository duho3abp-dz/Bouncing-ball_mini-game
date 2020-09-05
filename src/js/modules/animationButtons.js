'use strict';

export const clearBtnsStyle = ({
    btns, 
    colorBg = '#000', 
    colorText = '#fff'
}) => btns.forEach(btn => {
    btn.style.color = colorText;
    btn.style.background = colorBg;
});

export const selectButton = ({
    btn, 
    colorBg = '#fff', 
    colorText = '#000'
}) => {
    btn.style.color = colorText;
    btn.style.background = colorBg;
};