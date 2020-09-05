'use strict';

const hideShowModal = ({
    popapShow, 
    popapHide,
    showDisplay = 'flex', 
    hideDisplay = 'none'
}) => {
    popapShow.style.display = showDisplay;
    popapHide.style.display = hideDisplay;
};

export default hideShowModal;