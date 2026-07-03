import type { CSSProperties } from 'react'

const ink = {
    base: 'rgba(20, 16, 14, 0.95)',
    muted: 'rgba(20, 16, 14, 0.55)',
    soft: 'rgba(20, 16, 14, 0.45)',
    aside: 'rgba(20, 16, 14, 0.55)',
    line: 'rgba(20, 16, 14, 0.30)',
}

const paper = 'rgba(20, 16, 14, 0.06)'
const border = 'rgba(20, 16, 14, 0.15)'

const base: CSSProperties = {
    color: ink.base,
    fontFamily: 'var(--font-mono)',
    fontSize: '0.9375rem',
    lineHeight: '1.7',
    background: 'transparent',
    textShadow: 'none',
    fontFeatureSettings: '"calt", "ss01"',
}

export const editorialCodeStyle: { [k: string]: CSSProperties } = {
    'pre[class*="language-"]': {
        ...base,
        background: paper,
        border: `1px solid ${border}`,
        borderRadius: 0,
        padding: '1.5rem 1.75rem',
        overflow: 'auto',
        margin: 0,
    },
    'code[class*="language-"]': base,

    comment: { color: ink.aside, fontStyle: 'italic' },
    prolog: { color: ink.aside, fontStyle: 'italic' },
    doctype: { color: ink.aside, fontStyle: 'italic' },
    cdata: { color: ink.aside, fontStyle: 'italic' },

    punctuation: { color: ink.soft },
    operator: { color: ink.soft },
    'template-punctuation': { color: ink.soft },
    'interpolation-punctuation': { color: ink.soft },

    string: { color: ink.base, fontWeight: 500 },
    'template-string': { color: ink.base },
    char: { color: ink.base, fontWeight: 500 },
    regex: { color: ink.base, fontWeight: 500 },

    keyword: { color: ink.base, fontWeight: 500 },
    'keyword-control': { color: ink.base, fontWeight: 500 },
    boolean: { color: ink.base, fontWeight: 500 },
    null: { color: ink.base, fontWeight: 500 },

    number: { color: ink.base },
    function: { color: ink.base },
    'class-name': { color: ink.base },
    builtin: { color: ink.base },
    property: { color: ink.base },
    parameter: { color: ink.base },
    variable: { color: ink.base },
    constant: { color: ink.base },
    symbol: { color: ink.base },
    tag: { color: ink.base, fontWeight: 500 },
    'attr-name': { color: ink.base },
    'attr-value': { color: ink.base, fontWeight: 500 },
    selector: { color: ink.base, fontWeight: 500 },
    important: { color: ink.base, fontWeight: 600 },
    atrule: { color: ink.base, fontWeight: 500 },
    url: { color: ink.base, textDecoration: 'underline' },

    deleted: { color: ink.muted, textDecoration: 'line-through' },
    inserted: { color: ink.base, fontWeight: 500 },
    bold: { fontWeight: 600 },
    italic: { fontStyle: 'italic' },
    entity: { cursor: 'help' },
}

export const editorialLineNumberStyle: CSSProperties = {
    color: ink.line,
    fontFamily: 'var(--font-mono)',
    fontSize: '0.75rem',
    paddingRight: '1.25rem',
    minWidth: '2.25rem',
    userSelect: 'none',
    borderRight: `1px solid ${border}`,
    marginRight: '1rem',
}
