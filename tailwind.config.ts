import type { Config } from 'tailwindcss'

const config: Config = {
    darkMode: 'selector',
    content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['var(--font-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
                display: ['var(--font-display)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
                mono: ['var(--font-mono)', 'ui-monospace', 'SFMono-Regular', 'monospace'],
                title: ['var(--font-display)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
                text: ['var(--font-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
            },
            colors: {
                // Caesar palette: tinted neutrals, never pure #000 / #fff.
                'caesar-black': '#14100e',
                'caesar-burgundy': '#F5332C',
                'caesar-white': '#fbfaf6',
                // Legacy brand colors
                'brand-primary': '#243447',
                'brand-secondary': '#141D26',
                'brand-tertiary': '#C51F5D',
                'brand-low': '#141D26',
                'primary-default': '#001514',
                'primary-hover': '#243635',
                'primary-pressed': '#475756',
                'primary-focused': '#E0E3E3',
                'primary-disabled': '#A8AFAF',
                'background-primary': '#FCFBF9',
                'background-secondary': '#EDEFEF',
                'surface-high': '#A8AFAF',
                'surface-medium': '#C2C7C7',
                'surface-low': '#E0E3E3',
                'border-primary': '#A8AFAF',
                'border-secondary': '#5E6C6B',
                'font-high': '#001514',
                'font-medium': '#243635',
                'font-low': '#475756',
                'base-black': '#000000',
                'base-white': '#FFFFFF',
            },
            letterSpacing: {
                tightest: '-0.03em',
                editorial: '-0.022em',
                meta: '0.22em',
            },
            transitionTimingFunction: {
                'out-quart': 'cubic-bezier(0.22, 1, 0.36, 1)',
                'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
        },
    },
    plugins: [],
}
export default config
