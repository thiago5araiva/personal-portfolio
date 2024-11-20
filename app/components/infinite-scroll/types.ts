import { AssetsCollection } from '@/home/types'

export type Props = {
  data?: Array<{
    _id: string
    title: string
    url: string
    width: number
    height: number
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
