const mockArray = Array.from({ length: 3 })
const mockContent = 'Your portfolio is stopping you from geting that job'
export const mockData = mockArray.map((_, index) => ({
    key: +index,
    value: mockContent,
}))

export const mockLink = { label: 'See the full list', href: '#' }
