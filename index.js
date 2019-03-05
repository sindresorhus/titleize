'use strict';
const titleize = input => {
	if (typeof input !== 'string') {
		throw new TypeError('Expected a string');
	}

	return input.toLowerCase().replace(/(?:^|\s|-)\S/g, x => x.toUpperCase());
};

module.exports = titleize;
module.exports.default = titleize;
