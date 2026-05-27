(function (Scratch) {
    'use strict';

    class AntWar10 {
        getInfo() {
            return {
                id: 'antwar10',
                name: 'AntWar10',
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
