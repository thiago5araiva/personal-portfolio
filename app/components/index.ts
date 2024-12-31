import dynamic from 'next/dynamic'

export const Heading = dynamic(() => import('./typography/heading'))
export const Subtitle = dynamic(() => import('./typography/subtitle'))
export const Paragraph = dynamic(() => import('./typography/paragraph'))
export const Carousel = dynamic(() => import('./infinite-scroll'))
export const Navigation = dynamic(() => import('./navigation'))
export const Loading = dynamic(() => import('./loading'))
export const Action = dynamic(() => import('./action'))
