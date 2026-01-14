import nextPlugin from 'eslint-config-next'

const eslintConfig = [
    ...nextPlugin,
    {
        rules: {
            'react-hooks/exhaustive-deps': 'off',
        },
    },
]

export default eslintConfig
