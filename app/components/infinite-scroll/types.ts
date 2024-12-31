export type Props = {
    data?: Array<{
        alt: string
        image: string
    }>
    right?: boolean
}
export type ImageProps = {
    props: {
        title: string
        url: string
        width: number
        height: number
    }
}

export type $ItemProps = {
    $length: number
    $count: number
}
