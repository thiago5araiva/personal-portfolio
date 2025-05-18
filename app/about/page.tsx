'use client'
import useAboutModel from './about.model'
import AboutView from './about.view'
export default function AboutPage() {
    const model = useAboutModel()
    return <AboutView {...model} />
}
