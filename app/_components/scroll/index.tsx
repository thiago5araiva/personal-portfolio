import Image from 'next/image'
import { twMerge } from 'tailwind-merge'
import styled, { keyframes } from 'styled-components'
import React, { Fragment, memo, useMemo } from 'react'
import { ImageProps, $ItemProps, Props } from './types'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  position: relative;
  height: 90px;
  overflow: hidden;
`

const scrollLeft = keyframes`
  to {
    left: -190px;
  }
`
const scrollRight = keyframes`
  to {
    right: -190px;
  }
`

const Item = styled.div<$ItemProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90px;
  width: 190px;
  position: absolute;
  animation-duration: 30s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  ${({ $length, $count }) =>
    `animation-delay: calc(30s / ${$length} * (${$length} - ${
      $count + 1
    }) * -1);`}
`
const Left = styled(Item)`
  left: max(calc(210px * ${({ $length }) => $length} * 1.8), 100%);
  animation-name: ${scrollLeft};
`
const Right = styled(Item)`
  animation-name: ${scrollRight};
  ${({ $length }) =>
    `right: max(calc(210px * ${$length} * 1.8),calc(100% + 200px));`}
`

export function InfiniteScrollImage({ props }: ImageProps) {
  return (
    <Image
      draggable={false}
      alt={props.title}
      src={props.url}
      width={`${props.width}`}
      height={`${props.height}`}
      priority
    />
  )
}

export default function InfiniteScrollComponent(props: Props) {
  const data = props.data ? props.data : []
  const direction = props.direction ? props.direction : 'left'

  return (
    <Wrapper>
      {data?.map(({ title, url, width, height }, index) => {
        return (
          <Fragment key={index}>
            {direction === 'left' && (
              <Left $length={data.length} $count={index + 1}>
                <InfiniteScrollImage props={{ title, url, width, height }} />
              </Left>
            )}
            {direction === 'right' && (
              <Right $length={data.length} $count={index + 1}>
                <InfiniteScrollImage props={{ title, url, width, height }} />
              </Right>
            )}
          </Fragment>
        )
      })}
    </Wrapper>
  )
}
