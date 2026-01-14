const mockArray = Array.from({ length: 6 })
const mockContent = 'Your portfolio is stopping you from geting that job'
export const mockData = mockArray.map((_, index) => ({
    key: +index,
    value: mockContent,
}))

export const mockLink = { label: 'See the full list', href: '#' }
export const MOCK_TOPIC_ITEMS = [
    {
        key: '#1',
        value: 'learn about the process and practice your designs skills — My 1st hackathon Hackathons have been on my mind since I heard',
    },
    {
        key: '#2',
        value: 'learn about the process and practice your designs skills — My 1st hackathon Hackathons have been on my mind since I heard',
    },
    {
        key: '#3',
        value: 'learn about the process and practice your designs skills — My 1st hackathon Hackathons have been on my mind since I heard',
    },
]
