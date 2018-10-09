'use strict';
module.exports = input => {
	if (typeof input !== 'string') {
		throw new TypeError('Expected a string');
	}

	return input.toLowerCase().replace(/(?:^|\s|-)\S/g, x => x.toUpperCase()).replace(/_|-/g, " ");
};
