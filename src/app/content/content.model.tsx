import useNotionStore from '@/store'

export default function useModel() {
    const { content } = useNotionStore()
    return { state: { data: content }, action: {} }
}
