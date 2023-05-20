"use strict";
(function () {
    var myCustomVariables = 'bray';
    console.log(typeof myCustomVariables);
    myCustomVariables = 20;
    console.log(typeof myCustomVariables);
    myCustomVariables = {
        name: 'bruce',
        age: 43,
        powers: [1],
    };
    console.log(typeof myCustomVariables);
    console.log(myCustomVariables);
})();
//# sourceMappingURL=union-types.js.map