'use strict';
var test = require('ava');
var titleize = require('./');

test(function (t) {
	t.assert(titleize('') === '');
	t.assert(titleize('unicorns and rainbows') === 'Unicorns And Rainbows');
	t.assert(titleize('UNICORNS AND RAINBOWS') === 'Unicorns And Rainbows');
	t.assert(titleize('unicorns-and-rainbows') === 'Unicorns-And-Rainbows');
	t.assert(titleize('UNICORNS-AND-RAINBOWS') === 'Unicorns-And-Rainbows');
	t.assert(titleize('unicorns   and rainbows') === 'Unicorns   And Rainbows');
	t.end();
});
