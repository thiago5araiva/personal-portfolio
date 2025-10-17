import { BlockCode } from '@/src/store/notion.types'
import { langs } from '@uiw/codemirror-extensions-langs'
import { gruvboxDark } from '@uiw/codemirror-theme-gruvbox-dark'
import CodeMirror, { Extension } from '@uiw/react-codemirror'
import './styles.css'

type Props = {
    data: BlockCode
}

interface LanguageExtension {
    javascript: Extension | null
    python: Extension | null
    css: Extension | null
}

export default function ContentCode({ data }: Props) {
    const { rich_text, language } = data
    const languages: LanguageExtension = {
        javascript: langs.tsx(),
        python: langs.python(),
        css: langs.css(),
    }
    const getExtension = (l: string) => languages[l as keyof LanguageExtension]
    const currLanguage = getExtension(language)
    const children = rich_text?.map((val) => val.plain_text).join(' ')
    const caption = data.caption?.map((val) => val.plain_text).join(' ')
    return (
        <div className="grid gap-3 mb-10">
            <CodeMirror
                className=""
                value={children}
                theme={gruvboxDark}
                height="auto"
                extensions={currLanguage ? [currLanguage] : []}
                editable={false}
                maxHeight="300px"
                maxWidth="1024px"
                basicSetup={{
                    lineNumbers: false,
                    foldGutter: false,
                }}
            />
            {caption ? <small>{caption}</small> : null}
        </div>
    )
}
