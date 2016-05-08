/*
 * pc
 *
 * Copyright(c) 2016 André König <andre.koenig@posteo.de>
 * MIT Licensed
 *
 */

/**
 * @author André König <andre.koenig@posteo.de>
 *
 */

'use strict';

'use strict';

const five = require("johnny-five");

//
// IMPORTANT: Please adjust your port accordingly
//
const board = new five.Board({port: '/dev/ttyACM3'});

board.on('ready', function() {
    const rgb = new five.Led.RGB({
        pins: {
			red: 11,
			green: 10,
			blue: 9
		}
	});

	this.repl.inject({
		led: rgb
	});

	rgb.on();
	rgb.color('#2196F3');
	rgb.strobe(500);
});
