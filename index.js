(function(ext) {

var food = 100;
var army = 0;
var enemy = 100;

ext._shutdown = function() {};

ext._getStatus = function() {

    return {
        status: 2,
        msg: 'Ready'
    };

};

ext.spawnAnt = function() {

    if (food >= 10) {

        food -= 10;
        army += 1;

    }
};

ext.getFood = function() {

    return food;

};

var descriptor = {

    blocks: [

        [' ', 'créer fourmi', 'spawnAnt'],

        ['r', 'nourriture', 'getFood']

    ]
};

ScratchExtensions.register(new AntWar10());
    'AntWar',
    descriptor,
    ext
);

})({});
