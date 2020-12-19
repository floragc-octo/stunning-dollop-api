module.exports = {
	'env': {
		'commonjs': true,
		'es2021': true,
		'node': true
	},
	'extends': 'eslint:recommended',
	'parserOptions': {
		'ecmaVersion': 12
	},
	'rules': {
		'indent': [
			'error',
			'tab'
		],
		'linebreak-style': [
			'error',
			'unix'
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'never'
		]
	},
	"overrides": [
		{
			"files": ["**/*.spec.js"],
			"env": {
				"jest": true
			},
		},
		{
			"files": ["main.js"],
			"rules": {
				"no-console": "off"
			}
		},
		{
			"files": ["**/**schema*.js"],
			"rules": {
				"camelcase": "off"
			}
		},
	]
}
