'use client'
import dynamic from 'next/dynamic'

import Heading from '@/_components/typography/heading'
import Paragraph from '@/_components/typography/paragraph'
const P5Comp = dynamic(() => import('./Orbit'), { ssr: false })

export default function OrbitSimulation() {
  return (
    <section className="orbit flex flex-col gap-6 md:gap-10 my-16 sm:my-[121px]">
      <Heading type="h3">
        Friendly tool for learning to code and make art.
      </Heading>
      <Paragraph>
        P5 is an update of the Processing language, initiated by Lauren McCarthy
        in 2013, which has made it possible to move the Processing environment
        and tools to the web. The original environment, created by Ben Fry and
        Casey Reas in 2001, was written as Proce55ing because the domain
        www.processing.org was already occupied by a company. It was therefore
        known internally as P5. In adapting it for the web, McCarthy made a
        reference to the origins and history of the technology.
      </Paragraph>
      <Paragraph>
        P5 is not a programming language. It is a framework: a library of
        programming tools (API) aimed at creative technologies that work within
        a pre-defined structure/mechanism. Both the library and this structure
        have been inherited from Processing and are practically identical, which
        means that anyone familiar with Processing will be able to programme
        with P5 immediately, and vice versa. The difference between the two is
        that Processing is based on the Java language and P5 on the JavaScript
        language, so differences in syntax, procedures and resources between the
        two will be reflected in the difference between Processing and P5.
      </Paragraph>
      <Paragraph>
        Focused on the creation of visual and interactive media. Media, so the
        first programmes start with drawing. Beginners feel more comfortable
        learning when they see their programs producing something visually on
        the screen, not just abstract results. This has proven to be a
        motivating factor in getting design, art and architecture students to
        learn programming. A few lines of code can do a lot of things.
      </Paragraph>
      <Paragraph>
        The example below is a simulation that was created with a few lines of
        code and allows the user to click and drag with the mouse to interact
        with the simulation.
      </Paragraph>
      <P5Comp />
    </section>
  )
}
