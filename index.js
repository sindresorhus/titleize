export default function titleize(string) {
	if (typeof string !== 'string') {
		throw new TypeError('Expected a string');
	}

	return string.toLowerCase().replaceAll(/(?:^|\s|-)\S/g, x => x.toUpperCase());
}
