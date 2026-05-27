(function (Scratch) {
    'use strict';

    class AntWar10 {
        getInfo() {
            return {
                id: 'antwar10',
                name: 'AntWar10',
                color1: '#fffff1',

                blocks: [
                    {
                        opcode: 'hello',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'dire bonjour'
                    }
                ]
            };
        }

        hello() {
            console.log('Bonjour !');
        }
    }

    Scratch.extensions.register(new AntWar10());

})(Scratch);

    Scratch.extensions.register(new AntWar10());

})(Scratch);
