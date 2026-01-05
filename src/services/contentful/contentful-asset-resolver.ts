import {
    AssetLink,
    ContentfulIncludes,
} from '@/store/contentful.store/contentful.type'

/**
 * Resolve um AssetLink para sua URL completa
 * @param link - O link do asset (sys.id)
 * @param includes - Os assets incluídos na resposta do Contentful
 * @returns A URL completa do asset ou undefined se não encontrado
 */
export function resolveAssetUrl(
    link: AssetLink | undefined,
    includes: ContentfulIncludes | undefined
): string | undefined {
    if (!link || !includes?.Asset) return undefined

    const asset = includes.Asset.find((a) => a.sys.id === link.sys.id)
    if (!asset?.fields?.file?.url) return undefined

    const url = asset.fields.file.url
    return url.startsWith('//') ? `https:${url}` : url
}
