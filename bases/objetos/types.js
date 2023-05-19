"use strict";
(() => {
    let flash = {
        name: 'barry allen',
        age: 24,
        powers: [1, 2]
    };
    let superman = {
        name: 'Clark kent',
        age: 60,
        powers: [1],
        getName() {
            return this.name;
        }
    };
})();
