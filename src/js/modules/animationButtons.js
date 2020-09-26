'use strict';

export const toggleButton = (btnsClass, active) => {
    document.querySelectorAll(btnsClass).forEach(btn => {
        if (btn.classList.contains(active)) {
            btn.classList.remove(active);
        } else {
            btn.classList.add(active);
        }
    });
};