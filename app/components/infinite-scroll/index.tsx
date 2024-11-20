'use client'
import Image from 'next/image'
import './styles.css'
import { Props } from './types'

type StyleProps = { [key: string]: string | number | boolean | undefined }

const wrapper: StyleProps = {
  display: 'flex',
  alignItems: 'center',
  justifyItems: 'center',
  position: 'relative',
  height: '90px',
  overflow: 'hidden',
}

const container: StyleProps = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '60px',
  width: '160px',
  position: 'absolute',
  animationDuration: '31s',
  animationTimingFunction: 'linear',
  animationIterationCount: 'infinite',
}

const directionLeft: StyleProps = {
  left: 'max(calc(210px * 12 * 1.3), 100%)',
  animationName: 'scrollLeft',
}

const directionRight: StyleProps = {
  right: 'max(calc(210px * 12 * 1.3), calc(100% + 200px))',
  animationName: 'scrollRight',
}

const infiniteScrollStyles = (values: StyleProps) => {
  const { length, count, right } = values
  const animation = `calc(30s / ${length} * (${length} - ${count}) * -1)`
  const direction = right ? directionRight : directionLeft
  return { ...container, ...direction, ...{ animationDelay: animation } }
}

export default function InfiniteScrollComponent({ data, right }: Props) {
  return (
    <div style={wrapper}>
      {data?.map((item, index) => {
        return (
          <div
            style={infiniteScrollStyles({
              length: data?.length,
              count: index + 1,
              right: Boolean(right),
            })}
            key={index}>
            <Image
              draggable={false}
              alt={item.title}
              src={item.url}
              width={`${item.width}`}
              height={`${item.height}`}
              priority
            />
          </div>
        )
      })}
    </div>
  )
}
