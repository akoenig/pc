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

const five = require('johnny-five');

//
// IMPORTANT: Please adjust your port accordingly
//
const board = new five.Board({port: '/dev/ttyACM3'});

//
// The photoresistor threshold. The LED will be activated when the
// photoresistor value will be higher than this definition.
//
const THRESHOLD = 250;

board.on('ready', () => {
	//
	// The LED which will be activated when the treshold has been overstep.
	//
	const led = new five.Led(13);

	// Create a new `photoresistor` hardware instance.
	new five.Sensor({
		pin: 'A2',
		freq: 250
	})
	.on('data', function () {
		this.value > THRESHOLD ? led.on() : led.off();
	});
});
