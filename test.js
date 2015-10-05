import test from 'ava';
import fn from './';

test(t => {
	t.is(fn(''), '');
	t.is(fn('unicorns and rainbows'), 'Unicorns And Rainbows');
	t.is(fn('UNICORNS AND RAINBOWS'), 'Unicorns And Rainbows');
	t.is(fn('unicorns-and-rainbows'), 'Unicorns-And-Rainbows');
	t.is(fn('UNICORNS-AND-RAINBOWS'), 'Unicorns-And-Rainbows');
	t.is(fn('unicorns   and rainbows'), 'Unicorns   And Rainbows');
	t.end();
});
