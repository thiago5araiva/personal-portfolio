import { AssetsCollection } from '@/home/types'

export type Props = {
  data?: AssetsCollection[]
  direction?: string
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
