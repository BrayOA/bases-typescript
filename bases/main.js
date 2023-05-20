"use strict";
(function () {
    var batimovil = {
        carroceria: "Negra",
        modelo: "6x6",
        antibalas: true,
        pasajeros: 4
    };
    var bumblebee = {
        carroceria: "Amarillo con negro",
        modelo: "4x2",
        antibalas: true,
        pasajeros: 4,
        disparar: function () {
            console.log("Disparando");
        }
    };
    var villanos = [{
            nombre: "Lex Luthor",
            edad: 54,
            mutante: false
        }, {
            nombre: "Erik Magnus Lehnsherr",
            edad: 49,
            mutante: true
        }, {
            nombre: "James Logan",
            edad: undefined,
            mutante: true
        }];
    var charles = {
        poder: "psiquico",
        estatura: 1.78
    };
    console.log('paso por aqui');
    var apocalipsis = {
        lider: true,
        miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"]
    };
    console.log(apocalipsis);
    var mystique;
    mystique = charles;
    mystique = apocalipsis;
})();
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
(function () {
    var fullName = function (firstName, lastName) {
        return "".concat(firstName, " ").concat(lastName || '---');
    };
    var name = fullName('tony');
    console.log({ name: name });
})();
(function () {
    var fullName = function (firstName, lastName) {
        return "".concat(firstName, " ").concat(lastName);
    };
    var name = fullName('tony', 'stark');
    console.log({ name: name });
})();
(function () {
    var fullName = function (firstName) {
        var restArgs = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            restArgs[_i - 1] = arguments[_i];
        }
        return "".concat(firstName, " ").concat(restArgs.join(' '));
    };
    var superman = fullName('clark', 'joseph', 'kent');
    console.log({ superman: superman });
})();
(function () {
    var addNumber = function (a, b) { return a + b; };
    var greet = function (name) { return "hola ".concat(name); };
    var saveTheWorld = function () { return "el mundo esta salvado!"; };
    var myFunction;
    myFunction = saveTheWorld;
    console.log(myFunction());
})();
(function () {
    var hero = 'Flash';
    function returnName() {
        return hero;
    }
    var activateBatisingnal = function () {
        return 'batiseñal activada!';
    };
    console.log(typeof activateBatisingnal);
    var herNane = returnName();
})();
(function () {
    var flash = {
        name: 'barry allen',
        age: 24,
        powers: ['Super velosidad', 'Viajar en el tiempo']
    };
    var superman = {
        name: 'Clark kent',
        age: 60,
        powers: ['Super velosidad']
    };
    console.log(flash);
})();
(function () {
    var flash = {
        name: 'barry allen',
        age: 24,
        powers: [1, 2]
    };
    var superman = {
        name: 'Clark kent',
        age: 60,
        powers: [1],
        getName: function () {
            return this.name;
        }
    };
})();
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
(function () {
    var AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 1] = "min";
        AudioLevel[AudioLevel["medium"] = 2] = "medium";
        AudioLevel[AudioLevel["max"] = 10] = "max";
    })(AudioLevel || (AudioLevel = {}));
    var currentAudio = AudioLevel.max;
    console.log(currentAudio);
    console.log(AudioLevel);
})();
(function () {
    var avenger = '123';
    var exists;
    var power;
    avenger = 'Dr Strange';
    console.log(avenger.charAt(0));
    avenger = 150.232556415;
    console.log(avenger.toFixed(2));
    console.log(exists);
    console.log(power);
})();
(function () {
    var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var villans = ['ommega rojo', 'Dormammu', 'duende verde'];
    villans.forEach(function (v) { return console.log(v.toUpperCase()); });
})();
(function () {
    var isSuperman = true;
    var isBatman = false;
    isSuperman = (isBatman) ? true : false;
    console.log({ isSuperman: isSuperman });
})();
(function () {
    var error = function (message) {
        if (false) {
            throw new Error(message);
        }
        return 1;
    };
    error('Auxilio!');
    console.log('hola');
})();
(function () {
    var isActive = null;
})();
(function () {
    var avenger = 10;
    console.log(avenger);
    var villians = 20;
    if (avenger < villians) {
        console.log('estamos en problemas');
    }
    else {
        console.log('estamos salvados');
    }
    avenger = Number('55A');
    console.log({ avenger: avenger });
})();
(function () {
    var _a;
    var batman = 'Batman';
    var linternaVerde = "Linterna Verde";
    var volvanNegro = "Volcan Negro";
    console.log("Im ".concat(batman));
    console.log(batman.toUpperCase());
    console.log(((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || 'no esta presente');
})();
(function () {
    var hero = ['Dr Strange', 100, true];
    hero[0] = 'Iroman';
    hero[1] = 50;
    hero[2] = false;
    console.log(hero);
})();
(function () {
    function callBack() {
        return;
    }
    var callSuperman = function () {
        return;
    };
    var a = callBack();
    console.log(a);
})();
//# sourceMappingURL=main.js.map