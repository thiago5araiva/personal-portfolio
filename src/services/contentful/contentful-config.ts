// /spaces/cfexampleapi/entries -H 'Authorization: Bearer b4c0n73n7fu1'

export const ContentfulConfig = {
    baseUrl: process.env.NEXT_PUBLIC_CONTENTFUL_BASE_API?.trim() ?? '',
    token: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN?.trim() ?? '',
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID?.trim() ?? '',
}
