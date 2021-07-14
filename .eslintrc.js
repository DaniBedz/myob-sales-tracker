module.exports = {
    'extends': ['react-app'],
    'overrides': [
        {
            'files': ['src/**/*.js', 'src/**/*.jsx', '**/**/*.js'],
            'rules': {
                'arrow-body-style': [1, 'as-needed'],
                'arrow-parens': [1, 'always'],
                'brace-style': 1,
                'comma-dangle': [1, 'always-multiline'],
                'eol-last': [1, 'always'],
                'eqeqeq': [1, 'always'],
                'import/order': [1, {
                    'newlines-between': 'always',
                    'pathGroups': [
                        {
                            'pattern': 'languages/**/*',
                            'group': 'internal',
                            'position': 'after',
                        }, {
                            'pattern': 'global/**/*',
                            'group': 'internal',
                            'position': 'after',
                        }, {
                            'pattern': 'consts/**/*',
                            'group': 'internal',
                            'position': 'before',
                        }, {
                            'pattern': 'config/**/*',
                            'group': 'internal',
                            'position': 'before',
                        },
                        {
                            'pattern': 'models/**/*',
                            'group': 'internal',
                            'position': 'before',
                        },
                        {
                            'pattern': 'services/**/*',
                            'group': 'internal',
                            'position': 'before',
                        }, {
                            'pattern': 'stories/**/*',
                            'group': 'internal',
                            'position': 'before',
                        }, {
                            'pattern': 'view/**/*',
                            'group': 'internal',
                            'position': 'before',
                        }, {
                            'pattern': 'context/**/*',
                            'group': 'internal',
                            'position': 'before',
                        }, {
                            'pattern': 'components/**/*',
                            'group': 'internal',
                            'position': 'before',
                        }, {
                            'pattern': 'containers/**/*',
                            'group': 'internal',
                            'position': 'before',
                        }],
                }],
                'import/prefer-default-export': 1,
                'indent': [1, 4],
                'max-len': [1, { 'code': 140, 'tabWidth': 4, 'ignoreRegExpLiterals': true, 'ignorePattern': `${'^\\s*(it)'}` }],
                'no-console': [1, { allow: ['warn', 'error'] }],
                'no-unused-expressions': [1, {
                    'allowShortCircuit': true,
                    'allowTernary': true,
                    'allowTaggedTemplates': true,
                }],
                'no-multi-spaces': 1,
                'no-multiple-empty-lines': 1,
                'no-trailing-spaces': 1,
                'no-var': 1,
                'padded-blocks': [1, 'never'],
                'prefer-arrow-callback': 1,
                'quotes': [1, 'single'],
                'react/jsx-filename-extension': [1, { 'allow': 'as-needed' }],
                'react/jsx-first-prop-new-line': 1,
                'react/jsx-fragments': [1, 'syntax'],
                'react/jsx-key': [1, { 'checkFragmentShorthand': false }],
                'react/jsx-no-bind': [1, { 'allowArrowFunctions': true }],
                'react/jsx-curly-brace-presence': [1, { props: 'never', children: 'never' }],
                'react/self-closing-comp': 1,
                'react/sort-comp': [1, {
                    order: [
                        'constructor',
                        'static-methods',
                        'static-variables',
                        'lifecycle',
                        '/^handle.+$/',
                        'everything-else',
                        'render',
                    ],
                }],
                'semi': [1, 'always'],
                'spaced-comment': 1,
            },
        },
    ],
    'globals': {
    },
    'settings': {
        'import/internal-regex': '^components|containers|services|global|stories|consts|models|config|languages/',
    },
};
