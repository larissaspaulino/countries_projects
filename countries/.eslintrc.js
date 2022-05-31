/* module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
  },
};
 */

module.exports = {
	extends: [
		'airbnb-typescript',
		'airbnb/hooks',
		'plugin:@typescript-eslint/recommended',
		'plugin:jest/recommended',
		'plugin:prettier/recommended'
	],
	plugins: ['react', '@typescript-eslint', 'jest', 'prettier'],
	env: {
		browser: true,
		es6: true,
		jest: true
	},
	ignorePatterns: ['mock-api', '.eslintrc.js', 'src/setupTests.ts'],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly'
	},
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 2018,
		sourceType: 'module',
		project: './tsconfig.json'
	},
	rules: {
		'@typescript-eslint/no-empty-function': [
			'warn',
			{
				allow: ['protected-constructors', 'private-constructors']
			}
		],
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/no-use-before-define': 'off',
		'@typescript-eslint/no-shadow': 'off',
		'@typescript-eslint/no-non-null-assertion': 'off',
		'arrow-body-style': ['warn', 'as-needed'],
		'import/order': 'off',
		'import/prefer-default-export': 'off',
		'jest/expect-expect': 'off',
		'jsx-a11y/anchor-is-valid': 'off',
		'jsx-a11y/label-has-associated-control': 'off',
		'no-param-reassign': 'off',
		'no-plusplus': 'off',
		'prettier/prettier': 'warn',
		'react/jsx-props-no-spreading': 'off',
		'react/prop-types': 'off',
		'react/react-in-jsx-scope': 'off',
		'react/require-default-props': 'off',
		'react-hooks/exhaustive-deps': 'warn',
		'react-hooks/rules-of-hooks': 'error',
		'sort-imports': 'error'
	},
	overrides: [
		{
			files: ['*.test.ts', '*.spec.ts'],
			rules: {
				'@typescript-eslint/no-empty-function': 'off'
			}
		}
	],
	settings: {
		jest: {
			version: 26
		}
	}
}
