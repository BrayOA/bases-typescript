"use strict";
(function () {
    var fullName = function (firstName, lastName, upper) {
        if (upper === void 0) { upper = false; }
        if (upper) {
            return "".concat(firstName, " ").concat(lastName || '---').toUpperCase();
        }
        else {
            return "".concat(firstName, " ").concat(lastName || '---');
        }
    };
    var name = fullName('Tony', 'Stark');
    console.log({ name: name });
})();
//# sourceMappingURL=args-defaul.js.map