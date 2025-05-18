import useNotionStore from '@/_store/notion.store'

export default function useModel() {
    const { content } = useNotionStore()
    return { state: { data: content }, action: {} }
}
