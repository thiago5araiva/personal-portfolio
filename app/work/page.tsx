"use client"
import Heading from "@/_components/typography/heading"
import { getWorkContentCollection } from "./queries"
import {
  ContentfulWorkCollection,
  ContentfulWorkItem,
} from "../_services/contentful/types/ContentfulWorkCollection"
import { useEffect, useState } from "react"
import Link from "next/link"
import Subtitle from "@/_components/typography/subtitle"

export default function WorkPage() {
  const [works, setWorks] = useState<ContentfulWorkItem[]>([])

  useEffect(() => {
    getWorkContentCollection().then((data) => {
      const { workContentCollection } = data
      const { items } = workContentCollection
      setWorks(items)
    })
  }, [])

  return (
    <section className="work">
      <div className="mb-12 sm:mb-20">
        <Heading type="h2" className="text-2xl mb-3 sm:text-4xl text-font-high">
          My Works
        </Heading>
        <Subtitle className="text-base text-font-medium sm:text-xl">
          Get Inspired by My Portfolio of Fresh and Innovative Design Projects
        </Subtitle>
      </div>
      <div className="mt-12 mb-20 sm:mt-20 sm:mb-[140px] grid gap-10">
        {works.map(({ title, sys }) => (
          <Link key={sys.id} href={`/work/${sys.id}`}>
            <div className="pb-6 sm:pb-10 border-b border-border-primary">
              <Heading
                type="h2"
                className="text-2xl text-font-medium leading-normal sm:text-4xl sm:leading-normal"
              >
                {title}
              </Heading>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
