"use strict";
(() => {
    let avenger = 10;
    console.log(avenger);
    const villians = 20;
    if (avenger < villians) {
        console.log('estamos en problemas');
    }
    else {
        console.log('estamos salvados');
    }
    avenger = Number('55A');
    console.log({ avenger });
})();
