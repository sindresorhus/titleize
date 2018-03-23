import test from 'ava';
import m from '.';

test('main', t => {
	t.is(m(''), '');
	t.is(m('unicorns and rainbows'), 'Unicorns And Rainbows');
	t.is(m('UNICORNS AND RAINBOWS'), 'Unicorns And Rainbows');
	t.is(m('unicorns-and-rainbows'), 'Unicorns-And-Rainbows');
	t.is(m('UNICORNS-AND-RAINBOWS'), 'Unicorns-And-Rainbows');
	t.is(m('unicorns   and rainbows'), 'Unicorns   And Rainbows');
});
