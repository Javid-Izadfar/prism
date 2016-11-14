Prism.languages.css.selector = {
	pattern: /[^\{\}\s][^\{\}]*(?=\s*\{)/,
	inside: {
		'pseudo-element': /:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,
		'pseudo-class': /:[-\w]+/,
		'class': /\.[-:\.\w]+/,
		'id': /#[-:\.\w]+/,
		'attribute': {
            pattern:  /\[[^\]]+\]/,
            inside: {
                'string': {
                    pattern: /("|')(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1/,
                    greedy: true
                },
                'punctuation': /[>()\[\]*=]/
            },
        },
		'punctuation': /[>()\[\]*=]/,
	}
};

Prism.languages.insertBefore('css', 'function', {
	'hexcode': /#[\da-f]{3,6}/i,
	'entity': /\\[\da-f]{1,8}/i,
	'number': /(\-*?)+[\d%\.]+/,
	'unit': /(%|cm|em|ex|in|mm|ex|pc|pt|px|vh|vw|vmin)/,
    'string': {
		pattern: /("|')(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1/,
		inside: {
            'ascii': /\\[^\W_]{4,}/,
        },
	},
});
