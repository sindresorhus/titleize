import test from 'ava';
import titleize from './index.js';

test('main', t => {
	t.is(titleize(''), '');
	t.is(titleize('unicorns and rainbows'), 'Unicorns And Rainbows');
	t.is(titleize('UNICORNS AND RAINBOWS'), 'Unicorns And Rainbows');
	t.is(titleize('unicorns-and-rainbows'), 'Unicorns-And-Rainbows');
	t.is(titleize('UNICORNS-AND-RAINBOWS'), 'Unicorns-And-Rainbows');
	t.is(titleize('unicorns   and rainbows'), 'Unicorns   And Rainbows');
});
