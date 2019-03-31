declare const titleize: {
	/**
	Capitalize every word in a string: `unicorn cake` → `Unicorn Cake`.

	@param input - The string to titleize.

	@example
	```
	import titleize = require('titleize');

	titleize('foo bar');
	//=> 'Foo Bar'

	titleize('foo-bar');
	//=> 'Foo-Bar'
	```
	*/
	(input: string): string;

	// TODO: Remove this for the next major release, refactor the whole definition to:
	// declare function titleize(input: string): string;
	// export = titleize;
	default: typeof titleize;
};

export = titleize;
