import useNotionStore from '@/src/store'

export default function useModel() {
    const { content } = useNotionStore()
    return { state: { data: content }, action: {} }
}
