'use strict';
const titleize = input => {
	if (typeof input !== 'string') {
		throw new TypeError('Expected a string');
	}

	return input.toLowerCase().replace(/(?:^|\s|-)\S/g, x => x.toUpperCase());
};

module.exports = titleize;
// TODO: Remove this for the next major release
module.exports.default = titleize;
