export const MAIN_SITE_URL = 'https://thiagosaraiva.dev'
export const PERITO_SITE_URL = 'https://perito.thiagosaraiva.dev'

export function isPeritoHost(host: string | null): boolean {
    return (host ?? '').startsWith('perito.')
}

export function isMainProductionHost(host: string | null): boolean {
    const hostname = (host ?? '').split(':')[0]
    return hostname === 'thiagosaraiva.dev' || hostname === 'www.thiagosaraiva.dev'
}
