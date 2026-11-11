import nextPlugin from 'eslint-config-next'

const eslintConfig = [
    { ignores: ['.open-next/**', '.wrangler/**'] },
    ...nextPlugin,
    {
        rules: {
            'react-hooks/exhaustive-deps': 'off',
        },
    },
]

export default eslintConfig
