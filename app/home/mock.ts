import {
    accenture,
    baires,
    cheesecake,
    einstein,
    labsit,
    magalu,
    midway,
    pinterest,
    porto,
    squarespace,
} from '@/_assets/images/companies'

const action = {
    label: 'Get in touch',
    url: 'https://www.linkedin.com/in/thiago5araiva/',
}

const header = {
    title: 'Creative Engineer: Building Experiences with Software',
    description: `As a fullstack developer from Brazil, I'm ready to bring your ideas to life. With a background in advertising and software engineering, I specialize in creating experiences for companies of all sizes, from startups to big tech giants. I'm a problem solver at heart and thrive on tackling complex, challenging projects. Let's transform your vision into reality.`,

    logos: [
        {
            image: accenture,
            alt: 'Accenture',
        },
        {
            image: pinterest,
            alt: 'Pinterest',
        },
        {
            image: squarespace,
            alt: 'Squarespace',
        },
        {
            image: magalu,
            alt: 'magalu',
        },
        {
            image: einstein,
            alt: 'Hospital Albert Einstein',
        },
        {
            image: porto,
            alt: 'Porto Seguro',
        },
        {
            image: cheesecake,
            alt: 'Cheesecake Labs',
        },
        {
            image: baires,
            alt: 'Baires Dev',
        },
        {
            image: labsit,
            alt: 'Labsit',
        },
        {
            image: midway,
            alt: 'Midway Financeira',
        },
    ],
}

const work = {
    title: 'Works',
}

const service = {
    title: 'I could help you with ...',
    items: [
        {
            title: 'Front-end & Mobile development',
            description: `Building accessible user interfaces. I enjoy building software in the sweet spot where design and engineering meet, mobile or web - things that look good, but are well built underneath.`,
        },
        {
            title: 'Back-end development',
            description: `Tackled technical challenges, solve problems, and collaborate with teams working on different projects. From micro-services, integration's, and API to building reliable web servers.`,
        },
    ],
}

export { header, action, work, service }

export const content = {
    header,
    action,
    work,
    service,
}
