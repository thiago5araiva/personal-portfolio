'use client'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'next/navigation'
// import { getNotionContent } from '@/work/service'
// import { useQuery } from '@tanstack/react-query'
// import { useParams } from 'next/navigation'
// import Image from 'next/image'
// import { Heading, Loading, Paragraph } from '@/components'
// import { contentBlock, contentPage } from '@/work/utils/format'
// import { formatDate } from '@/utils/date'
// import { ReactElement } from 'react'
// import {
//     CodeType,
//     Content,
//     ContentBlockType,
//     HeadingType,
//     ImageType,
//     ChildType,
//     ParagraphType,
// } from '@/work/types'
// import { ChevronRight } from 'lucide-react'
// import { langs } from '@uiw/codemirror-extensions-langs'

// import CodeMirror, { Extension } from '@uiw/react-codemirror'
// import { gruvboxDark } from '@uiw/codemirror-theme-gruvbox-dark'
// import { StreamLanguage } from '@codemirror/language'
// import './styles.css'

// interface LanguageExtension {
//     javascript: Extension | null
//     python: Extension | null
//     css: Extension | null
// }

// type RichTextType = Exclude<Content, ChildType | ImageType>

// export default function WorkContent() {
// const params = useParams()
// const PAGE_ID = `${params.uuid}`

//     const { data: notion, ...notionResponse } = useQuery({
//         queryKey: ['notion-posts'],
//         queryFn: () => getNotionContent(`${PAGE_ID}/api`),
//     })

//     if (notionResponse.isLoading) return <Loading />
//     const { title, created_time } = contentPage(notion?.data.page)
//     const block = contentBlock(notion?.data.block)

//     const components = (node: ContentBlockType, index: number) => {
//         const { content } = node
//         const { rich_text } = content as RichTextType
//         const flatText = rich_text?.map((text) => text.plain_text).join(' ')

//         const type: { [key: string]: () => ReactElement } = {
//             bulleted_list_item: () => {
//                 const text = flatText.replace(/\s*\\r\\n/g, ' ')
//                 return (
//                     <div className="flex items-center gap-6">
//                         <ChevronRight className="w-4 h-6" />
//                         <Paragraph>{text}</Paragraph>
//                     </div>
//                 )
//             },
//             paragraph: () => <Paragraph key={index}>{flatText}</Paragraph>,
//             heading_2: () => (
//                 <Heading type={'h2'} key={index}>
//                     {flatText}
//                 </Heading>
//             ),
//             heading_3: () => (
//                 <Heading type={'h3'} key={index}>
//                     {flatText}
//                 </Heading>
//             ),
//             image: () => {
//                 const image = node as unknown as ImageType
//                 return (
//                     <div className="w-full">
//                         <Image
//                             alt={`img-${title}`}
//                             className="rounded mx-auto"
//                             src={
//                                 image?.content.file?.url ||
//                                 image?.content.external?.url
//                             }
//                             sizes="100vw"
//                             width={1024}
//                             height={300}
//                             style={{
//                                 width: '100vw',
//                                 height: 'auto',
//                             }}
//                             priority
//                         />
//                     </div>
//                 )
//             },
//             code: () => {
//                 const { language } = node?.content as CodeType
//                 const languages: LanguageExtension = {
//                     javascript: langs.tsx(),
//                     python: langs.python(),
//                     css: langs.css(),
//                 }
//                 const getLanguageExtension = (language: string) =>
//                     languages[language as keyof LanguageExtension]
//                 const currLanguage = getLanguageExtension(language)

//                 return (
//                     <CodeMirror
//                         value={flatText}
//                         theme={gruvboxDark}
//                         height="auto"
//                         extensions={currLanguage ? [currLanguage] : []}
//                         editable={false}
//                         maxHeight="300px"
//                         maxWidth="1024px"
//                         basicSetup={{
//                             lineNumbers: false,
//                             foldGutter: false,
//                         }}
//                     />
//                 )
//             },
//         }
//         const renderFunction = type[node.type]
//         if (renderFunction) return renderFunction()
//         console.error(`Unknown type: ${node.type}-${index}`)
//         return null
//     }
//     return (
//         <div>
//             <Heading type="h3" className="mb-4 sm:mb-3">
//                 {title}
//             </Heading>
//             <div className="flex mb-8 sm:mb-10">
//                 <Paragraph>{`${formatDate(created_time)}`}</Paragraph>
//             </div>
//             <div className="w-full grid gap-6 text-base text-font-medium sm:text-lg leading-normal">
//                 {block.map((node, index) => components(node, index))}
//             </div>
//         </div>
//     )
// }

export default function WorkItem() {
    return (
        <div>
            <h1>WorkItem</h1>
        </div>
    )
}
